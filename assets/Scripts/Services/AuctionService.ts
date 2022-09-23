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
    AuctionResponse, GetAuctionListRequest, GetAuctionListResponse} = proto;

export class AuctionService{
   public static Instance: AuctionService = new AuctionService();

   public Init() {
      EventManager.Instance.addListener(EventType.OnOfferPrice, this.OnOfferPrice, this)
      EventManager.Instance.addListener(EventType.OnAuction, this.OnAuction, this)
      EventManager.Instance.addListener(EventType.OnGetAuctionList, this.OnGetAuctionList, this)
   }

    /**
     * 请求出价操作
     */
    public SendOfferPrice(id: number, money: number): void {
        LogUtil.log("SendOfferPrice::id :" + id+"，money="+money);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.offerPriceReq = new OfferPriceRequest();
        message.Request.offerPriceReq.id=id;
        message.Request.offerPriceReq.money=money;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 出价操作响应
     */
    private OnOfferPrice(param: any): void {
        let response = param[0] as OfferPriceResponse;
        LogUtil.log("OnOfferPrice:{0} [{1}]", response.result, response.errormsg);
        if(response.result == Result.Success){   //成功
            TipsManager.Instance.showTips(response.errormsg);
            EventManager.Instance.dispatch(EventType.AuctionRefreshUI,response); 
        }else{
            TipsManager.Instance.showTips(response.errormsg);
        }
    }

    /**
     * 请求拍卖操作
     */
    public SendAuction(itemId: number, money: number): void {
        LogUtil.log("SendAuction::itemId :" + itemId+"，money="+money);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.auctionReq = new AuctionRequest();
        message.Request.auctionReq.itemId=itemId;
        message.Request.auctionReq.money=money;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 拍卖操作响应
     */
    private OnAuction(param: any): void {
        let response = param[0] as AuctionResponse;
        LogUtil.log("OnAuction:{0} [{1}]", response.result, response.errormsg);
        if(response.result == Result.Success){   //成功
            TipsManager.Instance.showTips(response.errormsg);
            EventManager.Instance.dispatch(EventType.OnAuction_UI,response); 
        }else{
            TipsManager.Instance.showTips(response.errormsg);
        }
    }

    /**
     * 请求获取拍卖列表
     */
    public SendGetAuctionList(): void {
        LogUtil.log("SendGetAuctionList");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.getAuctionListReq = new GetAuctionListRequest();
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 获取拍卖列表响应
     */
    private OnGetAuctionList(param: any): void {
        let response = param[0] as GetAuctionListResponse;
        EventManager.Instance.dispatch(EventType.OnGetAuctionList_UI,response.auctionItems); 
    }

}