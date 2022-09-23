import { EventManager } from "../UI/Common/Event/EventManager";
import { EventType } from "../UI/Common/Event/EventType";
import proto from '../../Proto/proto.js';
import { LogUtil } from "../Log/LogUtil";
import { UserService } from "../Services/UserService";
const {FollowListResponse, NUser, UserStatusChangeResponse} = proto;

export class FollowManager{
    public static Instance:FollowManager=new FollowManager();

    public follows=null as unknown as Array<NUser>;
    public followUserId:number=0;  //关注/取消关注用户id
    public isFollow:boolean=false;  //是否关注

    public Init(){
        EventManager.Instance.addListener(EventType.OnFollowList, this.OnFollowList, this)
        EventManager.Instance.addListener(EventType.OnUserStatusChange_UI,this.OnUserStatusChange_UI,this);
    }

    /**
     * 我的关注列表响应
     */
    private OnFollowList(param: any): void {
        let response = param[0] as FollowListResponse;
        LogUtil.log("OnFollowList:{0}", response.follows);
        this.follows=response.follows as unknown as Array<NUser>;
        EventManager.Instance.dispatch(EventType.FollowListRefieshUI);
    }

    /**
     * 请求关注
     * @param userId 
     * @param isFollow 
     */
    public SendFollow(userId:number,isFollow:boolean){
        this.followUserId=userId;
        this.isFollow=isFollow;
        UserService.Instance.SendFollow(userId, isFollow);
    }

    /**
     * 用户状态变更响应
     */
    private OnUserStatusChange_UI(param: any){
        let response = param[0] as UserStatusChangeResponse;
        //更新数据
        if(!this.follows){
            return;
        }
        for(let i=0;i<this.follows.length;i++){
            let user=this.follows[i] as NUser;
            for(let j=0; j < response.userStatusChanges.length; j++){
               let userStatusChange= response.userStatusChanges[j];
               if(user.id==userStatusChange.userId){
                   user.status=userStatusChange.status;
               }
            }
        }
        EventManager.Instance.dispatch(EventType.FollowListRefieshUI);
    }
}