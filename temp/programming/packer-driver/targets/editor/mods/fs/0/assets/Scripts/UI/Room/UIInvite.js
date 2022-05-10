System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EditBox, UIWindow, EventManager, EventType, proto, RoomService, UIInviteItem, UIRoom, UIManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, RoomUser, TeamType, UIInvite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "../Common/UIWindow", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfUIInviteItem(extras) {
    _reporterNs.report("UIInviteItem", "./UIInviteItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIRoom(extras) {
    _reporterNs.report("UIRoom", "./UIRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIFollow(extras) {
    _reporterNs.report("UIFollow", "../Follow/UIFollow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      UIWindow = _unresolved_2.UIWindow;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      proto = _unresolved_5.default;
    }, function (_unresolved_6) {
      RoomService = _unresolved_6.RoomService;
    }, function (_unresolved_7) {
      UIInviteItem = _unresolved_7.UIInviteItem;
    }, function (_unresolved_8) {
      UIRoom = _unresolved_8.UIRoom;
    }, function (_unresolved_9) {
      UIManager = _unresolved_9.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11d34EHeZVNU7rIPJwhcNab", "UIInvite", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        RoomUser,
        TeamType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIInvite", UIInvite = (_dec = ccclass('UIInvite'), _dec2 = property(EditBox), _dec3 = property([_crd && UIInviteItem === void 0 ? (_reportPossibleCrUseOfUIInviteItem({
        error: Error()
      }), UIInviteItem) : UIInviteItem]), _dec(_class = (_class2 = (_temp = class UIInvite extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nickNameInput", _descriptor, this);

          _initializerDefineProperty(this, "uiInviteItemArr", _descriptor2, this);
        }

        start() {
          this.RefieshUI();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnNickNameSearch_UI, this.OnNickNameSearch_UI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnMyRoom_RefieshUI, this.RefieshUI, this);
        }

        RefieshUI() {
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendNickNameSearch(this.nickNameInput.string);
        }

        OnNickNameSearch_UI(param) {
          let roomUsers = param[0];

          for (let i = 0; i < 3; i++) {
            let uiInviteItem = this.uiInviteItemArr[i];

            if (i < roomUsers.length) {
              let roomUser = roomUsers[i];
              uiInviteItem.SetItemInfo(roomUser);
              uiInviteItem.node.active = true;
            } else {
              uiInviteItem.node.active = false;
            }
          }
        }
        /**
         * 搜索点击
         */


        OnSearchClick() {
          this.RefieshUI();
        }
        /**
         * 关注列表点击
         */


        async OnFollowListClick() {
          let uiFollow = await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.show("UIFollow");
        }
        /**
         * 邀请点击
         */


        OnInviteClick(param, customEventData) {
          console.log(customEventData);
          let uiInviteItem = this.uiInviteItemArr[customEventData - 1];
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendInviteRequest(uiInviteItem.roomUser.userId, uiInviteItem.roomUser.nickName, (_crd && UIRoom === void 0 ? (_reportPossibleCrUseOfUIRoom({
            error: Error()
          }), UIRoom) : UIRoom).inviteTeamType);
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nickNameInput", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiInviteItemArr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIInvite.js.map