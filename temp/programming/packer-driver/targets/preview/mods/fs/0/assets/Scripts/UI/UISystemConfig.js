System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Slider, Sprite, ProgressBar, UIWindow, SoundManager, SoundDefine, SoundConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, UISystemConfig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "./Common/UIWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundDefine(extras) {
    _reporterNs.report("SoundDefine", "../../Sound/SoundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundConfig(extras) {
    _reporterNs.report("SoundConfig", "../../Sound/SoundConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Slider = _cc.Slider;
      Sprite = _cc.Sprite;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      UIWindow = _unresolved_2.UIWindow;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      SoundDefine = _unresolved_4.SoundDefine;
    }, function (_unresolved_5) {
      SoundConfig = _unresolved_5.SoundConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52e22ZYrD9MC6Ixk6Bx6x7J", "UISystemConfig", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UISystemConfig", UISystemConfig = (_dec = ccclass('UISystemConfig'), _dec2 = property(Slider), _dec3 = property(Slider), _dec4 = property(ProgressBar), _dec5 = property(ProgressBar), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec(_class = (_class2 = (_temp = class UISystemConfig extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sliderMusic", _descriptor, this);

          _initializerDefineProperty(this, "sliderSound", _descriptor2, this);

          _initializerDefineProperty(this, "musicProgressBar", _descriptor3, this);

          _initializerDefineProperty(this, "soundProgressBar", _descriptor4, this);

          _initializerDefineProperty(this, "musicOff", _descriptor5, this);

          _initializerDefineProperty(this, "soundOff", _descriptor6, this);

          _initializerDefineProperty(this, "musicOn", _descriptor7, this);

          _initializerDefineProperty(this, "soundOn", _descriptor8, this);

          _defineProperty(this, "lastPlay", 0);
        }

        start() {
          this.musicOn.node.active = (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).MusicOn;
          this.musicOff.node.active = !(_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).MusicOn;
          this.soundOn.node.active = (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).SoundOn;
          this.soundOff.node.active = !(_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).SoundOn;
          this.sliderMusic.progress = this.musicProgressBar.progress = (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).MusicVolume;
          this.sliderSound.progress = this.soundProgressBar.progress = (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).SoundVolume;
          var this_ = this; //音乐滑动事件

          this.sliderMusic.node.on('slide', function (event) {
            this_.musicProgressBar.progress = this_.sliderMusic.progress;
            (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
              error: Error()
            }), SoundConfig) : SoundConfig).MusicVolume = this_.sliderMusic.progress;
            this_.PlaySound();
          }, this); //声音滑动事件

          this.sliderSound.node.on('slide', function (event) {
            this_.soundProgressBar.progress = this_.sliderSound.progress;
            (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
              error: Error()
            }), SoundConfig) : SoundConfig).SoundVolume = this_.sliderSound.progress;
            this_.PlaySound();
          }, this); //关音乐点击事件

          this.musicOff.node.on(Node.EventType.TOUCH_END, function (event) {
            console.log("TOUCH_END this.musicOff", event.type);
            this_.MusicToogle(false);
          }, this); //关声音点击事件

          this.soundOff.node.on(Node.EventType.TOUCH_END, function (event) {
            // console.log("TOUCH_END this.soundOff", event.type);
            this_.SoundToogle(false);
          }, this); //开音乐点击事件

          this.musicOn.node.on(Node.EventType.TOUCH_END, function (event) {
            console.log("TOUCH_END this.musicOn", event.type);
            this_.MusicToogle(true);
          }, this); //开声音点击事件

          this.soundOn.node.on(Node.EventType.TOUCH_END, function (event) {
            // console.log("TOUCH_END this.soundOn", event.type);
            this_.SoundToogle(true);
          }, this);
        }

        MusicToogle(on) {
          this.musicOn.node.active = !on;
          this.musicOff.node.active = on;
          (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).MusicOn = !on;
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_UI_Click);
        }

        SoundToogle(on) {
          this.soundOn.node.active = !on;
          this.soundOff.node.active = on;
          (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).SoundOn = !on;
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_UI_Click);
        }

        PlaySound() {
          var time = new Date().getTime();

          if (time - this.lastPlay > 0.1) {
            this.lastPlay = time;
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
              error: Error()
            }), SoundDefine) : SoundDefine).SFX_UI_Click);
          }
        } // update (deltaTime: number) {
        //     
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sliderMusic", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sliderSound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "musicProgressBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "soundProgressBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "musicOff", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "soundOff", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "musicOn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "soundOn", [_dec9], {
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
//# sourceMappingURL=UISystemConfig.js.map