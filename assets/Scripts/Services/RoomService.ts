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
import { RandomUtil } from "../UI/Battle/Utils/RandomUtil";
import { LocalStorageUtil } from "../Utils/LocalStorageUtil";
import { BattleMode } from "../UI/Battle/enums/BattleMode";
import { BattleGlobal } from "../UI/Battle/Utils/BattleGlobal";
const { NetMessage, NetMessageRequest,  Result, MyRoomRequest, MyRoomResponse, InviteRequest, TeamType, InviteResponse, KickOutRequest, 
    KickOutResponse, RoomStartGameRequest, RoomStartGameResponse, NickNameSearchRequest, NickNameSearchResponse, 
    AddRoomRequest, AddRoomResponse, OutRoomRequest, OutRoomResponse, GameOver2Request, UploadBiFenRequest, AddLiveRequest, AddLiveResponse,
    ValidateOpenRoomRequest, ValidateOpenRoomResponse } = proto;

export class RoomService{
   
  public static Instance: RoomService = new RoomService();

   public Init() {
    EventManager.Instance.addListener(EventType.OnMyRoom, this.OnMyRoom, this)
    EventManager.Instance.addListener(EventType.OnInviteResponse, this.OnInviteResponse, this)
    EventManager.Instance.addListener(EventType.OnInviteRequest, this.OnInviteRequest, this)
    EventManager.Instance.addListener(EventType.OnKickOut, this.OnKickOut, this)
    EventManager.Instance.addListener(EventType.OnRoomStartGame, this.OnRoomStartGame, this)
    EventManager.Instance.addListener(EventType.OnNickNameSearch, this.OnNickNameSearch, this)
    EventManager.Instance.addListener(EventType.OnAddRoomRequest, this.OnAddRoomRequest, this)
    EventManager.Instance.addListener(EventType.OnAddRoomResponse, this.OnAddRoomResponse, this)
    EventManager.Instance.addListener(EventType.OnOutRoom, this.OnOutRoom, this)
    EventManager.Instance.addListener(EventType.OnAddLiveResponse, this.OnAddLiveResponse, this)
    EventManager.Instance.addListener(EventType.OnValidateOpenRoom, this.OnValidateOpenRoom, this)
   }

    /**
     * 请求我的房间
     */
    public SendMyRoom(): void {
        LogUtil.log("SendMyRoom");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.myRoomReq = new MyRoomRequest();
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 我的房间响应
     */
    private OnMyRoom(param: any): void {
        let response = param[0] as MyRoomResponse;
        LogUtil.log("OnMyRoom:{0}", response.room);
        EventManager.Instance.dispatch(EventType.OnMyRoom_UI,response.room); 
    }

    /**
     * 发送邀请请求
     */
    public SendInviteRequest(toUserId:number, toNickName:string, teamType:TeamType): void {
        LogUtil.log("SendInviteRequest");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.inviteReq = new InviteRequest();
        message.Request.inviteReq.fromUserId=User.Instance.user.id;
        message.Request.inviteReq.fromNickName=User.Instance.user.nickname;
        message.Request.inviteReq.toUserId=toUserId;
        message.Request.inviteReq.toNickName=toNickName;
        message.Request.inviteReq.teamType=teamType;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 发送邀请响应
     */
    public SendInviteResponse(accept:boolean, inviteRequest:InviteRequest): void {
        LogUtil.log("SendInviteResponse");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.inviteRes = new InviteResponse();
        message.Request.inviteRes.result=accept?Result.Success:Result.Failed;
        message.Request.inviteRes.errormsg='';
        message.Request.inviteRes.inviteRequest=inviteRequest;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 收到邀请请求
     */
    private async OnInviteRequest(param: any) {
        let request = param[0] as InviteRequest;
        LogUtil.log("OnInviteRequest", request);
        let confirmObj= await MessageBox.Show(request.fromNickName+"邀请你加入房间？", "邀请请求", MessageBoxType.Confirm,"接受","拒绝"); 
        let this_=this;
        EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,function(){
            this_.SendInviteResponse(true,request);
        },confirmObj);
        EventManager.Instance.addListener(EventType.UIMessageBox_OnClickNo,function(){
            this_.SendInviteResponse(false,request);
        },confirmObj);
    }

    /**
     * 收到邀请响应
     */
    private OnInviteResponse(param: any): void {
        let response = param[0] as InviteResponse;
        LogUtil.log("OnInviteResponse:{0}{1}", response.result,response.errormsg);
        TipsManager.Instance.showTips(response.errormsg);
        if(response.result==Result.Success){
            //被邀请者是当前用户
            if(response.inviteRequest.toUserId==User.Instance.user.id){  
                director.loadScene('Room');
            }else{
               EventManager.Instance.dispatch(EventType.OnMyRoom_RefieshUI); 
            }
        }
    }

    /**
     * 踢出请求
     */
    public SendKickOut(userId:number): void {
        LogUtil.log("SendKickOut");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.kickOutReq = new KickOutRequest();
        message.Request.kickOutReq.userId=userId;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 踢出响应
     */
    private OnKickOut(param: any): void {
        let response = param[0] as KickOutResponse;
        LogUtil.log("OnKickOut:{0}{1}", response.result,response.errormsg);
        // EventManager.Instance.dispatch(EventType.OnKickOut_UI,response); 
        EventManager.Instance.dispatch(EventType.OnMyRoom_RefieshUI); 
        TipsManager.Instance.showTips(response.errormsg);
    }

    /**
     * 开始游戏请求
     */
    public SendRoomStartGame(): void {
        LogUtil.log("SendRoomStartGame");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.roomStartGameReq = new RoomStartGameRequest();
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 开始游戏响应
     */
    public OnRoomStartGame(param: any): void {
        let response = param[0] as RoomStartGameResponse;
        LogUtil.log("OnRoomStartGame{0}{1}：",response.result,response.errormsg);
        EventManager.Instance.dispatch(EventType.OnRoomStartGame_UI,response); 
        TipsManager.Instance.showTips(response.errormsg);
    }

    /**
     * 昵称搜索请求
     */
    public SendNickNameSearch(nickName?:string): void {
        LogUtil.log("SendNickNameSearch");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.nickNameSearchReq = new NickNameSearchRequest();
        message.Request.nickNameSearchReq.nickName=nickName;
        NetClient.Instance.SendMessage(message);
    }

     /**
     * 昵称搜索响应
     */
    public OnNickNameSearch(param: any): void {
        let response = param[0] as NickNameSearchResponse;
        LogUtil.log("OnNickNameSearch");
        EventManager.Instance.dispatch(EventType.OnNickNameSearch_UI,response.roomUser); 
    }

    /**
     * 发送加入房间请求
     */
    public SendAddRoomRequest(roomId:number): void {
        LogUtil.log("SendAddRoomRequest");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.addRoomReq = new AddRoomRequest();
        message.Request.addRoomReq.roomId=roomId;
        message.Request.addRoomReq.fromUserId=User.Instance.user.id;
        message.Request.addRoomReq.fromNickName=User.Instance.user.nickname;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 发送加入房间响应
     */
    public SendAddRoomResponse(accept:boolean, teamType:TeamType, addRoomRequest:AddRoomRequest): void {
        LogUtil.log("SendAddRoomResponse");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.addRoomRes = new AddRoomResponse();
        message.Request.addRoomRes.result=accept?Result.Success:Result.Failed;
        message.Request.addRoomRes.errormsg='';
        message.Request.addRoomRes.teamType=teamType;
        message.Request.addRoomRes.addRoomRequest=addRoomRequest;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 收到加入房间请求
     */
    private async OnAddRoomRequest(param: any) {
        let request = param[0] as AddRoomRequest;
        LogUtil.log("OnAddRoomRequest", request);
        let confirmObj= await MessageBox.Show(request.fromNickName+"加入房间？", "加入房间", MessageBoxType.Confirm,"接受","拒绝"); 
        let this_=this;
        EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,async ()=>{
            let teamConfirmObj= await MessageBox.Show("请选择"+request.fromNickName+"加入队伍！", "选择队伍", MessageBoxType.Confirm,"友队","敌队"); 
            EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,()=>{
                this_.SendAddRoomResponse(true, TeamType.My, request)
            }, teamConfirmObj);
            EventManager.Instance.addListener(EventType.UIMessageBox_OnClickNo,()=>{
                this_.SendAddRoomResponse(true, TeamType.Enemy, request)
            }, teamConfirmObj);
        },confirmObj);
        EventManager.Instance.addListener(EventType.UIMessageBox_OnClickNo,async ()=>{
            this_.SendAddRoomResponse(false, TeamType.My, request)
        },confirmObj);
    }


    /**
     * 收到加入房间响应
     */
    private OnAddRoomResponse(param: any): void {
        let response = param[0] as AddRoomResponse;
        LogUtil.log("OnAddRoomResponse:{0}{1}", response.result,response.errormsg);
        TipsManager.Instance.showTips(response.errormsg);
        if(response.result==Result.Success){
            //加入者是当前用户
            if(response.addRoomRequest.fromUserId==User.Instance.user.id){  
                director.loadScene('Room');
            }else{
              EventManager.Instance.dispatch(EventType.OnMyRoom_RefieshUI); 
            }
        }
    }

    /**
     * 退出房间请求
     */
    public SendOutRoom(): void {
        LogUtil.log("SendOutRoom");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.outRoomReq = new OutRoomRequest();
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 退出房间响应
     */
    public OnOutRoom(param: any): void {
        let response = param[0] as OutRoomResponse;
        LogUtil.log("OnOutRoom{0}{1}：",response.result,response.errormsg);
        TipsManager.Instance.showTips(response.errormsg);
    }

    /**
     * 请求游戏结束
     */
    public SendGameOver2(): void {
        LogUtil.log("SendGameOver2");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.gameOver2Req = new GameOver2Request();
        message.Request.gameOver2Req.ipPortStr = User.Instance.room.ipPortStr;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 上传比分请求
     */
    public SendUploadBiFen(biFen:string): void {
        LogUtil.log("SendUploadBiFen");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.uploadBiFenReq = new UploadBiFenRequest();
        message.Request.uploadBiFenReq.biFen = biFen;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 进入直播请求
     */
    public SendAddLive(targetUserId:number): void {
        LogUtil.log("SendAddLive");
        BattleGlobal.targetLiveUserId = targetUserId;
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.addLiveReq = new AddLiveRequest();
        message.Request.addLiveReq.userId = targetUserId;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 收到进入直播响应
     */
    private OnAddLiveResponse(param: any): void {
        let response = param[0] as AddLiveResponse;
        LogUtil.log("OnAddLiveResponse:{0}{1}", response.result,response.errormsg);
        TipsManager.Instance.showTips(response.errormsg);
        if(response.result==Result.Success){  //进入直播房间
           LocalStorageUtil.RemoveItem(LocalStorageUtil.allFrameHandlesKey);
           BattleGlobal.battleMode = BattleMode.Live;

           User.Instance.room=response.room;
           RandomUtil.seed=response.room.randomSeed;   //设置战斗随机数种子
           director.loadScene('EnterGameLoad');
        }
    }

    /**
     * 请求效验是否可以开房间
     */
    public SendValidateOpenRoom(): void {
        LogUtil.log("SendValidateOpenRoom");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.validateOpenRoomReq = new ValidateOpenRoomRequest();
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 效验是否可以开房间响应
     */
    private OnValidateOpenRoom(param: any): void {
        let response = param[0] as ValidateOpenRoomResponse;
        LogUtil.log("OnValidateOpenRoom:{0}", response);
        if(response.result==Result.Success){
            director.loadScene('Room');
        }else{
            TipsManager.Instance.showTips(response.errormsg);
        } 
    }
}