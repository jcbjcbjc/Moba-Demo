
import { _decorator, Component, Node, game } from 'cc';
import { UIManager } from './UI/Common/UIManager';
import { UserService } from './Services/UserService';
import { DataManager } from './Managers/DataManager';
import { StatusService } from './Services/StatusService';
import { ItemService } from './Services/ItemService';
import { NetClient } from './Network/NetClient';
import { User } from './Models/User';
import { AuctionService } from './Services/AuctionService';
import { TipsService } from './Services/TipsService';
import { RoomService } from './Services/RoomService';
import { FollowManager } from './Managers/FollowManager';
import { ChatService } from './Services/ChatService';
import { DateUtil } from './Utils/DateUtil';
import { ChatManager } from './Managers/ChatManager';
import { MatchService } from './Services/MatchService';
import { BattleService } from './Services/BattleService';
import { NetClientBattle } from './Network/Battle/NetClientBattle';
import { Creature } from './UI/Battle/Enities/Creature';
import { FollowService } from './Services/FollowService';
import { CombatPowerRankingManager } from './Managers/CombatPowerRankingManager';
const { ccclass, property } = _decorator;

@ccclass('LoadingManager')
export class LoadingManager extends Component {
    
    onLoad(){
        DateUtil.InitExtend();
        User.Instance.isLogin=false;
        UIManager.Instance.Init();
        DataManager.Instance.Load();
        NetClient.Instance.Init();
        NetClientBattle.Instance.Init(); 
    }

    start () {
        UserService.Instance.Init();
        StatusService.Instance.Init();
        ItemService.Instance.Init();
        AuctionService.Instance.Init();
        TipsService.Instance.Init();
        RoomService.Instance.Init();
        FollowManager.Instance.Init();
        ChatService.Instance.Init();
        MatchService.Instance.Init();
        BattleService.Instance.Init();
        FollowService.Instance.Init();
        CombatPowerRankingManager.Instance.Init();
    }

}
