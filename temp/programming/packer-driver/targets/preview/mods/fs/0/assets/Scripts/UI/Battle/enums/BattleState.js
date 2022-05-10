System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BattleState;

  _export("BattleState", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78da2fOdYtC1ob8gqdiHAPa", "BattleState", undefined);

      (function (BattleState) {
        BattleState[BattleState["None"] = 0] = "None";
        BattleState[BattleState["Idle"] = 1] = "Idle";
        BattleState[BattleState["InBattle"] = 2] = "InBattle";
      })(BattleState || _export("BattleState", BattleState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleState.js.map