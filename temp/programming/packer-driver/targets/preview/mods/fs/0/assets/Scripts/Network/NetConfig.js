System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, NetConfig, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("NetConfig", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b66bmJebFCP4q/muuAhGij", "NetConfig", undefined);

      _export("NetConfig", NetConfig = class NetConfig {});

      _defineProperty(NetConfig, "websocketUrl", "ws://124.221.226.227:8000/ws");

      _defineProperty(NetConfig, "websocketBattleUrl", "");

      _defineProperty(NetConfig, "frameTime", 66);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetConfig.js.map