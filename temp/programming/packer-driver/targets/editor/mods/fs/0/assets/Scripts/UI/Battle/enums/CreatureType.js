System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CreatureType;

  _export("CreatureType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8248LCSSRA3q/pBKGH8KEa", "CreatureType", undefined);

      (function (CreatureType) {
        CreatureType[CreatureType["Character"] = 0] = "Character";
        CreatureType[CreatureType["Monster"] = 1] = "Monster";
      })(CreatureType || _export("CreatureType", CreatureType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CreatureType.js.map