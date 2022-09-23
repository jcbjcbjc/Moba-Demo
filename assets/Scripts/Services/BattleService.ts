import { LogUtil } from "../Log/LogUtil";
import proto2 from '../../Proto/Battle/proto.js';
import { MessageBox, MessageBoxType } from "../UI/Common/MessageBox";
import { EventManager } from "../UI/Common/Event/EventManager";
import { EventType } from "../UI/Common/Event/EventType";
import { SocketConst } from "../Network/SocketConst";
import { User } from "../Models/User";
import { director } from "cc";
import { SoundManager } from "../../Sound/SoundManager";
import { SoundDefine } from "../../Sound/SoundDefine";
import { TipsManager } from "../UI/TipsManager";
import { NetClientBattle } from "../Network/Battle/NetClientBattle";
const { NetMessageRequest2,FrameHandleResponse,PercentForwardResponse,FrameHandle,PercentForward, GameOverRequest,
    RepairFrameResponse, RepairFrameRequest} = proto2;

export class BattleService{
   public static Instance: BattleService = new BattleService();

   public Init() {
      
   }

    /**
     * 发送帧操作
     */
    public SendFrameHandle(frameHandle:FrameHandle): void {
         //LogUtil.log("SendFrameHandle",frameHandle);
        let userId=User.Instance.user.id;
        let request = new NetMessageRequest2();
        request.frameHandle = frameHandle;
        request.frameHandle.userId=userId;
        request.userId=userId;
        NetClientBattle.Instance.SendMessage(request);
    }

    
    /**
     * 发送进度转发
     */
    public SendPercentForward(percent:number): void {
        LogUtil.log("SendPercentForward");
        let userId=User.Instance.user.id;
        
        let request = new NetMessageRequest2();
        request.percentForward = new PercentForward();
        request.percentForward.userId=userId;
        request.percentForward.percent=percent;
        request.userId=userId;

        // console.log('request='+JSON.stringify(request))
        NetClientBattle.Instance.SendMessage(request);
    }
    

      /**
     * 发送游戏结束
     */
    public SendGameOver(): void {
        LogUtil.log("SendGameOver");
        let userId=User.Instance.user.id;
        let request = new NetMessageRequest2();
        request.gameOverReq = new GameOverRequest();
        request.userId=userId;
        NetClientBattle.Instance.SendMessage(request);
    }

    /**
     * 发送补帧请求
     */
    public SendRepairFrame(startFrame:number, endFrame:number): void {
        // LogUtil.log("SendRepairFrame");
        let userId=User.Instance.user.id;
        let request = new NetMessageRequest2();
        request.repairFrameReq = new RepairFrameRequest();
        request.repairFrameReq.startFrame=startFrame;
        request.repairFrameReq.endFrame=endFrame;
        request.userId=userId;
        NetClientBattle.Instance.SendMessage(request);
    }

    /**
     * 记录用户请求
     */
    public SendRecordUser(){
        console.log('SendRecordUser')
        let request = new NetMessageRequest2();
        request.userId=User.Instance.user.id;
        NetClientBattle.Instance.SendMessage(request);
    }
}