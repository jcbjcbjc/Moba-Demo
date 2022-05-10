System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BuffInfo, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBuffAction(extras) {
    _reporterNs.report("BuffAction", "../enums/BuffAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageInfo(extras) {
    _reporterNs.report("DamageInfo", "./DamageInfo", _context.meta, extras);
  }

  _export("BuffInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13684G5v/JGXqXCO2Gy8rE3", "BuffInfo", undefined);

      _export("BuffInfo", BuffInfo = class BuffInfo {
        constructor() {
          _defineProperty(this, "buffId", void 0);

          _defineProperty(this, "buffType", void 0);

          _defineProperty(this, "Action", void 0);

          _defineProperty(this, "casterId", void 0);

          _defineProperty(this, "ownerId", void 0);

          _defineProperty(this, "damage", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BuffInfo.js.map