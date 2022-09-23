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
const { NetMessage, NetMessageRequest, UserLoginRequest, Result, UserLoginResponse,UserRegisterRequest, UserRegisterResponse,UnLockRequest,
    UnLockResponse,CharacterDetailRequest, CharacterDetailResponse,SwitchCharacterRequest, SwitchCharacterResponse,
    AttrPromoteRequest, AttrPromoteType, AttrPromoteInfoResponse,BagHandleRequest, BagHandleType, BagHandleResponse,
     ItemBuyRequest, ItemBuyResponse, QueryTranRequest, QueryTranResponse, BuyTranResponse, BuyTranRequest} = proto;

export class ItemService{
   public static Instance: ItemService = new ItemService();

   public Init() {
      EventManager.Instance.addListener(EventType.OnBagHandle, this.OnBagHandle, this)
      EventManager.Instance.addListener(EventType.OnItemBuy, this.OnItemBuy, this)
      EventManager.Instance.addListener(EventType.OnQueryTran, this.OnQueryTran, this)
      EventManager.Instance.addListener(EventType.OnBuyTran, this.OnBuyTran, this)
   }

    /**
     * 请求背包操作
     */
    public SendBagHandle(itemId: number, bagHandleType:BagHandleType, money: number): void {
        LogUtil.log("BagHandleRequest::itemId :" + itemId+"，bagHandleType="+bagHandleType+"，money="+money);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.bagHandleReq = new BagHandleRequest();
        message.Request.bagHandleReq.itemId=itemId;
        message.Request.bagHandleReq.bagHandleType=bagHandleType;
        message.Request.bagHandleReq.money=money;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 背包操作响应
     */
    private OnBagHandle(param: any): void {
        let response = param[0] as BagHandleResponse;
        LogUtil.log("OnBagHandle:{0} [{1}]", response.result, response.errormsg);
        if(response.result == Result.Success){   //成功
            TipsManager.Instance.showTips(response.errormsg);
            EventManager.Instance.dispatch(EventType.OnBagHandle_UI,response); 
        }else{
            TipsManager.Instance.showTips(response.errormsg);
        }
    }

    /**
     * 请求购买操作
     */
    public SendItemBuy(shopId: number, itemId: number, count: number): void {
        LogUtil.log("ItemBuyRequest::shopId："+shopId+"，itemId :" + itemId+"，count="+count);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.itemBuy = new ItemBuyRequest();
        message.Request.itemBuy.shopId=shopId;
        message.Request.itemBuy.itemId=itemId;
        message.Request.itemBuy.count=count;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 购买操作响应
     */
    private OnItemBuy(param: any): void {
        let response = param[0] as ItemBuyResponse;
        LogUtil.log("OnItemBuy:{0} [{1}]", response.result, response.errormsg);
        if(response.result == Result.Success){   //成功
            TipsManager.Instance.showTips(response.errormsg);
            EventManager.Instance.dispatch(EventType.OnItemBuy_UI,response); 
        }else{
            TipsManager.Instance.showTips(response.errormsg);
        }
    }

    /**
     * 请求查询用户交易
     */
    public SendQueryTran(userId: number): void {
        LogUtil.log("QueryTranRequest::userId："+userId);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.queryTranReq = new QueryTranRequest();
        message.Request.queryTranReq.userId=userId;
        NetClient.Instance.SendMessage(message);
    }
    /**
     * 查询用户交易响应
     */
    private OnQueryTran(param: any): void {
        let response = param[0] as QueryTranResponse;
        LogUtil.log("OnQueryTran:{0} [{1}]", response.result, response.errormsg);
        if(response.result == Result.Success){   //成功
            TipsManager.Instance.showTips(response.errormsg);
            EventManager.Instance.dispatch(EventType.OnQueryTran_UI,response.items); 
        }else{
            TipsManager.Instance.showTips(response.errormsg);
        }
    }

    /**
     * 请求购买用户交易
     */
    public SendBuyTran(userId: number, itemId:number): void {
        LogUtil.log("BuyTranRequest::userId："+userId+'，itemId='+itemId);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.buyTranReq = new BuyTranRequest();
        message.Request.buyTranReq.userId=userId;
        message.Request.buyTranReq.itemId=itemId;
        NetClient.Instance.SendMessage(message);
    }
    /**
     * 购买用户交易响应
     */
    private OnBuyTran(param: any): void {
        let response = param[0] as BuyTranResponse;
        LogUtil.log("OnBuyTran:{0} [{1}]", response.result, response.errormsg);
        if(response.result == Result.Success){   //成功
            TipsManager.Instance.showTips(response.errormsg);
            EventManager.Instance.dispatch(EventType.OnBuyTran_UI); 
        }else{
            TipsManager.Instance.showTips(response.errormsg);
        }
    }
    

}