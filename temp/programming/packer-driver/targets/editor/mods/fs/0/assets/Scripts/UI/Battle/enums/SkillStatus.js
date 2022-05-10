System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, SkillStatus;

  _export("SkillStatus", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32672oJOIFPJrDUDALv/sqC", "SkillStatus", undefined);

      (function (SkillStatus) {
        SkillStatus[SkillStatus["None"] = 0] = "None";
        SkillStatus[SkillStatus["Casting"] = 1] = "Casting";
        SkillStatus[SkillStatus["Running"] = 2] = "Running";
      })(SkillStatus || _export("SkillStatus", SkillStatus = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillStatus.js.map