import { TeamType2 } from "../enums/TeamType2";
import { Node, Vec3, lerp, AnimationComponent, animation } from "cc";
import { LogicRenderConvert } from "../Utils/LogicRenderConvert";
import { MathUtil } from "../../../Utils/MathUtil";
import { NetConfig } from "../../../Network/NetConfig";
import { UIHpBar } from "../UIHpBar";
import { SkillManager } from "../Managers/SkillManager";
import { BattleContext } from "../Models/BattleContext";
import { BuffDefine } from "../../../Data/BuffDefine";
import { BuffManager } from "../Managers/BuffManager";
import { CharacterDefine } from "../../../Data/CharacterDefine";
import { DataManager } from "../../../Managers/DataManager";
import { DamageInfo } from "../Vo/DamageInfo";
import { SkillResult } from "../enums/SkillResult";
import { BattleState } from "../enums/BattleState";
import { EffectManager } from "../Managers/EffectManager";
import proto from "../../../../Proto/proto.js";
import { CreatureType } from "../enums/CreatureType";
import { BattleManager } from "../Managers/BattleManager";
import { SpawnRuleDefine } from "../../../Data/SpawnRuleDefine";
import { UIWorldElementManager } from "../UIWorldElementManager";
import { CollisionCheckManager } from "../Managers/CollisionCheckManager";
import { AiManager } from "../Managers/AiManager";
import { Skill } from "../Models/Skill";
import { Attributes } from "../Attribute/Attributes";
import { EffectType } from "../Effects/EffectType";
import { FXManager } from "../Effects/FXManager";
import { EntityEffectManager } from "../Effects/EntityEffectManager";
import { AnimationEventController } from "../Effects/AnimationEventController";
import { AniState } from "../enums/AniState";
import { Bullet } from "../Models/Bullet";
import { PopupType } from "../enums/PopupType";
const { NUser, TeamType } = proto;

export class Creature {

    public entityId: number;  //实体id
    public characterDefine: CharacterDefine;  //角色配置
    public spawnRuleDefine: SpawnRuleDefine;  //刷怪配置 
    public teamType2: TeamType2; //队伍类型
    public node: Node;  //节点对象
    public logicPosition: Vec3 = new Vec3();   //逻辑位置
    public renderPosition: Vec3 = new Vec3();   //渲染位置
    public SkillMgr: SkillManager;
    public BuffMgr: BuffManager;
    public BattleState: BattleState;
    public EffectMgr: EffectManager;
    public IsDeath: boolean = false;  //是否死亡
    public deathFrameId: number = 0; //死亡逻辑帧数
    public birthPosition: Vec3 = new Vec3();  //出生位置
    public birthRotation: Vec3 = new Vec3();  //出生方向
    public logicRotation: Vec3 = new Vec3();   //逻辑方向
    public creatureType: CreatureType;   //生物类型
    public hpBarNode: Node;  //血条节点
    public _amend:Vec3 = new Vec3();  //修正值 
    private collisionTempVec3:Vec3 = new Vec3();  //碰撞临时坐标
    public aniState:AniState;  //动画状态

    /** 组件 */
    // public animationComponent: AnimationComponent; //动画组件
    public EntityEffectMgr:EntityEffectManager;  // 特效管理器组件
    public animationController: animation.AnimationController;  //动画控制器
    /**角色属性 */
    public user: NUser = null;
    public notHandleFrameCount: number = 0;  //无操作帧数
    public attributes=new Attributes();
    /**怪物属性 */
    public isGuardCart:boolean=false;  //是否守护镖车
    public soldierCardDir:number=0;  //守护镖车有效，小兵在镖车的方向
    public AiMgr: AiManager;  //ai管理器
    public dir:number=0;  //距离

    constructor(teamType2: TeamType2, node: Node, define: CharacterDefine, user: NUser, creatureType: CreatureType, birthPosition: Vec3 = null, birthRotation: Vec3 = null) {
        //初始化基础属性
        this.attributes.InitBasicAttributes(define, user, creatureType);

        this.user = user;
        this.creatureType = creatureType;
        this.teamType2 = teamType2;
        this.node = node;
        this.characterDefine = define;
        // this.animationComponent = node.getComponent(AnimationComponent);
        this.EntityEffectMgr = node.getComponent(EntityEffectManager);
        this.animationController = node.getComponent(animation.AnimationController);

        //出生位置
        if (birthPosition) {
            this.birthPosition = birthPosition;
            this.node.parent.setWorldPosition(birthPosition);
        } else {
            this.node.parent.getWorldPosition(this.birthPosition);
        }
        //初始化逻辑位置、方向
        node.parent.getWorldPosition(this.renderPosition);
        LogicRenderConvert.RenderToLogic_TwoVec3(this.logicPosition, this.renderPosition);

        node.parent.getRotation().getEulerAngles(this.logicRotation);
        //出生方向
        if (birthRotation) {
            this.birthRotation = birthRotation;
            node.parent.setRotationFromEuler(birthRotation);
        } else {
            this.birthRotation.set(this.logicRotation.x, this.logicRotation.y, this.logicRotation.z);
        }

        this.SkillMgr = new SkillManager(this);
        this.BuffMgr = new BuffManager(this);
        this.EffectMgr = new EffectManager(this);

        this.AiMgr = new AiManager(this);
    }
  
    /**
     * 获取碰撞临时坐标，避免值改变影响原坐标
     */
    public get CollisionTempVec3():Vec3{
        this.collisionTempVec3.set(this.logicPosition.x, this.logicPosition.y, this.logicPosition.z);
        return this.collisionTempVec3;
    }

    /**
     * 逻辑转渲染位置
     */
    public LogicToRenderPosition(logicX: number, logicY: number, logicZ: number) {
        this.logicPosition.set(logicX, logicY, logicZ);
        LogicRenderConvert.LogicToRender_TwoVec3(this.logicPosition, this.renderPosition)
        // this.node.parent.setWorldPosition(this.renderPosition);
        // console.log('logicPosition='+this.logicPosition+'，renderPosition='+this.renderPosition)
    }


    private nodeCurrentPosition = new Vec3();
    public update(dt: number) {
        // console.log('dt='+dt)
        //插值位置
        if (this.node.parent) {
            this.node.parent.getWorldPosition(this.nodeCurrentPosition);
            this.node.parent.setWorldPosition(MathUtil.lerp(this.nodeCurrentPosition, this.renderPosition, dt * 1000, NetConfig.frameTime));
        }
    }

    public CastSkill(context: BattleContext, skill: Skill) {
        context.Result = skill.Cast(context);
        if (context.Result == SkillResult.Ok) {
            this.BattleState = BattleState.InBattle;
        }
    }

    public DoDamage(damage: DamageInfo, source: Creature) {
        this.BattleState = BattleState.InBattle;
        this.attributes.HP -= damage.Damage;
        if (this.attributes.HP < 0) {
            this.DoDeath();
            damage.WillDead = true;
        }
        this.OnDamage(damage, source);
        
        UIWorldElementManager.Instance.ShowPopupText(PopupType.Damage, this, -damage.Damage, damage.Crit, damage.isBuff);
    }

    public OnDamage(damage: DamageInfo, source: Creature) {

    }

    /**
     * 逻辑更新
     */
    public LogicUpdate(frameId: number) {
        this.SkillMgr.LogicUpdate(frameId);
        this.BuffMgr.LogicUpdate();
        this.AiMgr.LogicUpdate();
    }

    public Distance(target: Creature): number {
        let dis = Math.floor(MathUtil.GetDistance(this.logicPosition.x, this.logicPosition.z, target.logicPosition.x, target.logicPosition.z));
        return dis;
    }

    public Distance2(position: Vec3): number {
        let dis = Math.floor(MathUtil.GetDistance(this.logicPosition.x, this.logicPosition.z, position.x, position.z));
        return dis;
    }

    public Distance3(positionX:number, positionZ:number): number {
        let dis = Math.floor(MathUtil.GetDistance(this.logicPosition.x, this.logicPosition.z, positionX, positionZ));
        return dis;
    }

    public AddBuf(context: BattleContext, buffDefine: BuffDefine) {
        this.BuffMgr.AddBuf(context, buffDefine);
    }

    /**
     * 死亡
     */
    public DoDeath() {
        this.SetAnim(AniState.Death, true);
        this.IsDeath = true;
        this.deathFrameId = BattleManager.Instance.executeFrameId;
        UIWorldElementManager.Instance.RemoveCharacterHpBar(this);
    }

    /**
     * 移动处理
     */
    public MoveHandle(){
        CollisionCheckManager.Instance.CollisionCheck(this);
    }

    /**
     * 旋转处理
     * @param angle 角度
     */
    public RotateHandle(angle:number){
        // if(!this.node.parent){
        //    console.log('RotateHandle: character id='+this.characterDefine.ID+'，node id='+this.node.uuid+'，teamType2='+this.teamType2)
        // }
        //更新方向逻辑
        this.logicRotation.y=angle;
        //更新方向渲染
        this.node.parent.setRotationFromEuler(0, angle, 0);
    }

    public  GetPopupOffset():Vec3
    {
        return new Vec3(0, this.characterDefine.Height, 0);
    }

    public GetHitOffset():Vec3
    {
      return new Vec3(0, this.characterDefine.Height * 0.8, 0);
    }
    
    public PlayEffect(type:EffectType, name:string, target:Creature,  duration:number = 0)
    {
        console.log('EntityEffectMgr='+this.EntityEffectMgr+'，type='+type+'，name='+name+
        '，height='+target.GetHitOffset()+'，duration='+duration)

        if(type==EffectType.Position || type == EffectType.Hit)
        {
            FXManager.Instance.PlayEffect(type, name, target.node, target.GetHitOffset(), duration);
        }
        else
        {
           this.EntityEffectMgr.PlayEffect2(type, name, target.node, target.GetHitOffset(), duration);
        }
    }

    public PlayEffect2(type:EffectType,  name:string,  position:Vec3,  duration:number = 0)
    {
        if (type == EffectType.Position || type == EffectType.Hit)
            FXManager.Instance.PlayEffect(type, name, null, position, duration);
        else
            this.EntityEffectMgr.PlayEffect2(type, name, null, position, duration);
    }

    public PlayEffectBulletRealCheck(type:EffectType, name:string, bullet:Bullet)
    {
        this.EntityEffectMgr.PlayEffectBulletRealCheck(type, name, bullet);
    }

    /**
     * 设置动画状态
     * @param entityState  动画状态 
     * @param value  值
     */
    public SetAnim(aniState:AniState, value:any){
        if(value){
          this.aniState = aniState;
        }
        if(!this.animationController){
            return;
        }
        this.animationController.setValue(AniState[aniState], value);
        if(aniState == AniState.Move){
          this.MoveHandle();
        }else if(aniState == AniState.Idle){  //空闲
          this.animationController.setValue(AniState[AniState.Move], false);          
        }
    }

    /**
     * 获取动画状态值
     * @param entityState 动画状态
     * @return 值
     */
    // public GetAnim(aniState:AniState) :any {
    //     return this.animationController.getValue(AniState[aniState]);
    // }

}