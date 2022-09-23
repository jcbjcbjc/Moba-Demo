import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame, EditBox } from 'cc';
const { ccclass, property } = _decorator;
import proto from '../../../Proto/proto.js';
import { BattleGlobal } from './Utils/BattleGlobal';
import { BattleMode } from './enums/BattleMode';
import { TabView } from '../Common/TabView/TabView';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import { ChatManager } from '../../Managers/ChatManager';
import { UIBattleChatItem } from './UIBattleChatItem';
import List from '../Common/ScrollView/List';
import { TipsManager } from '../TipsManager';
import { ChatService } from '../../Services/ChatService';
const { NItem, ChatMessage, ChatChannel,ChatRoomType } = proto;

@ccclass('UIBattleChat')
export class UIBattleChat extends Component{

    @property(TabView)
    public tab:TabView=null as unknown as TabView; 
    @property(List) 
    private chatList = null as unknown as List;
    @property(EditBox)
    public contentEditBox=null as unknown as EditBox;

    private index:number=-1;  //选择索引 0、我方  1、观看直播粉丝
    private messageList=new Array<ChatMessage>();  //消息集合

    start () {
        if(this.tab){ //对战玩家
          this.tab.owner=this;
        }else{   //观看直播用户
          this.OnChangeChannel([1]);
        }
        EventManager.Instance.addListener(EventType.TabView_OnTabSelect,this.OnChangeChannel,this);
        EventManager.Instance.addListener(EventType.OnChat_UI, this.OnChat_UI, this);
    }

    /**
     * 收到消息更新
     * @param param 
     */
    private OnChat_UI(param:any){
        let channel = param[0] as ChatChannel;
        if(channel==ChatChannel.RoomChat){  //房间
            this.InitChat();
        } 
    }

    /**
     * 切换选择频道
     * @param param 索引
     */
    private OnChangeChannel(param:any){
        let index=param[0];
        if(this.index==index){
            return;
        }
        this.index=index;
        console.log('OnChangeChannel index='+this.index) 
        this.InitChat();
    }

    /**
     * 初始化聊天
     */
    public InitChat(){
        this.messageList = this.index==0 ? ChatManager.Instance.gameMessages : ChatManager.Instance.liveMessages;
        this.chatList.numItems=this.messageList.length;
        this.chatList.scrollTo(this.messageList.length);
    }

    /**
     * 聊天列表渲染
     * @param item 
     * @param index 
     */
    OnChatListRender(item: Node, index: number) {
        let uiBattleChatItem=item.getComponent(UIBattleChatItem);
        uiBattleChatItem?.SetItemInfo(this.messageList[index],  this.index);
    }

    /**
     * 点击发送
     */
    public async OnClickSend(){
        if(!this.contentEditBox.string){
            TipsManager.Instance.showTips('请输入发送的内容');
            return;
        }
        
        ChatService.Instance.SendChat(ChatChannel.RoomChat, this.contentEditBox.string, this.index==0 ? ChatRoomType.Game_ : ChatRoomType.Live_);                 
        this.contentEditBox.string='';
    }

}