import { Creature } from "../Enities/Creature";
import { SkillDefine } from "../../../Data/SkillDefine";
import { SkillStatus } from "../enums/SkillStatus";
import { BattleContext } from "./BattleContext";
import { DataManager } from "../../../Managers/DataManager";
import { Bullet } from "./Bullet";
import { SkillResult } from "../enums/SkillResult";
import { TargetType } from "../enums/TargetType";
import { TriggerType } from "../enums/TriggerType";
import { NetConfig } from "../../../Network/NetConfig";
import { SkillHitInfo } from "../Vo/SkillHitInfo";
import { Vec3 } from "cc";
import { DamageInfo } from "../Vo/DamageInfo";
import { RandomUtil } from "../Utils/RandomUtil";
import { CreatureManager } from "../Managers/CreatureManager";
import { CreatureType } from "../enums/CreatureType";
import { LogicRenderConvert } from "../Utils/LogicRenderConvert";
import { MathUtil } from "../../../Utils/MathUtil";
import { EffectType } from "../Effects/EffectType";
import { AniState } from "../enums/AniState";

export class Skill{
        public skillId:number;
        public Owner:Creature;
        public Define:SkillDefine;

        public Status:SkillStatus=SkillStatus.None;

        public cd:number = 0;

        private castingTime:number = 0;
        private skillTime:number = 0;
        private Hit:number = 0;
        public Context:BattleContext;
        private frameId:number;  //当前逻辑帧

       public Bullets = new Array<Bullet>();

       public constructor(skillId:number, owner:Creature)
       {
           this.skillId = skillId;
           this.Owner = owner;
           this.Define = DataManager.Instance.skills[this.Owner.characterDefine.ID][this.skillId];
       }

        public get Instant():boolean {
                if (this.Define.CastTime > 0) return false;
                if (this.Define.Bullet) return false;
                if (this.Define.Duration > 0) return false;
                if (this.Define.HitTimes != null && this.Define.HitTimes.length > 0) return false;
                return true;
        }


        public CanCast(context:BattleContext):SkillResult
        {
            if(this.Status != SkillStatus.None)
            {
                return SkillResult.Casting;
            }
            // if(this.Define.CastTarget == TargetType.Target)
            // {
            //     if (!context.Target || context.Target == this.Owner)
            //         return SkillResult.InvalidTarget;

            //     let distance = this.Owner.Distance(context.Target);
            //     if(distance > this.Define.CastRange)
            //     {
            //         return SkillResult.OutOfRange;
            //     }
            // }

            // if (this.Define.CastTarget == TargetType.Position)
            // {
            //     if (!context.Position)
            //         return SkillResult.InvalidTarget;
            //     if(this.Owner.Distance2(context.Position) > this.Define.CastRange)
            //     {
            //         return SkillResult.OutOfRange;
            //     }
            // }
            if (this.Define.CastTarget.toString() == TargetType[TargetType.SelectedRange]){  //选择范围
                console.log('positionX：'+LogicRenderConvert.RenderToLogic_Value(context.positionX)+'，positionZ：'+LogicRenderConvert.RenderToLogic_Value(context.positionZ)+'，CastRange：'+LogicRenderConvert.RenderToLogic_Value(this.Define.CastRange)+
                '，dis：'+this.Owner.Distance3(LogicRenderConvert.RenderToLogic_Value(context.positionX), LogicRenderConvert.RenderToLogic_Value(context.positionZ)))

                if(this.Owner.Distance3(LogicRenderConvert.RenderToLogic_Value(context.positionX), LogicRenderConvert.RenderToLogic_Value(context.positionZ)) > LogicRenderConvert.RenderToLogic_Value(this.Define.CastRange)){
                    return SkillResult.OutOfRange;
                }
            }

            if(this.cd > 0)
            {
                return SkillResult.CoolDown;
            }
            return SkillResult.Ok;
        }

        public Cast(context:BattleContext):SkillResult
        {
            let result = this.CanCast(context);
            if (result == SkillResult.Ok)
            {
                this.Owner.SetAnim(AniState[this.Define.SkillAnim], true); //播放动作
                this.castingTime = 0;
                this.skillTime = 0;
                this.cd = this.Define.CD;
                this.Context = context;
                this.Hit = 0;
                this.Bullets=[];

                this.AddBuff(TriggerType.SkillCast,this.Context.Target);

                if (this.Instant)
                {
                    this.DoHit();
                }
                else
                {
                    if (this.Define.CastTime > 0)
                    {
                        this.Status = SkillStatus.Casting;
                    }
                    else
                    {
                        this.StartSkill();
                    }
                }

                this.cd = this.Define.CD;
            }
            console.log("Skill[{0}].Cast Result:[{1}] Status:{2}",this.Define.Name,result,this.Status);
            return result;
        }

        /// <summary>
        /// 技能执行开始
        /// </summary>
        private StartSkill()
        {
            this.Status = SkillStatus.Running;
            console.log('Skill StartSkill')
            if (this.Define.AOEEffect)
            {
                if (this.Define.CastTarget.toString() == TargetType[TargetType.SelectedRange])  //选择范围
                {
                    let renderVec3:Vec3 = new Vec3(this.Context.positionX, 0, this.Context.positionZ);
                    this.Owner.PlayEffect2(EffectType.Position, this.Define.AOEEffect, renderVec3);
                }
                else if (this.Define.CastTarget.toString() == TargetType[TargetType.Target])   //目标
                {
                    this.Owner.PlayEffect(EffectType.Position, this.Define.AOEEffect, this.Context.Target);
                }
                else if (this.Define.CastTarget.toString() == TargetType[TargetType.Self])  //自己
                {
                    this.Owner.PlayEffect(EffectType.Position, this.Define.AOEEffect, this.Owner);
                }
            }

        }

        private AddBuff(trigger:TriggerType,target:Creature)
        {
            if (this.Define.Buff == null || this.Define.Buff.length == 0) return;
            // console.log('Define.Buff='+this.Define.Buff);
            for(var buffId of this.Define.Buff)
            {
                if(!buffId){
                    continue;
                }
                var buffDefine = DataManager.Instance.buffs[buffId];
                console.log(buffId +'=='+ buffDefine);

                if (buffDefine.Trigger.toString() != TriggerType[trigger]) continue; //触发类型不一致
                console.log('buffDefine.Target='+buffDefine.Target.toString());
                
                if (buffDefine.Target.toString() == TargetType[TargetType.Self])
                {
                    this.Owner.AddBuf(this.Context, buffDefine);
                }else if(buffDefine.Target.toString() == TargetType[TargetType.Target])
                {
                    if(!target){
                        continue;
                    }
                    target.AddBuf(this.Context, buffDefine);
                }
            }
        }

        public LogicUpdate(frameId: number)
        {
            this.frameId = frameId;
            this.UpdateCD();
            if (this.Status == SkillStatus.Casting)     //前摇状态
            {
                this.UpdateCasting();
            }
            else if (this.Status == SkillStatus.Running)  //执行中
            {
                this.UpdateSkill();
            }
        }
        
        /**
         * 更新前摇时间
         */
        private UpdateCasting()
        {
            if(this.castingTime < this.Define.CastTime)
            {
                this.castingTime += NetConfig.frameTime; //Time.deltaTime;
            }
            else
            {
                this.castingTime = 0;
                this.StartSkill();
                console.log("Skill[{0}].UpdateCasting Finish", this.Define.Name);
            }
        }

        /**
         * 更新cd时间
         */
        private UpdateCD()
        {

            if (this.cd > 0)
            {
                this.cd -= NetConfig.frameTime; //Time.deltaTime;
            }
            if (this.cd < 0)
                this.cd = 0;
        }

        /**
         * 更新技能
         */
        private UpdateSkill()
        {
            this.skillTime += NetConfig.frameTime; //Time.deltaTime;
            //持续技能
            if (this.Define.Duration > 0)
            {  
                // console.log('UpdateSkill skillTime：'+this.skillTime+'=='+(this.Define.Interval * (this.Hit + 1))+'=='+ this.Define.Interval)
                if(this.skillTime > this.Define.Interval * (this.Hit + 1))
                {
                    this.DoHit();
                }

                if(this.skillTime >= this.Define.Duration)
                {
                    this.Status = SkillStatus.None;
                    console.log("Skill[{0}].UpdateSkill Finish", this.Define.Name);
                }
            }
            else if(this.Define.HitTimes  && this.Define.HitTimes.length > 0)
            {
                if(this.Hit < this.Define.HitTimes.length)
                {
                    if(this.skillTime > this.Define.HitTimes[this.Hit])
                    {
                        this.DoHit();
                    }
                }
                else
                {
                    if (!this.Define.Bullet)
                    {
                        this.Status = SkillStatus.None;
                        console.log("Skill[{0}].UpdateSkill Finish", this.Define.Name);
                    }
                }
            }
            if (this.Define.Bullet)
            {
                let finish:boolean = true;
                for (let bullet of this.Bullets)
                {
                    bullet.LogicUpdate();
                    if (!bullet.Stoped) finish = false;
                }

                if(finish && this.Hit >= this.Define.HitTimes.length)
                {
                    this.Status = SkillStatus.None;
                    console.log("Skill[{0}].UpdateSkill Finish", this.Define.Name);
                }
            }
        }

        private InitHitInfo(isBullet:boolean):SkillHitInfo
        {
            let hitInfo = new SkillHitInfo();
            hitInfo.casterId = this.Context.Caster.entityId;
            hitInfo.skillId = this.skillId;
            hitInfo.hitId = this.Hit;
            hitInfo.isBullet = isBullet;           
            return hitInfo;
        }

        private DoHit()
        {
           let hitInfo= this.InitHitInfo(false);
            console.log("Skill[{0}].DoHit:[{1}]", this.Define.Name, this.Hit);

            this.Hit++;

            if (this.Define.Bullet)  //是子弹
            {
                if (this.Define.CastTarget.toString() == TargetType[TargetType.RangeTarget])  //范围目标
                {
                    console.log('DoHit 范围目标并且是子弹')
                  let creatureArr = this.GetRangeTargetList();
                  for(var target of creatureArr){
                    this.CastBullet(hitInfo, target);
                  }
                  return;
                }
                this.CastBullet(hitInfo, this.Context.Target);
                return;
            }
            this.DoHit2(hitInfo);
        }

        public DoHit2(hitInfo:SkillHitInfo)
        {
            // this.Context.AddHitInfo(hitInfo);
            console.log("Skill[{0}].DoHit2[{1}] IsBullet:{2}",this.Define.Name,hitInfo.hitId,hitInfo.isBullet);

            if((this.Define.CastTarget.toString() == TargetType[TargetType.RangeTarget] && !this.Define.Bullet) || 
               this.Define.CastTarget.toString() == TargetType[TargetType.SelectedRange]){
                this.HitRange(hitInfo);
                return;
            }

            if(this.Define.CastTarget.toString() == TargetType[TargetType.Target] || 
               this.Define.CastTarget.toString() == TargetType[TargetType.StraightLine] || 
               (this.Define.CastTarget.toString() == TargetType[TargetType.RangeTarget] && this.Define.Bullet)) {
                this.HitTarget(this.Context.Target, hitInfo);
            }
        }

        private CastBullet(hitInfo:SkillHitInfo, target:Creature) {
        //   this.Context.AddHitInfo(hitInfo);
          console.log("Skill[{0}].CastBullet[{1}]",this.Define.Name,this.Define.BulletResource);
          let bullet = new Bullet(this, target, hitInfo);
          this.Bullets.push(bullet);

        }


        /**
         * 获取范围目标集合
         */
        private GetRangeTargetList():Array<Creature> {
            let positionX: number;
            let positionZ: number;
            let radius: number;  //半径
            let blowsNum:number;   //个数
            let isRangeTarget:boolean = false;  //范围目标

            if(this.Define.CastTarget.toString() == TargetType[TargetType.RangeTarget]){
                positionX = this.Owner.logicPosition.x;
                positionZ = this.Owner.logicPosition.z;
                radius = this.Define.CastRange;
                blowsNum = this.Define.BlowsNum || -1;
                isRangeTarget = true;
            }else if(this.Define.CastTarget.toString() == TargetType[TargetType.SelectedRange]){
                positionX = LogicRenderConvert.RenderToLogic_Value(this.Context.positionX);
                positionZ = LogicRenderConvert.RenderToLogic_Value(this.Context.positionZ);
                radius = this.Define.AOERange;
                blowsNum = this.Define.BlowsNum || -1;
            }
            let creatureArr = CreatureManager.Instance.FindUnitsInRange(positionX, positionZ, LogicRenderConvert.RenderToLogic_Value(radius), blowsNum, this.Owner.teamType2, isRangeTarget);
            console.log('GetRangeTargetList creatureArr：'+creatureArr.length)
            if(creatureArr.length > 0){
                let index=0;
              for(var target of creatureArr){
                  if(isRangeTarget && index == 0 && blowsNum==1){  //搜索1个敌人，朝向目标
                    let newDegree = Math.round(MathUtil.GetAngle(target.logicPosition.z - this.Owner.logicPosition.z, target.logicPosition.x - this.Owner.logicPosition.x));
                    newDegree = (newDegree < 0 ? newDegree + 360 : newDegree);
                    //角色旋转
                     this.Owner.RotateHandle(newDegree);
                     break;
                  }
                  index++;
                //   console.log('target dir='+target.dir)
              }
            }
            return creatureArr;
        }

        private HitRange(hit:SkillHitInfo)
        {
          let creatureArr = this.GetRangeTargetList();
          for(var target of creatureArr){
            this.HitTarget(target, hit);          
          }
        }
        

        private HitTarget(target:Creature, hit:SkillHitInfo)
        {
            if (this.Define.CastTarget == TargetType.Self && (target != this.Context.Caster)) return;
            else if (target == this.Context.Caster) return;

            let damage = this.CalcSkillDamage(this.Context.Caster, target);
            console.log("Skill[{0}].HitTarget[{1}] Damage:{2} Crit:{3}", this.Define.Name, target.characterDefine.Name, damage.Damage, damage.Crit);
            target.DoDamage(damage, this.Context.Caster);
            hit.Damages.push(damage);

            this.AddBuff(TriggerType.SkillHit, target);

            //播放受击特效
            if(this.Define.HitEffect)
            {
              target.PlayEffect(EffectType.Hit, this.Define.HitEffect, target);
            }
        }

        

        /*
         * 战斗计算
         */
        private CalcSkillDamage(caster:Creature, target:Creature):DamageInfo
        {
            let attFator=this.Define.ATTFator; //技能攻击系数
            //计算伤害
            let final = caster.attributes.ATT*attFator*(1-target.attributes.DEF/(602+target.attributes.DEF));
            let isCrit = this.IsCrit(caster.attributes.CRI);
            if (isCrit){
                final = final * 1.5;  //暴击伤害1.5倍
            }

            let damage = new DamageInfo();
            damage.entityId = target.entityId;
            damage.Damage = Math.max(1, Math.floor(final));
            damage.Crit = isCrit;
            return damage;
        }

        private IsCrit(crit:number):boolean
        {
            return RandomUtil.limit(0, 1) < crit;
        }
}