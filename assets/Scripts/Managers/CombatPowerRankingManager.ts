import { UserService } from "../Services/UserService";
import { EventManager } from "../UI/Common/Event/EventManager";
import { EventType } from "../UI/Common/Event/EventType";
import { CombatPowerRankingResponse, FollowResponse, NUser, UserStatusChangeResponse } from "../../Proto/proto";
import { FollowManager } from "./FollowManager";

export class CombatPowerRankingManager{
    public static Instance:CombatPowerRankingManager=new CombatPowerRankingManager();
    public combatPowerRankingResponse=null as unknown as CombatPowerRankingResponse;

    public Init(){
        EventManager.Instance.addListener(EventType.OnCombatPowerRanking,this.OnCombatPowerRanking,this);
        EventManager.Instance.addListener(EventType.OnFollowRes_UI,this.OnFollowRes_UI,this);
        EventManager.Instance.addListener(EventType.OnUserStatusChange_UI,this.OnUserStatusChange_UI,this);
    }

     /**
     * 请求战力排行
     */
    public SendCombatPowerRanking(){
        UserService.Instance.SendCombatPowerRanking();
    }

    /**
     * 排行榜响应
     */
    private OnCombatPowerRanking(param:any){
        let response = param[0] as CombatPowerRankingResponse;
        this.combatPowerRankingResponse=response;
        EventManager.Instance.dispatch(EventType.CombatPowerRankingRefieshUI);
    }

    /**
     * 关注/取消关注响应
     */
    private OnFollowRes_UI(param: any){
        let response = param[0] as FollowResponse;
        //关注/取消关注成功更新数据
        if(!this.combatPowerRankingResponse){
            return;
        }
        let users=this.combatPowerRankingResponse.users;
        for(let i=0;i<users.length;i++){
            let user=users[i] as NUser;
            if(user.id==FollowManager.Instance.followUserId){ 
                user.isFollow=FollowManager.Instance.isFollow;
               break;
            }
        }
        EventManager.Instance.dispatch(EventType.CombatPowerRankingRefieshUI);
    }

    /**
     * 用户状态变更响应
     */
    private OnUserStatusChange_UI(param: any){
        let response = param[0] as UserStatusChangeResponse;
        //更新数据
        if(!this.combatPowerRankingResponse){
            return;
        }
        let users=this.combatPowerRankingResponse.users;
        for(let i=0;i<users.length;i++){
            let user=users[i] as NUser;
            for(let j=0; j < response.userStatusChanges.length; j++){
               let userStatusChange= response.userStatusChanges[j];
               if(user.id==userStatusChange.userId){
                   user.status=userStatusChange.status;
               }
            }
        }
        EventManager.Instance.dispatch(EventType.CombatPowerRankingRefieshUI);
    }

    
}