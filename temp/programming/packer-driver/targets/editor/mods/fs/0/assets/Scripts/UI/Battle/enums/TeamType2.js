System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TeamType2;

  _export("TeamType2", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d75d4SHo1lLRJ0hJqHxvb6b", "TeamType2", undefined);

      (function (TeamType2) {
        TeamType2[TeamType2["Blue"] = 0] = "Blue";
        TeamType2[TeamType2["Red"] = 1] = "Red";
        TeamType2[TeamType2["Neutral"] = 2] = "Neutral";
      })(TeamType2 || _export("TeamType2", TeamType2 = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TeamType2.js.map