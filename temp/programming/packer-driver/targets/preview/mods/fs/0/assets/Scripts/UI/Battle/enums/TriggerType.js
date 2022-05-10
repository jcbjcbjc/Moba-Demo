System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TriggerType;

  _export("TriggerType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2fae5wTDwlIqK0N9OJeByBI", "TriggerType", undefined);

      (function (TriggerType) {
        TriggerType[TriggerType["None"] = 0] = "None";
        TriggerType[TriggerType["SkillCast"] = 1] = "SkillCast";
        TriggerType[TriggerType["SkillHit"] = 2] = "SkillHit";
      })(TriggerType || _export("TriggerType", TriggerType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TriggerType.js.map