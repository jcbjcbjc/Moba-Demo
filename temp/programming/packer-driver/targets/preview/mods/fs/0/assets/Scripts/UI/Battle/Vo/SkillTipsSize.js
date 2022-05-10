System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SkillTipsSize, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("SkillTipsSize", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fdc9QeCgdCJoHFw/2B7T1F", "SkillTipsSize", undefined);

      /**
       * 技能提示尺寸
       */
      _export("SkillTipsSize", SkillTipsSize = class SkillTipsSize {
        //宽
        //高
        constructor(width, height) {
          _defineProperty(this, "width", void 0);

          _defineProperty(this, "height", void 0);

          this.width = width;
          this.height = height;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillTipsSize.js.map