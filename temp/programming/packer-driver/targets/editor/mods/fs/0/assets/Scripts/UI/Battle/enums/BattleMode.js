System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BattleMode;

  _export("BattleMode", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e83eeaf11tDI5FWACrU+67j", "BattleMode", undefined);

      (function (BattleMode) {
        BattleMode[BattleMode["Battle"] = 0] = "Battle";
        BattleMode[BattleMode["Live"] = 1] = "Live";
      })(BattleMode || _export("BattleMode", BattleMode = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleMode.js.map