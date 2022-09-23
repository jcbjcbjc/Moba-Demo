
import { _decorator, Component, Node, Prefab, instantiate, Button } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from '../Common/Event/EventManager';
import { ListView } from '../Common/ListView/ListView';
import { UITranItem } from './UITranItem';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { UITranDetailItem } from './UITranDetailItem';
import { EventType } from '../Common/Event/EventType';
import { TabView } from '../Common/TabView/TabView';
import { DataManager } from '../../Managers/DataManager';
import { MessageBox, MessageBoxType } from '../Common/MessageBox';
import { ItemService } from '../../Services/ItemService';
const { ccclass, property } = _decorator;
const { NItem, Result } = proto;

@ccclass('UITran')
export class UITran extends UIWindow {
 
    @property(Prefab)
    public itemPrefab:Prefab=null as unknown as Prefab;
    @property(ListView)
    public listMain:ListView=null as unknown as ListView;
    @property(UITranDetailItem)
    public uiTranDetailItem=null as unknown as UITranDetailItem;
    @property(Button)
    public buyButton=null as unknown as Button;  //购买按钮
    public selectedIndex:number=0;
    private userId:number=0; //用户id

    private uiTranItem:UITranItem=null as unknown as UITranItem;
 
    start () {
        this.listMain.owner=this;
        EventManager.Instance.addListener(EventType.ListView_OnItemSelected,this.OnItemSelected,this);
        EventManager.Instance.addListener(EventType.OnQueryTran_UI,this.OnQueryTran_UI,this); 
        EventManager.Instance.addListener(EventType.OnBuyTran_UI,this.RefieshUI,this); 
    }

    private OnItemSelected(param:any){
        this.uiTranItem=param[0] as UITranItem;
        console.log('OnItemSelected='+this.uiTranItem.itemDefine)
    }

    /**
     * 点击购买
     */
    public async OnClickBuy(){
        if (!this.uiTranItem){
            MessageBox.Show("请选择要购买的道具","购买提示");
            return;
        }
        let itemDefine=this.uiTranItem.itemDefine;
        // let shopItemDefine=this.uiTranItem.shopItemDefine;
        let confirmObj= await MessageBox.Show("确定要购买"+itemDefine.Name+"吗？", "购买", MessageBoxType.Confirm,"确定","取消"); 
        let this_=this;
        EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,function(){
            ItemService.Instance.SendBuyTran(this_.userId,itemDefine.ID);
        },confirmObj);
        
     }
    /**
     * 设置用户加载列表
     * @param userId 
     */
     public SetUserLoadList(userId:number){
         this.userId=userId;
         this.RefieshUI();
     }

    public RefieshUI(){
        ItemService.Instance.SendQueryTran(this.userId);
    }
    

    /**
     * 查询用户交易响应
     * @param param 
     */
    private async OnQueryTran_UI(param: any){
        this.ClearList();
        let items=param[0] as Array<NItem>;
        if(!items || items.length < 1){
            this.uiTranDetailItem.node.active=false;
            return;
        }
        this.uiTranDetailItem.node.active=true;
         for(let i=0;i<items.length;i++){
             let item=items[i];
             let node=instantiate(this.itemPrefab);
             let uiTranItem=node.getComponent(UITranItem);
             await uiTranItem?.SetItemInfo(item,this.uiTranDetailItem,i==this.selectedIndex,i,this);
             this.listMain.AddItem(node,uiTranItem as ListViewItem);
         }
    }

    private ClearList():void
    {
        this.listMain.RemoveAll();
    }

    onDestroy(){
        console.log('onDestroy')
        this.listMain.removeListener();
        EventManager.Instance.removeAll(this);
    }

}
