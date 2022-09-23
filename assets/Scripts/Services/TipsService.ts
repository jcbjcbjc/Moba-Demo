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
const { NetMessage, NetMessageRequest,  Result, OfferPriceRequest, OfferPriceResponse, AuctionRequest, 
    AuctionResponse, GetAuctionListRequest, GetAuctionListResponse, TipsResponse, TipsType, TipsWorkType} = proto;

export class TipsService{
   public static Instance: TipsService = new TipsService();

   public Init() {
      EventManager.Instance.addListener(EventType.OnTips, this.OnTips, this)
   }

    /**
     * 提示响应
     */
    private OnTips(param: any): void {
        let response = param[0] as TipsResponse;
        LogUtil.log("OnTips:{0} [{1}]", response.content, response.tipsType);
        if(response.tipsType == TipsType.Tips){   //字体提示
            TipsManager.Instance.showTips(response.content);
        }else if(response.tipsType == TipsType.Popup){  //弹窗提示
            MessageBox.Show(response.content, "提示", MessageBoxType.Information);
        }

        //业务消息
        if(!response.tipsWorkType){
            return;
        }
        console.log('isOutRoom：'+(response.tipsWorkType == TipsWorkType.OutRoom))
        if(response.tipsWorkType == TipsWorkType.AuctionResult){  //拍卖结算
            EventManager.Instance.dispatch(EventType.AuctionRefreshUI);
        }else if(response.tipsWorkType == TipsWorkType.DismissRoom){  //解散房间
            director.loadScene('UIMain');
        }else if(response.tipsWorkType == TipsWorkType.KickOutRoom){  //踢出房间
            director.loadScene('UIMain');
        }else if(response.tipsWorkType == TipsWorkType.OutRoom){  //退出房间

            EventManager.Instance.dispatch(EventType.OnMyRoom_RefieshUI); 
        }
    }

    
}