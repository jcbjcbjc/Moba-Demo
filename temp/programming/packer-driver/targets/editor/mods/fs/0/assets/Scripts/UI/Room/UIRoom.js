System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, director, Label, Sprite, Button, SystemEventType, EventManager, EventType, proto, RoomService, LoadResUtil, DataManager, UIManager, MessageBox, MessageBoxType, User, ChatManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _class3, _temp, _crd, ccclass, property, NRoom, RoomUser, TeamType, ChatChannel, UIRoom;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomService(extras) {
    _reporterNs.report("RoomService", "../../Services/RoomService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIInvite(extras) {
    _reporterNs.report("UIInvite", "./UIInvite", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBoxType(extras) {
    _reporterNs.report("MessageBoxType", "../Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICharacterDetail(extras) {
    _reporterNs.report("UICharacterDetail", "../UICharacterDetail/UICharacterDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIChat(extras) {
    _reporterNs.report("UIChat", "../Chat/UIChat", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatManager(extras) {
    _reporterNs.report("ChatManager", "../../Managers/ChatManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Button = _cc.Button;
      SystemEventType = _cc.SystemEventType;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }, function (_unresolved_4) {
      proto = _unresolved_4.default;
    }, function (_unresolved_5) {
      RoomService = _unresolved_5.RoomService;
    }, function (_unresolved_6) {
      LoadResUtil = _unresolved_6.LoadResUtil;
    }, function (_unresolved_7) {
      DataManager = _unresolved_7.DataManager;
    }, function (_unresolved_8) {
      UIManager = _unresolved_8.UIManager;
    }, function (_unresolved_9) {
      MessageBox = _unresolved_9.MessageBox;
      MessageBoxType = _unresolved_9.MessageBoxType;
    }, function (_unresolved_10) {
      User = _unresolved_10.User;
    }, function (_unresolved_11) {
      ChatManager = _unresolved_11.ChatManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c315WxFg9FDrYfvXaJdByc", "UIRoom", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NRoom,
        RoomUser,
        TeamType,
        ChatChannel
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIRoom", UIRoom = (_dec = ccclass('UIRoom'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(Label), _dec10 = property(Sprite), _dec11 = property(Label), _dec12 = property(Sprite), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(Sprite), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = class UIRoom extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mySprite1", _descriptor, this);

          _initializerDefineProperty(this, "myNicknameLabel1", _descriptor2, this);

          _initializerDefineProperty(this, "mySprite2", _descriptor3, this);

          _initializerDefineProperty(this, "myNicknameLabel2", _descriptor4, this);

          _initializerDefineProperty(this, "mySprite3", _descriptor5, this);

          _initializerDefineProperty(this, "myNicknameLabel3", _descriptor6, this);

          _initializerDefineProperty(this, "enemySprite1", _descriptor7, this);

          _initializerDefineProperty(this, "enemyNicknameLabel1", _descriptor8, this);

          _initializerDefineProperty(this, "enemySprite2", _descriptor9, this);

          _initializerDefineProperty(this, "enemyNicknameLabel2", _descriptor10, this);

          _initializerDefineProperty(this, "enemySprite3", _descriptor11, this);

          _initializerDefineProperty(this, "enemyNicknameLabel3", _descriptor12, this);

          _initializerDefineProperty(this, "roomIdLabel", _descriptor13, this);

          _initializerDefineProperty(this, "myInviteButton", _descriptor14, this);

          _initializerDefineProperty(this, "enemyInviteButton", _descriptor15, this);

          _initializerDefineProperty(this, "startGameButton", _descriptor16, this);

          _initializerDefineProperty(this, "chatRedSprite", _descriptor17, this);

          _initializerDefineProperty(this, "mykickOutButton2", _descriptor18, this);

          _initializerDefineProperty(this, "mykickOutButton3", _descriptor19, this);

          _initializerDefineProperty(this, "enemykickOutButton1", _descriptor20, this);

          _initializerDefineProperty(this, "enemykickOutButton2", _descriptor21, this);

          _initializerDefineProperty(this, "enemykickOutButton3", _descriptor22, this);

          _defineProperty(this, "room", null);

          _defineProperty(this, "normalBgSpriteFrame", null);

          _defineProperty(this, "teamNum", 3);
        }

        //邀请队伍类型
        start() {
          this.RefieshUI();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnMyRoom_UI, this.OnMyRoom_UI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnMyRoom_RefieshUI, this.RefieshUI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnChangeRedNum, this.OnChangeRedNum, this);
          this.normalBgSpriteFrame = this.mySprite1.spriteFrame;
          (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.SelectedChannel(ChatChannel.RoomChat); //切换频道

          this.chatRedSprite.node.active = false;
          this.OnChangeRedNum();
        }

        RefieshUI() {
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendMyRoom();
        }

        async OnMyRoom_UI(param) {
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
          let room = param[0];
          this.room = room;
          let roomOwnerFlag = room.userId == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          this.myInviteButton.node.active = roomOwnerFlag;
          this.enemyInviteButton.node.active = roomOwnerFlag;
          this.startGameButton.node.active = roomOwnerFlag;
          let myList = room.my;
          let enemyList = room.enemy;
          this.roomIdLabel.string = '房间id：' + room.roomId;
          let this_ = this;

          for (let i = 0; i < this.teamNum; i++) {
            if (i < myList.length) {
              let my = myList[i];
              this['mySprite' + (i + 1)].spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).load_local_sprite((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.characters[my.cCharacterId].Avatar + '/spriteFrame');
              this['myNicknameLabel' + (i + 1)].string = my.nickName;
              this['myNicknameLabel' + (i + 1)].node.active = true;

              if (i > 0 && roomOwnerFlag) {
                console.log('mykickOutButton' + (i + 1));
                this['mykickOutButton' + (i + 1)]['roomUser'] = my;
                this['mykickOutButton' + (i + 1)].active = true;
              } //头像点击


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
              this['enemySprite' + (i + 1)].spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).load_local_sprite((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.characters[enemy.cCharacterId].Avatar + '/spriteFrame');
              this['enemyNicknameLabel' + (i + 1)].string = enemy.nickName;
              this['enemyNicknameLabel' + (i + 1)].node.active = true;

              if (roomOwnerFlag) {
                console.log('enemykickOutButton' + (i + 1));
                this['enemykickOutButton' + (i + 1)]['roomUser'] = enemy;
                this['enemykickOutButton' + (i + 1)].active = true;
              } //头像点击


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


        async OnRoomUserClcik(param) {
          console.log(param);
          let roomUser = param.currentTarget.roomUser;
          let uiCharacterDetail = await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.show("UICharacterDetail");
          uiCharacterDetail.SendCharacterDetail(roomUser.userId, 0, 2);
        }
        /**
         * 我方邀请点击
         */


        async OnMyInviteClick() {
          let uiInvite = await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.show("UIInvite");
          UIRoom.inviteTeamType = TeamType.My;
        }
        /**
         * 敌方邀请点击
         */


        async OnEnemyInviteClick() {
          let uiInvite = await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.show("UIInvite");
          UIRoom.inviteTeamType = TeamType.Enemy;
        }
        /**
         * 开始游戏点击
         */


        OnStartGameClick() {
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendRoomStartGame();
        }
        /**
         * 点击聊天
         */


        async OnClickChat() {
          let uiChat = await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.show("UIChat");
          uiChat.ChangeChatChannel(2);
        }
        /**
          * 返回点击
          */


        async OnBackClick() {
          let roomOwnerFlag = this.room.userId == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          let tips = roomOwnerFlag ? '解散房间' : '退出房间';
          let confirmObj = await (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
            error: Error()
          }), MessageBox) : MessageBox).Show("确定要" + tips + "吗？", tips, (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Confirm, "确定", "取消");
          let this_ = this;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIMessageBox_OnClickYes, function () {
            (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
              error: Error()
            }), RoomService) : RoomService).Instance.SendOutRoom();
            director.loadScene('UIMain');
          }, confirmObj);
        }
        /**
         * 消息数量改变
         */


        OnChangeRedNum() {
          let arr = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.GetChannelChatRedNum(2);
          console.log('OnChangeRedNum arr=' + arr); // this.chatLabel.string=(arr[1] > 99 ? '99+' : arr[1])+'';

          if (arr[1] > 0) {
            this.chatRedSprite.node.active = true;
          } else {
            this.chatRedSprite.node.active = false;
          }
        }
        /**
        * 踢人
        */


        async OnkickOut(param, customEventData) {
          console.log(customEventData);
          let roomUser = param.currentTarget.roomUser;
          let confirmObj = await (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
            error: Error()
          }), MessageBox) : MessageBox).Show("确定要踢出" + roomUser.nickName + "吗？", "踢人", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Confirm, "确定", "取消");
          let this_ = this;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIMessageBox_OnClickYes, function () {
            (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
              error: Error()
            }), RoomService) : RoomService).Instance.SendKickOut(roomUser.userId);
          }, confirmObj);
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _defineProperty(_class3, "inviteTeamType", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mySprite1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myNicknameLabel1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mySprite2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "myNicknameLabel2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mySprite3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "myNicknameLabel3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "enemySprite1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "enemyNicknameLabel1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "enemySprite2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "enemyNicknameLabel2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "enemySprite3", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "enemyNicknameLabel3", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "roomIdLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "myInviteButton", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "enemyInviteButton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "startGameButton", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "chatRedSprite", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "mykickOutButton2", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "mykickOutButton3", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "enemykickOutButton1", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "enemykickOutButton2", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "enemykickOutButton3", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIRoom.js.map