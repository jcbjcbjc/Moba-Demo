System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleContext, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillResult(extras) {
    _reporterNs.report("SkillResult", "../enums/SkillResult", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillHitInfo(extras) {
    _reporterNs.report("SkillHitInfo", "../Vo/SkillHitInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffInfo(extras) {
    _reporterNs.report("BuffInfo", "../Vo/BuffInfo", _context.meta, extras);
  }

  _export("BattleContext", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38c527yAgpMepd+5j3CGGhr", "BattleContext", undefined);

      _export("BattleContext", BattleContext = class BattleContext {
        //目标根据ai自动搜索范围中的
        //x位置
        //z位置
        //方向性技能角度
        constructor(skillId, Caster) {
          _defineProperty(this, "skillId", void 0);

          _defineProperty(this, "Caster", void 0);

          _defineProperty(this, "Target", void 0);

          _defineProperty(this, "positionX", void 0);

          _defineProperty(this, "positionZ", void 0);

          _defineProperty(this, "Result", void 0);

          _defineProperty(this, "dirDegree", 0);

          _defineProperty(this, "Hits", new Array());

          _defineProperty(this, "BuffActions", new Array());

          this.skillId = skillId;
          this.Caster = Caster;
        } // public AddHitInfo(hitInfo:SkillHitInfo)
        // {
        //     this.Hits.push(hitInfo);
        // }
        // public AddBuffAction(buff:BuffInfo)
        // {
        //     this.BuffActions.push(buff);
        // }


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleContext.js.map