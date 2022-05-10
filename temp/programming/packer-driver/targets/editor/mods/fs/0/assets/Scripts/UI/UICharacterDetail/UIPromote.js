System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, EventManager, EventType, User, UserService, UIWindow, DataUtil, proto, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, AttrPromoteType, AddAttrType, AttrPromoteInfoResponse, UIPromote;

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

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserService(extras) {
    _reporterNs.report("UserService", "../../Services/UserService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "../Common/UIWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataUtil(extras) {
    _reporterNs.report("DataUtil", "../../Utils/DataUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICharacterDetail(extras) {
    _reporterNs.report("UICharacterDetail", "./UICharacterDetail", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }, function (_unresolved_4) {
      User = _unresolved_4.User;
    }, function (_unresolved_5) {
      UserService = _unresolved_5.UserService;
    }, function (_unresolved_6) {
      UIWindow = _unresolved_6.UIWindow;
    }, function (_unresolved_7) {
      DataUtil = _unresolved_7.DataUtil;
    }, function (_unresolved_8) {
      proto = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8833eiyoJVD/pzkPuXhhGxP", "UIPromote", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        AttrPromoteType,
        AddAttrType,
        AttrPromoteInfoResponse
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIPromote", UIPromote = (_dec = ccclass('UIPromote'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class UIPromote extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "attrLabel", _descriptor, this);

          _initializerDefineProperty(this, "cgjhLabel", _descriptor2, this);

          _defineProperty(this, "tCharacterId", 0);

          _defineProperty(this, "attrPromoteType", null);

          _defineProperty(this, "spot", 0);

          _defineProperty(this, "uiCharacterDetail", null);
        }

        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnAttrPromoteInfo_UI, this.OnAttrPromoteInfo_UI, this);
        }
        /**
         * 设置提升属性信息
         */


        SetPromoteDetail(tCharacterId, attrPromoteType, spot, uiCharacterDetail) {
          console.log('SetPromoteDetail tCharacterId=' + tCharacterId + '，attrPromoteType=' + attrPromoteType + '，spot=' + spot);
          this.tCharacterId = tCharacterId;
          this.attrPromoteType = attrPromoteType;
          this.spot = spot;
          this.uiCharacterDetail = uiCharacterDetail;
          this.UpdateAttrPromoteInfo();
        }
        /**
         * 更新提升属性信息
         */


        UpdateAttrPromoteInfo() {
          let attrStr = ''; //属性信息

          let addAttrDefine = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
            error: Error()
          }), DataUtil) : DataUtil).queryObjAddAttrByType(AddAttrType.GEM, this.spot);
          let cgjhStr = ''; //成功机会信息

          if (addAttrDefine) {
            cgjhStr = '成功机会：' + addAttrDefine.Probability + '%';
          } else {
            cgjhStr = '成功机会：0%';
          }

          if (this.attrPromoteType == AttrPromoteType.Att) {
            attrStr = '攻击：';
          } else if (this.attrPromoteType == AttrPromoteType.Def) {
            attrStr = '防御：';
          } else if (this.attrPromoteType == AttrPromoteType.Hp) {
            attrStr = '血量：';
          } else if (this.attrPromoteType == AttrPromoteType.Cri) {
            attrStr = '暴击率：';
          } else if (this.attrPromoteType == AttrPromoteType.Resu) {
            attrStr = '复活率：';
          } else if (this.attrPromoteType == AttrPromoteType.Speed) {
            attrStr = '速度：';
          } else if (this.attrPromoteType == AttrPromoteType.Cd) {
            attrStr = 'cd：';
          }

          this.attrLabel.string = attrStr + this.spot;
          this.cgjhLabel.string = cgjhStr;
        }
        /**
         * 请求属性提升
         */


        AttrPromote() {
          (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
            error: Error()
          }), UserService) : UserService).Instance.SendAttrPromote(this.tCharacterId, this.attrPromoteType);
        }
        /**
         * 属性提升响应
         */


        OnAttrPromoteInfo_UI(param) {
          var _Instance$user$charac;

          let attrPromoteInfoResponse = param[0]; //更新已选角色属性

          if (((_Instance$user$charac = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.character) === null || _Instance$user$charac === void 0 ? void 0 : _Instance$user$charac.tid) == this.tCharacterId) {
            (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.UpdateAttrPromote(this.attrPromoteType, attrPromoteInfoResponse.spot, attrPromoteInfoResponse.attrValue);
          }

          this.spot = attrPromoteInfoResponse.spot;
          this.UpdateAttrPromoteInfo(); //更新详情界面属性提升

          if (this.uiCharacterDetail) {
            this.uiCharacterDetail.UpdateAttrPromote(this.attrPromoteType, attrPromoteInfoResponse);
          }
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "attrLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cgjhLabel", [_dec3], {
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
//# sourceMappingURL=UIPromote.js.map