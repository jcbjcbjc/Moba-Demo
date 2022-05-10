System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EntityEffectManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, AnimationEventController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEntityEffectManager(extras) {
    _reporterNs.report("EntityEffectManager", "./EntityEffectManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EntityEffectManager = _unresolved_2.EntityEffectManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8e5acNKxRGa4EigcJGOOEk", "AnimationEventController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimationEventController", AnimationEventController = (_dec = ccclass('AnimationEventController'), _dec2 = property(_crd && EntityEffectManager === void 0 ? (_reportPossibleCrUseOfEntityEffectManager({
        error: Error()
      }), EntityEffectManager) : EntityEffectManager), _dec(_class = (_class2 = (_temp = class AnimationEventController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "EffectMgr", _descriptor, this);
        }

        PlayEffect(name) {
          console.log("AnimationEventController:PlayEffect:{0}:{1}", this.name, name);
          this.EffectMgr.PlayEffect3(name);
        }

        PlaySound(name) {
          console.log("AnimationEventController:PlaySound:{0}:{1}", this.name, name);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "EffectMgr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AnimationEventController.js.map