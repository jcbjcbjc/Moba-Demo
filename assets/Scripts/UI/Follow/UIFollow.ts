
import { _decorator, Component, Node, Prefab, instantiate, Button, Label } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from '../Common/Event/EventManager';
import { ListView } from '../Common/ListView/ListView';
import { UIFollowItem } from './UIFollowItem';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { EventType } from '../Common/Event/EventType';
import { TabView } from '../Common/TabView/TabView';
import { DataManager } from '../../Managers/DataManager';
import { MessageBox, MessageBoxType } from '../Common/MessageBox';
import { ItemService } from '../../Services/ItemService';
import { UserService } from '../../Services/UserService';
import { CombatPowerRankingManager } from '../../Managers/CombatPowerRankingManager';
import { FollowManager } from '../../Managers/FollowManager';
import List from '../Common/ScrollView/List';
import { FollowService } from '../../Services/FollowService';
const { ccclass, property } = _decorator;
const { NItem, CombatPowerRankingResponse, NUser, FollowResponse } = proto;

@ccclass('UIFollow')
export class UIFollow extends UIWindow {

    @property(List) 
    private followList = null as unknown as List;
    @property(Prefab)
    public itemPrefab:Prefab=null as unknown as Prefab;
    @property(ListView)
    public listMain:ListView=null as unknown as ListView;

    public selectedIndex:number=0;
    private index:number=0;  //选择索引

    private uiFollowItem:UIFollowItem=null as unknown as UIFollowItem;

    start () {
        this.listMain.owner=this;
        this.listMain.isAddScene=false;
        EventManager.Instance.addListener(EventType.ListView_OnItemSelected,this.OnItemSelected,this);
        EventManager.Instance.addListener(EventType.FollowListRefieshUI,this.RefieshUI,this);
        FollowService.Instance.SendFollowList();
    }

    private OnItemSelected(param:any){
        this.uiFollowItem=param[0] as UIFollowItem;
        console.log('OnItemSelected=')
    }


    public RefieshUI(){
        this.ClearList();
        this.InitFollow();
    }

     /**
     * 关注列表初始化
     */
    private InitFollow(){
        let follows = FollowManager.Instance.follows;
        this.followList.numItems = follows ? follows.length : 0; 
    }
    
   

    private ClearList():void{
        this.listMain.RemoveAll();
    }

     /**
     * 关注列表渲染
     * @param node
     * @param index 
     */
    OnFollowListRender(node: Node, index: number) {
        let follows = FollowManager.Instance.follows;
        if(!follows){
            return;
        }
        let uiFollowItem=node.getComponent(UIFollowItem);
        this.listMain.AddItem(node,uiFollowItem as ListViewItem);
        uiFollowItem?.SetItemInfo(follows[index],this);
    }


    onDestroy(){
        console.log('onDestroy')
        this.listMain.removeListener();
        EventManager.Instance.removeAll(this);
    }

}
