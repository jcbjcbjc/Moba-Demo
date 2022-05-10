System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SkillDefine, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSkillType(extras) {
    _reporterNs.report("SkillType", "../UI/Battle/enums/SkillType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTargetType(extras) {
    _reporterNs.report("TargetType", "../UI/Battle/enums/TargetType", _context.meta, extras);
  }

  _export("SkillDefine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6081dKitx5LAKTSbl7UIy+z", "SkillDefine", undefined);

      _export("SkillDefine", SkillDefine = class SkillDefine {
        constructor() {
          _defineProperty(this, "ID", null);

          _defineProperty(this, "Name", null);

          _defineProperty(this, "Description", null);

          _defineProperty(this, "Icon", null);

          _defineProperty(this, "Type", null);

          _defineProperty(this, "CastTarget", null);

          _defineProperty(this, "CastRange", null);

          _defineProperty(this, "CastTime", null);

          _defineProperty(this, "CastValidAngle", void 0);

          _defineProperty(this, "BlowsNum", void 0);

          _defineProperty(this, "CD", null);

          _defineProperty(this, "Bullet", void 0);

          _defineProperty(this, "RealDetection", void 0);

          _defineProperty(this, "MultipleHit", void 0);

          _defineProperty(this, "BulletRadius", void 0);

          _defineProperty(this, "BulletSpeed", void 0);

          _defineProperty(this, "BulletResource", void 0);

          _defineProperty(this, "AOERange", void 0);

          _defineProperty(this, "AOEEffect", void 0);

          _defineProperty(this, "SkillAnim", void 0);

          _defineProperty(this, "Duration", void 0);

          _defineProperty(this, "Interval", void 0);

          _defineProperty(this, "HitTimes", void 0);

          _defineProperty(this, "HitEffect", void 0);

          _defineProperty(this, "Buff", void 0);

          _defineProperty(this, "ATTFator", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillDefine.js.map