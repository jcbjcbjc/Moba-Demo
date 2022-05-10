System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, SkillType;

  _export("SkillType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "296d1v0anZKyaDn7g+ZnQXI", "SkillType", undefined);

      (function (SkillType) {
        SkillType[SkillType["All"] = -1] = "All";
        SkillType[SkillType["Normal"] = 1] = "Normal";
        SkillType[SkillType["Skill1"] = 2] = "Skill1";
        SkillType[SkillType["Skill2"] = 3] = "Skill2";
        SkillType[SkillType["Skill3"] = 4] = "Skill3";
        SkillType[SkillType["Passive"] = 5] = "Passive";
      })(SkillType || _export("SkillType", SkillType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillType.js.map