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
        static log(message, ...optionalParams) {
          console.log(message, optionalParams);
        }

        static error(message, ...optionalParams) {
          LogUtil.log(message, optionalParams);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LogUtil.js.map