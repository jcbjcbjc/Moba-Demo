System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Validate, _crd;

  _export("Validate", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f683bkivwZDj7lRzMOcqsgC", "Validate", undefined);

      _export("Validate", Validate = class Validate {
        /**
         * 效验整数并且是否大于0
         * @param content 
         */
        static isIntegerLarge0(content) {
          let reg = /^[-+]?\d+$/;

          if (!reg.test(content) || parseInt(content) <= 0) {
            return false;
          } else {
            return true;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Validate.js.map