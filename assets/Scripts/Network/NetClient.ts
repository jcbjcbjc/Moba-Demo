import { LogUtil } from "../Log/LogUtil";
import { SocketConst } from "./SocketConst";
import { Socket, director } from "cc";
import proto  from '../../Proto/proto.js';
import { EventManager } from "../UI/Common/Event/EventManager";
import { NetConfig } from "./NetConfig";
import { MessageDispatch } from "./MessageDispatch";
import { UserService } from "../Services/UserService";
import { MessageBox, MessageBoxType } from "../UI/Common/MessageBox";
import { EventType } from "../UI/Common/Event/EventType";
import { User } from "../Models/User";
const { NetMessage }=proto;

export class NetClient{
    public static Instance:NetClient=new NetClient();

    public _socket:WebSocket=null as unknown as WebSocket;
    public connected:boolean=false;
    public pendingMessage: NetMessage = null as unknown as NetMessage;
    public timer:number=0;
    public executeCount:number=0;

    public Init(){
        this.timer=setInterval(this.execute, 1000);
    }
    
    public execute(){
        let this_= NetClient.Instance;
        if(!this_._socket){
            return;
        }
        this_.executeCount++;
        if(this_.executeCount % 30 ==0){   //每30秒发送心跳包
            UserService.Instance.SendHeartBeat();
        }
    }

    /**
     * 添加事件监听
     */
    public addEvents() {
        NetClient.Instance._socket.onmessage=NetClient.Instance.onReceiveMessage;
        NetClient.Instance._socket.onopen=NetClient.Instance.onSocketOpen;
        NetClient.Instance._socket.onclose=NetClient.Instance.onSocketClose;
        NetClient.Instance._socket.onerror=NetClient.Instance.onSocketError;
    }


    /**
     * 服务器连接成功
     */
    public onSocketOpen():void {
        LogUtil.log("NetClient 服务器连接成功");
        NetClient.Instance.connected=true;
        if(NetClient.Instance.pendingMessage){
            NetClient.Instance.SendMessage(NetClient.Instance.pendingMessage);
        }
        NetClient.Instance.pendingMessage=null;
    }

    /**
     * 服务器断开连接
     */
    public async onSocketClose() {
        LogUtil.log("NetClient 服务器断开连接");
        NetClient.Instance.connected=false;
        NetClient.Instance.reconnect();
    }

    /**
     * 服务器连接错误
     */
    public onSocketError():void {
        LogUtil.log("NetClient 服务器连接错误");
        NetClient.Instance.connected=false;
        NetClient.Instance.closeCurrentSocket();
        NetClient.Instance.reconnect();
    }

    /**
     * 收到服务器消息
     * @param e
     */
    public  onReceiveMessage(event: MessageEvent):void {
        let netMessage=NetMessage.decode(new Uint8Array(event.data));
        console.log('NetClient 收到服务器消息：'+JSON.stringify(netMessage))
       MessageDispatch.Dispatch(netMessage.Response);
    }


    /**
     * 开始Socket连接
     */
    public Connect():void {
        NetClient.Instance._socket = new WebSocket(NetConfig.websocketUrl);
        NetClient.Instance._socket.binaryType=  "arraybuffer";
        NetClient.Instance.addEvents();
    }

    /**
     * 重新连接
     */
    public reconnect():void {
       setTimeout(function(){
           NetClient.Instance.Connect();
       },5000)
    }

    /**
     * 发送消息到服务器
     * @param message
     */
    public SendMessage(message:NetMessage):void {
        if(!NetClient.Instance.connected){
            NetClient.Instance.pendingMessage=message;
            return;
        }
        let msg=NetMessage.encode(message).finish();
        // console.log('NetClient SendMessage message='+JSON.stringify(message),msg)
        NetClient.Instance._socket.send(msg);
    }

    /**
     * 清理当前的Socket连接
     */
    public closeCurrentSocket(){
       if(NetClient.Instance._socket){ 
         NetClient.Instance._socket.close();
       }
       NetClient.Instance._socket =null as unknown as WebSocket;
    }

}

// export class NetClient{
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