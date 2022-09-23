import proto from '../../Proto/proto.js';
import { EventManager } from "../UI/Common/Event/EventManager";
import { EventType } from "../UI/Common/Event/EventType";
import { LocalStorageUtil } from "../Utils/LocalStorageUtil";
import { HashMap } from '../Utils/HashMap';
import { User } from '../Models/User';
import { MathUtil } from '../Utils/MathUtil';
import { ChatUserVo } from '../Vo/ChatUserVo';
import { UserService } from '../Services/UserService';
const { ChatMessage, ChatChannel, UserStatusChangeResponse, ChatRoomType } = proto;

export class ChatManager{
    public static Instance:ChatManager=new ChatManager();

    public compMessages=new Array<ChatMessage>();  //综合消息
    public roomMessages=new Array<ChatMessage>();  //房间消息
    public gameMessages=new Array<ChatMessage>();  //游戏消息
    public liveMessages=new Array<ChatMessage>();  //直播消息
    public privateMessages=new HashMap();  //私聊消息
    public chatUserVoList:Array<ChatUserVo>=[];
    private  userIds=new Array<number>();
    
    public compNum=0; //综合数量
    public privateUserNum=new HashMap();  //私聊用户未读消息数量
    public roomNum=0; //房间数量
    public currentChatChannel=-1;   //当前所在频道
    public currentSelectIdUserId=0;  //当前选中的用户
    public isOpenChatUI:boolean=false; //是否打开聊天UI
    private baoLiuNum:number=30;   //保留消息条数

    public Init(){
        EventManager.Instance.addListener(EventType.OnUserStatusQuery_UI, this.OnPrivateUserStatusQuery_UI, this);
        EventManager.Instance.addListener(EventType.OnUserStatusChange_UI,this.OnUserStatusChange_UI,this);
        //清空聊天列表
        this.compMessages=[];
        this.roomMessages=[];
        this.gameMessages=[];
        this.liveMessages=[];
        //获取缓存私聊信息
        // LocalStorageUtil.SetItem(LocalStorageUtil.privateMessagesKey,'');
        let privateMessagesValue=LocalStorageUtil.GetItem(LocalStorageUtil.privateMessagesKey+User.Instance.user.id);
        // console.log('privateMessagesValue='+privateMessagesValue)
        this.privateMessages.clear();
        if(privateMessagesValue){
            this.privateMessages.data =JSON.parse(privateMessagesValue).map || {};        
            this.DeletePrivateMsg();
        }
    }
    
    /**
     * 保留私聊用户消息到指定条数
     */
    private DeletePrivateMsg(){
        let privateMessages=this.privateMessages.data;
        for(let userId in privateMessages){
            let chatMessageList=this.privateMessages.get(userId);
            if(chatMessageList && chatMessageList.length > this.baoLiuNum){
                chatMessageList=chatMessageList.slice(chatMessageList.length-this.baoLiuNum);
                this.privateMessages.put(userId, chatMessageList);
            }
        }
    }

    /**
     * 添加消息
     * @param channel  频道 
     * @param messages 消息体
     */
    public AddMessages(channel:ChatChannel, messages:Array<ChatMessage>){
        if(!messages || messages.length == 0){
            return;
        }
        console.log('AddMessages channel='+channel+',messages='+JSON.stringify(messages))
        let redNumChangeFlag=false;
        for(let i=0;i<messages.length;i++){
           let chatMessage = messages[i];
           let redNumChangeFlag_=this.updateChatRedNum(channel, chatMessage);   //更新显示红点数量
           if(redNumChangeFlag_){
            redNumChangeFlag=true;
           }
            if(channel==ChatChannel.Comp){  //综合
                this.compMessages.push(chatMessage);
                continue;
            }
            if(channel==ChatChannel.RoomChat){  //房间
                console.log('AddMessages RoomChat type='+chatMessage.chatRoomType);
                if(chatMessage.chatRoomType == ChatRoomType.Room_){
                    this.roomMessages.push(chatMessage);
                }else if(chatMessage.chatRoomType == ChatRoomType.Game_){
                    this.gameMessages.push(chatMessage);
                }else if(chatMessage.chatRoomType == ChatRoomType.Live_){
                    this.liveMessages.push(chatMessage);
                }
                continue;
            }
            if(channel==ChatChannel.Private){  //私聊
                let userId=(chatMessage.fromId != User.Instance.user.id ? chatMessage.fromId : chatMessage.toId);
                console.log('AddMessages privateMessages fromId='+chatMessage.fromId+'，toId='+chatMessage.toId+'，currrent userId='+User.Instance.user.id+',userId='+userId)
                //加入私聊用户消息集合
                let chatMessageList=this.privateMessages.get(userId);
                if(!chatMessageList){
                    chatMessageList=new Array<ChatMessage>();
                    this.privateMessages.put(userId, chatMessageList);
                }
                chatMessageList.push(chatMessage);
                //更新私聊用户列表
               let chatUserVo=null as unknown as ChatUserVo;
               if(chatMessage.fromId != User.Instance.user.id){
                chatUserVo=new ChatUserVo(chatMessage.fromId,chatMessage.fromName,chatMessage.fromLevel,chatMessage.fromCCharacterId,true,chatMessage.time);
               }else{
                chatUserVo=new ChatUserVo(chatMessage.toId,chatMessage.toName,chatMessage.toLevel,chatMessage.toCCharacterId,true,chatMessage.time);
               }
                this.UpdatePrivateUserListOrder(chatUserVo);
                continue;
            }
        }
        if(channel==ChatChannel.Private){  //私聊，存储本地数据
            LocalStorageUtil.SetItem(LocalStorageUtil.privateMessagesKey+User.Instance.user.id, JSON.stringify(this.privateMessages));
        }
        EventManager.Instance.dispatch(EventType.OnChat_UI,channel,messages); 
        console.log('AddMessages redNumChangeFlag='+redNumChangeFlag);
        if(redNumChangeFlag){
           EventManager.Instance.dispatch(EventType.OnChangeRedNum);
        }
    }

    /**
     * 更新显示红点数量
     */
    private updateChatRedNum(channel:ChatChannel,chatMessage:ChatMessage):boolean{
        if(chatMessage.fromId==User.Instance.user.id){  //用户自己发送的消息
            return false;
        }
        console.log('updateChatRedNum currentChatChannel='+this.currentChatChannel+'，channel='+channel)
    //需要考虑当前选择的，不需要更新红点数量
        if(channel==ChatChannel.Comp){  //综合
            if(this.currentChatChannel==channel && this.isOpenChatUI){  //当前选择的频道
              return false;
            }
            this.compNum++;
        }else if(channel==ChatChannel.RoomChat){  //房间
            if(this.currentChatChannel==channel && this.isOpenChatUI){  //当前选择的频道
                return false;
            }
            this.roomNum++;
        }else if(channel==ChatChannel.Private){  //私聊
            if(this.currentChatChannel==channel && this.isOpenChatUI && this.currentSelectIdUserId==chatMessage.fromId){  //当前选择的频道
                return false; 
            }
            let privateNum=this.privateUserNum.get(chatMessage.fromId);
            if(!privateNum){
                privateNum=0;
            }
            privateNum++;
            this.privateUserNum.put(chatMessage.fromId,privateNum);
        }
        return true;
    }
    
    /**
     * 切换频道
     * @param channel  频道 
     * @param currentSelectIdUserId  当前选择用户id 
     */
    public SelectedChannel(channel:ChatChannel,currentSelectIdUserId?:number){
        console.log('SelectedChannel channel='+channel+'，currentSelectIdUserId='+currentSelectIdUserId)
        if(channel==ChatChannel.Comp){  //综合
            this.compNum=0;
        }else if(channel==ChatChannel.RoomChat){  //房间
            this.roomNum=0;           
        }else if(currentSelectIdUserId){  //私聊
            this.currentSelectIdUserId=currentSelectIdUserId;
            this.privateUserNum.put(currentSelectIdUserId, 0);
        }
        if(channel || channel==ChatChannel.Comp){
            this.currentChatChannel=channel; 
        }
        EventManager.Instance.dispatch(EventType.OnChangeRedNum);
    }

    /**
     * 获取频道未读消息数量
     * @param type  1、主页面  2、房间
     */
    public GetChannelChatRedNum(type:number):Array<number>{
        console.log('GetChannelChatRedNum currentChatChannel='+this.currentChatChannel+', type='+type)
      if(type==1){  //主界面
        if(this.currentChatChannel==ChatChannel.Comp){
            return [ChatChannel.Comp,this.compNum];
        }
        if(this.currentChatChannel==ChatChannel.Private){
            let privateNum=this.GetPrivateChatMsgNum();
            return [ChatChannel.Private,privateNum];
        }
      }else{  //房间
        if(this.currentChatChannel==ChatChannel.RoomChat){
            return [ChatChannel.RoomChat,this.roomNum];
        }
      }
      return [ChatChannel.Comp,this.compNum];
    }

    /**
     * 获取私聊聊天数量
     */
    public GetPrivateChatMsgNum():number{
        let privateUserMap=this.privateUserNum.data;
        let privateNum=0;
        for(let key in privateUserMap){
            privateNum += privateUserMap[key];
        }
        return privateNum;
    }

    /**
     * 查询私聊用户状态
     */
    public InitPrivateUserList(){
        this.userIds=[];
        let privateMessages=ChatManager.Instance.privateMessages.data;
        for(let userId in privateMessages){
            console.log('userId='+userId)
            if(userId){
                this.userIds.push(parseInt(userId));
            }
        }
        if(this.userIds && this.userIds.length > 0){
            console.log('SendUserStatusQuery userIds='+this.userIds)
          UserService.Instance.SendUserStatusQuery(this.userIds);
        }
    }

     /**
     * 查询私聊用户状态响应
     */
    private OnPrivateUserStatusQuery_UI(param:any){
        let statusList = param[0] as Array<boolean>;
        let chatUserVoList=new Array<ChatUserVo>();
        for(let i=0;i<this.userIds.length;i++){
            let userId=this.userIds[i];
            let status=(statusList && statusList.length > 0) ? statusList[i] : null;
            let chatMessageList = ChatManager.Instance.privateMessages.get(userId) as Array<ChatMessage>;
            if(chatMessageList && chatMessageList.length > 0){
               let chatMessage = chatMessageList[chatMessageList.length-1] as ChatMessage;
               let chatUserVo=null as unknown as ChatUserVo;
               if(chatMessage.fromId != User.Instance.user.id){
                chatUserVo=new ChatUserVo(chatMessage.fromId,chatMessage.fromName,chatMessage.fromLevel,chatMessage.fromCCharacterId,status,chatMessage.time);
               }else{
                chatUserVo=new ChatUserVo(chatMessage.toId,chatMessage.toName,chatMessage.toLevel,chatMessage.toCCharacterId,status,chatMessage.time);
               }
               chatUserVoList.push(chatUserVo);
            }
        }
        console.log('OnPrivateUserStatusQuery_UI='+JSON.stringify(chatUserVoList))
        //初始化用户列表
       this.chatUserVoList=chatUserVoList.sort(MathUtil.sortBy('time',false));  //发送日期倒序 
    }


    /**
     * 更新私聊用户列表
     */
    public UpdatePrivateUserListOrder(cuv:ChatUserVo){
        let isCzFlag=false;
        for(let i=0;i<this.chatUserVoList.length;i++){
            let chatUserVo=this.chatUserVoList[i];
            if(chatUserVo.userId==cuv.userId){ //已存在，和第一交换位置
                isCzFlag=true;
                let oneObj=this.chatUserVoList[0];
                this.chatUserVoList[0]=chatUserVo;
                this.chatUserVoList[i]=oneObj;
                break;
            }
        }
        if(!isCzFlag){ //不存在，加入第一个
            this.chatUserVoList.unshift(cuv);
        }
        console.log('UpdatePrivateUserListOrder isCzFlag='+isCzFlag+'，chatUserVoList length='+this.chatUserVoList.length)
    }

    /**
     * 用户状态变更响应
     */
    private OnUserStatusChange_UI(param: any){
        let response = param[0] as UserStatusChangeResponse;
        let privateUserStatusChangeFlag=false;  //用户状态变更标识
        for(let i=0;i<this.chatUserVoList.length;i++){
            let chatUserVo=this.chatUserVoList[i];
            for(let j=0; j < response.userStatusChanges.length; j++){
               let userStatusChange= response.userStatusChanges[j];
               if(chatUserVo.userId==userStatusChange.userId){
                   if(chatUserVo.status != userStatusChange.status){
                    privateUserStatusChangeFlag=true;
                   }
                  chatUserVo.status=userStatusChange.status;
               }
            }
        }

        if(privateUserStatusChangeFlag){
            EventManager.Instance.dispatch(EventType.OnPrivateUserStatusChange);
        }
    }

}