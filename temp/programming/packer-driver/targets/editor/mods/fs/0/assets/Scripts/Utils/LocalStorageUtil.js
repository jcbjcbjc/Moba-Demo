System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, sys, LocalStorageUtil, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("LocalStorageUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0fbd86hhBJILsRwqsGCAKy", "LocalStorageUtil", undefined);

      _export("LocalStorageUtil", LocalStorageUtil = class LocalStorageUtil {
        /**
         * 数据存储
         * @param key
         * @param value 
         */
        static SetItem(key, value) {
          sys.localStorage.setItem(key, value);
        }
        /**
         * 数据获取
         * @param key 
         */


        static GetItem(key) {
          let value = sys.localStorage.getItem(key);
          return value;
        }
        /**
         * 数据删除
         * @param key 
         */


        static RemoveItem(key) {
          sys.localStorage.removeItem(key);
        }

      });

      _defineProperty(LocalStorageUtil, "privateMessagesKey", "privateMessagesKey");

      _defineProperty(LocalStorageUtil, "allFrameHandlesKey", "allFrameHandlesKey");

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LocalStorageUtil.js.map