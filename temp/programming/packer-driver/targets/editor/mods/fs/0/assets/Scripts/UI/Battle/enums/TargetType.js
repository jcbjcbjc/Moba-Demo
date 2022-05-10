System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TargetType;

  _export("TargetType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64399P6mWxEoIQOwXPpgfaM", "TargetType", undefined);

      (function (TargetType) {
        TargetType[TargetType["None"] = 0] = "None";
        TargetType[TargetType["Target"] = 1] = "Target";
        TargetType[TargetType["Self"] = 2] = "Self";
        TargetType[TargetType["Position"] = 3] = "Position";
        TargetType[TargetType["RangeTarget"] = 4] = "RangeTarget";
        TargetType[TargetType["SelectedRange"] = 5] = "SelectedRange";
        TargetType[TargetType["Sector"] = 6] = "Sector";
        TargetType[TargetType["StraightLine"] = 7] = "StraightLine";
        TargetType[TargetType["Dir"] = 8] = "Dir";
        TargetType[TargetType["ReturnHp"] = 9] = "ReturnHp";
        TargetType[TargetType["Invisible"] = 10] = "Invisible";
        TargetType[TargetType["Sprint"] = 11] = "Sprint";
      })(TargetType || _export("TargetType", TargetType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TargetType.js.map