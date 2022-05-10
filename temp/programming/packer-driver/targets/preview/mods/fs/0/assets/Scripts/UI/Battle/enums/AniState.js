System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, AniState;

  _export("AniState", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5844amRR/JBjIwsNUTzH13d", "AniState", undefined);

      (function (AniState) {
        AniState[AniState["Attack"] = 0] = "Attack";
        AniState[AniState["SkillA"] = 1] = "SkillA";
        AniState[AniState["SkillB"] = 2] = "SkillB";
        AniState[AniState["SkillC"] = 3] = "SkillC";
        AniState[AniState["Idle"] = 4] = "Idle";
        AniState[AniState["Move"] = 5] = "Move";
        AniState[AniState["Hurt"] = 6] = "Hurt";
        AniState[AniState["Death"] = 7] = "Death";
      })(AniState || _export("AniState", AniState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AniState.js.map