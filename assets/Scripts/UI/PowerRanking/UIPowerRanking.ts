
import { _decorator, Component, Node, Prefab, instantiate, Button, Label } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from '../Common/Event/EventManager';
import { ListView } from '../Common/ListView/ListView';
import { UIPowerRankingItem } from './UIPowerRankingItem';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { EventType } from '../Common/Event/EventType';
import { TabView } from '../Common/TabView/TabView';
import { DataManager } from '../../Managers/DataManager';
import { MessageBox, MessageBoxType } from '../Common/MessageBox';
import { ItemService } from '../../Services/ItemService';
import { UserService } from '../../Services/UserService';
import { CombatPowerRankingManager } from '../../Managers/CombatPowerRankingManager';
import List from '../Common/ScrollView/List';
const { ccclass, property } = _decorator;
const { NItem, CombatPowerRankingResponse, NUser, FollowResponse } = proto;

@ccclass('UIPowerRanking')
export class UIPowerRanking extends UIWindow {

    @property(List) 
    private powerRankingList = null as unknown as List;
    @property(Prefab)
    public itemPrefab:Prefab=null as unknown as Prefab;
    @property(ListView)
    public listMain:ListView=null as unknown as ListView;
    @property(Label)
    public myPowerRankingLabel=null as unknown as Label;  //我的排行

    public selectedIndex:number=0;
    private index:number=0;  //选择索引

    private uiPowerRankingItem:UIPowerRankingItem=null as unknown as UIPowerRankingItem;
    private userList:Array<NUser> = [];

    start () {
        console.log('UIPowerRanking start')
        this.listMain.owner=this;
        this.listMain.isAddScene=false;
        EventManager.Instance.addListener(EventType.ListView_OnItemSelected,this.OnItemSelected,this);
        EventManager.Instance.addListener(EventType.CombatPowerRankingRefieshUI,this.RefieshUI,this);
        CombatPowerRankingManager.Instance.SendCombatPowerRanking();

    }

    private OnItemSelected(param:any){
        this.uiPowerRankingItem=param[0] as UIPowerRankingItem;
        console.log('OnItemSelected=')
    }


    public RefieshUI(){
        this.ClearList();
        this.InitCombatPowerRanking();
    }

     /**
     * 排行榜初始化
     */
    private async InitCombatPowerRanking(){
        this.userList = [];
        let response = CombatPowerRankingManager.Instance.combatPowerRankingResponse;
        if(response){
            for(let i=0;i<response.users.length;i++){
                let user=response.users[i] as unknown as NUser;
                this.userList.push(user);
            }
            this.myPowerRankingLabel.string=(response.myRanking==-1) ? '你当前未上榜' : '你当前排在'+response.myRanking+'位';
        }

        this.powerRankingList.numItems=this.userList.length;
    }

    private ClearList():void{
        this.listMain.RemoveAll();
    }

     /**
     * 战力排行列表渲染
     * @param node
     * @param index 
     */
    OnPowerRankingListRender(node: Node, index: number) {
        let uiPowerRankingItem=node.getComponent(UIPowerRankingItem);
        this.listMain.AddItem(node,uiPowerRankingItem as ListViewItem);
        uiPowerRankingItem?.SetItemInfo(this.userList[index],this);
    }

    onDestroy(){
        console.log('onDestroy')
        this.listMain.removeListener();
        EventManager.Instance.removeAll(this);
    }

}
