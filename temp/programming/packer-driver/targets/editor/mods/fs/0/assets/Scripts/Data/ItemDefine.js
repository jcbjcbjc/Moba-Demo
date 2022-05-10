System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ItemDefine, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../Proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterClass(extras) {
    _reporterNs.report("CharacterClass", "../../Proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemFunction(extras) {
    _reporterNs.report("ItemFunction", "../../Proto/proto", _context.meta, extras);
  }

  _export("ItemDefine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce8a9FSSjJNdK56SY9bRO1s", "ItemDefine", undefined);

      _export("ItemDefine", ItemDefine = class ItemDefine {
        constructor() {
          _defineProperty(this, "ID", null);

          _defineProperty(this, "Name", null);

          _defineProperty(this, "Description", null);

          _defineProperty(this, "Spot", null);

          _defineProperty(this, "Type", null);

          _defineProperty(this, "Category", null);

          _defineProperty(this, "Level", null);

          _defineProperty(this, "LimitClass", null);

          _defineProperty(this, "CanUse", null);

          _defineProperty(this, "UseCD", null);

          _defineProperty(this, "Price", null);

          _defineProperty(this, "SellPrice", null);

          _defineProperty(this, "StackLimit", null);

          _defineProperty(this, "Icon", null);

          _defineProperty(this, "Function", null);

          _defineProperty(this, "Param", null);

          _defineProperty(this, "Params", null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemDefine.js.map