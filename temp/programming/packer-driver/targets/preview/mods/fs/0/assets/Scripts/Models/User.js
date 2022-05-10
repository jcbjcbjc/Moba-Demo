System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, EventManager, EventType, User, _crd, NUser, AttrPromoteType, NItem, NRoom;

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

  _export("User", void 0);

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f380EeEHRCvL8Xv187J8Vm", "User", undefined);

      ({
        NUser,
        AttrPromoteType,
        NItem,
        NRoom
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto); // import { NUser, AttrPromoteType } from "../../Proto/proto";

      _export("User", User = class User {
        constructor() {
          _defineProperty(this, "user", null);

          _defineProperty(this, "isLogin", false);

          _defineProperty(this, "room", null);
        }

        //房间

        /**
         * 更改金币
         * @param coin 金币 
         */
        AddGold(coin) {
          this.user.coin += coin;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UserCoinChange, this.user.coin);
        }
        /**
         * 修改已选角色属性
         * @param attrPromoteType 类型
         * @param spot 属性点
         */


        UpdateAttrPromote(attrPromoteType, spot, attrValue) {
          var character = this.user.character;

          if (attrPromoteType = AttrPromoteType.Att) {
            character.attSpot += spot;
            character.att += attrValue;
          } else if (attrPromoteType = AttrPromoteType.Def) {
            character.defSpot += spot;
            character.def += attrValue;
          } else if (attrPromoteType = AttrPromoteType.Hp) {
            character.hpSpot += spot;
            character.hp += attrValue;
          } else if (attrPromoteType = AttrPromoteType.Cri) {
            character.criSpot += spot;
            character.cri += attrValue;
          } else if (attrPromoteType = AttrPromoteType.Resu) {
            character.resuSpot += spot;
            character.resu += attrValue;
          } else if (attrPromoteType = AttrPromoteType.Speed) {
            character.speedSpot += spot;
            character.speed += attrValue;
          } else if (attrPromoteType = AttrPromoteType.Cd) {
            character.cdSpot += spot;
            character.cd += attrValue;
          }
        }

      });

      _defineProperty(User, "Instance", new User());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=User.js.map