System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DateUtil, _crd;

  _export("DateUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ce47lVfu1LuIjcd2/f0+Ho", "DateUtil", undefined);

      /**
       * 日期工具类
       */
      _export("DateUtil", DateUtil = class DateUtil {
        /**
         * 初始化扩展方法
         */
        static InitExtend() {
          /*
          对Date的扩展，将 Date 转化为指定格式的String
          月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q)可以用1-2个占位符
          年(y)可以用1-4个占位符，毫秒(S)只能用1个占位符号(是1-3为的数字)
          例子：
          (new Date()).Format("yyyy-MM-dd hh:mm:ss.S")	==> 2006-07-02 08:09:04.423
          (new Date()).Format("yyyy-M-d h:m:s.S")			==> 2006-7-2 8:9:4.18
          */
          Date.prototype.format = function (fmt) {
            const o = {
              "y+": this.getFullYear(),
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "H+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "S+": this.getMilliseconds(),
              "q+": Math.floor(this.getMonth() / 3) + 1,
              "h+": (() => {
                const hour = this.getHours() % 12;
                return hour == 0 ? 12 : hour;
              })(),
              "E+": (() => {
                const week = {
                  "0": "Sunday",
                  "1": "Monday",
                  "2": "Tuesday",
                  "3": "Wednesday",
                  "4": "Thursday",
                  "5": "Friday",
                  "6": "Saturday"
                };
                return week[this.getDay() + ""];
              })(),

              /*
              "e+": (()=>{
              	const week = {"0":"Sun","1":"Mon","2":"Tue","3":"Wed","4":"Thu","5":"Fri","6":"Sat"}; 
              	return week[this.getDay()+""];
              })(),
              */
              "x1": (() => {
                const week = {
                  "0": "周日",
                  "1": "周一",
                  "2": "周二",
                  "3": "周三",
                  "4": "周四",
                  "5": "周五",
                  "6": "周六"
                };
                return week[this.getDay() + ""];
              })(),
              "x2": (() => {
                const hour = ["凌晨", "早上", "下午", "晚上"];
                const h = this.getHours();
                if (h == 12) return "中午";
                return hour[parseInt(h / 6)];
              })()
            };

            for (var k in o) {
              if (new RegExp("(" + k + ")", "g").test(fmt)) {
                const len = RegExp.$1.length;
                fmt = fmt.replace(RegExp.$1, len == 1 ? o[k] : ("00" + o[k]).substr(-len));
              }
            }

            return fmt;
          };

          Date.prototype.toWeiXinString = function () {
            let str;
            const now = new Date();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
            const beforeYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2);
            const monday = new Date(today);
            monday.setDate(today.getDate() - (today.getDay() ? today.getDay() - 1 : 6)); //注意：date初始化默认是按本地时间初始的，但打印默认却是按GMT时间打印的，也就是说打印出的不是本地现在的时间
            //LocaleString的打印也有点问题，"0点"会被打印为"上午12点"

            if (this.getTime() > today.getTime()) {
              str = "";
            } else if (this.getTime() > yesterday.getTime()) {
              str = "昨天";
            } else if (this.getTime() > beforeYesterday.getTime()) {
              str = "前天";
            } else if (this.getTime() > monday.getTime()) {
              const week = {
                "0": "周日",
                "1": "周一",
                "2": "周二",
                "3": "周三",
                "4": "周四",
                "5": "周五",
                "6": "周六"
              };
              str = week[this.getDay() + ""];
            } else {
              const hour = ["凌晨", "早上", "下午", "晚上"];
              const h = this.getHours();
              if (h == 12) str = "中午";else str = hour[parseInt(h / 6)];
              str = this.format("MM月dd ") + str;
            }

            str += this.format("HH:mm");
            return str;
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DateUtil.js.map