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
import { ItemManager } from "../Managers/ItemManager";
import { ChatManager } from "../Managers/ChatManager";
import { TipsManager } from "../UI/TipsManager";
import { UIManager } from "../UI/Common/UIManager";
import { UIMatchWait } from "../UI/Match/UIMatchWait";
import { LocalStorageUtil } from "../Utils/LocalStorageUtil";
import { RandomUtil } from "../UI/Battle/Utils/RandomUtil";
import { BattleGlobal } from "../UI/Battle/Utils/BattleGlobal";
import { BattleMode } from "../UI/Battle/enums/BattleMode";
const { NetMessage, NetMessageRequest, Result, ChatRequest, ChatMessage, ChatChannel, ChatResponse, StartMatchRequest, StartMatchResponse, MatchResponse } = proto;

export class MatchService{
    public static Instance: MatchService = new MatchService();

    private uiMatchWait:UIMatchWait=null;
    public Init() {
        EventManager.Instance.addListener(EventType.OnStartMatch, this.OnStartMatch, this)
        EventManager.Instance.addListener(EventType.OnMatchResponse, this.OnMatchResponse, this)
    }


    /**
     * 开始匹配请求
     */
    public SendStartMatch(): void {
        LogUtil.log("SendStartMatch");
        let message = new NetMessage();
        message.Request = new NetMessageRequest();
        message.Request.startMatchReq = new StartMatchRequest();
        NetClient.Instance.SendMessage(message);
    }


    /** 
     * 开始匹配响应
     */
    private async OnStartMatch(param: any): void {
        let response = param[0] as StartMatchResponse;
        LogUtil.log("OnStartMatch:{0}", response.result,response.errormsg);
        if (response.result == Result.Success){
            this.uiMatchWait = await UIManager.Instance.show("UIMatchWait") as UIMatchWait;  //打开匹配弹窗
        } else{
           TipsManager.Instance.showTips(response.errormsg);
        }
    }
    
    /**
     * 匹配响应
     */
    public OnMatchResponse(param: any){
        let response = param[0] as MatchResponse;
        LogUtil.log("OnMatchResponse:{0}", response.result,response.errormsg);
        TipsManager.Instance.showTips(response.errormsg);
        if(this.uiMatchWait){   //关闭匹配弹窗 
            this.uiMatchWait.Close();       
            this.uiMatchWait=null;
        }
        if (response.result == Result.Success){  //匹配成功
           LocalStorageUtil.RemoveItem(LocalStorageUtil.allFrameHandlesKey);  //清除上一次的帧操作
           BattleGlobal.battleMode = BattleMode.Battle;  //设置为对局模式
        
           User.Instance.room=response.room;
           RandomUtil.seed=response.room.randomSeed;   //设置战斗随机数种子
           director.loadScene('EnterGameLoad');
           SoundManager.Instance.PlayMusic(SoundDefine.Music_Select);
        } 
    }
}