System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, EventManager, EventType, User, ItemManager, StatusService, _crd, NetMessage, NetMessageRequest, Result, NStatus, StatusNotify, StatusType, StatusAction;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../UI/Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../UI/Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemManager(extras) {
    _reporterNs.report("ItemManager", "../Managers/ItemManager", _context.meta, extras);
  }

  _export("StatusService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      User = _unresolved_5.User;
    }, function (_unresolved_6) {
      ItemManager = _unresolved_6.ItemManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77c02+c8x5CZZO7wsHJXLlr", "StatusService", undefined);

      ({
        NetMessage,
        NetMessageRequest,
        Result,
        NStatus,
        StatusNotify,
        StatusType,
        StatusAction
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("StatusService", StatusService = class StatusService {
        Init() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnStatusNotify, this.OnStatusNotify, this);
        }

        OnStatusNotify(param) {
          let response = param[0];

          for (let i = 0; i < response.status.length; i++) {
            let status = response.status[i];
            this.Notify(status);
          }
        }

        Notify(status) {
          console.info("StatusNotify:[{0}][{1}]{2}:{3}", status.type, status.action, status.id, status.value);

          if (status.type == StatusType.MONEY) {
            //金币变更
            if (status.action == StatusAction.ADD) (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.AddGold(status.value);else if (status.action == StatusAction.DELETE) (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.AddGold(-status.value);
          } else if (status.type == StatusType.ITEM) {
            //道具变更  
            if (status.action == StatusAction.ADD) {
              //加道具
              (_crd && ItemManager === void 0 ? (_reportPossibleCrUseOfItemManager({
                error: Error()
              }), ItemManager) : ItemManager).Instance.AddItem(status.id, status.value);
            } else if (status.action == StatusAction.DELETE) {
              //删道具
              (_crd && ItemManager === void 0 ? (_reportPossibleCrUseOfItemManager({
                error: Error()
              }), ItemManager) : ItemManager).Instance.RemoveItem(status.id, status.value);
            } else if (status.action == StatusAction.UPDATE) {
              //更新道具
              (_crd && ItemManager === void 0 ? (_reportPossibleCrUseOfItemManager({
                error: Error()
              }), ItemManager) : ItemManager).Instance.UpdateBagItemCount(status.id, status.value);
            }
          }
        }

      });

      _defineProperty(StatusService, "Instance", new StatusService());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StatusService.js.map