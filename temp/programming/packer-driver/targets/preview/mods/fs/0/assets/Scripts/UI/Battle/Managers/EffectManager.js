System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HashMap, EffectManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffEffect(extras) {
    _reporterNs.report("BuffEffect", "../enums/BuffEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../../../Utils/HashMap", _context.meta, extras);
  }

  _export("EffectManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HashMap = _unresolved_2.HashMap;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7b082Ok0ZNhooMjXFuEeU5", "EffectManager", undefined);

      _export("EffectManager", EffectManager = class EffectManager {
        //key：BuffEffect  value：number
        constructor(owner) {
          _defineProperty(this, "Owner", void 0);

          _defineProperty(this, "Effects", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());

          this.Owner = owner;
        }

        HasEffect(effect) {
          var val = this.Effects.get(effect);

          if (val) {
            return val > 0;
          }

          return false;
        }

        AddEffect(effect) {
          console.log("[{0}].AddEffect{1}", this.Owner.characterDefine.Name, effect);
          var val = this.Effects.get(effect);
          if (!val) this.Effects.put(effect, 1);else this.Effects.put(effect, ++val);
        }

        RemoveEffect(effect) {
          console.log("[{0}].RemoveEffect{1}", this.Owner.characterDefine.Name, effect);
          var val = this.Effects.get(effect);
          if (val > 0) this.Effects.put(effect, --val);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EffectManager.js.map