System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SkillHitInfo, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfDamageInfo(extras) {
    _reporterNs.report("DamageInfo", "./DamageInfo", _context.meta, extras);
  }

  _export("SkillHitInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69748FurmJBA4F89+gTFqBv", "SkillHitInfo", undefined);

      _export("SkillHitInfo", SkillHitInfo = class SkillHitInfo {
        constructor() {
          _defineProperty(this, "skillId", void 0);

          _defineProperty(this, "casterId", void 0);

          _defineProperty(this, "hitId", void 0);

          _defineProperty(this, "isBullet", void 0);

          _defineProperty(this, "Damages", []);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillHitInfo.js.map