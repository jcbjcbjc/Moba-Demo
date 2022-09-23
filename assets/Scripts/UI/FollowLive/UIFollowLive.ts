
import { _decorator, Component, Node, Label, Sprite, SpriteFrame, loader, resources, director, Font, Prefab, instantiate } from 'cc';
import { MessageBox } from '../Common/MessageBox';
import { UIManager } from '../Common/UIManager';
import { UISystemConfig } from '../UISystemConfig';
import { User } from '../../Models/User';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { DataManager } from '../../Managers/DataManager';
import { TabView } from '../Common/TabView/TabView';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import { CharacterDefine } from '../../Data/CharacterDefine';
import proto from '../../../Proto/proto.js';
import { UIFollowLiveItem } from './UIFollowLiveItem';
import { ListView } from '../Common/ListView/ListView';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { FollowManager } from '../../Managers/FollowManager';
import List from '../Common/ScrollView/List';
import { FollowService } from '../../Services/FollowService';
const { CharacterClass, UserStatus }=proto;
const { ccclass, property } = _decorator;

/**
 * 关注直播
 */
@ccclass('UIFollowLive')
export class UIFollowLive extends Component {

    @property(List) 
    private followLiveList = null as unknown as List;
    @property(TabView)
    public tab:TabView=null as unknown as TabView;
    @property(Prefab)
    public itemPrefab:Prefab=null as unknown as Prefab;
    @property(ListView)
    public listMain:ListView=null as unknown as ListView;
    private followList:Array<any> = [];
    
    private index:number=-1;  //选择索引
    start () { 
        this.tab.owner=this;
        this.listMain.isAddScene=false;
        EventManager.Instance.addListener(EventType.FollowListRefieshUI,this.FollowListRefieshUI,this);
        FollowService.Instance.SendFollowList();
    }
    
    /**
     * 关注数据响应
     */
    private FollowListRefieshUI(){
        EventManager.Instance.addListener(EventType.TabView_OnTabSelect,this.OnTabSelect,this);
    }

    /**
     * 刷新UI
     */
    public RefreshUI(){
        console.log('RefreshUI')
        
        this.ClearList();
        //获取对应索引
       let follows=FollowManager.Instance.follows;

       this.followList = [];
       for(let i=0;i<follows.length;i++){
        let follow=follows[i];
        if(this.index==0){  //直播中
            if(!follow.status || follow.userStatus != UserStatus.Game){  //离线或非游戏状态
                continue;
            }
        }else if(this.index==1){  //在线
            if(!follow.status || follow.userStatus == UserStatus.Game){  //离线或游戏状态
                continue;
            }
        }else if(this.index==2){  //离线
            if(follow.status || follow.userStatus == UserStatus.Game){  //在线或游戏状态
                continue;
            }
        }
        this.followList.push(follow);
       }
       this.followLiveList.numItems=this.followList.length;
    }

    /**
     * 切换选择
     * @param param 索引
     */
    private OnTabSelect(param:any){
        let index=param[0];
        if(this.index==index){
            return;
        }
        this.index=index;
        console.log('OnTabSelect index='+this.index,this)
       this.RefreshUI();
    }

    private ClearList():void
    {
        this.listMain.RemoveAll();
    }


    /**
     * 返回
     */
    back(){
        director.loadScene('UIMain');
    }

    /**
     * 关注/直播列表渲染
     * @param node
     * @param index 
     */
    OnFollowLiveListRender(node: Node, index: number) {
        let uiFollowLiveItem=node.getComponent(UIFollowLiveItem) ;
        this.listMain.AddItem(node,uiFollowLiveItem as ListViewItem);
        uiFollowLiveItem?.SetItemInfo(this.followList[index], this.index);
    }
    
    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }

}
