System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, HashMap, EffectController, BattleManager, GlobalPool, BattleGlobal, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, FXManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../../../Utils/HashMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectController(extras) {
    _reporterNs.report("EffectController", "./EffectController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "./EffectType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "../Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalPool(extras) {
    _reporterNs.report("GlobalPool", "../../../Utils/GlobalPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "../Utils/BattleGlobal", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      HashMap = _unresolved_2.HashMap;
    }, function (_unresolved_3) {
      EffectController = _unresolved_3.EffectController;
    }, function (_unresolved_4) {
      BattleManager = _unresolved_4.BattleManager;
    }, function (_unresolved_5) {
      GlobalPool = _unresolved_5.default;
    }, function (_unresolved_6) {
      BattleGlobal = _unresolved_6.BattleGlobal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7174QbisVJpqjo1ktd8gBB", "FXManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FXManager", FXManager = (_dec = ccclass('FXManager'), _dec2 = property([Prefab]), _dec(_class = (_class2 = (_temp = _class3 = class FXManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "prefabs", _descriptor, this);

          _defineProperty(this, "Effects", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());
        }

        onLoad() {
          FXManager.Instance = this;
        }

        start() {
          this.Effects.clear();

          for (var i = 0; i < this.prefabs.length; i++) {
            var rootNode = this.prefabs[i].data;
            rootNode.active = false;
            this.Effects.put(rootNode.name, rootNode); //创建对象池

            (_crd && GlobalPool === void 0 ? (_reportPossibleCrUseOfGlobalPool({
              error: Error()
            }), GlobalPool) : GlobalPool).createPool(rootNode.name, rootNode);
          }
        }

        CreateEffect(name, pos) {
          // console.log('CreateEffect Effects='+this.Effects.keys().join('，'))
          var prefab = this.Effects.get(name);

          if (prefab) {
            console.log('FXManager CreateEffect：' + name); //获取对象实例

            var go = (_crd && GlobalPool === void 0 ? (_reportPossibleCrUseOfGlobalPool({
              error: Error()
            }), GlobalPool) : GlobalPool).get(name); // let go = instantiate(prefab) as Node;

            (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.AllBattleEffectsNode.addChild(go);
            go.worldPosition = pos;
            return go.getComponent(_crd && EffectController === void 0 ? (_reportPossibleCrUseOfEffectController({
              error: Error()
            }), EffectController) : EffectController);
          }

          return null;
        }

        PlayEffect(type, name, target, pos, duration) {
          var effect = this.CreateEffect(name, pos);

          if (!effect) {
            console.log("Effect:{0} not found.", name);
            return;
          }

          effect.Init(type, this.node, target, pos, duration); // effect.node.active=true;

          (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).playParticleEffect(effect.node);
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FXManager.js.map