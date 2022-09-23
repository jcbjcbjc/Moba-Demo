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
import { CombatPowerRankingManager } from "../Managers/CombatPowerRankingManager";
import { ChatManager } from "../Managers/ChatManager";
const { NetMessage, NetMessageRequest, UserLoginRequest, Result, UserLoginResponse,UserRegisterRequest, UserRegisterResponse,UnLockRequest,
    UnLockResponse,CharacterDetailRequest, CharacterDetailResponse,SwitchCharacterRequest, SwitchCharacterResponse,
    AttrPromoteRequest, AttrPromoteType, AttrPromoteInfoResponse, CombatPowerRankingRequest, CombatPowerRankingResponse, FollowResponse, FollowRequest,
    UserStatusChangeResponse, HeartBeatRequest, HeartBeatResponse, UserStatusQueryRequest, UserStatusQueryResponse} = proto;

export class UserService {
    public static Instance: UserService = new UserService();

    // private pendingMessage: NetMessage = null as unknown as NetMessage;

    public Init() {
        let this_ = this;
        //socket连接失败
        // EventManager.Instance.addListener(SocketConst.SOCKET_NOCONNECT, this.SOCKET_NOCONNECT, this)
        // //Socket已经连接上
        // EventManager.Instance.addListener(SocketConst.SOCKET_CONNECT, this.SOCKET_CONNECT, this)
        // //Socket重新连接上
        // EventManager.Instance.addListener(SocketConst.SOCKET_RECONNECT, this.SOCKET_RECONNECT, this)
        // //Socket已关闭
        // EventManager.Instance.addListener(SocketConst.SOCKET_CLOSE, this.SOCKET_CLOSE, this)
        EventManager.Instance.addListener(EventType.OnUserLogin, this.OnUserLogin, this)
        EventManager.Instance.addListener(EventType.OnUserRegister, this.OnUserRegister, this)
        EventManager.Instance.addListener(EventType.OnUnLock, this.OnUnLock, this)
        EventManager.Instance.addListener(EventType.OnCharacterDetail, this.OnCharacterDetail, this)
        EventManager.Instance.addListener(EventType.OnSwitchCharacter, this.OnSwitchCharacter, this)
        EventManager.Instance.addListener(EventType.OnAttrPromoteInfo, this.OnAttrPromoteInfo, this)
        EventManager.Instance.addListener(EventType.OnCombatPowerRanking, this.OnCombatPowerRanking, this)
        EventManager.Instance.addListener(EventType.OnFollowRes, this.OnFollowRes, this)
        EventManager.Instance.addListener(EventType.OnUserStatusChange, this.OnUserStatusChange, this)
        EventManager.Instance.addListener(EventType.OnHeartBeat, this.OnHeartBeat, this)
        EventManager.Instance.addListener(EventType.OnUserStatusQuery, this.OnUserStatusQuery, this)
    }

    // private SOCKET_NOCONNECT(){
    //     this.OnGameServerDisconnect('SOCKET_NOCONNECT');
    // }
    
    // private SOCKET_CONNECT(){
    //     LogUtil.log('Socket已经连接上')
    //     this.OnGameServerConnect('SOCKET_CONNECT');
    // }

    // private SOCKET_RECONNECT(){
    //     LogUtil.log('Socket重新连接上')
    //     this.OnGameServerConnect('SOCKET_RECONNECT');
    // }

    // private SOCKET_CLOSE(){
    //     LogUtil.log('Socket已关闭')
    //     this.OnGameServerConnect('SOCKET_CLOSE');
    // }

    public ConnectToServer(): void {
        LogUtil.log("ConnectToServer() Start ");
        NetClient.Instance.Connect();
    }

    // public OnGameServerConnect(reason: string) {
    //     LogUtil.log("LoadingMesager::OnGameServerConnect : reason:" + reason, NetClient.Instance.Connected);
    //     if (NetClient.Instance.Connected) {
    //         this.connected = true;
    //         if (this.pendingMessage) {
    //             LogUtil.log('OnGameServerConnect SendMessage：' + this.pendingMessage)
    //             NetClient.Instance.SendMessage(this.pendingMessage);
    //             this.pendingMessage = null as unknown as NetMessage;
    //         }
    //     } else {
    //         if (!this.DisconnectNotify(reason)) {
    //             let errorMsg="网络错误，无法连接到服务器！\n" + reason;
    //             MessageBox.Show(errorMsg, "错误", MessageBoxType.Error);
    //         }
    //     }
    // }

    // public OnGameServerDisconnect(reason: string): void {
    //     LogUtil.log('OnGameServerDisconnect')
    //     this.DisconnectNotify(reason);
    //     return;
    // }

    // public DisconnectNotify(reason: string): boolean {
    //     if (this.pendingMessage) {
    //         let errorMsg = "服务器断开！\n ERROR:" + reason;
    //         MessageBox.Show(errorMsg , "错误", MessageBoxType.Error);
    //         return true;
    //     }
    //     return false;
    // }

    /**
     * 请求登录
     * @param user 
     * @param psw 
     */
    public SendLogin(user: string, psw: string): void {
        LogUtil.log("UserLoginRequest::user :" + user + " psw:" + psw);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.userLogin = new UserLoginRequest();
        message.Request.userLogin.userName = user;
        message.Request.userLogin.passward = psw;

        if (!NetClient.Instance.connected) {
            this.ConnectToServer();
        }
        NetClient.Instance.SendMessage(message);
        // if (NetClient.Instance.connected) {
        //     // this.pendingMessage = null as unknown as NetMessage;
        //     NetClient.Instance.SendMessage(message);
        // }
        // else {
        //     // this.pendingMessage = message;
        //     this.ConnectToServer();
        // }
    }

    /**
     * 登录响应
     * @param param 
     */
    public OnUserLogin(param: any): void {
        let response = param[0] as UserLoginResponse;
        LogUtil.log("OnLogin:{0} [{1}]", response.result, response.errormsg);

        if (response.result == Result.Success) {//登陆成功逻辑
            console.log('登陆成功逻辑')
            User.Instance.isLogin=true;
            User.Instance.user=response.user;
            SoundManager.Instance.PlayMusic(SoundDefine.Music_Login);
            director.loadScene('UIMain');
            // director.loadScene('Room');
            ChatManager.Instance.Init();
            ChatManager.Instance.InitPrivateUserList();

        }
        else
          MessageBox.Show(response.errormsg, "错误", MessageBoxType.Error);
    }

    /**
     * 请求注册
     * @param user 
     * @param psw 
     */
    public SendRegister(user: string, psw: string): void {
        LogUtil.log("UserRegisterRequest::user :" + user + " psw:" + psw);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.userRegister = new UserRegisterRequest();
        message.Request.userRegister.userName = user;
        message.Request.userRegister.password = psw;

        if (!NetClient.Instance.connected) {
            this.ConnectToServer();
        }
        NetClient.Instance.SendMessage(message);
        
        // if (NetClient.Instance.connected) {
        //     // this.pendingMessage = null as unknown as NetMessage;
        //     NetClient.Instance.SendMessage(message);
        // }
        // else {
        //     // this.pendingMessage = message;
        //     this.ConnectToServer();
        // }
    }

    /**
     * 注册响应
     * @param param 
     */
    public OnUserRegister(param: any): void {
        let response = param[0] as UserRegisterResponse;
        LogUtil.log("OnUserRegister:{0} [{1}]", response.result, response.errormsg);

        if (response.result == Result.Success)
        {
            //登录成功，进入角色选择
            console.log('注册成功')
            MessageBox.Show(response.errormsg, "注册成功", MessageBoxType.Information);
        }
        else
            MessageBox.Show(response.errormsg, "错误", MessageBoxType.Error);
    }

    /**
     * 请求解锁
     */
    public SendUnLock(cCharacterId: number): void {
        LogUtil.log("UnLockRequest::cCharacterId :" + cCharacterId);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.unLockReq = new UnLockRequest();
        message.Request.unLockReq.cCharacterId=cCharacterId;
        NetClient.Instance.SendMessage(message);
    }
    /**
     * 解锁响应
     */
    public OnUnLock(param: any): void {
        let response = param[0] as UnLockResponse;
        LogUtil.log("OnUnLock:{0} [{1}]", response.result, response.errormsg);
        if(response.result == Result.Success){ 
            MessageBox.Show(response.errormsg, "提示", MessageBoxType.Information);
            //更新客户端解锁角色
            if(response.unLockCharacter){
                User.Instance.user.unLockCharacters.push(response.unLockCharacter);
                EventManager.Instance.dispatch(EventType.UICharacterSelect_list); //刷新列表
            }
        }else{
            MessageBox.Show(response.errormsg, "提示", MessageBoxType.Error);
        }
    }
    
    /**
     * 请求英雄详情
     */
    public SendCharacterDetail(userId: number,tCharacterId: number): void {
        LogUtil.log("CharacterDetailRequest::userId："+userId+"，tCharacterId :" + tCharacterId);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.characterDetail = new CharacterDetailRequest();
        message.Request.characterDetail.userId=userId;
        message.Request.characterDetail.tCharacterId=tCharacterId;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 英雄详响应
     */
    public OnCharacterDetail(param: any): void {
        let response = param[0] as CharacterDetailResponse;
        LogUtil.log("OnCharacterDetail:{0} [{1}]", response.result, response.errormsg);
        EventManager.Instance.dispatch(EventType.OnCharacterDetail_UI,response); 
        if(response.result == Result.Failed){ 
            TipsManager.Instance.showTips(response.errormsg);
        }
    }

     /**
     * 请求切换英雄
     */
    public SendSwitchCharacter(tCharacterId: number): void {
        if(User.Instance.user.character?.tid==tCharacterId){
            MessageBox.Show("已选角色不能切换", "提示", MessageBoxType.Information);
            return;
        }
        LogUtil.log("SwitchCharacterRequest::tCharacterId :" + tCharacterId);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.switchCharacterReq = new SwitchCharacterRequest();
        message.Request.switchCharacterReq.tCharacterId=tCharacterId;
        NetClient.Instance.SendMessage(message);
    }

     /**
     * 切换英雄响应
     */
    public OnSwitchCharacter(param: any): void {
        let response = param[0] as SwitchCharacterResponse;
        LogUtil.log("OnSwitchCharacter:{0} [{1}]", response.result, response.errormsg);
        if(response.result == Result.Success){   //切换成功
            LogUtil.log("切换成功");
            MessageBox.Show(response.errormsg, "提示", MessageBoxType.Information);
            User.Instance.user.character=response.character;
            EventManager.Instance.dispatch(EventType.UICharacterSelect_list); 
            EventManager.Instance.dispatch(EventType.OnSwitchCharacter_UI); 
            SoundManager.Instance.PlaySound(SoundDefine.SFX_Success);
        }else{
            MessageBox.Show(response.errormsg, "提示", MessageBoxType.Information);
        }
    }

     /**
     * 请求提升属性
     */
    public SendAttrPromote(tCharacterId: number, attrPromoteType:AttrPromoteType): void {
        LogUtil.log("AttrPromoteRequest::tCharacterId :" + tCharacterId+"，attrPromoteType="+attrPromoteType);
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.attrPromote = new AttrPromoteRequest();
        message.Request.attrPromote.tCharacterId=tCharacterId;
        message.Request.attrPromote.attrPromoteType=attrPromoteType;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 提升属性响应
     */
    public OnAttrPromoteInfo(param: any): void {
        let response = param[0] as AttrPromoteInfoResponse;
        LogUtil.log("OnAttrPromoteInfo:{0} [{1}]", response.result, response.errormsg);
        if(response.result == Result.Success){   //成功
            LogUtil.log("成功");
            TipsManager.Instance.showTips(response.errormsg);
            EventManager.Instance.dispatch(EventType.OnAttrPromoteInfo_UI,response); 
            SoundManager.Instance.PlaySound(SoundDefine.SFX_Success);
        }else{
            TipsManager.Instance.showTips(response.errormsg);
        }
    }

     /**
     * 请求战力排行
     */
    public SendCombatPowerRanking(): void {
        LogUtil.log("CombatPowerRankingRequest");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.combatPowerRanking = new CombatPowerRankingRequest();
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 战力排行响应
     */
    public OnCombatPowerRanking(param: any): void {
        let response = param[0] as CombatPowerRankingResponse;
        LogUtil.log("CombatPowerRankingResponse");
        EventManager.Instance.dispatch(EventType.OnCombatPowerRanking_UI,response); 
    }

     /**
     * 请求关注/取消关注
     */
    public SendFollow(userId:number,isFollow:boolean): void {
        LogUtil.log("FollowRequest");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.followReq = new FollowRequest();
        message.Request.followReq.userId=userId;
        message.Request.followReq.isFollow=isFollow;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 关注/取消关注响应
     */
    public OnFollowRes(param: any): void {
        let response = param[0] as FollowResponse;
        LogUtil.log("FollowResponse");
        if(response.result == Result.Success){   //成功
            LogUtil.log("成功");
            TipsManager.Instance.showTips(response.errormsg);
            EventManager.Instance.dispatch(EventType.OnFollowRes_UI,response); 
        }else{
            TipsManager.Instance.showTips(response.errormsg);
        }
    }

    /**
     * 用户状态变更响应
     */
    public OnUserStatusChange(param: any): void {
        let response = param[0] as UserStatusChangeResponse; 
        LogUtil.log("UserStatusChangeResponse");
        EventManager.Instance.dispatch(EventType.OnUserStatusChange_UI,response); 
    }
    
     /**
     * 请求心跳
     */
    public SendHeartBeat(): void {
        LogUtil.log("HeartBeatRequest");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.heartBeatReq = new HeartBeatRequest();
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 心跳响应
     */
    public OnHeartBeat(param: any) {
        let response = param[0] as HeartBeatResponse;
        LogUtil.log("HeartBeatResponse");
        EventManager.Instance.dispatch(EventType.OnHeartBeat_UI, response); 
    }

    /**
     * 请求用户在线、离线状态查询 
     */
    public SendUserStatusQuery(userIds:Array<number>): void {
        LogUtil.log("SendUserStatusQuery");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.userStatusQueryReq = new UserStatusQueryRequest();
        message.Request.userStatusQueryReq.userIds=userIds;
        NetClient.Instance.SendMessage(message);
    }

    /**
     * 用户在线、离线状态响应
     */
    public OnUserStatusQuery(param: any) {
        let response = param[0] as UserStatusQueryResponse;
        LogUtil.log("OnUserStatusQuery");
        EventManager.Instance.dispatch(EventType.OnUserStatusQuery_UI,response.status); 
    }
}