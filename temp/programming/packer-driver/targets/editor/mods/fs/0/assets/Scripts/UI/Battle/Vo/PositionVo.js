System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Vec3, PositionVo, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("PositionVo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63494yiZitBVrtCVICmjaJF", "PositionVo", undefined);

      _export("PositionVo", PositionVo = class PositionVo {
        //位置
        //方向
        constructor(position, rotation) {
          _defineProperty(this, "position", new Vec3());

          _defineProperty(this, "rotation", new Vec3());

          this.position = position;
          this.rotation = rotation;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PositionVo.js.map