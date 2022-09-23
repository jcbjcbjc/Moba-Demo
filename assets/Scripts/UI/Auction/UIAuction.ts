
import { _decorator, Component, Node, Prefab, instantiate, Button } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from '../Common/Event/EventManager';
import { ListView } from '../Common/ListView/ListView';
import { UIAuctionItem } from './UIAuctionItem';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { UIAuctionDetailItem } from './UIAuctionDetailItem';
import { EventType } from '../Common/Event/EventType';
import { TabView } from '../Common/TabView/TabView';
import { DataManager } from '../../Managers/DataManager';
import { MessageBox, MessageBoxType } from '../Common/MessageBox';
import { ItemService } from '../../Services/ItemService';
import { AuctionService } from '../../Services/AuctionService';
import { InputBox } from '../Common/InputBox';
import { Validate } from '../../Utils/Validate';
import { UIManager } from '../Common/UIManager';
import { UIBag } from '../Bag/UIBag';
import List from '../Common/ScrollView/List';
import { UIInputBox } from '../Common/UIInputBox';
const { ccclass, property } = _decorator;
const { NItem, Result,NAuctionItem } = proto;

@ccclass('UIAuction')
export class UIAuction extends UIWindow {
 
    @property(List) 
    private auctionList = null as unknown as List;
    @property(Prefab)
    public itemPrefab:Prefab=null as unknown as Prefab;
    @property(ListView)
    public listMain:ListView=null as unknown as ListView;
    @property(UIAuctionDetailItem)
    public uiAuctionDetailItem=null as unknown as UIAuctionDetailItem;
    @property(Button)
    public offerPriceButton=null as unknown as Button;  
    @property(Button)
    public auctionButton=null as unknown as Button;  
    public selectedIndex:number=0;
    private timer:number=0;

    private uiAuctionItem:UIAuctionItem=null as unknown as UIAuctionItem;
    private uiBag=null as unknown as UIBag;  
    private auctionItemList:Array<NAuctionItem>=[];
    private confirmInputCoinObj:UIInputBox=null;   //拍卖金额框
    private confirmInputOfferPriceObj:UIInputBox=null;   //出价金额框
 
    start () {
        this.listMain.owner=this;
        this.listMain.isAddScene=false;
        EventManager.Instance.addListener(EventType.ListView_OnItemSelected,this.OnItemSelected,this);
        EventManager.Instance.addListener(EventType.OnGetAuctionList_UI,this.OnGetAuctionList_UI,this); 
        EventManager.Instance.addListener(EventType.AuctionRefreshUI,this.OnOfferPrice,this);
        EventManager.Instance.addListener(EventType.OnAuction_UI,this.OnAuction_UI,this);
        
        this.RefieshUI(); 
        let this_=this;
        this.timer=setInterval(function(){
            this_.RefieshUI();
        },5000);
    }

    private OnItemSelected(param:any){
        this.uiAuctionItem=param[0] as UIAuctionItem;
        console.log('OnItemSelected='+this.uiAuctionItem.itemDefine)
    }

    /**
     * 点击出价
     */
    public async OnClickOfferPrice(){
        if (!this.uiAuctionItem){
            MessageBox.Show("请选择要出价的道具","出价");
            return;
        }
        let item=this.uiAuctionItem.item;
      
        this.confirmInputOfferPriceObj = await InputBox.Show('请输入出价金额',"出价");
       EventManager.Instance.addListener(EventType.UIInputBox_OnClickYes,function(param:any):string{
         let money=param[0];
         if(!Validate.isIntegerLarge0(money)){
           return '出价金额必须大于0';
         }
          AuctionService.Instance.SendOfferPrice(item.id,  parseInt(money)); 
         return '';
        }, this.confirmInputOfferPriceObj);
        
     }

     /**
      * 出价响应
      */
     private OnOfferPrice(){
        this.RefieshUI(); 
         if(this.confirmInputOfferPriceObj){
            this.confirmInputOfferPriceObj.Close();
         }
     }

     /**
      * 拍卖响应
      */
     private OnAuction_UI(){
         console.log('OnAuction_UI confirmInputCoinObj='+this.confirmInputCoinObj)
        this.RefieshUI(); 
        if(this.uiBag){
           this.uiBag.Close();
        }
        if(this.confirmInputCoinObj){
           this.confirmInputCoinObj.Close();
        }
     }


    /**
     * 点击拍卖
     */
    public async OnClickAuction(){
        this.uiBag = await UIManager.Instance.show("UIBag") as UIBag;
        this.uiBag.SetUpOpenMode(2, this);
        EventManager.Instance.addListener(EventType.UIBag_OnClickSelected,this.UIBag_OnClickSelected,this);
    }

    /**
     * 背包物品选择
     * @param param 
     */
    private async UIBag_OnClickSelected(param:any){
        let itemId=param[0];
        this.confirmInputCoinObj = await InputBox.Show('请输入拍卖金额',"拍卖");
        EventManager.Instance.addListener(EventType.UIInputBox_OnClickYes,function(param2:any):string{
          let money=param2[0];
          if(!Validate.isIntegerLarge0(money)){
            return '拍卖金额必须大于0';
          }
           AuctionService.Instance.SendAuction(itemId,  parseInt(money)); 
          return '';
         },this.confirmInputCoinObj);
    }


    public RefieshUI(){
        AuctionService.Instance.SendGetAuctionList();

    }
    

    /**
     * 查询拍卖大厅响应
     * @param param 
     */
    private OnGetAuctionList_UI(param: any){
        this.ClearList();
        this.auctionItemList = param[0] as Array<NAuctionItem>;
        // console.log('OnGetAuctionList_UI：'+auctionItems)
        if(!this.auctionItemList || this.auctionItemList.length < 1){
            this.uiAuctionDetailItem.node.active=false;
        }else{
            this.uiAuctionDetailItem.node.active=true;
        }
        this.auctionList.numItems=this.auctionItemList.length;
    }

    private ClearList():void
    {
        this.listMain.RemoveAll();
    }

     /**
     * 拍卖列表渲染
     * @param node
     * @param index 
     */
    OnAuctionListRender(node: Node, index: number) {
        let uiAuctionItem=node.getComponent(UIAuctionItem);
        this.listMain.AddItem(node,uiAuctionItem as ListViewItem);
        uiAuctionItem?.SetItemInfo(this.auctionItemList[index],this.uiAuctionDetailItem,index==this.selectedIndex,index,this);
    }    

    onDestroy(){
        console.log('onDestroy')
        this.listMain.removeListener();
        EventManager.Instance.removeAll(this);
        clearInterval(this.timer);
    }

}
