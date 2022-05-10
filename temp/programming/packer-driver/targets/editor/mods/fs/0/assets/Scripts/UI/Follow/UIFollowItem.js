System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ListViewItem, _decorator, Node, Label, Sprite, SystemEventType, proto, EventManager, DataManager, LoadResUtil, UIManager, TipsManager, RoomService, UIRoom, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, NItem, NUser, UIFollowItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIFollow(extras) {
    _reporterNs.report("UIFollow", "./UIFollow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterDefine(extras) {
    _reporterNs.report("CharacterDefine", "../../Data/CharacterDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICharacterDetail(extras) {
    _reporterNs.report("UICharacterDetail", "../UICharacterDetail/UICharacterDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsManager(extras) {
    _reporterNs.report("TipsManager", "../TipsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomService(extras) {
    _reporterNs.report("RoomService", "../../Services/RoomService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIRoom(extras) {
    _reporterNs.report("UIRoom", "../Room/UIRoom", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SystemEventType = _cc.SystemEventType;
    }, function (_unresolved_2) {
      ListViewItem = _unresolved_2.ListViewItem;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      DataManager = _unresolved_5.DataManager;
    }, function (_unresolved_6) {
      LoadResUtil = _unresolved_6.LoadResUtil;
    }, function (_unresolved_7) {
      UIManager = _unresolved_7.UIManager;
    }, function (_unresolved_8) {
      TipsManager = _unresolved_8.TipsManager;
    }, function (_unresolved_9) {
      RoomService = _unresolved_9.RoomService;
    }, function (_unresolved_10) {
      UIRoom = _unresolved_10.UIRoom;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e94cvslWlIiZVKwB4X8B+q", "UIFollowItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        NUser
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIFollowItem", UIFollowItem = (_dec = ccclass('UIFollowItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec(_class = (_class2 = (_temp = class UIFollowItem extends (_crd && ListViewItem === void 0 ? (_reportPossibleCrUseOfListViewItem({
        error: Error()
      }), ListViewItem) : ListViewItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "imgSprite", _descriptor, this);

          _initializerDefineProperty(this, "nickNameLabel", _descriptor2, this);

          _initializerDefineProperty(this, "offLineLabel", _descriptor3, this);

          _initializerDefineProperty(this, "onLineLabel", _descriptor4, this);

          _initializerDefineProperty(this, "levelLabel", _descriptor5, this);

          _initializerDefineProperty(this, "fensiLabel", _descriptor6, this);

          _initializerDefineProperty(this, "attLabel", _descriptor7, this);

          _initializerDefineProperty(this, "defLabel", _descriptor8, this);

          _initializerDefineProperty(this, "inviteButton", _descriptor9, this);

          _defineProperty(this, "index", 0);

          _defineProperty(this, "uiFollowItem", null);

          _defineProperty(this, "user", null);
        }

        onLoad() {
          if (this.index == 0) {
            console.log('onLoad index=' + this.index);
          }

          this.node.on(SystemEventType.TOUCH_END, this.onClcik, this); // this.nodeBgSprite=this.node.getComponent(Sprite) as Sprite;
          // this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame as SpriteFrame;
        }

        async onClcik() {
          if (this.user.status) {
            var _this$user$character;

            let uiCharacterDetail = await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UICharacterDetail");
            uiCharacterDetail.SendCharacterDetail(this.user.id, (_this$user$character = this.user.character) === null || _this$user$character === void 0 ? void 0 : _this$user$character.tid, 2);
          } else {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips('对方不在线！');
          }
        }

        async SetItemInfo(user, uiFollowItem) {
          var _user$character, _user$character2, _user$character3, _user$character4;

          this.user = user;
          this.uiFollowItem = uiFollowItem;
          let characterDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.characters[(_user$character = user.character) === null || _user$character === void 0 ? void 0 : _user$character.cid];
          this.imgSprite.spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).load_local_sprite(characterDefine.Avatar + '/spriteFrame');
          this.nickNameLabel.string = '昵称：' + user.nickname;
          this.offLineLabel.active = !user.status;
          this.onLineLabel.active = user.status;
          this.levelLabel.string = 'Lv：' + ((_user$character2 = user.character) === null || _user$character2 === void 0 ? void 0 : _user$character2.level);
          this.fensiLabel.string = '粉丝：' + user.fenSiCount;
          this.attLabel.string = '攻击力：' + ((_user$character3 = user.character) === null || _user$character3 === void 0 ? void 0 : _user$character3.att);
          this.defLabel.string = '防御力：' + ((_user$character4 = user.character) === null || _user$character4 === void 0 ? void 0 : _user$character4.def);
          this.inviteButton.active = user.status;
        }
        /**
         * 点击邀请
         */


        async OnClickInvite() {
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendInviteRequest(this.user.id, this.user.nickname, (_crd && UIRoom === void 0 ? (_reportPossibleCrUseOfUIRoom({
            error: Error()
          }), UIRoom) : UIRoom).inviteTeamType);
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "imgSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nickNameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "offLineLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "onLineLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fensiLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "attLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "defLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "inviteButton", [_dec10], {
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
//# sourceMappingURL=UIFollowItem.js.map