System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, SkillResult;

  _export("SkillResult", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "426bbvtuRNGv6JMDw8Yk4eS", "SkillResult", undefined);

      (function (SkillResult) {
        SkillResult[SkillResult["Ok"] = 0] = "Ok";
        SkillResult[SkillResult["CoolDown"] = 1] = "CoolDown";
        SkillResult[SkillResult["InvalidTarget"] = 2] = "InvalidTarget";
        SkillResult[SkillResult["OutOfRange"] = 3] = "OutOfRange";
        SkillResult[SkillResult["Casting"] = 4] = "Casting";
      })(SkillResult || _export("SkillResult", SkillResult = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillResult.js.map