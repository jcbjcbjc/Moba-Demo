
import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from '../Common/Event/EventManager';
import { ListView } from '../Common/ListView/ListView';
import { UIBagItem } from './UIBagItem';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { UIBagDetailItem } from './UIBagDetailItem';
import { EventType } from '../Common/Event/EventType';
import { MessageBox,MessageBoxType } from "../Common/MessageBox";
import { ItemService } from '../../Services/ItemService';
import { InputBox } from '../Common/InputBox';
import { Validate } from '../../Utils/Validate';
import { ItemManager } from '../../Managers/ItemManager';
import List from '../Common/ScrollView/List';
import { UIInputBox } from '../Common/UIInputBox';
const { ccclass, property } = _decorator;
const { NItem, BagHandleType, BagHandleResponse, Result } = proto;

@ccclass('UIBag')
export class UIBag extends UIWindow {

    @property(List) 
    private bagList = null as unknown as List;
    @property(Prefab)
    public itemPrefab:Prefab=null as unknown as Prefab;
    @property(ListView)
    public listMain:ListView=null as unknown as ListView;
    @property(UIBagDetailItem)
    public uiBagDetailItem=null as unknown as UIBagDetailItem;
    @property(Node)
    public selectedButton=null as unknown as Node;  //选择按钮节点
    @property(Node)
    public normalNode=null as unknown as Node;  //正常打开节点
    public selectedIndex:number=0;
    private uiBagItem:UIBagItem=null as unknown as UIBagItem;
    private bagHandleType:BagHandleType=null as unknown as BagHandleType; 
    private money:string='';
    private listenerObj:any;
    private bagItems:Array<NItem> = [];
    private confirmTranObj:UIInputBox = null;

    start () {
        this.listMain.owner=this;
        this.listMain.isAddScene=false;
        EventManager.Instance.addListener(EventType.ListView_OnItemSelected,this.OnItemSelected,this);
        EventManager.Instance.addListener(EventType.OnBagHandle_UI, this.OnBagHandle_UI, this)
        this.RefieshUI();
    }

    private OnItemSelected(param:any){
        this.uiBagItem=param[0] as UIBagItem;
        console.log('OnItemSelected='+this.uiBagItem)
    }
    
    public RefieshUI(){
        this.ClearList();
        this.InitBags();
    }

    /**
     * 设置背包打开方式
     * @param mode 1、正常打开 2、拍卖大厅打开
     */
    public SetUpOpenMode(mode:number=1,listenerObj?:any){
        this.listenerObj = listenerObj ? listenerObj : this;
        if(mode==1){
            this.selectedButton.active=false;
            this.normalNode.active=true;
        }else if(mode==2){
            this.selectedButton.active=true;
            this.normalNode.active=false;
        }
    }
    
    /**
     * 初始化背包
     */
    public InitBags(){
        this.bagItems = User.Instance.user.bag;
        if(!this.bagItems || this.bagItems.length < 1){
            this.uiBagDetailItem.node.active=false;
        }else{
            this.uiBagDetailItem.node.active=true;
        }
        this.bagList.numItems = this.bagItems ? this.bagItems.length : 0;
    }

    private ClearList():void
    {
        this.listMain.RemoveAll();
    }

    /**
     * 点击出售
     */
    public async OnClickSell(){
        if (!this.uiBagItem){
            MessageBox.Show("请选择要出售的道具","出售");
            return;
        }
        this.bagHandleType=BagHandleType.SELL;
        let confirmObj= await MessageBox.Show("确定要出售"+this.uiBagItem.define.Name+"吗？", "出售", MessageBoxType.Confirm,"确定","取消"); 
        let this_=this;
        EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,function(){
           ItemService.Instance.SendBagHandle(this_.uiBagItem.define.ID, this_.bagHandleType, 0);
        },confirmObj);
        
     }
 
     /**
      * 点击交易
      */
     public async OnClickTran(){ 
        if (!this.uiBagItem){
            MessageBox.Show("请选择要交易的道具","交易");
            return;
        }
       this.bagHandleType=BagHandleType.TRAN;
       this.confirmTranObj= await InputBox.Show('请输入交易金额',"交易");
       let this_=this;
       EventManager.Instance.addListener(EventType.UIInputBox_OnClickYes,function(param:any):string{
         this_.money=param[0];
         if(!Validate.isIntegerLarge0(this_.money)){
           return '交易金额必须大于0';
         }
        ItemService.Instance.SendBagHandle(this_.uiBagItem.define.ID, this_.bagHandleType, parseInt(this_.money)); 
         return '';
        },this.confirmTranObj);
     }
 
     /**
      * 点击取消交易
      */
     public async OnClickCancelTran(){
        if (!this.uiBagItem){
            MessageBox.Show("请选择要取消交易的道具","取消交易");
            return;
        }
       this.bagHandleType=BagHandleType.CANCELTRAN;
       let confirmObj= await MessageBox.Show("确定要取消交易"+this.uiBagItem.define.Name+"吗？", "取消交易", MessageBoxType.Confirm,"确定","取消"); 
        let this_=this;
        EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,function(){
         ItemService.Instance.SendBagHandle(this_.uiBagItem.define.ID, this_.bagHandleType, 0); 
        },confirmObj);
     }
 
    private OnBagHandle_UI(param: any){
       let response = param[0] as BagHandleResponse;
       if(response.result == Result.Success){   //成功
           if(this.bagHandleType==BagHandleType.TRAN){  //交易
             ItemManager.Instance.TranItem(this.uiBagItem.index, parseInt(this.money));
           }else if(this.bagHandleType==BagHandleType.CANCELTRAN){  //取消交易
             ItemManager.Instance.CancelTranItem(this.uiBagItem.index);
           }
           this.RefieshUI();

          if(this.confirmTranObj){
            this.confirmTranObj.Close();
          }
       }
    }

     /**
     * 点击选择
     */
    public async OnClickSelected(){
        if (!this.uiBagItem){
            MessageBox.Show("请选择道具","选择");
            return;
        }
        EventManager.Instance.dispatchObj(EventType.UIBag_OnClickSelected,this.listenerObj,this.uiBagItem.define.ID);
    }

     /**
     * 背包列表渲染
     * @param node
     * @param index 
     */
    OnBagListRender(node: Node, index: number) {
        let uiBagItem=node.getComponent(UIBagItem);
        this.listMain.AddItem(node,uiBagItem as ListViewItem);
        uiBagItem?.SetItemInfo(this.bagItems[index],this.uiBagDetailItem,index==this.selectedIndex,index,this);
    }

    onDestroy(){
        console.log('onDestroy')
        this.listMain.removeListener();
        EventManager.Instance.removeAll(this);
    }

}
