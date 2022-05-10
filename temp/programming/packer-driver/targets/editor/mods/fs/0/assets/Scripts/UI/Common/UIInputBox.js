System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, Label, director, EditBox, EventManager, EventType, LogUtil, SoundManager, SoundDefine, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, UIInputBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "./Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../../Log/LogUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../../Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundDefine(extras) {
    _reporterNs.report("SoundDefine", "../../../Sound/SoundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      Label = _cc.Label;
      director = _cc.director;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }, function (_unresolved_4) {
      LogUtil = _unresolved_4.LogUtil;
    }, function (_unresolved_5) {
      SoundManager = _unresolved_5.SoundManager;
    }, function (_unresolved_6) {
      SoundDefine = _unresolved_6.SoundDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6f5bGmcr1GZZPu0fLmGHZG", "UIInputBox", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIInputBox", UIInputBox = (_dec = ccclass('UIInputBox'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(EditBox), _dec8 = property(Label), _dec9 = property(Label), _dec(_class = (_class2 = (_temp = class UIInputBox extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "title", _descriptor, this);

          _initializerDefineProperty(this, "tips", _descriptor2, this);

          _initializerDefineProperty(this, "message", _descriptor3, this);

          _initializerDefineProperty(this, "buttonYes", _descriptor4, this);

          _initializerDefineProperty(this, "buttonNo", _descriptor5, this);

          _initializerDefineProperty(this, "input", _descriptor6, this);

          _initializerDefineProperty(this, "buttonYesTitle", _descriptor7, this);

          _initializerDefineProperty(this, "buttonNoTitle", _descriptor8, this);

          _defineProperty(this, "emptyTips", null);
        }

        start() {}

        Init(title, message, btnOK = "", btnCancel = "", emptyTips = "") {
          var _director$getScene;

          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log('UIInputBox:Init');
          if (title) this.title.string = title;
          this.message.string = message;
          this.tips.string = '';
          this.emptyTips = emptyTips;
          if (btnOK) this.buttonYesTitle.string = btnOK;
          if (btnCancel) this.buttonNoTitle.string = btnCancel;
          (_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.addChild(this.node);
        }

        OnClickYes() {
          console.log('OnClickYes');
          this.tips.string = "";
          let inputStr = this.input.string;

          if (!inputStr && inputStr != '0') {
            this.tips.string = this.emptyTips;
            return;
          }

          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_UI_Confirm);
          let tips = (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatchObj((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIInputBox_OnClickYes, this, inputStr);
          console.log('tips=' + tips);

          if (tips && tips != 'close') {
            this.tips.string = tips;
            return;
          }

          if (tips == 'close') {
            this.Destroy();
          }
        }

        OnClickNo() {
          console.log('OnClickNo');
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_UI_Win_Close);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatchObj((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIInputBox_OnClickNo, this);
          this.Destroy();
        }

        Close() {
          this.Destroy();
        }

        Destroy() {
          var _director$getScene2;

          (_director$getScene2 = director.getScene()) === null || _director$getScene2 === void 0 ? void 0 : _director$getScene2.removeChild(this.node);
          this.destroy();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "message", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonYes", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "buttonNo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "input", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buttonYesTitle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buttonNoTitle", [_dec9], {
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
//# sourceMappingURL=UIInputBox.js.map