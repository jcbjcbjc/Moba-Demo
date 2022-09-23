
import { _decorator, Component, Node, Prefab, instantiate, Button, EditBox, Size, Label, size, SystemEventType, Sprite, Layout } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from '../Common/Event/EventManager';
import { ListView } from '../Common/ListView/ListView';
import { UIChatItem } from './UIChatItem';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { EventType } from '../Common/Event/EventType';
import { TabView } from '../Common/TabView/TabView';
import { DataManager } from '../../Managers/DataManager';
import { MessageBox, MessageBoxType } from '../Common/MessageBox';
import { ItemService } from '../../Services/ItemService';
import { ChatManager } from '../../Managers/ChatManager';
import { UserService } from '../../Services/UserService';
import { ChatUserVo } from '../../Vo/ChatUserVo';
import { HashMap } from '../../Utils/HashMap';
import { MathUtil } from '../../Utils/MathUtil';
import { UIChatUserItem } from './UIChatUserItem';
import { ChatService } from '../../Services/ChatService';
import { TipsManager } from '../TipsManager';
import List from '../Common/ScrollView/List';
import { LoadResUtil } from '../../Utils/LoadResUtil';
const { ccclass, property } = _decorator;
const { NItem, ChatMessage, ChatChannel, NUser, ChatRoomType } = proto;

@ccclass('UIChat')
export class UIChat extends UIWindow {


    @property(TabView)
    public tab: TabView = null as unknown as TabView;
    @property(Prefab)
    public chatItemPrefab: Prefab = null as unknown as Prefab;
    @property(Prefab)
    public chatUserItemPrefab: Prefab = null as unknown as Prefab;
    // @property(ListView)
    // public chatListMain:ListView=null as unknown as ListView;
    @property(EditBox)
    public contentEditBox = null as unknown as EditBox;
    @property(ListView)
    public privateUserListMain: ListView = null as unknown as ListView;
    @property(Node)
    public compChatContent = null as unknown as Node;
    @property(Node)
    public privateChatContent = null as unknown as Node;
    @property(Node)
    public roomChatContent = null as unknown as Node;


    @property(Node)
    public chatIconBg = null as unknown as Node;
    @property(List)
    private compList = null as unknown as List;
    @property(List)
    private userList = null as unknown as List;
    @property(List)
    private privateList = null as unknown as List;
    @property(List)
    private roomList = null as unknown as List;
    @property(Node)
    private roomButton = null as unknown as Node;
    // @property(Label)
    // private compMsgNumLabel = null as unknown as Label;
    @property(Sprite)
    public compMsgRedSprite: Sprite = null as unknown as Sprite;
    // @property(Label)
    // private privateMsgNumLabel = null as unknown as Label;
    @property(Sprite)
    public privateMsgRedSprite: Sprite = null as unknown as Sprite;
    // @property(Label)
    // private roomMsgNumLabel = null as unknown as Label;
    @property(Sprite)
    public roomMsgRedSprite: Sprite = null as unknown as Sprite;

    private index: number = -1;  //选择索引

    private uiChatUserItem = null as unknown as UIChatUserItem;
    private privateUserSelectedIndex = -1;   //私聊用户选择索引
    private selectedPrivateUserId = 0;  //私聊选择的用户id

    onLoad() {
        //初始化综合列表
        let compMessages = ChatManager.Instance.compMessages;
        console.log('compMessages.length=' + compMessages.length)
        this.compList.numItems = compMessages.length;
        this.compList.scrollTo(compMessages.length);
        //红点隐藏
        this.compMsgRedSprite.node.active = false;
        this.privateMsgRedSprite.node.active = false;
        this.roomMsgRedSprite.node.active = false;

        //初始化用户列表
        // let privateMessages=ChatManager.Instance.privateMessages;
        // this.userList.numItems = privateMessages.length;
        // this.userList.scrollTo(privateMessages.length );
        //初始化房间列表
        let roomMessages = ChatManager.Instance.roomMessages;
        this.roomList.numItems = roomMessages.length;
        this.roomList.scrollTo(roomMessages.length);
    }

    start() {
        console.log('UIChat start')
        this.tab.owner = this;
        this.privateUserListMain.owner = this;
        this.privateUserListMain.isAddScene = false;
        EventManager.Instance.addListener(EventType.TabView_OnTabSelect, this.OnChangeChannel, this);
        EventManager.Instance.addListener(EventType.ListView_OnItemSelected, this.OnPrivateUserSelected, this);
        EventManager.Instance.addListener(EventType.OnChat_UI, this.OnChat_UI, this);
        EventManager.Instance.addListener(EventType.OnPrivateUserStatusChange, this.OnPrivateUserStatusChange, this);
        //初始化所有表情
        let chatIconArr = this.chatIconBg.children;
        let tempChatIcon = null as unknown as Node;
        for (let i = 0; i < 63; i++) {
            let newChatIcon = null;
            if (i < chatIconArr.length) {
                newChatIcon = chatIconArr[i];
                if (!tempChatIcon) {
                    tempChatIcon = newChatIcon;
                }
            } else {
                newChatIcon = instantiate(tempChatIcon);
            }
            let iconName = i + 1 < 10 ? '0' + (i + 1) : i + 1;
            newChatIcon.name = iconName + '';
            let sprite = newChatIcon.getComponent(Sprite);
            sprite.spriteFrame = sprite.spriteAtlas.getSpriteFrame(iconName + '');
            this.chatIconBg.addChild(newChatIcon);
            newChatIcon.on(SystemEventType.TOUCH_END, this.OnChatIconClick, this);
        }
        ChatManager.Instance.isOpenChatUI = true;
        EventManager.Instance.addListener(EventType.OnChangeRedNum, this.OnChangeRedNum, this);
        this.OnChangeRedNum();
    }

    /**
     * 切换聊天频道 0、综合  1、私聊  2、房间
     */
    public ChangeChatChannel(index: number, user?: NUser) {
        console.log('ChangeChatChannel index=' + index + ',user=' + user)
        this.tab.defaultIndex = index;
        if (index == 1 && user) {    //私聊列表更新用户
            let chatUserVo = new ChatUserVo(user.id, user.nickname, user.character.level, user.character.cid, true, new Date().getTime());
            ChatManager.Instance.UpdatePrivateUserListOrder(chatUserVo);
            this.PrivateUserSelected(chatUserVo, 0);
        }
        //房间
        this.roomButton.active = (index == 2);
    }

    /**
     * 表情点击
     * @param param 
     */
    private OnChatIconClick(param: any) {
        let name = param.currentTarget._name as string;
        console.log(name)
        this.contentEditBox.string = this.contentEditBox.string + '[' + name + ']';
        this.chatIconBg.active = false;
    }

    /**
     * 用户选择
     * @param param 
     */
    private OnPrivateUserSelected(param: any) {
        this.uiChatUserItem = param[0] as UIChatUserItem;
        console.log('OnPrivateUserSelected selectedPrivateUserId=' + this.selectedPrivateUserId)
        this.PrivateUserSelected(this.uiChatUserItem.chatUserVo, this.uiChatUserItem.index);
    }

    /**
     * 用户选择
     * @param chatUserVo 
     * @param index 
     */
    private PrivateUserSelected(chatUserVo: ChatUserVo, index: number) {
        // this.privateUserSelectedIndex=index;
        this.selectedPrivateUserId = chatUserVo.userId;
        //私聊用户信息列表
        this.updatePrivateList();
        ChatManager.Instance.SelectedChannel(null, this.selectedPrivateUserId)
    }


    /**
     * 点击发送
     */
    public async OnClickSend() {
        if (!this.contentEditBox.string) {
            TipsManager.Instance.showTips('请输入发送的内容');
            return;
        }

        if (this.index == 0) {   //综合
            ChatService.Instance.SendChat(ChatChannel.Comp, this.contentEditBox.string, undefined);
        } else if (this.index == 1) {    //私聊
            if (!this.uiChatUserItem) {
                MessageBox.Show("请选择要发送的用户", "发送提示");
                return;
            }
            let chatUserVo = this.uiChatUserItem.chatUserVo;
            ChatService.Instance.SendChat(ChatChannel.Private, this.contentEditBox.string, undefined, chatUserVo.userId, chatUserVo.nickName, chatUserVo.level,
                chatUserVo.cCharacterId);
        } else if (this.index == 2) {    //房间
            console.log('room SendChat=' + (JSON.stringify(ChatManager.Instance.roomMessages)) + ',index=' + this.index)
            ChatService.Instance.SendChat(ChatChannel.RoomChat, this.contentEditBox.string, ChatRoomType.Room_);
        }
        this.contentEditBox.string = '';
    }

    /**
   * 打开表情框
   */
    public async OnClickChatIcon() {
        if (this.chatIconBg.active) {
            this.chatIconBg.active = false;
        } else {
            this.chatIconBg.active = true;
        }
    }


    /**
    * 切换选择频道
    * @param param 索引
    */
    private OnChangeChannel(param: any) {
        let index = param[0];
        if (this.index == index) {
            return;
        }
        this.index = index;
        console.log('OnChangeChannel index=' + this.index)
        //切换频道显示聊天
        this.compChatContent.active = (index == 0);
        this.privateChatContent.active = (index == 1);
        this.roomChatContent.active = (index == 2);
        if (index == 0) {  //综合
            ChatManager.Instance.SelectedChannel(ChatChannel.Comp)
            this.compList.numItems = ChatManager.Instance.compMessages.length;
            this.compList.scrollTo(ChatManager.Instance.compMessages.length);
        } else if (index == 1) {  //私聊
            //私聊用户列表
            ChatManager.Instance.SelectedChannel(ChatChannel.Private, this.selectedPrivateUserId)
            this.userList.numItems = ChatManager.Instance.chatUserVoList.length;
            this.userList.scrollTo(ChatManager.Instance.chatUserVoList.length);
            console.log('userList length=' + this.userList.numItems)
            //私聊用户信息列表
            this.updatePrivateList();
        } else if (index == 2) {  //房间
            ChatManager.Instance.SelectedChannel(ChatChannel.RoomChat)
            this.roomList.numItems = ChatManager.Instance.roomMessages.length;
            this.roomList.scrollTo(ChatManager.Instance.roomMessages.length);
        }
    }

    /**
     * 更新私聊列表
     */
    private updatePrivateList() {
        let userId = this.selectedPrivateUserId;
        if (!userId) {  //取第一个用户
            if (ChatManager.Instance.chatUserVoList.length > 0) {
                let chatUserVo = ChatManager.Instance.chatUserVoList[0];
                userId = chatUserVo.userId;
            }
        }
        if (userId) {
            let chatMessageList = ChatManager.Instance.privateMessages.get(userId) || [];
            console.log('updatePrivateList userId=' + userId + ',chatMessageList leng=' + chatMessageList.length)
            this.privateList.numItems = chatMessageList.length;
            this.privateList.scrollTo(chatMessageList.length);
        }
    }

    /**
     * 综合列表渲染
     * @param item 
     * @param index 
     */
    OnCompListRender(item: Node, index: number) {
        // console.log('OnCompListRender index='+index)
        let uiChatItem = item.getComponent(UIChatItem);
        uiChatItem?.SetItemInfo(ChatManager.Instance.compMessages[index], 25, index, this.index);
    }

    /**
     * 用户列表渲染
     * @param item 
     * @param index 
     */
    OnUserListRender(item: Node, index: number) {
        let uiChatUserItem = item.getComponent(UIChatUserItem);
        let selected = false;
        if (this.privateUserSelectedIndex == -1 && index == 0) {
            this.privateUserSelectedIndex = index;
            selected = true;
        }
        this.privateUserListMain.AddItem(item, uiChatUserItem);
        uiChatUserItem?.SetItemInfo(ChatManager.Instance.chatUserVoList[index], selected, index);
        console.log('OnUserListRender index=' + index + ',userId=' + uiChatUserItem.chatUserVo.userId + ',selected=' + selected)
    }

    /**
     * 用户私聊列表渲染
     * @param item 
     * @param index 
     */
    OnPrivateListRender(item: Node, index: number) {
        // console.log('OnPrivateListRender index='+index)
        if (this.privateUserSelectedIndex == -1) {
            return;
        }
        let uiChatItem = item.getComponent(UIChatItem);
        let chatMessageList = ChatManager.Instance.privateMessages.get(this.selectedPrivateUserId);
        if (chatMessageList && chatMessageList.length > 0) {
            uiChatItem?.SetItemInfo(chatMessageList[index], 15, index, this.index, chatMessageList);
        }
    }

    /**
     * 房间列表渲染
     * @param item 
     * @param index 
     */
    OnRoomListRender(item: Node, index: number) {
        // console.log('OnRoomListRender index='+index)
        let uiChatItem = item.getComponent(UIChatItem);
        uiChatItem?.SetItemInfo(ChatManager.Instance.roomMessages[index], 25, index, this.index);
    }

    /**
     * 收到消息更新
     * @param param 
     */
    private OnChat_UI(param: any) {
        let channel = param[0] as ChatChannel;
        let messages = param[1] as Array<ChatMessage>;
        if (channel == ChatChannel.Comp) {  //综合
            this.compList.numItems = ChatManager.Instance.compMessages.length;
            this.compList.scrollTo(ChatManager.Instance.compMessages.length);
        } else if (channel == ChatChannel.Private) {  //私聊
            let privateMessages = ChatManager.Instance.privateMessages;
            //更新私聊用户列表
            if (this.userList.numItems != privateMessages.length) {
                this.userList.numItems = privateMessages.length;
                this.userList.scrollTo(privateMessages.length);
            }
            //私聊用户信息列表
            this.updatePrivateList();
        } else if (channel == ChatChannel.RoomChat) {  //房间
            this.roomList.numItems = ChatManager.Instance.roomMessages.length;
            this.roomList.scrollTo(ChatManager.Instance.roomMessages.length);
        }
    }

    /**
     * 私聊列表用户状态变更
     */
    private OnPrivateUserStatusChange() {
        let chatUserVoList = ChatManager.Instance.chatUserVoList;
        this.userList.numItems = chatUserVoList.length;
        this.userList.scrollTo(chatUserVoList.length);
    }

    /**
     * 消息数量改变
     */
    private OnChangeRedNum() {
        let privateNum = ChatManager.Instance.GetPrivateChatMsgNum();
        console.log('UIChat OnChangeRedNum:privateNum=' + privateNum)
        // this.compMsgNumLabel.string = (ChatManager.Instance.compNum > 99 ? '99+' : ChatManager.Instance.compNum + '');
        // this.privateMsgNumLabel.string = (privateNum > 99 ? '99+' : privateNum + '');
        // this.roomMsgNumLabel.string = (ChatManager.Instance.roomNum > 99 ? '99+' : ChatManager.Instance.roomNum + '');
        if (ChatManager.Instance.compNum > 0) {
            this.compMsgRedSprite.node.active = true;
        } else {
            this.compMsgRedSprite.node.active = false;
        }
        if (privateNum > 0) {
            this.privateMsgRedSprite.node.active = true;
        } else {
            this.privateMsgRedSprite.node.active = false;
        }
        if (ChatManager.Instance.roomNum > 0) {
            this.roomMsgRedSprite.node.active = true;
        } else {
            this.roomMsgRedSprite.node.active = false;
        }

    }

    onDestroy() {
        console.log('onDestroy')
        // this.chatListMain.removeListener();
        // ChatManager.Instance.currentChatChannel=-1;
        ChatManager.Instance.isOpenChatUI = false;
        this.privateUserListMain.removeListener();
        EventManager.Instance.removeAll(this);
    }

}
