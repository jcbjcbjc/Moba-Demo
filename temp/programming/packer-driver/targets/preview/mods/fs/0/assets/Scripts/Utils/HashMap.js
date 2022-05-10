System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, HashMap, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("HashMap", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4c182dEeJIW5pArv39RMuE", "HashMap", undefined);

      _export("HashMap", HashMap = class HashMap {
        constructor() {
          _defineProperty(this, "map", new Map());
        }

        /**
         * 加入数据
         * @param key 键
         * @param value 值
         */
        put(key, value) {
          this.map[key] = value;
        }
        /**
         * 获得数据
         * @param key 键
         */


        get(key) {
          return this.map[key];
        }
        /**
         * 移除数据
         * @param key 键
         */


        remove(key) {
          var value = this.map[key];

          if (value) {
            this.map[key] = null; ////////////////////zhengxin add at 2016-08-15

            delete this.map[key]; //then undefined
          }

          return value; //should outter be = null, for clear memory
        }
        /**
         * 是否存在
         * @param key 键
         */


        contains(key) {
          return this.map[key] != null;
        }
        /**
         * 获得所有键值
         */


        keys() {
          var keys = Object.keys(this.map);
          var index = keys.indexOf("_hashCode");

          if (index > -1) {
            keys.splice(index, 1);
          }

          return keys;
        }
        /**
         * 获取所有值
         */


        values() {
          var keys = Object.keys(this.map);
          var values = [];

          for (var i = 0; i < keys.length; i++) {
            var value = this.map[keys[i]];
            values.push(value);
          }

          return values;
        }
        /**
         * 获取长度
         */


        get length() {
          var keys = Object.keys(this.map);
          return keys.length;
        }
        /**
         * 获取数据
         */


        get data() {
          return this.map;
        }
        /**
        * 设置数据
        */


        set data(map) {
          this.map = map;
        }
        /**
         * 清空
         */


        clear() {
          var keys = Object.keys(this.map);
          var len = keys.length;

          for (var i = 0; i < len; i++) {
            var value = this.remove(keys[i]);
            value = null; ////////////////////zhengxin at 2016-08-15
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HashMap.js.map