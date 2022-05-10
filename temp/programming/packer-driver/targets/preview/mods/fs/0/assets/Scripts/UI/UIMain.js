System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Sprite, director, UIManager, User, LoadResUtil, DataManager, EventManager, EventType, InputBox, Validate, RoomService, ChatManager, MatchService, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, UIMain;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBag(extras) {
    _reporterNs.report("UIBag", "./Bag/UIBag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIShop(extras) {
    _reporterNs.report("UIShop", "./Shop/UIShop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "./Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPowerRanking(extras) {
    _reporterNs.report("UIPowerRanking", "./PowerRanking/UIPowerRanking", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIAuction(extras) {
    _reporterNs.report("UIAuction", "./Auction/UIAuction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputBox(extras) {
    _reporterNs.report("InputBox", "./Common/InputBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValidate(extras) {
    _reporterNs.report("Validate", "../Utils/Validate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomService(extras) {
    _reporterNs.report("RoomService", "../Services/RoomService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIChat(extras) {
    _reporterNs.report("UIChat", "./Chat/UIChat", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatManager(extras) {
    _reporterNs.report("ChatManager", "../Managers/ChatManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchService(extras) {
    _reporterNs.report("MatchService", "../Services/MatchService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICharacterDetail(extras) {
    _reporterNs.report("UICharacterDetail", "./UICharacterDetail/UICharacterDetail", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      director = _cc.director;
    }, function (_unresolved_2) {
      UIManager = _unresolved_2.UIManager;
    }, function (_unresolved_3) {
      User = _unresolved_3.User;
    }, function (_unresolved_4) {
      LoadResUtil = _unresolved_4.LoadResUtil;
    }, function (_unresolved_5) {
      DataManager = _unresolved_5.DataManager;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      EventType = _unresolved_7.EventType;
    }, function (_unresolved_8) {
      InputBox = _unresolved_8.InputBox;
    }, function (_unresolved_9) {
      Validate = _unresolved_9.Validate;
    }, function (_unresolved_10) {
      RoomService = _unresolved_10.RoomService;
    }, function (_unresolved_11) {
      ChatManager = _unresolved_11.ChatManager;
    }, function (_unresolved_12) {
      MatchService = _unresolved_12.MatchService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e3a3HcVihHx4ejbVOcb1Dg", "UIMain", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIMain", UIMain = (_dec = ccclass('UIMain'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec(_class = (_class2 = (_temp = class UIMain extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "levelText", _descriptor, this);

          _initializerDefineProperty(this, "expText", _descriptor2, this);

          _initializerDefineProperty(this, "nicknameText", _descriptor3, this);

          _initializerDefineProperty(this, "coinText", _descriptor4, this);

          _initializerDefineProperty(this, "avatarSprite", _descriptor5, this);

          _initializerDefineProperty(this, "chatRedSprite", _descriptor6, this);
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _Instance$user$charac, _Instance$user$charac2, _Instance$user$charac3, _Instance$user$charac4;

            _this.levelText.string = '等级：' + ((_Instance$user$charac = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.character) === null || _Instance$user$charac === void 0 ? void 0 : _Instance$user$charac.level);
            _this.expText.string = '经验：' + ((_Instance$user$charac2 = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.character) === null || _Instance$user$charac2 === void 0 ? void 0 : _Instance$user$charac2.exp) + '/' + ((_Instance$user$charac3 = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.character) === null || _Instance$user$charac3 === void 0 ? void 0 : _Instance$user$charac3.levelExp);
            _this.nicknameText.string = '昵称：' + (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.nickname;
            _this.coinText.string = '金币：' + (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.coin;
            var cid = (_Instance$user$charac4 = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.character) === null || _Instance$user$charac4 === void 0 ? void 0 : _Instance$user$charac4.cid; //角色配置id

            _this.chatRedSprite.node.active = false;
            _this.avatarSprite.spriteFrame = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_sprite((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.characters[cid].Avatar + '/spriteFrame'); //  console.log(this.avatarSprite.spriteFrame)

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UserCoinChange, _this.OnUserCoinChange, _this);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnChangeRedNum, _this.OnChangeRedNum, _this);
            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.roomMessages = []; //没有房间清空消息

            _this.OnChangeRedNum();
          })();
        }
        /**
         * 金币发生变化
         * @param param 
         */


        OnUserCoinChange(param) {
          var coin = param[0];
          this.coinText.string = '金币：' + coin;
        }
        /**
         * 设置
         */


        SetUpClick() {
          var obj = (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.show("UISystemConfig"); //    console.log('obj='+obj)
        }
        /**
         * 点击头像
         */


        OnClickAvatar() {
          return _asyncToGenerator(function* () {
            var _Instance$user$charac5;

            var uiCharacterDetail = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UICharacterDetail");
            uiCharacterDetail.SendCharacterDetail((_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.character.userId, (_Instance$user$charac5 = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.character) === null || _Instance$user$charac5 === void 0 ? void 0 : _Instance$user$charac5.tid, 1);
          })();
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


        OnClickBag() {
          return _asyncToGenerator(function* () {
            var uiBag = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UIBag");
            uiBag.SetUpOpenMode(1);
          })();
        }
        /**
          * 点击商店
          */


        OnClickShop() {
          return _asyncToGenerator(function* () {
            var uiShop = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UIShop");
          })();
        }
        /**
         * 点击战力排行
         */


        OnClickPowerRanking() {
          return _asyncToGenerator(function* () {
            var uiPowerRanking = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UIPowerRanking");
          })();
        }
        /**
         * 点击拍卖大厅
         */


        OnClickAuction() {
          return _asyncToGenerator(function* () {
            var uiAuction = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UIAuction");
          })();
        }
        /**
         * 点击开房间
         */


        OnClickOpenRoom() {
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendValidateOpenRoom();
        }
        /**
        * 点击加入房间
        */


        OnClickJoinRoom() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var inputBox = yield (_crd && InputBox === void 0 ? (_reportPossibleCrUseOfInputBox({
              error: Error()
            }), InputBox) : InputBox).Show('请输入房间id', "加入房间");
            var this_ = _this2;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIInputBox_OnClickYes, function (param) {
              var roomId = param[0];

              if (!(_crd && Validate === void 0 ? (_reportPossibleCrUseOfValidate({
                error: Error()
              }), Validate) : Validate).isIntegerLarge0(roomId)) {
                return '房间id必须大于0';
              }

              (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
                error: Error()
              }), RoomService) : RoomService).Instance.SendAddRoomRequest(roomId);
              return '';
            }, inputBox);
          })();
        }
        /**
         * 点击聊天
         */


        OnClickChat() {
          return _asyncToGenerator(function* () {
            var uiChat = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UIChat");
            var arr = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.GetChannelChatRedNum(1);
            uiChat.ChangeChatChannel(arr[0]);
          })();
        }
        /**
         * 消息数量改变
         */


        OnChangeRedNum() {
          var arr = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.GetChannelChatRedNum(1);
          console.log('OnChangeRedNum arr=' + arr);

          if (arr[1] > 0) {
            this.chatRedSprite.node.active = true;
          } else {
            this.chatRedSprite.node.active = false;
          }
        }
        /**
         * 点击匹配对抗
         */


        OnClickStartMatch() {
          return _asyncToGenerator(function* () {
            (_crd && MatchService === void 0 ? (_reportPossibleCrUseOfMatchService({
              error: Error()
            }), MatchService) : MatchService).Instance.SendStartMatch();
          })();
        }
        /**
         * 点击关注/直播
         */


        OnClickFollowLive() {
          director.loadScene('FollowLive');
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "expText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nicknameText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "coinText", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "avatarSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "chatRedSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIMain.js.map