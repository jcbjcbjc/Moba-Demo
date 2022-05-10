System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameStatus;

  _export("GameStatus", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ac3fcyhKJAhKaLEpdcff+0", "GameStatus", undefined);

      (function (GameStatus) {
        GameStatus[GameStatus["None"] = 0] = "None";
        GameStatus[GameStatus["GameIn"] = 1] = "GameIn";
      })(GameStatus || _export("GameStatus", GameStatus = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameStatus.js.map