
import { _decorator, Component, Node, director, Label, Sprite, SpriteFrame, Button, SystemEventType } from 'cc';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import proto from '../../../Proto/proto.js';
import { RoomService } from '../../Services/RoomService';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { DataManager } from '../../Managers/DataManager';
import { UIInvite } from './UIInvite';
import { UIManager } from '../Common/UIManager';
import { MessageBox, MessageBoxType } from "../Common/MessageBox";
import { User } from '../../Models/User';
import { UICharacterDetail } from '../UICharacterDetail/UICharacterDetail';
import { UIChat } from '../Chat/UIChat';
import { ChatManager } from '../../Managers/ChatManager';
import { UserService } from '../../Services/UserService';
const { ccclass, property } = _decorator;
const { NRoom, RoomUser, TeamType, ChatChannel } = proto;

@ccclass('UIRoom')
export class UIRoom extends Component {

  @property(Sprite)
  public mySprite1 = null as unknown as Sprite;
  @property(Label)
  public myNicknameLabel1 = null as unknown as Label;
  @property(Sprite)
  public mySprite2 = null as unknown as Sprite;
  @property(Label)
  public myNicknameLabel2 = null as unknown as Label;
  @property(Sprite)
  public mySprite3 = null as unknown as Sprite;
  @property(Label)
  public myNicknameLabel3 = null as unknown as Label;

  @property(Sprite)
  public enemySprite1 = null as unknown as Sprite;
  @property(Label)
  public enemyNicknameLabel1 = null as unknown as Label;
  @property(Sprite)
  public enemySprite2 = null as unknown as Sprite;
  @property(Label)
  public enemyNicknameLabel2 = null as unknown as Label;
  @property(Sprite)
  public enemySprite3 = null as unknown as Sprite;
  @property(Label)
  public enemyNicknameLabel3 = null as unknown as Label;

  @property(Label)
  public roomIdLabel = null as unknown as Label;
  @property(Button)
  public myInviteButton = null as unknown as Button;
  @property(Button)
  public enemyInviteButton = null as unknown as Button;
  @property(Button)
  public startGameButton = null as unknown as Button;
  // @property(Label)
  // public chatLabel=null as unknown as Label;
  @property(Sprite)
  public chatRedSprite: Sprite = null as unknown as Sprite;

  @property(Node)
  public mykickOutButton2 = null as unknown as Node;
  @property(Node)
  public mykickOutButton3 = null as unknown as Node;

  @property(Node)
  public enemykickOutButton1 = null as unknown as Node;
  @property(Node)
  public enemykickOutButton2 = null as unknown as Node;
  @property(Node)
  public enemykickOutButton3 = null as unknown as Node;

  private room = null as unknown as NRoom;
  public normalBgSpriteFrame = null as unknown as SpriteFrame;
  private teamNum: number = 3;  //队伍人数
  public static inviteTeamType = null as unknown as TeamType;   //邀请队伍类型

  start() {
    this.RefieshUI();
    EventManager.Instance.addListener(EventType.OnMyRoom_UI, this.OnMyRoom_UI, this);
    EventManager.Instance.addListener(EventType.OnMyRoom_RefieshUI, this.RefieshUI, this);
    EventManager.Instance.addListener(EventType.OnChangeRedNum, this.OnChangeRedNum, this);
    this.normalBgSpriteFrame = this.mySprite1.spriteFrame as SpriteFrame;
    ChatManager.Instance.SelectedChannel(ChatChannel.RoomChat);  //切换频道
    this.chatRedSprite.node.active = false;
    this.OnChangeRedNum();
  }

  public RefieshUI() {
    RoomService.Instance.SendMyRoom();
  }


  async OnMyRoom_UI(param: any) {
    this.myNicknameLabel1.node.active = false;
    this.myNicknameLabel2.node.active = false;
    this.myNicknameLabel3.node.active = false;
    this.enemyNicknameLabel1.node.active = false;
    this.enemyNicknameLabel2.node.active = false;
    this.enemyNicknameLabel3.node.active = false;

    this.mykickOutButton2.active = false;
    this.mykickOutButton3.active = false;
    this.enemykickOutButton1.active = false;
    this.enemykickOutButton2.active = false;
    this.enemykickOutButton3.active = false;

    let room = param[0] as NRoom;
    this.room = room;
    let roomOwnerFlag = room.userId == User.Instance.user.id;
    this.myInviteButton.node.active = roomOwnerFlag;
    this.enemyInviteButton.node.active = roomOwnerFlag;
    this.startGameButton.node.active = roomOwnerFlag;

    let myList = room.my as unknown as Array<RoomUser>;
    let enemyList = room.enemy as unknown as Array<RoomUser>;
    this.roomIdLabel.string = '房间id：' + room.roomId;
    let this_ = this;
    for (let i = 0; i < this.teamNum; i++) {
      if (i < myList.length) {
        let my = myList[i];
        this['mySprite' + (i + 1)].spriteFrame = await LoadResUtil.load_local_sprite(DataManager.Instance.characters[my.cCharacterId].Avatar + '/spriteFrame');
        this['myNicknameLabel' + (i + 1)].string = my.nickName;
        this['myNicknameLabel' + (i + 1)].node.active = true;
        if (i > 0 && roomOwnerFlag) {
          console.log('mykickOutButton' + (i + 1))
          this['mykickOutButton' + (i + 1)]['roomUser'] = my;
          this['mykickOutButton' + (i + 1)].active = true;
        }

        //头像点击
        this['mySprite' + (i + 1)].node['roomUser'] = my;
        this['mySprite' + (i + 1)].node.on(SystemEventType.TOUCH_END, this.OnRoomUserClcik, this);
      } else {
        this['mySprite' + (i + 1)].spriteFrame = this.normalBgSpriteFrame;
        this['mySprite' + (i + 1)].node.off(SystemEventType.TOUCH_END, this.OnRoomUserClcik, this);
      }
    }
    for (let i = 0; i < this.teamNum; i++) {
      if (i < enemyList.length) {
        let enemy = enemyList[i];
        this['enemySprite' + (i + 1)].spriteFrame = await LoadResUtil.load_local_sprite(DataManager.Instance.characters[enemy.cCharacterId].Avatar + '/spriteFrame');
        this['enemyNicknameLabel' + (i + 1)].string = enemy.nickName;
        this['enemyNicknameLabel' + (i + 1)].node.active = true;
        if (roomOwnerFlag) {
          console.log('enemykickOutButton' + (i + 1))
          this['enemykickOutButton' + (i + 1)]['roomUser'] = enemy;
          this['enemykickOutButton' + (i + 1)].active = true;
        }
        //头像点击
        this['enemySprite' + (i + 1)].node['roomUser'] = enemy;
        this['enemySprite' + (i + 1)].node.on(SystemEventType.TOUCH_END, this.OnRoomUserClcik, this);
      } else {
        this['enemySprite' + (i + 1)].spriteFrame = this.normalBgSpriteFrame;
        this['enemySprite' + (i + 1)].node.off(SystemEventType.TOUCH_END, this.OnRoomUserClcik, this);
      }
    }

  }

  /**
   * 房间用户点击
   */
  public async OnRoomUserClcik(param: any) {
    console.log(param)
    let roomUser = param.currentTarget.roomUser;
    let uiCharacterDetail = await UIManager.Instance.show("UICharacterDetail") as UICharacterDetail;
    uiCharacterDetail.SendCharacterDetail(roomUser.userId, 0, 2);
  }

  /**
   * 我方邀请点击
   */
  async OnMyInviteClick() {
    let uiInvite = await UIManager.Instance.show("UIInvite") as UIInvite;
    UIRoom.inviteTeamType = TeamType.My;
  }

  /**
   * 敌方邀请点击
   */
  async OnEnemyInviteClick() {
    let uiInvite = await UIManager.Instance.show("UIInvite") as UIInvite;
    UIRoom.inviteTeamType = TeamType.Enemy;
  }

  /**
   * 开始游戏点击
   */
  OnStartGameClick() {
    RoomService.Instance.SendRoomStartGame();
  }

  /**
   * 点击聊天
   */
  public async OnClickChat() {
    let uiChat = await UIManager.Instance.show("UIChat") as UIChat;
    uiChat.ChangeChatChannel(2);
  }


  /**
    * 返回点击
    */
  async OnBackClick() {
    let roomOwnerFlag: boolean = this.room.userId == User.Instance.user.id;
    let tips = roomOwnerFlag ? '解散房间' : '退出房间';
    let confirmObj = await MessageBox.Show("确定要" + tips + "吗？", tips, MessageBoxType.Confirm, "确定", "取消");
    let this_ = this;
    EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes, function () {
      RoomService.Instance.SendOutRoom();
      director.loadScene('UIMain');
    }, confirmObj);
  }

  /**
   * 消息数量改变
   */
  private OnChangeRedNum() {
    let arr = ChatManager.Instance.GetChannelChatRedNum(2);
    console.log('OnChangeRedNum arr=' + arr)
    // this.chatLabel.string=(arr[1] > 99 ? '99+' : arr[1])+'';
    if (arr[1] > 0) {
      this.chatRedSprite.node.active = true;
    } else {
      this.chatRedSprite.node.active = false;
    }
  }

  /**
  * 踢人
  */
  public async OnkickOut(param: any, customEventData: any) {
    console.log(customEventData)
    let roomUser = param.currentTarget.roomUser;
    let confirmObj = await MessageBox.Show("确定要踢出" + roomUser.nickName + "吗？", "踢人", MessageBoxType.Confirm, "确定", "取消");
    let this_ = this;
    EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes, function () {
      RoomService.Instance.SendKickOut(roomUser.userId);
    }, confirmObj);

  }

  onDestroy() {
    console.log('onDestroy')
    EventManager.Instance.removeAll(this);
  }
}

