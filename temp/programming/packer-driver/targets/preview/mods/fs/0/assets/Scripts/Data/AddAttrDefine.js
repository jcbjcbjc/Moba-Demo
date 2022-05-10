System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AddAttrDefine, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAddAttrType(extras) {
    _reporterNs.report("AddAttrType", "../../Proto/proto", _context.meta, extras);
  }

  _export("AddAttrDefine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9834Rc6QZBv7n79XgHCL65", "AddAttrDefine", undefined);

      _export("AddAttrDefine", AddAttrDefine = class AddAttrDefine {
        constructor() {
          _defineProperty(this, "ID", null);

          _defineProperty(this, "Range", null);

          _defineProperty(this, "Probability", null);

          _defineProperty(this, "Type", null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AddAttrDefine.js.map