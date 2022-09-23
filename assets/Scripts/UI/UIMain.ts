
import { _decorator, Component, Node, Label, Sprite, SpriteFrame, loader, resources, director } from 'cc';
import { MessageBox } from './Common/MessageBox';
import { UIManager } from './Common/UIManager';
import { UISystemConfig } from './UISystemConfig';
import { User } from '../Models/User';
import { LoadResUtil } from '../Utils/LoadResUtil';
import { DataManager } from '../Managers/DataManager';
import { UIBag } from './Bag/UIBag';
import { UIShop } from './Shop/UIShop';
import { EventManager } from './Common/Event/EventManager';
import { EventType } from './Common/Event/EventType';
import { UIPowerRanking } from './PowerRanking/UIPowerRanking';
import { UIAuction } from './Auction/UIAuction';
import { InputBox } from './Common/InputBox';
import { Validate } from '../Utils/Validate';
import { RoomService } from '../Services/RoomService';
import { UIChat } from './Chat/UIChat';
import { ChatManager } from '../Managers/ChatManager';
import { MatchService } from '../Services/MatchService';
import { UICharacterDetail } from './UICharacterDetail/UICharacterDetail';
const { ccclass, property } = _decorator;

@ccclass('UIMain')
export class UIMain extends Component {

  @property(Label)
  public levelText: Label = null as unknown as Label;
  @property(Label)
  public expText: Label = null as unknown as Label;
  @property(Label)
  public nicknameText: Label = null as unknown as Label;
  @property(Label)
  public coinText: Label = null as unknown as Label;
  @property(Sprite)
  public avatarSprite: Sprite = null as unknown as Sprite;
  @property(Sprite)
  public chatRedSprite: Sprite = null as unknown as Sprite;

  async start() {
    this.levelText.string = '等级：' + User.Instance.user.character?.level;
    this.expText.string = '经验：' + User.Instance.user.character?.exp + '/' + User.Instance.user.character?.levelExp;
    this.nicknameText.string = '昵称：' + User.Instance.user.nickname;
    this.coinText.string = '金币：' + User.Instance.user.coin;
    let cid = User.Instance.user.character?.cid as number;  //角色配置id
    this.chatRedSprite.node.active = false;

    this.avatarSprite.spriteFrame = await LoadResUtil.load_local_sprite(DataManager.Instance.characters[cid].Avatar + '/spriteFrame');
    //  console.log(this.avatarSprite.spriteFrame)
    EventManager.Instance.addListener(EventType.UserCoinChange, this.OnUserCoinChange, this);
    EventManager.Instance.addListener(EventType.OnChangeRedNum, this.OnChangeRedNum, this);
    ChatManager.Instance.roomMessages = [];  //没有房间清空消息
    this.OnChangeRedNum();
  }

  /**
   * 金币发生变化
   * @param param 
   */
  private OnUserCoinChange(param: any) {
    let coin = param[0] as number;
    this.coinText.string = '金币：' + coin;
  }

  /**
   * 设置
   */
  SetUpClick() {
    let obj = UIManager.Instance.show("UISystemConfig");
    //    console.log('obj='+obj)
  }

  /**
   * 点击头像
   */
   public async OnClickAvatar() {
    let uiCharacterDetail = await UIManager.Instance.show("UICharacterDetail") as UICharacterDetail;
        uiCharacterDetail.SendCharacterDetail(User.Instance.user.character.userId, User.Instance.user.character?.tid as number, 1);
  }

  /**
   * 选择英雄
   */
  SelectHero() {
    director.loadScene('CharacterSelect');
  }

  /**
   * 点击背包
   */
  public async OnClickBag() {
    let uiBag = await UIManager.Instance.show("UIBag") as UIBag;
    uiBag.SetUpOpenMode(1);
  }

  /**
    * 点击商店
    */
  public async OnClickShop() {
    let uiShop = await UIManager.Instance.show("UIShop") as UIShop;
  }

  /**
   * 点击战力排行
   */
  public async OnClickPowerRanking() {
    let uiPowerRanking = await UIManager.Instance.show("UIPowerRanking") as UIPowerRanking;
  }

  /**
   * 点击拍卖大厅
   */
  public async OnClickAuction() {
    let uiAuction = await UIManager.Instance.show("UIAuction") as UIAuction;
  }

  /**
   * 点击开房间
   */
  OnClickOpenRoom() {
    RoomService.Instance.SendValidateOpenRoom();
  }

  /**
  * 点击加入房间
  */
  async OnClickJoinRoom() {
    let inputBox = await InputBox.Show('请输入房间id', "加入房间");
    let this_ = this;
    EventManager.Instance.addListener(EventType.UIInputBox_OnClickYes, function (param: any): string {
      let roomId = param[0];
      if (!Validate.isIntegerLarge0(roomId)) {
        return '房间id必须大于0';
      }
      RoomService.Instance.SendAddRoomRequest(roomId);
      return '';
    }, inputBox);
  }

  /**
   * 点击聊天
   */
  public async OnClickChat() {
    let uiChat = await UIManager.Instance.show("UIChat") as UIChat;
    let arr = ChatManager.Instance.GetChannelChatRedNum(1);
    uiChat.ChangeChatChannel(arr[0]);
  }

  /**
   * 消息数量改变
   */
  private OnChangeRedNum() {
    let arr = ChatManager.Instance.GetChannelChatRedNum(1);
    console.log('OnChangeRedNum arr=' + arr)
    if (arr[1] > 0) {
      this.chatRedSprite.node.active = true;
    } else {
      this.chatRedSprite.node.active = false;
    }
  }

  /**
   * 点击匹配对抗
   */
  public async OnClickStartMatch() {
    MatchService.Instance.SendStartMatch();
  }

  /**
   * 点击关注/直播
   */
  public OnClickFollowLive() {
    director.loadScene('FollowLive');
  }

  onDestroy() {
    console.log('onDestroy')
    EventManager.Instance.removeAll(this);
  }
}
