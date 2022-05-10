System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, PopupType;

  _export("PopupType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca78arYeIBCPKo9j6JSgWhn", "PopupType", undefined);

      (function (PopupType) {
        PopupType[PopupType["None"] = 0] = "None";
        PopupType[PopupType["Damage"] = 1] = "Damage";
        PopupType[PopupType["Heal"] = 2] = "Heal";
      })(PopupType || _export("PopupType", PopupType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PopupType.js.map