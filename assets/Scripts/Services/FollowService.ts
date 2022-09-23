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
import { TipsManager } from "../UI/TipsManager";
const { NetMessage, NetMessageRequest,  Result,FollowListResponse, FollowListRequest } = proto;

export class FollowService{

    public static Instance: FollowService = new FollowService();

    public Init() {
        
    }

    /**
     * 请求关注列表
     */
    public SendFollowList(): void {
        LogUtil.log("SendFollowList");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.followListReq = new FollowListRequest();
        NetClient.Instance.SendMessage(message);
    }
}