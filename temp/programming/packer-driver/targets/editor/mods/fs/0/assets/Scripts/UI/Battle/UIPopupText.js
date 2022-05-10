System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, tween, Vec3, RandomUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, UIPopupText;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopupType(extras) {
    _reporterNs.report("PopupType", "./enums/PopupType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandomUtil(extras) {
    _reporterNs.report("RandomUtil", "./Utils/RandomUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      RandomUtil = _unresolved_2.RandomUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ace91JX2RL2ZxqzMvk0kff", "UIPopupText", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIPopupText", UIPopupText = (_dec = ccclass('UIPopupText'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Number), _dec(_class = (_class2 = (_temp = class UIPopupText extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "normalDamageText", _descriptor, this);

          _initializerDefineProperty(this, "critDamageText", _descriptor2, this);

          _initializerDefineProperty(this, "healText", _descriptor3, this);

          _initializerDefineProperty(this, "buffDamageText", _descriptor4, this);

          _initializerDefineProperty(this, "floatTime", _descriptor5, this);
        }

        start() {}

        InitPopup(type, number, isCrit, isBuff) {
          let text = Math.floor(number) + '';
          this.normalDamageText.string = text;
          this.critDamageText.string = text;
          this.healText.string = text;
          this.buffDamageText.enabled = isBuff && number < 0;
          this.normalDamageText.enabled = !isBuff && !isCrit && number < 0;
          this.critDamageText.enabled = !isBuff && isCrit && number < 0;
          this.healText.enabled = number > 0;
          let time = (_crd && RandomUtil === void 0 ? (_reportPossibleCrUseOfRandomUtil({
            error: Error()
          }), RandomUtil) : RandomUtil).limit2(0, 0.5) + this.floatTime;
          let height = (_crd && RandomUtil === void 0 ? (_reportPossibleCrUseOfRandomUtil({
            error: Error()
          }), RandomUtil) : RandomUtil).limit2(25, 50);
          let disperse = (_crd && RandomUtil === void 0 ? (_reportPossibleCrUseOfRandomUtil({
            error: Error()
          }), RandomUtil) : RandomUtil).limit2(-0.5, 0.5);
          disperse += Math.sign(disperse) * 15;
          console.log('UIPopupText InitPopup=' + this.node.position);
          let this_ = this;
          tween(this.node).to(time, {
            position: new Vec3(this.node.position.x + disperse, this.node.position.y + height, this.node.position.z + disperse)
          }, {
            easing: 'elasticOut',
            onComplete: function () {
              console.log('tween UIPopupText InitPopup=' + this_.node.position);
              this_.node.destroy();
            }
          }).union().repeat(1) // 执行 1 次
          .start(); // LeanTween.moveX(this.gameObject, this.transform.position.x + disperse, time);
          // LeanTween.moveZ(this.gameObject, this.transform.position.z + disperse, time);
          // LeanTween.moveY(this.gameObject, this.transform.position.y + height, time).setEaseOutBack().setDestroyOnComplete(true);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normalDamageText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "critDamageText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "healText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buffDamageText", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "floatTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIPopupText.js.map