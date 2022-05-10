System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CharacterDefine, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCharacterClass(extras) {
    _reporterNs.report("CharacterClass", "../../Proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShapeType(extras) {
    _reporterNs.report("ShapeType", "../UI/Battle/enums/ShapeType", _context.meta, extras);
  }

  _export("CharacterDefine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3815ee/ialAgpEIkFtf1VkQ", "CharacterDefine", undefined);

      _export("CharacterDefine", CharacterDefine = class CharacterDefine {
        constructor() {
          _defineProperty(this, "ID", null);

          _defineProperty(this, "Name", null);

          _defineProperty(this, "UpperBodyImg", null);

          _defineProperty(this, "Avatar", null);

          _defineProperty(this, "Class", null);

          _defineProperty(this, "Resource", null);

          _defineProperty(this, "RedResource", null);

          _defineProperty(this, "Description", null);

          _defineProperty(this, "AI", null);

          _defineProperty(this, "ATT", null);

          _defineProperty(this, "DEF", null);

          _defineProperty(this, "RESU", null);

          _defineProperty(this, "Speed", null);

          _defineProperty(this, "HP", 0);

          _defineProperty(this, "CRI", null);

          _defineProperty(this, "IsCollision", void 0);

          _defineProperty(this, "Shape", void 0);

          _defineProperty(this, "Long_", void 0);

          _defineProperty(this, "Width", void 0);

          _defineProperty(this, "Height", null);

          _defineProperty(this, "Radius", null);

          _defineProperty(this, "UnlockCoin", null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CharacterDefine.js.map