System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BuffDefine, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTargetType(extras) {
    _reporterNs.report("TargetType", "../UI/Battle/enums/TargetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffEffect(extras) {
    _reporterNs.report("BuffEffect", "../UI/Battle/enums/BuffEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTriggerType(extras) {
    _reporterNs.report("TriggerType", "../UI/Battle/enums/TriggerType", _context.meta, extras);
  }

  _export("BuffDefine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2e2aytLfREh5Bs98bDyEWk", "BuffDefine", undefined);

      _export("BuffDefine", BuffDefine = class BuffDefine {
        constructor() {
          _defineProperty(this, "ID", null);

          _defineProperty(this, "Name", null);

          _defineProperty(this, "Description", null);

          _defineProperty(this, "Icon", null);

          _defineProperty(this, "Target", null);

          _defineProperty(this, "Effect", null);

          _defineProperty(this, "Trigger", null);

          _defineProperty(this, "CD", null);

          _defineProperty(this, "Duration", null);

          _defineProperty(this, "Interval", null);

          _defineProperty(this, "ATTRatio", null);

          _defineProperty(this, "DEFRatio", null);

          _defineProperty(this, "ATTFator", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BuffDefine.js.map