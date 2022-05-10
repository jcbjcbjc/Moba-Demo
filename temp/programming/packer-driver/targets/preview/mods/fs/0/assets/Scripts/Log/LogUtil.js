System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, LogUtil, _crd;

  _export("LogUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d763gxWb5GjL10eOZzshwq", "LogUtil", undefined);

      _export("LogUtil", LogUtil = class LogUtil {
        static log(message) {
          for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            optionalParams[_key - 1] = arguments[_key];
          }

          console.log(message, optionalParams);
        }

        static error(message) {
          for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            optionalParams[_key2 - 1] = arguments[_key2];
          }

          LogUtil.log(message, optionalParams);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LogUtil.js.map