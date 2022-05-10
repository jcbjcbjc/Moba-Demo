System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Component, EffectType, HashMap, EffectController, BattleManager, GlobalPool, BattleGlobal, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EntityEffectManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "./EffectType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../../../Utils/HashMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectController(extras) {
    _reporterNs.report("EffectController", "./EffectController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "../Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Models/Bullet", _context.meta, extras);
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
      Node = _cc.Node;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EffectType = _unresolved_2.EffectType;
    }, function (_unresolved_3) {
      HashMap = _unresolved_3.HashMap;
    }, function (_unresolved_4) {
      EffectController = _unresolved_4.EffectController;
    }, function (_unresolved_5) {
      BattleManager = _unresolved_5.BattleManager;
    }, function (_unresolved_6) {
      GlobalPool = _unresolved_6.default;
    }, function (_unresolved_7) {
      BattleGlobal = _unresolved_7.BattleGlobal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa6b4K/UpdAAKQclcBbXU6S", "EntityEffectManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EntityEffectManager", EntityEffectManager = (_dec = ccclass('EntityEffectManager'), _dec2 = property(Node), _dec3 = property([Node]), _dec(_class = (_class2 = (_temp = class EntityEffectManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Root", _descriptor, this);

          _initializerDefineProperty(this, "Props", _descriptor2, this);

          _defineProperty(this, "Effects", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());
        }

        start() {
          this.Effects.clear();
          var children = this.Root.children;

          if (this.Root != null && children.length > 0) {
            for (var i = 0; i < children.length; i++) {
              var node = children[i];
              this.Effects.put(node.name, node);
            }
          }

          if (this.Props != null) {
            for (var _i = 0; _i < this.Props.length; _i++) {
              var _node = this.Props[_i];
              this.Effects.put(_node.name, _node);
            }
          }
        }

        PlayEffect3(name) {
          console.log("PlayEffect3:{0}:{1}", this.name, name);
          var node = this.Effects.get(name);

          if (node) {
            // node.active=true;
            (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).playParticleEffect(node);
          }
        }
        /**
         * 子弹类型特效
         */


        PlayEffect2(type, name, target, pos, duration) {
          if (type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).Bullet) {
            var effect = this.InstantiateEffect(name);

            if (!effect) {
              console.log('not find prefab');
              return;
            }

            effect.Init(type, this.node, target, pos, duration); // effect.node.active = true;

            (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).playParticleEffect(effect.node);
          } else this.PlayEffect3(name);
        }

        PlayEffectBulletRealCheck(type, name, bullet) {
          if (type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).BulletRealCheck) {
            var effect = this.InstantiateEffect(name);

            if (!effect) {
              var effectsNameStr = this.Effects.keys().join('，');
              console.log('not find prefab name=' + name + '，effectsNameStr=' + effectsNameStr);
              return;
            }

            effect.InitBulletRealCheck(type, bullet); // effect.node.active = true;

            (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).playParticleEffect(effect.node);
          }
        }

        InstantiateEffect(name) {
          console.log('EntityEffectManager InstantiateEffect name=' + name);
          var prefab = this.Effects.get(name);

          if (prefab) {
            //创建对象池
            (_crd && GlobalPool === void 0 ? (_reportPossibleCrUseOfGlobalPool({
              error: Error()
            }), GlobalPool) : GlobalPool).createPool(name, prefab); //获取对象实例

            var go = (_crd && GlobalPool === void 0 ? (_reportPossibleCrUseOfGlobalPool({
              error: Error()
            }), GlobalPool) : GlobalPool).get(name); // let go = instantiate(prefab) as Node;

            (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.AllBattleEffectsNode.addChild(go);
            go.worldPosition = prefab.worldPosition;
            go.worldRotation = prefab.worldRotation;
            return go.getComponent(_crd && EffectController === void 0 ? (_reportPossibleCrUseOfEffectController({
              error: Error()
            }), EffectController) : EffectController);
          }

          return null;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Root", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Props", [_dec3], {
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
//# sourceMappingURL=EntityEffectManager.js.map