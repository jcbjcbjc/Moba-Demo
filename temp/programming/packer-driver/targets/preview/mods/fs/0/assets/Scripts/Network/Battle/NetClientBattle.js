System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtil, proto2, NetConfig, MessageDispatch, NetClientBattle, _crd, NetMessageRequest2, NetMessageResponse2;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../../Log/LogUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto2", "../../../Proto/Battle/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConfig(extras) {
    _reporterNs.report("NetConfig", "./../NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageDispatch(extras) {
    _reporterNs.report("MessageDispatch", "./../MessageDispatch", _context.meta, extras);
  }

  _export("NetClientBattle", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LogUtil = _unresolved_2.LogUtil;
    }, function (_unresolved_3) {
      proto2 = _unresolved_3.default;
    }, function (_unresolved_4) {
      NetConfig = _unresolved_4.NetConfig;
    }, function (_unresolved_5) {
      MessageDispatch = _unresolved_5.MessageDispatch;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "159daiGqddBG4tfJfe3CZ9c", "NetClientBattle", undefined);

      ({
        NetMessageRequest2,
        NetMessageResponse2
      } = _crd && proto2 === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto2) : proto2);

      _export("NetClientBattle", NetClientBattle = class NetClientBattle {
        constructor() {
          _defineProperty(this, "_socket", null);

          _defineProperty(this, "pendingMessage", null);

          _defineProperty(this, "connected", false);
        }

        Init() {}
        /**
         * 添加事件监听
         */


        addEvents() {
          NetClientBattle.Instance._socket.onmessage = NetClientBattle.Instance.onReceiveMessage;
          NetClientBattle.Instance._socket.onopen = NetClientBattle.Instance.onSocketOpen;
          NetClientBattle.Instance._socket.onclose = NetClientBattle.Instance.onSocketClose;
          NetClientBattle.Instance._socket.onerror = NetClientBattle.Instance.onSocketError;
        }
        /**
         * 服务器连接成功
         */


        onSocketOpen() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("NetClientBattle 服务器连接成功");
          NetClientBattle.Instance.connected = true;

          if (NetClientBattle.Instance.pendingMessage) {
            NetClientBattle.Instance.SendMessage(NetClientBattle.Instance.pendingMessage);
          }

          NetClientBattle.Instance.pendingMessage = null;
        }
        /**
         * 服务器断开连接
         */


        onSocketClose() {
          return _asyncToGenerator(function* () {
            (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
              error: Error()
            }), LogUtil) : LogUtil).log("NetClientBattle 服务器断开连接");
            NetClientBattle.Instance.connected = false;
            NetClientBattle.Instance.reconnect();
          })();
        }
        /**
         * 服务器连接错误
         */


        onSocketError() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("NetClientBattle 服务器连接错误");
          NetClientBattle.Instance.connected = false;
          NetClientBattle.Instance.closeCurrentSocket();
          NetClientBattle.Instance.reconnect();
        }
        /**
         * 收到服务器消息
         * @param e
         */


        onReceiveMessage(event) {
          var netMessage = NetMessageResponse2.decode(new Uint8Array(event.data)); // console.log('NetClientBattle 收到服务器消息：'+JSON.stringify(netMessage))

          (_crd && MessageDispatch === void 0 ? (_reportPossibleCrUseOfMessageDispatch({
            error: Error()
          }), MessageDispatch) : MessageDispatch).Dispatch(netMessage);
        }
        /**
         * 开始Socket连接
         */


        Connect() {
          NetClientBattle.Instance._socket = new WebSocket((_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
            error: Error()
          }), NetConfig) : NetConfig).websocketBattleUrl);
          NetClientBattle.Instance._socket.binaryType = "arraybuffer";
          NetClientBattle.Instance.addEvents();
        }
        /**
         * 重新连接
         */


        reconnect() {
          setTimeout(function () {
            NetClientBattle.Instance.Connect();
          }, 5000);
        }
        /**
         * 发送消息到服务器
         * @param message
         */


        SendMessage(message) {
          if (!NetClientBattle.Instance.connected) {
            NetClientBattle.Instance.pendingMessage = message;
            return;
          }

          var msg = NetMessageRequest2.encode(message).finish(); // console.log('NetClientBattle SendMessage message='+JSON.stringify(message),msg)

          NetClientBattle.Instance._socket.send(msg);
        }
        /**
         * 清理当前的Socket连接
         */


        closeCurrentSocket() {
          if (NetClientBattle.Instance._socket) {
            NetClientBattle.Instance._socket.close();
          }

          NetClientBattle.Instance._socket = null;
        }

      });

      _defineProperty(NetClientBattle, "Instance", new NetClientBattle());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetClientBattle.js.map