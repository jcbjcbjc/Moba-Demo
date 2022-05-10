System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, UIWindow, DataManager, TipsManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, UIMatchWait;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "../Common/UIWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsManager(extras) {
    _reporterNs.report("TipsManager", "../TipsManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      UIWindow = _unresolved_2.UIWindow;
    }, function (_unresolved_3) {
      DataManager = _unresolved_3.DataManager;
    }, function (_unresolved_4) {
      TipsManager = _unresolved_4.TipsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1131Tcc0JM56SQIxcSeYGY", "UIMatchWait", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIMatchWait", UIMatchWait = (_dec = ccclass('UIMatchWait'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = class UIMatchWait extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "matchNum", _descriptor, this);

          _defineProperty(this, "timer", null);

          _defineProperty(this, "num", 1);
        }

        start() {
          var startTime = new Date().getTime();
          var this_ = this;
          this.timer = setInterval(function () {
            this_.num = parseInt((new Date().getTime() - startTime) / 1000 + '') + 1;
            this_.matchNum.string = this_.num + ''; //匹配超时

            if ((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.gameConfig.MaxMatchTime <= this_.num - 1) {
              (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
                error: Error()
              }), TipsManager) : TipsManager).Instance.showTips("匹配超时");
              clearInterval(this_.timer);
              this_.Close();
            }
          }, 1000);
        }

        onDestroy() {
          clearInterval(this.timer);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "matchNum", [_dec2], {
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
//# sourceMappingURL=UIMatchWait.js.map