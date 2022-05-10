System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MinimapBoxVo, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("MinimapBoxVo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81acbwgox5Ag73tty2cD7WE", "MinimapBoxVo", undefined);

      _export("MinimapBoxVo", MinimapBoxVo = class MinimapBoxVo {
        //包围盒宽
        //包围盒高
        //包围盒x
        //包围盒z
        //小地图宽
        //小地图高
        constructor(width, height, x, z, minimapWidth, minimapHeight) {
          _defineProperty(this, "width", void 0);

          _defineProperty(this, "height", void 0);

          _defineProperty(this, "x", void 0);

          _defineProperty(this, "z", void 0);

          _defineProperty(this, "minimapWidth", void 0);

          _defineProperty(this, "minimapHeight", void 0);

          this.width = width;
          this.height = height;
          this.x = x;
          this.z = z;
          this.minimapWidth = minimapWidth;
          this.minimapHeight = minimapHeight;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MinimapBoxVo.js.map