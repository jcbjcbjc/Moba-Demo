System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, RandomUtil, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("RandomUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "056d9ZjjlJAxaOvZG7AVssv", "RandomUtil", undefined);

      _export("RandomUtil", RandomUtil = class RandomUtil {
        /**
         * 获取一个区间的随机数
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */
        static limit($from, $end) {
          $from = Math.min($from, $end);
          $end = Math.max($from, $end); // var range:number = $end - $from;
          // return $from + Math.random() * range;

          this.seed = (this.seed * 9301 + 49297) % 233280;
          var rnd = this.seed / 233280.0;
          return $from + rnd * ($end - $from);
        }
        /**
         * 获取一个区间的随机数(整数)
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */


        static limitInteger($from, $end) {
          return Math.round(this.limit($from, $end));
        }
        /**
         * 在一个数组中随机获取一个元素
         * @param arr 数组
         * @returns {any} 随机出来的结果
         */


        static randomArray(arr) {
          var index = Math.floor(Math.random() * arr.length);
          return arr[index];
        }
        /**
         * 获取一个区间的随机数（不按随机数种子来）
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */


        static limit2($from, $end) {
          $from = Math.min($from, $end);
          $end = Math.max($from, $end);
          var range = $end - $from;
          return $from + Math.random() * range;
        }

      });

      _defineProperty(RandomUtil, "seed", 5);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RandomUtil.js.map