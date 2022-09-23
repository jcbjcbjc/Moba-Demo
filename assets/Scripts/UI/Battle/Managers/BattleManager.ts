import { EventManager } from '../../Common/Event/EventManager';
import proto from '../../../../Proto/Battle/proto.js';
import { OptType } from './../enums/OptType';
import { BattleService } from '../../../Services/BattleService';
import { NetConfig } from '../../../Network/NetConfig';
import { EventType } from '../../Common/Event/EventType';
import { LogUtil } from '../../../Log/LogUtil';
import { HashMap } from '../../../Utils/HashMap';
import { LoadResUtil } from '../../../Utils/LoadResUtil';
import { User } from '../../../Models/User';
import { DataManager } from '../../../Managers/DataManager';
import { TeamType } from '../../../../Proto/proto';
import { CreatureManager } from './../Managers/CreatureManager';
import { TeamType2 } from './../enums/TeamType2';
import { MathUtil } from '../../../Utils/MathUtil';
import { _decorator, instantiate, Node, Component, Vec3, AnimationComponent, Prefab, UITransform, game } from 'cc';
const { ccclass, property } = _decorator;
import { GameStatus } from '../enums/GameStatus';
import { CharacterManager } from './CharacterManager';
import { LogicRenderConvert } from '../Utils/LogicRenderConvert';
import { LocalStorageUtil } from '../../../Utils/LocalStorageUtil';
import { UIMinimapManager } from '../Minimap/UIMinimapManager';
import { Creature } from '../Enities/Creature';
import { BattleContext } from '../Models/BattleContext';
import { SpawnMonManager } from './SpawnMonManager';
import { CollisionCheckManager } from './CollisionCheckManager';
import { BattleGlobal } from '../Utils/BattleGlobal';
import { SkillTipsType } from '../enums/SkillTipsType';
import { SkillTipsSize } from '../Vo/SkillTipsSize';
import { TargetType } from '../enums/TargetType';
import { AniState } from '../enums/AniState';
import { BattleMode } from '../enums/BattleMode';
import { HandlerFrameResult } from '../enums/HandlerFrameResult';
import { UIBattle } from '../UIBattle';
import { UIGameLoadIn } from '../UIGameLoadIn';
const {FrameHandle,FrameHandleResponse,RepairFrameResponse,LiveFrameResponse }  = proto;

@ccclass('BattleManager')
export class BattleManager extends Component {

    public static Instance:BattleManager=null;

    public frameHandle = new FrameHandle();  //玩家帧操作对象
    public handleFrameId:number=-1;  //已经处理的帧
    public executeFrameId:number=-1;  //已经执行的帧
     //key：帧id  value：玩家操作集合
     public allFrameHandles: HashMap = new HashMap();   //所有的帧操作
     private timer=null;
     private recProTimer=null;
     private handleFrameTimer=null;
     public gameStatus=GameStatus.None;  //游戏状态
     
     private repairWaitFrameCount:number=5*4;  //补帧等待帧数
     private currentRepairFrame:number=0;  //当前执行补帧
     
    //友方、敌方位置,友方=》蓝队  敌方=》红队
    @property([Node])
    public MyTeam=[];
    @property([Node])
    public EnemyTeam=[];
    @property(Node)
    public camera:Node=null;
    @property(Node)
    public spawnMonsterNode:Node=null;   //怪物节点
    @property(Node)
    public npcMoveWayNode:Node=null;   //npc路径节点
    @property([Prefab])
    public skillTipsPrefabs=[];   //技能提示prefab
    @property(Node)
    public MyBattleItemNode:Node=null;  //我的战斗道具存放节点
    @property(Node)
    public AllBattleEffectsNode:Node=null;  //所有战斗特效存放节点
    @property(UIBattle)
    public uiBattle:UIBattle=null;  

    @property(UIGameLoadIn)
    public uiGameLoadIn:UIGameLoadIn=null;  



    public currentCharacter:Creature=null;  //当前角色
    public camCharDis:number=0;  // 相机到主角的距离
    public newFrameId:number = -1;  //最新帧
    // public isRecProFlag:boolean = true; //是否恢复进度中
    private recordUserTimer=null;
    private liveNotExecuteFrameCount:number = 0;  //直播未执行帧数
    public isLookAtCharacterFlag:boolean = true; //是否跟随主角
    private lastReceiveFrameTime:number = 0; //最后接收帧时间
    private lastCheckFrameTime:number = 0; //最后抽查时间
    public isAddListener:boolean = false; //是否开始监听事件

    Clear () {
        game.setFrameRate(60);
        CharacterManager.Instance.Clear();
        CreatureManager.Instance.Clear();
        CollisionCheckManager.Instance.Clear();
        BattleGlobal.clear(); //清空对战数据
        console.log('BattleManager Clear')
    }

   async start(){
       this.uiGameLoadIn.setMsg('游戏拼命加载中...');
       this.uiGameLoadIn.show();

        BattleManager.Instance=this;

        this.isAddListener = false;
       this.Clear();
       console.log('BattleManager start creatureMap len：'+CreatureManager.Instance.creatureMap.values().length)
        //创建角色
        await CharacterManager.Instance.CreateCharacter(TeamType2.Blue);  //蓝队
        await CharacterManager.Instance.CreateCharacter(TeamType2.Red);  //红队
        //创建怪物
        await SpawnMonManager.Instance.Init();
        //小地图初始化
        UIMinimapManager.Instance.Init();  
        //初始化技能提示模型
        for(let i=0; i < this.skillTipsPrefabs.length; i++){
            let node = instantiate(this.skillTipsPrefabs[i]) as Node;
            BattleGlobal.skillTipsMap.put(node.name, node);
        } 

        this.gameStatus=GameStatus.GameIn;
        EventManager.Instance.dispatch(EventType.OnBattleGameIn);

        let allFrameHandlesStr = LocalStorageUtil.GetItem(LocalStorageUtil.allFrameHandlesKey);
        if(allFrameHandlesStr){  //恢复进度
            console.log('恢复进度')
           this.allFrameHandles.data = JSON.parse(allFrameHandlesStr).map || {};
        //    let this_=this;
        //    this.recProTimer=setInterval(async function(){
         //    await this_.IntervalProgressRecovery(this_);
        //   }, 0);  //2
        }
         
        let this_=this;
        this.handleFrameTimer=setInterval(async function(){ 
           //处理帧操作
          let handlerFrameResult = await this_.OnHandlerFrame();
          //补帧效验
          this_.RepairFrameRequest(handlerFrameResult);
        }, 0);

         this.StartMonitorFrame();
    }

    /**
     * 进度恢复
     */
    // private async IntervalProgressRecovery(this_:this){ 
    //     let handlerFrameResult = await this_.OnHandlerFrame(); 
    //     if(handlerFrameResult == HandlerFrameResult.NoFrameData){  //处理帧操作，处理结束
    //         console.log('进度恢复完成，handleFrameId='+this_.handleFrameId)
    //         clearInterval(this_.recProTimer);
    //        await this_.StartMonitorFrame();
    //     } 
    // }

    /**
     * 开始监听帧事件
     */
    private StartMonitorFrame(){
        console.log('StartMonitorFrame')
        this.isAddListener = true;
          let this_=this;
        if(BattleGlobal.battleMode == BattleMode.Battle){    //对局模式
          this.timer=setInterval(function(){
              this_.CapturePlayerOpts();
          },NetConfig.frameTime)
        }else if(BattleGlobal.battleMode == BattleMode.Live){  //观看直播模式
          
        }
        //记录用户请求
        this.recordUserTimer=setInterval(function(){
            if(this_.handleFrameId >= 0 ){
                clearInterval(this_.recordUserTimer)
                // this_.isRecProFlag = false;
            }
            BattleService.Instance.SendRecordUser();
        }, 1000)
        this.uiGameLoadIn.hide();
    }

    /**
     * 直播帧响应
     * @param param 
     */
    public OnLiveFrame(param: any){
        // let response = param[0] as LiveFrameResponse;
        let response = param;
        let liveFrames = response.liveFrames;
        for(let i=0; i < liveFrames.length; i++){
            let liveFrame = liveFrames[i];
            this.allFrameHandles.put(liveFrame.frame, liveFrame.frameHandles || []);
        }
        // this.liveNotExecuteFrameCount += liveFrames.length;
    }

    /**
     * 帧操作响应
     */
    public  OnFrameHandle(param: any) {
        //计算接收两帧之间的时间间隔
        let currentFrameTime:number = new Date().getTime(); 
        if(this.lastReceiveFrameTime != 0 && currentFrameTime - this.lastCheckFrameTime > 3000){  //每3秒抽查下
           let ms = currentFrameTime - this.lastReceiveFrameTime;
           this.uiBattle.updateFrameTime(ms);
           this.lastCheckFrameTime = currentFrameTime;
        }
        this.lastReceiveFrameTime = currentFrameTime;

        
        let response = param;
       
        let frameId=response.frame;
        
        this.newFrameId=frameId;

        if(this.newFrameId - 50 > this.handleFrameId){
          this.uiGameLoadIn.setMsg('游戏进度恢复中...');
          this.uiGameLoadIn.show();            
        } else{
          this.uiGameLoadIn.hide();            
        }
        
        //已经处理的帧
        if(frameId <= this.handleFrameId){
            return;
        }
        this.allFrameHandles.put(frameId,response.frameHandles || []); //收到帧保存起来
        
    }

    /**
     * 补帧效验
     * @param handlerFrameResult 
     * @return  是否补帧了
     */
    private RepairFrameRequest(handlerFrameResult:HandlerFrameResult):boolean{
        if(handlerFrameResult == HandlerFrameResult.NoFrameData){
            if(this.currentRepairFrame <= 0){
                //补帧请求
                let start=this.handleFrameId+1;
                let end=this.GetEndFrameId(start);
                if(start >= end){
                    return;
                }
                console.log('补帧请求 start='+start+'，'+end+'，handleFrameId='+this.handleFrameId)
                BattleService.Instance.SendRepairFrame(start, end);
                this.currentRepairFrame=this.repairWaitFrameCount;
            }else{
                this.currentRepairFrame--;
            }
            return true;
        }
        this.currentRepairFrame=0;
        return false;
    }

    /**
     * 获取补帧结束帧
     * @param startFrameId 起始帧
     */
    private GetEndFrameId(startFrameId:number):number{
        let frameIds = this.allFrameHandles.keys();
        let minFrameId:number = undefined; //最小帧
        for(let i=0; i < frameIds.length; i++){
            let frameId = parseInt(frameIds[i])-1;
            if(frameId > startFrameId && (!minFrameId || minFrameId > frameId)){
              minFrameId=frameId;
            }
        }
        return minFrameId || startFrameId;
     }

    /**
     * 补帧响应
     */
    public OnRepairFrame(param: any): void {
        // let response = param[0] as RepairFrameResponse;
        let response = param;
        // console.log("OnRepairFrame:{0}", JSON.stringify(response.repairFrames));
        let len=response.repairFrames.length;
        for(let i=0; i < len; i++){
            let repairFrame=response.repairFrames[i];
            this.allFrameHandles.put(repairFrame.frame, repairFrame.frameHandles || []);
        }
        
    }


    /**
     * 处理帧操作
     */
    private async OnHandlerFrame():HandlerFrameResult{
        let frameId=this.handleFrameId+1;
        //获取帧操作集合
        let frameHandles=this.allFrameHandles.get(frameId);
        // console.log(this.allFrameHandles.length+'==='+frameId)
        // console.log('OnHandlerFrame='+frameId+'，'+frameHandles)
        if(!frameHandles){  //无帧数据
            return HandlerFrameResult.NoFrameData;
        }
        if(this.executeFrameId >= frameId){
            console.log('不能重复执行，已经执行的帧：'+this.executeFrameId)
            return HandlerFrameResult.NotRepeatFrame;
        }
        this.executeFrameId = frameId;
        // console.log('frameId='+frameId);
        // console.log('同步英雄')
        //同步英雄
        let characterList = CharacterManager.Instance.characterList;
        for(let i=0; i < characterList.length; i++){  //遍历所有英雄
            let character = characterList[i];
            let frameHandle:FrameHandle = null; 
            for(let j=0; j < frameHandles.length; j++){  //遍历所有操作
                let fh=frameHandles[j];
                if(fh.userId == character.user.id){
                    frameHandle = fh;
                    break;
                } 
            }

           let isMove = (character.aniState == AniState.Move); //character.GetAnim(AniState.Move);
        //    console.log('isMove='+isMove)
            // let animationState = character.animationComponent.getState(AniState[AniState.Move]);
            if(!frameHandle){  //用户无操作
                if(character.notHandleFrameCount > 3){
                    // if(animationState.isPlaying){
                    //     console.log('用户id：'+character.user.id+'，停止动画')
                    //     animationState.stop();
                    //     character.animationComponent.play(AniState[AniState.Idle]);
                    // }
                    if(isMove){
                        console.log('用户id：'+character.user.id+'，停止动画')
                        character.SetAnim(AniState.Idle, true);
                    }
                    character.notHandleFrameCount = 0;
                }else{
                    character.notHandleFrameCount++;
                }
            }else{
                character.notHandleFrameCount = 0;
                //摇杆操作
              if(frameHandle.opt == OptType.Rocker){
                //   console.log('摇杆操作')
                let angle = frameHandle.optValue1 || 0;                
                character.RotateHandle(angle);
                    
                    let logicPosition = character.logicPosition;
                    let rockerSpeedVo = DataManager.Instance.rockerSpeeds[character.teamType2==TeamType2.Red ? angle + 180 : Math.abs(angle)];
                    if(!rockerSpeedVo){
                        console.log('rockerSpeedVo不存在!'+frameHandle.opt+'==='+angle +'=='+(character.teamType2==TeamType2.Red ? angle + 180 : Math.abs(angle)))
                        continue;
                    }
                    // console.log('Speed='+character.attributes.Speed)
                    let vx=logicPosition.x+((character.teamType2==TeamType2.Red ? -1 : 1)*rockerSpeedVo.x*character.attributes.Speed);
                    let vz=logicPosition.z+((character.teamType2==TeamType2.Red ? -1 : 1)*rockerSpeedVo.y*character.attributes.Speed);
                    // console.log('forward x:'+forward.x+'，z:'+forward.z+'，speed:'+character.user.character.speedValue)
                    
                    character.LogicToRenderPosition(vx, logicPosition.y, vz);

                //    if(!animationState.isPlaying){  //非播放状态
                //       animationState.play();
                //    }
                if(!isMove){   //非播放状态
                    console.log('Move 执行='+AniState[AniState.Move])
                    character.SetAnim(AniState.Move, true);
                }
              }else if(frameHandle.opt == OptType.Skill){  //攻击
                console.log('攻击服务器确认')
                let skillId = frameHandle.optValue1;
                let angle = frameHandle.optValue4;
                let skill = character.SkillMgr.GetSkill(skillId);
                let context = new BattleContext(skillId, character);

                if(skill.Define.CastTarget.toString() != TargetType[TargetType.RangeTarget]){  //非范围目标
                  context.dirDegree = character.teamType2==TeamType2.Blue ? angle + 180 : (angle-180 < 0 ?  angle-180 + 360 : angle-180);
                  console.log('dirDegree='+(context.dirDegree)+'，character angle='+character.logicRotation.y)
                  //角色旋转
                  character.RotateHandle(context.dirDegree);
                }

                if(skill.Define.CastTarget.toString() == TargetType[TargetType.SelectedRange]){  //选择范围
                   context.positionX = frameHandle.optValue2;
                   context.positionZ = frameHandle.optValue3;
                }
                // else if(skill.Define.CastTarget.toString() == TargetType[TargetType.StraightLine] || 
                //          skill.Define.CastTarget.toString() == TargetType[TargetType.Dir] || 
                //          skill.Define.CastTarget.toString() == TargetType[TargetType.Sector]){ //直线、方向、扇形
                // }

                character.CastSkill(context , skill);
              }else{
                // if(animationState.isPlaying){
                //     animationState.stop();
                //     character.animationComponent.play(AniState[AniState.Idle]);
                // }
                if(isMove){
                    console.log('用户id：'+character.user.id+'，停止动画')
                    character.SetAnim(AniState.Idle, true);
                }
              }
            }
        }
        
       // console.log(frameId)
        // 同步生物逻辑
       let creatureList = CreatureManager.Instance.creatureMap.values();
       for(let i=0;i<creatureList.length;i++){
          let creature = creatureList[i] as Creature;
          creature.LogicUpdate(frameId);
       }
       //同步刷怪管理器
       await SpawnMonManager.Instance.LogicUpdate(frameId);

       this.handleFrameId=frameId;   //更新已经同步的帧

       //缓存帧数据
        if(frameId % 15 == 0){
            LocalStorageUtil.SetItem(LocalStorageUtil.allFrameHandlesKey, JSON.stringify(this.allFrameHandles)); 
        }
        return HandlerFrameResult.Success;
    }

    private characterWorldPosition:Vec3 = new Vec3();
    /**
     * 相机跟随主角
     */
    public CameraLookAtCharacter(dt:number){
        //摄像机跟随自己
        if(this.currentCharacter){
            let yValue = 8;
            let zValue = 10;
            let yAngle = 0;
            let xAngle = -35;
            let zAngle = 0;
            if(this.currentCharacter.teamType2 == TeamType2.Red){   //红队
                zValue = -zValue;
                yAngle = 180;
                // zAngle = 180;
            }
            //y轴旋转
            this.camera.setRotationFromEuler(xAngle, yAngle, zAngle);

            this.currentCharacter.node.parent.getWorldPosition(this.characterWorldPosition);
            this.characterWorldPosition.set(this.characterWorldPosition.x, this.characterWorldPosition.y+yValue, this.characterWorldPosition.z+zValue);
            //相机位置=》插值
            // this.camera.setWorldPosition(MathUtil.lerp(this.camera.worldPosition, this.characterWorldPosition, dt * 1000, NetConfig.frameTime));
            this.camera.setWorldPosition(this.characterWorldPosition);
            
            // console.log('scale='+this.camera.scale)
            //相机和主角的距离
            this.camCharDis = Vec3.distance(this.currentCharacter.node.worldPosition, this.camera.worldPosition);
            // console.log('cameraPos='+this.camera.worldPosition+'，cameraRotation='+this.camera.rotation.x+','+this.camera.rotation.y+','
            // +this.camera.rotation.z+','+this.camera.rotation.w)
        }
    }

    /**
     * 采集玩家操作
     */
    public CapturePlayerOpts():void{
         //无操作
         if(this.frameHandle.opt==OptType.None){
            return;
        }
        // LogUtil.log(this.frameHandle);
        //发送操作
        BattleService.Instance.SendFrameHandle(this.frameHandle);
        this.frameHandle.opt=OptType.None;
        this.frameHandle.optValue1=0;
        this.frameHandle.optValue2=0;
        this.frameHandle.optValue3=0;
    }

    update(dt:number){
      //更新战斗存放道具节点
      if(this.currentCharacter) {
        this.MyBattleItemNode.setWorldPosition(this.currentCharacter.renderPosition);
      }
        CreatureManager.Instance.update(dt);
        
        if(BattleGlobal.battleMode == BattleMode.Battle || this.isLookAtCharacterFlag){    //对局模式
          this.CameraLookAtCharacter();
        }

        SpawnMonManager.Instance.update(dt);
    }

    public onDestroy(){
        console.log('BattleManager onDestroy')
        EventManager.Instance.removeAll(this);
        clearInterval(this.timer);
        clearInterval(this.recProTimer);
        clearInterval(this.recordUserTimer);
        clearInterval(this.handleFrameTimer);
        BattleManager.Instance=null;
    }
}