System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtil, proto, NetConfig, MessageDispatch, UserService, NetClient, _crd, NetMessage;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../Log/LogUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConfig(extras) {
    _reporterNs.report("NetConfig", "./NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageDispatch(extras) {
    _reporterNs.report("MessageDispatch", "./MessageDispatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserService(extras) {
    _reporterNs.report("UserService", "../Services/UserService", _context.meta, extras);
  }

  _export("NetClient", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LogUtil = _unresolved_2.LogUtil;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      NetConfig = _unresolved_4.NetConfig;
    }, function (_unresolved_5) {
      MessageDispatch = _unresolved_5.MessageDispatch;
    }, function (_unresolved_6) {
      UserService = _unresolved_6.UserService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d16809Y3XdBBZdJGRFeDFWh", "NetClient", undefined);

      ({
        NetMessage
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("NetClient", NetClient = class NetClient {
        constructor() {
          _defineProperty(this, "_socket", null);

          _defineProperty(this, "connected", false);

          _defineProperty(this, "pendingMessage", null);

          _defineProperty(this, "timer", 0);

          _defineProperty(this, "executeCount", 0);
        }

        Init() {
          this.timer = setInterval(this.execute, 1000);
        }

        execute() {
          let this_ = NetClient.Instance;

          if (!this_._socket) {
            return;
          }

          this_.executeCount++;

          if (this_.executeCount % 30 == 0) {
            //每30秒发送心跳包
            (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
              error: Error()
            }), UserService) : UserService).Instance.SendHeartBeat();
          }
        }
        /**
         * 添加事件监听
         */


        addEvents() {
          NetClient.Instance._socket.onmessage = NetClient.Instance.onReceiveMessage;
          NetClient.Instance._socket.onopen = NetClient.Instance.onSocketOpen;
          NetClient.Instance._socket.onclose = NetClient.Instance.onSocketClose;
          NetClient.Instance._socket.onerror = NetClient.Instance.onSocketError;
        }
        /**
         * 服务器连接成功
         */


        onSocketOpen() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("NetClient 服务器连接成功");
          NetClient.Instance.connected = true;

          if (NetClient.Instance.pendingMessage) {
            NetClient.Instance.SendMessage(NetClient.Instance.pendingMessage);
          }

          NetClient.Instance.pendingMessage = null;
        }
        /**
         * 服务器断开连接
         */


        async onSocketClose() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("NetClient 服务器断开连接");
          NetClient.Instance.connected = false;
          NetClient.Instance.reconnect();
        }
        /**
         * 服务器连接错误
         */


        onSocketError() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("NetClient 服务器连接错误");
          NetClient.Instance.connected = false;
          NetClient.Instance.closeCurrentSocket();
          NetClient.Instance.reconnect();
        }
        /**
         * 收到服务器消息
         * @param e
         */


        onReceiveMessage(event) {
          let netMessage = NetMessage.decode(new Uint8Array(event.data));
          console.log('NetClient 收到服务器消息：' + JSON.stringify(netMessage));
          (_crd && MessageDispatch === void 0 ? (_reportPossibleCrUseOfMessageDispatch({
            error: Error()
          }), MessageDispatch) : MessageDispatch).Dispatch(netMessage.Response);
        }
        /**
         * 开始Socket连接
         */


        Connect() {
          NetClient.Instance._socket = new WebSocket((_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
            error: Error()
          }), NetConfig) : NetConfig).websocketUrl);
          NetClient.Instance._socket.binaryType = "arraybuffer";
          NetClient.Instance.addEvents();
        }
        /**
         * 重新连接
         */


        reconnect() {
          setTimeout(function () {
            NetClient.Instance.Connect();
          }, 5000);
        }
        /**
         * 发送消息到服务器
         * @param message
         */


        SendMessage(message) {
          if (!NetClient.Instance.connected) {
            NetClient.Instance.pendingMessage = message;
            return;
          }

          let msg = NetMessage.encode(message).finish(); // console.log('NetClient SendMessage message='+JSON.stringify(message),msg)

          NetClient.Instance._socket.send(msg);
        }
        /**
         * 清理当前的Socket连接
         */


        closeCurrentSocket() {
          if (NetClient.Instance._socket) {
            NetClient.Instance._socket.close();
          }

          NetClient.Instance._socket = null;
        }

      }); // export class NetClient{
      //     public static Instance:NetClient=new NetClient();
      //     public _needReconnect:boolean = true;
      //     public _maxReconnectCount = 2;
      //     public _reconnectCount:number = 0;
      //     public _connectFlag:boolean=null as unknown as boolean;
      //     public _socket:WebSocket=null as unknown as WebSocket;
      //     public _isConnecting:boolean=null as unknown as boolean;
      //     public timer:number=0;
      //     public executeCount:number=0;
      //     public Init(){
      //         let this_=NetClient.Instance;
      //         clearInterval(this_.timer);
      //         this_.timer=setInterval(this_.execute,1000);
      //     }
      //     public execute(){
      //         let this_= NetClient.Instance;
      //         if(!this_._socket){
      //             return;
      //         }
      //         this_.executeCount++;
      //         if(this_.executeCount % 30 ==0){   //每30秒发送心跳包
      //             UserService.Instance.SendHeartBeat();
      //         }
      //     }
      //     public get Connected(){
      //         LogUtil.log('Connected _isConnecting：'+NetClient.Instance._isConnecting)
      //         return NetClient.Instance._isConnecting;
      //     }
      //     /**
      //      * 添加事件监听
      //      */
      //     public addEvents() {
      //         NetClient.Instance._socket.onmessage=NetClient.Instance.onReceiveMessage;
      //         NetClient.Instance._socket.onopen=NetClient.Instance.onSocketOpen;
      //         NetClient.Instance._socket.onclose=NetClient.Instance.onSocketClose;
      //         NetClient.Instance._socket.onerror=NetClient.Instance.onSocketError;
      //     }
      //     /**
      //      * 移除事件监听
      //      */
      //     public removeEvents():void {
      //     }
      //     /**
      //      * 服务器连接成功
      //      */
      //     public onSocketOpen():void {
      //         let this_= NetClient.Instance;
      //         this_._reconnectCount = 0;
      //         this_._isConnecting = true;
      //         LogUtil.log('onSocketOpen _isConnecting：'+this_._isConnecting)
      //         if (this_._connectFlag && this_._needReconnect) {
      //             EventManager.Instance.dispatch(SocketConst.SOCKET_RECONNECT);
      //             LogUtil.log("SOCKET_RECONNECT");
      //         } else {
      //             EventManager.Instance.dispatch(SocketConst.SOCKET_CONNECT);
      //             LogUtil.log("SOCKET_CONNECT");
      //         }
      //         this_._connectFlag = true;
      //         LogUtil.log("服务器连接成功");
      //     }
      //     /**
      //      * 服务器断开连接
      //      */
      //     public async onSocketClose() {
      //         LogUtil.log("服务器断开连接 _needReconnect："+NetClient.Instance._needReconnect);
      //         NetClient.Instance._isConnecting = false;
      //       if(User.Instance.isLogin){  
      //         let confirmObj= await MessageBox.Show("已掉线请重新登录！", "提示", MessageBoxType.Information,"确定","取消"); 
      //         EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,function(){
      //             director.loadScene('Loading');
      //         },confirmObj); 
      //       }
      //     }
      //     /**
      //      * 服务器连接错误
      //      */
      //     public onSocketError():void {
      //         LogUtil.log("服务器连接错误");
      //         NetClient.Instance._isConnecting = false;
      //         if (NetClient.Instance._needReconnect) {
      //             EventManager.Instance.dispatch(SocketConst.SOCKET_START_RECONNECT);
      //             NetClient.Instance.reconnect();
      //         } else {
      //             EventManager.Instance.dispatch(SocketConst.SOCKET_CLOSE);
      //         }
      //     }
      //     /**
      //      * 收到服务器消息
      //      * @param e
      //      */
      //     public onReceiveMessage(event: MessageEvent):void {
      //         let netMessage=NetMessage.decode(new Uint8Array(event.data));
      //         console.log('收到服务器消息：'+JSON.stringify(netMessage))
      //         MessageDispatch.Dispatch(netMessage.Response);
      //     }
      //     /**
      //      * 开始Socket连接
      //      */
      //     public Connect():void {
      //         NetClient.Instance._socket = new WebSocket(NetConfig.websocketUrl);
      //         NetClient.Instance._socket.binaryType=  "arraybuffer";
      //         NetClient.Instance.addEvents();
      //     }
      //     /**
      //      * 重新连接
      //      */
      //     public reconnect():void {
      //         NetClient.Instance.closeCurrentSocket();
      //         NetClient.Instance._reconnectCount++;
      //         LogUtil.log("重新连接"+NetClient.Instance._reconnectCount);
      //         if (NetClient.Instance._reconnectCount < NetClient.Instance._maxReconnectCount) {
      //             NetClient.Instance.Connect();
      //         } else {
      //             // NetClient.Instance._reconnectCount = 0;
      //             if (NetClient.Instance._connectFlag) {
      //                  LogUtil.log("SOCKET_CLOSE");
      //                 EventManager.Instance.dispatch(SocketConst.SOCKET_CLOSE);
      //             } else {
      //                 LogUtil.log("SOCKET_NOCONNECT");
      //                 EventManager.Instance.dispatch(SocketConst.SOCKET_NOCONNECT);
      //             }
      //         }
      //     }
      //     /**
      //      * 发送消息到服务器
      //      * @param message
      //      */
      //     public SendMessage(message:NetMessage):void {
      //         let msg=NetMessage.encode(message).finish();
      //         console.log('SendMessage message='+JSON.stringify(message),msg)
      //         NetClient.Instance._socket.send(msg);
      //     }
      //     /**
      //      * 关闭Socket连接
      //      */
      //     public close():void {
      //         NetClient.Instance._connectFlag = false;
      //         NetClient.Instance.closeCurrentSocket();
      //     }
      //     /**
      //      * 清理当前的Socket连接
      //      */
      //     public closeCurrentSocket(){
      //        if(NetClient.Instance._socket){ 
      //         NetClient.Instance.removeEvents();
      //         NetClient.Instance._socket.close();
      //        }
      //        NetClient.Instance._socket =null as unknown as WebSocket;
      //         NetClient.Instance._isConnecting = false;
      //     }
      // }


      _defineProperty(NetClient, "Instance", new NetClient());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetClient.js.map