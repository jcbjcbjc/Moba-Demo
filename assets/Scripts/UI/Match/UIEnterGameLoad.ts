
import { _decorator, Component, Node, Sprite, Label, director } from 'cc';
import { User } from '../../Models/User';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { DataManager } from '../../Managers/DataManager';
import proto from '../../../Proto/proto.js';
import { BattleService } from '../../Services/BattleService';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import { LogUtil } from '../../Log/LogUtil';
import proto2 from '../../../Proto/Battle/proto.js';
import { NetConfig } from '../../Network/NetConfig';
import { NetClientBattle } from '../../Network/Battle/NetClientBattle';
import { BattleGlobal } from '../Battle/Utils/BattleGlobal';
import { BattleMode } from '../Battle/enums/BattleMode';
const { ccclass, property } = _decorator;
const { TeamType }=proto;
const { PercentForwardResponse }=proto2;

@ccclass('UIEnterGameLoad')
export class UIEnterGameLoad extends Component {

    @property(Sprite)
    public myAvatar1=null as unknown as Sprite;
    @property(Label)
    public myNickname1=null as unknown as Label;
    @property(Label)
    public myPercent1=null as unknown as Label;

    @property(Sprite)
    public myAvatar2=null as unknown as Sprite;
    @property(Label)
    public myNickname2=null as unknown as Label;
    @property(Label)
    public myPercent2=null as unknown as Label;

    @property(Sprite)
    public myAvatar3=null as unknown as Sprite;
    @property(Label)
    public myNickname3=null as unknown as Label;
    @property(Label)
    public myPercent3=null as unknown as Label;

    @property(Sprite)
    public enemyAvatar1=null as unknown as Sprite;
    @property(Label)
    public enemyNickname1=null as unknown as Label;
    @property(Label)
    public enemyPercent1=null as unknown as Label;

    @property(Sprite)
    public enemyAvatar2=null as unknown as Sprite;
    @property(Label)
    public enemyNickname2=null as unknown as Label;
    @property(Label)
    public enemyPercent2=null as unknown as Label;

    @property(Sprite)
    public enemyAvatar3=null as unknown as Sprite;
    @property(Label)
    public enemyNickname3=null as unknown as Label;
    @property(Label)
    public enemyPercent3=null as unknown as Label;
    private timer=null;
    private percent_:number=0;   //加载进度百分比
    private isGoToBattleScene:boolean=false; //是否已跳转战斗场景

    async start () {
        for(let i=0; i < 3; i++){
            this['myAvatar'+(i+1)].node.active = false;
            this['enemyAvatar'+(i+1)].node.active = false;
            this['myPercent'+(i+1)].node.active = false;
            this['enemyPercent'+(i+1)].node.active = false;
        }
        
       await this.InitTeamUser(User.Instance.room.my,TeamType.My);
       await this.InitTeamUser(User.Instance.room.enemy,TeamType.Enemy);
        //连接到战斗服务器
        let ipPortArr=User.Instance.room.ipPortStr.split(":");
        NetConfig.websocketBattleUrl='ws://'+ipPortArr[0]+':'+ipPortArr[2]+'/ws';
        console.log('战斗服务器地址：'+NetConfig.websocketBattleUrl)
        
        NetClientBattle.Instance.Connect();

        EventManager.Instance.addListener(EventType.OnPercentForward, this.OnPercentForward, this)
      if(BattleGlobal.battleMode == BattleMode.Battle){  //对局模式
        //上传加载进度，需要等所有用户资源都加载完成
        let this_=this;
        this.timer=setInterval(function(){
            console.log('uploadProgress percent_='+this_.percent_)
            BattleService.Instance.SendPercentForward(this_.percent_);
            
            if(this_.percent_ < 100){
                this_.percent_ += 100;
            }
        },500);
        
      }else if(BattleGlobal.battleMode == BattleMode.Live){  //观看直播模式
          //加载资源，只需要当前用户的资源加载完成即可
          //跳转战斗场景
          director.loadScene('Map01');
      }
    }
    /**
     * 初始化队伍信息
     * @param roomUserList 
     * @param teamType 
     */
    private async InitTeamUser(roomUserList:any,teamType:TeamType){
        let avatar=(teamType==TeamType.My?'myAvatar':'enemyAvatar');
        let nickname=(teamType==TeamType.My?'myNickname':'enemyNickname');

        for(let i=0; i < roomUserList.length; i++){
            let roomUser=roomUserList[i];
            console.log('roomUser.userId='+roomUser.userId)
            this[avatar+(i+1)].node.active = true;
            this[avatar+(i+1)].spriteFrame=await LoadResUtil.load_local_sprite(DataManager.Instance.characters[roomUser.cCharacterId].UpperBodyImg+'/spriteFrame');
            this[nickname+(i+1)].string=roomUser.nickName;
        }  
    } 

      /**
     * 进度转发响应
     */
    private OnPercentForward(param: any): void {
        let response = param[0] as PercentForwardResponse;
        console.log("OnPercentForward: percentForward="+ response.percentForward +'，allUserLoadSucess='+ response.allUserLoadSucess+'，isGoToBattleScene='+this.isGoToBattleScene);
        let userId=response.percentForward.userId;
        let percent=response.percentForward.percent;

        this.UpdateTeamUserPercent(userId, percent, TeamType.My);
        this.UpdateTeamUserPercent(userId, percent, TeamType.Enemy);
        //全部用户资源加载成功
        if(response.allUserLoadSucess && !this.isGoToBattleScene){
            this.isGoToBattleScene=true;
            director.loadScene('Map01');  //跳转战斗场景
        }
    }

    /**
     * 更新队伍用户加载进度
     * @param userId 
     * @param percent 
     * @param teamType 
     */
    private UpdateTeamUserPercent(userId:number,percent:number,teamType:TeamType){
       let roomUserList=teamType==TeamType.My?User.Instance.room.my:User.Instance.room.enemy;
       let percentName=(teamType==TeamType.My?'myPercent':'enemyPercent');
        for(let i=0; i < roomUserList.length; i++){
            let roomUser=roomUserList[i];
            // console.log(roomUser.userId +'=='+ userId +'==='+ (percentName+(i+1)))
           if(roomUser.userId == userId){
               this[percentName+(i+1)].string=percent+'%';
           } 
        } 
    }
 
    onDestroy(){
        EventManager.Instance.removeAll(this);
        clearInterval(this.timer);
    }
}

