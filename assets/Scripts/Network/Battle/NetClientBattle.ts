import { LogUtil } from "../../Log/LogUtil";
import { SocketConst } from "./../SocketConst";
import { Socket, director } from "cc";
import proto2  from '../../../Proto/Battle/proto.js';
import { EventManager } from "../../UI/Common/Event/EventManager";
import { NetConfig } from "./../NetConfig";
import { MessageDispatch } from "./../MessageDispatch";
import { UserService } from "../../Services/UserService";
import { MessageBox, MessageBoxType } from "../../UI/Common/MessageBox";
import { EventType } from "../../UI/Common/Event/EventType";
import { User } from "../../Models/User";
const { NetMessageRequest2,NetMessageResponse2 }=proto2;

export class NetClientBattle{
    public static Instance:NetClientBattle=new NetClientBattle();

    public _socket:WebSocket=null as unknown as WebSocket;
    public pendingMessage: NetMessageRequest2 = null as unknown as NetMessageRequest2;
    public connected:boolean=false;

    public Init(){

    }

    /**
     * 添加事件监听
     */
    public addEvents() {
        NetClientBattle.Instance._socket.onmessage=NetClientBattle.Instance.onReceiveMessage;
        NetClientBattle.Instance._socket.onopen=NetClientBattle.Instance.onSocketOpen;
        NetClientBattle.Instance._socket.onclose=NetClientBattle.Instance.onSocketClose;
        NetClientBattle.Instance._socket.onerror=NetClientBattle.Instance.onSocketError;
    }


    /**
     * 服务器连接成功
     */
    public onSocketOpen():void {
        LogUtil.log("NetClientBattle 服务器连接成功");
        NetClientBattle.Instance.connected=true;
        if(NetClientBattle.Instance.pendingMessage){
            NetClientBattle.Instance.SendMessage(NetClientBattle.Instance.pendingMessage);
        }
        NetClientBattle.Instance.pendingMessage=null;
    }

    /**
     * 服务器断开连接
     */
    public async onSocketClose() {
        LogUtil.log("NetClientBattle 服务器断开连接");
        NetClientBattle.Instance.connected=false;
        NetClientBattle.Instance.reconnect();
    }

    /**
     * 服务器连接错误
     */
    public onSocketError():void {
        LogUtil.log("NetClientBattle 服务器连接错误");
        NetClientBattle.Instance.connected=false;
        NetClientBattle.Instance.closeCurrentSocket();
        NetClientBattle.Instance.reconnect();
    }

    /**
     * 收到服务器消息
     * @param e
     */
    public  onReceiveMessage(event: MessageEvent):void {
        let netMessage=NetMessageResponse2.decode(new Uint8Array(event.data));
        // console.log('NetClientBattle 收到服务器消息：'+JSON.stringify(netMessage))
        MessageDispatch.Dispatch(netMessage);
    }


    /**
     * 开始Socket连接
     */
    public Connect():void {
        NetClientBattle.Instance._socket = new WebSocket(NetConfig.websocketBattleUrl);
        NetClientBattle.Instance._socket.binaryType=  "arraybuffer";
        NetClientBattle.Instance.addEvents();
    }

    /**
     * 重新连接
     */
    public reconnect():void {
       setTimeout(function(){
           NetClientBattle.Instance.Connect();
       },5000)
    }

    /**
     * 发送消息到服务器
     * @param message
     */
    public SendMessage(message:NetMessageRequest2):void {
        if(!NetClientBattle.Instance.connected){
            NetClientBattle.Instance.pendingMessage=message;
            return;
        }
        let msg=NetMessageRequest2.encode(message).finish();
        // console.log('NetClientBattle SendMessage message='+JSON.stringify(message),msg)
        NetClientBattle.Instance._socket.send(msg);
    }

    /**
     * 清理当前的Socket连接
     */
    public closeCurrentSocket(){
       if(NetClientBattle.Instance._socket){ 
         NetClientBattle.Instance._socket.close();
       }
       NetClientBattle.Instance._socket =null as unknown as WebSocket;
    }

}