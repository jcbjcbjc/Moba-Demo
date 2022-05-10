System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventHandler, EventManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("EventManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      EventHandler = _cc.EventHandler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7ba3j5GSVAsJlG6oiWkLKL", "EventManager", undefined);

      _export("EventManager", EventManager = class EventManager {
        constructor() {
          _defineProperty(this, "dict", {});
        }

        /**
         * 添加消息监听
         * @param type 消息唯一标识
         * @param listener 侦听函数
         * @param listenerObj 侦听函数所属对象
         *
         */
        addListener(type, listener, listenerObj) {
          var arr = this.dict[type];

          if (arr == null) {
            arr = new Array();
            this.dict[type] = arr;
          } //检测是否已经存在


          var i = 0;
          var len = arr.length;

          for (i; i < len; i++) {
            if (arr[i][0] == listener && arr[i][1] == listenerObj) {
              return;
            }
          }

          arr.push([listener, listenerObj]);
        }
        /**
         * 移除消息监听
         * @param type 消息唯一标识
         * @param listener 侦听函数
         * @param listenerObj 侦听函数所属对象
         */


        removeListener(type, listener, listenerObj) {
          var arr = this.dict[type];

          if (arr == null) {
            return;
          }

          var i = 0;
          var len = arr.length;

          for (i; i < len; i++) {
            if (arr[i][0] == listener && arr[i][1] == listenerObj) {
              arr.splice(i, 1);
              break;
            }
          }

          if (arr.length == 0) {
            this.dict[type] = null;
            delete this.dict[type];
          }
        }
        /**
         * 移除某一对象的所有监听
         * @param listenerObj 侦听函数所属对象
         */


        removeAll(listenerObj) {
          var keys = Object.keys(this.dict);

          for (var i = 0, len = keys.length; i < len; i++) {
            var type = keys[i];
            var arr = this.dict[type];

            for (var j = 0; j < arr.length; j++) {
              if (arr[j][1] == listenerObj) {
                arr.splice(j, 1);
                j--;
              }
            }

            if (arr.length == 0) {
              this.dict[type] = null;
              delete this.dict[type];
            }
          }
        }
        /**
         * 触发消息
         * @param type 消息唯一标识
         * @param param 消息参数
         *
         */


        dispatch(type) {
          if (this.dict[type] == null) {
            return;
          }

          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          this.dealMsg(type, undefined, param);
        }
        /**
        * 触发指定对象的消息
        * @param type 消息唯一标识
        * @param param 消息参数
        *
        */


        dispatchObj(type, listenerObj) {
          if (this.dict[type] == null) {
            return;
          }

          for (var _len2 = arguments.length, param = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            param[_key2 - 2] = arguments[_key2];
          }

          return this.dealMsg(type, listenerObj, param);
        }
        /**
        * 处理一条消息
        */


        dealMsg(type, listenerObj) {
          var listeners = this.dict[type];
          var i = 0;
          var len = listeners.length;
          var listener = null;
          var res;

          for (var _len3 = arguments.length, param = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            param[_key3 - 2] = arguments[_key3];
          }

          while (i < len) {
            listener = listeners[i]; // console.log('listenerObj='+listenerObj+'，listener[1]='+listener[1])

            if (!listenerObj || listenerObj && listenerObj == listener[1]) {
              //派发
              res = listener[0].apply(listener[1], param);
            }

            if (listeners.length != len) {
              len = listeners.length;
              i--;
            }

            i++;
          }

          return res;
        }
        /**
         * 创建button点击事件
         */


        createButtonClickEvent(node, component, handler) {
          var clickEventHandler = new EventHandler();
          clickEventHandler.target = node;
          clickEventHandler.component = component;
          clickEventHandler.handler = handler;
          return clickEventHandler;
        }

      });

      _defineProperty(EventManager, "Instance", new EventManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EventManager.js.map