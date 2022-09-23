import { LogUtil } from "../Log/LogUtil";
import proto from '../../Proto/proto.js';
import { NetClient } from "../Network/NetClient";
import { MessageBox, MessageBoxType } from "../UI/Common/MessageBox";
import { EventManager } from "../UI/Common/Event/EventManager";
import { EventType } from "../UI/Common/Event/EventType";
import { SocketConst } from "../Network/SocketConst";
import { User } from "../Models/User";
import { director } from "cc";
import { SoundManager } from "../../Sound/SoundManager";
import { SoundDefine } from "../../Sound/SoundDefine";
import { ItemManager } from "../Managers/ItemManager";
import { ChatManager } from "../Managers/ChatManager";
import { TipsManager } from "../UI/TipsManager";
const { NetMessage, NetMessageRequest, Result, ChatRequest, ChatMessage, ChatChannel, ChatResponse, ChatRoomType } = proto;

export class ChatService{
    public static Instance: ChatService = new ChatService();

    public Init() {
        EventManager.Instance.addListener(EventType.OnChat, this.OnChat, this)
    }


    /**
     * 发送聊天
     */
    public SendChat(chatChannel:ChatChannel,msg:string, chatRoomType:ChatRoomType, toId?:number, toName?:string, toLevel?:number, toCCharacterId?:number): void {
        LogUtil.log("SendChat");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.chatReq = new ChatRequest();
        message.Request.chatReq.chatMessage=new ChatMessage();
        message.Request.chatReq.chatMessage.chatChannel=chatChannel;
        message.Request.chatReq.chatMessage.fromId=User.Instance.user.id;
        message.Request.chatReq.chatMessage.fromName=User.Instance.user.nickname;
        message.Request.chatReq.chatMessage.fromLevel=User.Instance.user.character.level;
        message.Request.chatReq.chatMessage.fromCCharacterId=User.Instance.user.character.cid;
        message.Request.chatReq.chatMessage.chatRoomType = chatRoomType;
        message.Request.chatReq.chatMessage.toId=toId;
        message.Request.chatReq.chatMessage.toName=toName;
        message.Request.chatReq.chatMessage.toLevel=toLevel;
        message.Request.chatReq.chatMessage.toCCharacterId=toCCharacterId;
        message.Request.chatReq.chatMessage.msg=msg;
        NetClient.Instance.SendMessage(message);
    }


    /** 
     * 聊天响应
     */
    private OnChat(param: any): void {
        let response = param[0] as ChatResponse;
        LogUtil.log("OnChat:{0}", response.result,response.errormsg);
            if (response.result == Result.Success){
                ChatManager.Instance.AddMessages(ChatChannel.Comp, response.compMessages);
                ChatManager.Instance.AddMessages(ChatChannel.Private, response.privateMessages);
                ChatManager.Instance.AddMessages(ChatChannel.RoomChat, response.roomMessages);
            } else{
                TipsManager.Instance.showTips(response.errormsg);
            }
    }
}