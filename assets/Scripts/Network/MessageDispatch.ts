import proto  from '../../Proto/proto.js';
const { NetMessage, NetMessageResponse }=proto;
import { EventManager } from '../UI/Common/Event/EventManager';
import { EventType } from '../UI/Common/Event/EventType';
import { BattleManager } from '../UI/Battle/Managers/BattleManager';

/**
 * 消息分发器
 */
export class MessageDispatch{

    public static Dispatch(message:any):void{
        //战斗服
        let isBattleServer:boolean=false;
        if(message.repairFrameRes){
            if(BattleManager.Instance && BattleManager.Instance.isAddListener){
                 BattleManager.Instance.OnRepairFrame(message.repairFrameRes);
            }
            //   EventManager.Instance.dispatch(EventType.OnRepairFrame,message.repairFrameRes);
            isBattleServer=true;
        }
        if(message.frameHandleRes){
            if(BattleManager.Instance && BattleManager.Instance.isAddListener){
                 BattleManager.Instance.OnFrameHandle(message.frameHandleRes);
            }
            // EventManager.Instance.dispatch(EventType.OnFrameHandle,message.frameHandleRes);
            isBattleServer=true;
        }
        if(message.percentForwardRes){
            console.log('message.percentForwardRes='+message.percentForwardRes)
            EventManager.Instance.dispatch(EventType.OnPercentForward,message.percentForwardRes);
            isBattleServer=true;
        }
        if(message.liveFrameRes){
            if(BattleManager.Instance && BattleManager.Instance.isAddListener){
                 BattleManager.Instance.OnLiveFrame(message.liveFrameRes);
            }
            // EventManager.Instance.dispatch(EventType.OnLiveFrame,message.liveFrameRes);
            isBattleServer=true;
        }
        if(isBattleServer){
            return;
        }
        //大厅服
        if(message.userRegister){
            EventManager.Instance.dispatch(EventType.OnUserRegister,message.userRegister);
        }
        if(message.userLogin){
            EventManager.Instance.dispatch(EventType.OnUserLogin,message.userLogin);
        }
        if(message.unLockRes){
            EventManager.Instance.dispatch(EventType.OnUnLock,message.unLockRes);
        }
        if(message.statusNotify){
            EventManager.Instance.dispatch(EventType.OnStatusNotify,message.statusNotify);
        }
        if(message.characterDetail){
            EventManager.Instance.dispatch(EventType.OnCharacterDetail,message.characterDetail);
        }
        if(message.switchCharacterRes){
            EventManager.Instance.dispatch(EventType.OnSwitchCharacter,message.switchCharacterRes);
        }
        if(message.attrPromote){
            EventManager.Instance.dispatch(EventType.OnAttrPromoteInfo,message.attrPromote);
        }
        if(message.bagHandleRes){
            EventManager.Instance.dispatch(EventType.OnBagHandle,message.bagHandleRes);
        }
        if(message.itemBuy){
            EventManager.Instance.dispatch(EventType.OnItemBuy,message.itemBuy);
        }
        if(message.combatPowerRanking){
            EventManager.Instance.dispatch(EventType.OnCombatPowerRanking,message.combatPowerRanking);
        }
        if(message.followRes){
            EventManager.Instance.dispatch(EventType.OnFollowRes,message.followRes);
        }
        if(message.userStatusChangeRes){
            EventManager.Instance.dispatch(EventType.OnUserStatusChange,message.userStatusChangeRes);
        }
        if(message.queryTranRes){
            EventManager.Instance.dispatch(EventType.OnQueryTran,message.queryTranRes);
        }
        if(message.buyTranRes){
            EventManager.Instance.dispatch(EventType.OnBuyTran,message.buyTranRes);
        }
        if(message.heartBeatRes){
            EventManager.Instance.dispatch(EventType.OnHeartBeat,message.heartBeatRes);
        }
        if(message.offerPriceRes){
            EventManager.Instance.dispatch(EventType.OnOfferPrice,message.offerPriceRes);
        }
        if(message.auctionRes){
            EventManager.Instance.dispatch(EventType.OnAuction,message.auctionRes);
        }
        if(message.getAuctionListRes){
            EventManager.Instance.dispatch(EventType.OnGetAuctionList,message.getAuctionListRes);
        }
        if(message.tipsRes){
            EventManager.Instance.dispatch(EventType.OnTips,message.tipsRes);
        }
        if(message.myRoomRes){
            EventManager.Instance.dispatch(EventType.OnMyRoom,message.myRoomRes);
        }
        if(message.inviteRes){
            EventManager.Instance.dispatch(EventType.OnInviteResponse,message.inviteRes);
        }
        if(message.inviteReq){
            EventManager.Instance.dispatch(EventType.OnInviteRequest,message.inviteReq);
        }
        if(message.kickOutRes){
            EventManager.Instance.dispatch(EventType.OnKickOut,message.kickOutRes);
        }
        if(message.roomStartGameRes){
            EventManager.Instance.dispatch(EventType.OnRoomStartGame,message.roomStartGameRes);
        }
        if(message.nickNameSearchRes){
            EventManager.Instance.dispatch(EventType.OnNickNameSearch,message.nickNameSearchRes);
        }
        if(message.addRoomReq){
            EventManager.Instance.dispatch(EventType.OnAddRoomRequest,message.addRoomReq);
        }
        if(message.addRoomRes){
            EventManager.Instance.dispatch(EventType.OnAddRoomResponse,message.addRoomRes);
        }
        if(message.outRoomRes){
            EventManager.Instance.dispatch(EventType.OnOutRoom,message.outRoomRes);
        }
        if(message.followListRes){
            EventManager.Instance.dispatch(EventType.OnFollowList,message.followListRes);
        }
        if(message.chatRes){
            EventManager.Instance.dispatch(EventType.OnChat,message.chatRes);
        }
        if(message.userStatusQueryRes){
            EventManager.Instance.dispatch(EventType.OnUserStatusQuery,message.userStatusQueryRes);
        }
        if(message.startMatchRes){
            EventManager.Instance.dispatch(EventType.OnStartMatch,message.startMatchRes);
        }
        if(message.matchRes){
            EventManager.Instance.dispatch(EventType.OnMatchResponse,message.matchRes);
        }
        if(message.addLiveRes){
            EventManager.Instance.dispatch(EventType.OnAddLiveResponse,message.addLiveRes);
        }
        if(message.validateOpenRoomRes){
            EventManager.Instance.dispatch(EventType.OnValidateOpenRoom,message.validateOpenRoomRes);
        }
    }
}