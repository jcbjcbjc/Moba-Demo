System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Button, Label, director, MessageBoxType, EventManager, EventType, LogUtil, SoundManager, SoundDefine, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, UIMessageBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMessageBoxType(extras) {
    _reporterNs.report("MessageBoxType", "./MessageBox", _context.meta, extras);
  }

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
      Sprite = _cc.Sprite;
      Button = _cc.Button;
      Label = _cc.Label;
      director = _cc.director;
    }, function (_unresolved_2) {
      MessageBoxType = _unresolved_2.MessageBoxType;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      LogUtil = _unresolved_5.LogUtil;
    }, function (_unresolved_6) {
      SoundManager = _unresolved_6.SoundManager;
    }, function (_unresolved_7) {
      SoundDefine = _unresolved_7.SoundDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2086diJu+JNFpGGlrBfEldm", "UIMessageBox", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIMessageBox", UIMessageBox = (_dec = ccclass('UIMessageBox'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property([Sprite]), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = (_class2 = (_temp = class UIMessageBox extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "title", _descriptor, this);

          _initializerDefineProperty(this, "message", _descriptor2, this);

          _initializerDefineProperty(this, "icons", _descriptor3, this);

          _initializerDefineProperty(this, "buttonYes", _descriptor4, this);

          _initializerDefineProperty(this, "buttonNo", _descriptor5, this);

          _initializerDefineProperty(this, "buttonYesTitle", _descriptor6, this);

          _initializerDefineProperty(this, "buttonNoTitle", _descriptor7, this);
        }

        start() {}

        Init(title, message, type = (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
          error: Error()
        }), MessageBoxType) : MessageBoxType).Information, btnOK = "", btnCancel = "") {
          var _director$getScene;

          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log('UIMessageBox:Init');
          if (title) this.title.string = title;
          this.message.string = message;
          this.icons[0].enabled = type == (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Information;
          this.icons[1].enabled = type == (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Confirm;
          this.icons[2].enabled = type == (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Error;
          if (btnOK) this.buttonYesTitle.string = btnOK;
          if (btnCancel) this.buttonNoTitle.string = btnCancel;
          this.buttonNo.node.active = type == (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Confirm;
          (_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.addChild(this.node);
          if (type == (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Error) (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_Message_Error);else (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_Message_Info);
        }

        OnClickYes() {
          console.log('OnClickYes');
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_UI_Confirm);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatchObj((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIMessageBox_OnClickYes, this);
          this.Destroy();
        }

        OnClickNo() {
          console.log('OnClickNo' + this.uuid);
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_UI_Win_Close);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatchObj((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIMessageBox_OnClickNo, this);
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "message", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icons", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buttonYesTitle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buttonNoTitle", [_dec8], {
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
//# sourceMappingURL=UIMessageBox.js.map