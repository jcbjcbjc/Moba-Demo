System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameConfig, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("GameConfig", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af261MlbK9NL75JroDs3zK8", "GameConfig", undefined);

      _export("GameConfig", GameConfig = class GameConfig {
        constructor() {
          _defineProperty(this, "BagMaxGridCount", null);

          _defineProperty(this, "MaxTranCount", null);

          _defineProperty(this, "MaxMatchTime", null);

          _defineProperty(this, "SoldierWaveCreateCount", null);

          _defineProperty(this, "SoldierWaveWaitTime", null);

          _defineProperty(this, "LiveIntervalForwardTime", null);

          _defineProperty(this, "SoldierMaxCount", null);
        } //小兵最大数量


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameConfig.js.map