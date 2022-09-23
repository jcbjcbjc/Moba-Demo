
import { _decorator, Component, Node, Prefab, instantiate, Button } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import { NItem } from '../../../Proto/proto';
import { EventManager } from '../Common/Event/EventManager';
import { ListView } from '../Common/ListView/ListView';
import { UIShopItem } from './UIShopItem';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { UIShopDetailItem } from './UIShopDetailItem';
import { EventType } from '../Common/Event/EventType';
import { TabView } from '../Common/TabView/TabView';
import { DataManager } from '../../Managers/DataManager';
import { MessageBox, MessageBoxType } from '../Common/MessageBox';
import { ItemService } from '../../Services/ItemService';
import List from '../Common/ScrollView/List';
import { ShopItemDefine } from '../../Data/ShopItemDefine';
import { InputBox } from '../Common/InputBox';
import { Validate } from '../../Utils/Validate';
import { UIInputBox } from '../Common/UIInputBox';
import { SoundManager } from '../../../Sound/SoundManager';
import { SoundDefine } from '../../../Sound/SoundDefine';
const { ccclass, property } = _decorator;

@ccclass('UIShop')
export class UIShop extends UIWindow {

    @property(List)
    private shopList = null as unknown as List;
    @property(TabView)
    public tab: TabView = null as unknown as TabView;
    @property(Prefab)
    public itemPrefab: Prefab = null as unknown as Prefab;
    @property(ListView)
    public listMain: ListView = null as unknown as ListView;
    @property(UIShopDetailItem)
    public uiShopDetailItem = null as unknown as UIShopDetailItem;
    @property(Button)
    public buyButton = null as unknown as Button;  //购买按钮
    public selectedIndex: number = 0;
    private index: number = 0;  //选择索引

    private uiShopItem: UIShopItem = null as unknown as UIShopItem;
    private shopItemList: Array<ShopItemDefine> = [];
    private buyCountInputObj: UIInputBox;

    start() {
        this.tab.owner = this;
        this.listMain.owner = this;
        this.listMain.isAddScene = false;
        EventManager.Instance.addListener(EventType.TabView_OnTabSelect, this.OnTabSelect, this);
        EventManager.Instance.addListener(EventType.ListView_OnItemSelected, this.OnItemSelected, this);
        EventManager.Instance.addListener(EventType.OnItemBuy_UI, this.OnItemBuyUI, this);

        this.RefieshUI();
    }

    private OnItemSelected(param: any) {
        this.uiShopItem = param[0] as UIShopItem;
        console.log('OnItemSelected=' + this.uiShopItem.itemDefine)
    }

    /**
     * 点击购买
     */
    public async OnClickBuy() {
        if (!this.uiShopItem) {
            MessageBox.Show("请选择要购买的道具", "购买提示");
            return;
        }
        let itemDefine = this.uiShopItem.itemDefine;
        // let confirmObj= await MessageBox.Show("确定要购买"+itemDefine.Name+"吗？", "购买", MessageBoxType.Confirm,"确定","取消"); 
        // let this_=this;
        // EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,function(){
        //     ItemService.Instance.SendItemBuy(this_.index+1,itemDefine.ID,1);
        // },confirmObj);
        this.buyCountInputObj = await InputBox.Show('请输入购买数量', "购买");
        this.buyCountInputObj.input.string = '1'; //默认值
        let this_ = this;
        EventManager.Instance.addListener(EventType.UIInputBox_OnClickYes, function (param: any): string {
            let count = param[0];
            if (!Validate.isIntegerLarge0(count)) {
                return '购买数量必须大于0';
            }
            ItemService.Instance.SendItemBuy(this_.index + 1, itemDefine.ID, parseInt(count));
            return '';
        }, this.buyCountInputObj);
    }

    /**
     * 购买成功响应
     * @param param 
     */
    private OnItemBuyUI(param: any) {
        this.buyCountInputObj.Close();
        SoundManager.Instance.PlaySound(SoundDefine.SFX_Success);
    }

    public RefieshUI() {
        this.ClearList();
        this.InitShop();
    }

    /**
    * 切换选择
    * @param param 索引
    */
    private OnTabSelect(param: any) {
        let index = param[0];
        if (this.index == index) {
            return;
        }
        this.index = index;
        this.selectedIndex = 0;
        console.log('OnTabSelect index=' + this.index)
        this.RefieshUI();
    }

    /**
     * 初始化商店
     */
    public async InitShop() {
        this.shopItemList = [];
        let shopItems = DataManager.Instance.shopItems[this.index + 1];
        if (!shopItems || Object.keys(shopItems).length < 1) {
            this.uiShopDetailItem.node.active = false;
        } else {
            this.uiShopDetailItem.node.active = true;
            let i = 0;
            for (let key in shopItems) {
                let shopItem = shopItems[key];
                if (shopItem.Status > 0) {
                    this.shopItemList.push(shopItem);
                    i++;
                }
            }
        }
        this.shopList.numItems = this.shopItemList.length;
        this.shopList.scrollTo(0);
    }

    private ClearList(): void {
        this.listMain.RemoveAll();
    }

    /**
    * 商品列表渲染
    * @param node
    * @param index 
    */
    OnShopListRender(node: Node, index: number) {
        let uiShopItem = node.getComponent(UIShopItem);
        this.listMain.AddItem(node, uiShopItem as ListViewItem);
        uiShopItem?.SetItemInfo(this.shopItemList[index], this.uiShopDetailItem, index == this.selectedIndex, index, this);
        // console.log('OnShopListRender index='+index+'，name='+uiShopItem.itemDefine.Name)
    }


    onDestroy() {
        console.log('onDestroy')
        this.listMain.removeListener();
        EventManager.Instance.removeAll(this);
    }

}
