System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DamageInfo, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("DamageInfo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f63f04pUBBGALZIQxkuBIHy", "DamageInfo", undefined);

      _export("DamageInfo", DamageInfo = class DamageInfo {
        constructor() {
          _defineProperty(this, "entityId", void 0);

          _defineProperty(this, "Damage", void 0);

          _defineProperty(this, "Crit", void 0);

          _defineProperty(this, "WillDead", void 0);

          _defineProperty(this, "isBuff", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DamageInfo.js.map