System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SoundManager, SoundDefine, UIManager, EventManager, EventType, _dec, _class, _crd, ccclass, property, UIWindow, WindowResult;

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../../Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundDefine(extras) {
    _reporterNs.report("SoundDefine", "../../../Sound/SoundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "./Event/EventType", _context.meta, extras);
  }

  _export("WindowResult", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      SoundManager = _unresolved_2.SoundManager;
    }, function (_unresolved_3) {
      SoundDefine = _unresolved_3.SoundDefine;
    }, function (_unresolved_4) {
      UIManager = _unresolved_4.UIManager;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5526eIvGAFNSYhcefXL2Rfd", "UIWindow", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIWindow", UIWindow = (_dec = ccclass('UIWindow'), _dec(_class = class UIWindow extends Component {
        start() {}

        Close(result = WindowResult.None) {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_UI_Win_Close);

          if (this.node) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.Close(this.node.name);
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIWindow_OnClose, result);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

        OnCloseClick() {
          this.Close();
        }

        OnYesClick() {
          this.Close(WindowResult.Yes);
        }

        OnNoClick() {
          this.Close(WindowResult.No);
        }

      }) || _class));

      (function (WindowResult) {
        WindowResult[WindowResult["None"] = 0] = "None";
        WindowResult[WindowResult["Yes"] = 1] = "Yes";
        WindowResult[WindowResult["No"] = 2] = "No";
      })(WindowResult || _export("WindowResult", WindowResult = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIWindow.js.map