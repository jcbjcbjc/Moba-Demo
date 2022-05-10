System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BuffEffect;

  _export("BuffEffect", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5dc4PRlDpCTrX0CAoOKKlF", "BuffEffect", undefined);

      (function (BuffEffect) {
        BuffEffect[BuffEffect["None"] = 0] = "None";
        BuffEffect[BuffEffect["Stun"] = 1] = "Stun";
        BuffEffect[BuffEffect["Invincible"] = 2] = "Invincible";
      })(BuffEffect || _export("BuffEffect", BuffEffect = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BuffEffect.js.map