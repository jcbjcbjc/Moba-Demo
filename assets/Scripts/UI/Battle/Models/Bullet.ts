import { Skill } from "./Skill";
import { SkillHitInfo } from "../Vo/SkillHitInfo";
import { Creature } from "../Enities/Creature";
import { NetConfig } from "../../../Network/NetConfig";
import { CreatureManager } from "../Managers/CreatureManager";
import { DataManager } from "../../../Managers/DataManager";
import { LogicRenderConvert } from "../Utils/LogicRenderConvert";
import { MathUtil } from "../../../Utils/MathUtil";
import { HashMap } from "../../../Utils/HashMap";
import { EffectType } from "../Effects/EffectType";
import { EffectController } from "../Effects/EffectController";

export class Bullet{
       public skill:Skill;
       private hitInfo:SkillHitInfo;
       public duration:number = 0;
       private flyTime:number = 0;
       public positionX:number;  //x位置
       public positionZ:number;  //z位置
       private startPositionX:number;  //开始x位置
       private startPositionZ:number;  //开始z位置
       //已经造成伤害的目标 key=>entintyId  value=>1
       private hitMap=new HashMap(); 

       public Stoped:boolean=false;
       private effect:EffectController;
       private target:Creature;

        public constructor(skill:Skill, target:Creature, hitInfo:SkillHitInfo)
        {
            this.skill = skill;
            this.hitInfo = hitInfo;
            this.target = target;
            let distance = 0;
            if (!this.skill.Define.RealDetection) {  //非实时检测
                distance = skill.Owner.Distance(target);
                this.duration = distance / this.skill.Define.BulletSpeed;
                //播放特效，子弹朝着目标飞
                console.log('子弹朝着目标飞')
                skill.Owner.PlayEffect(EffectType.Bullet, skill.Define.BulletResource, target, this.duration)
            }else{    //实时检测
                this.startPositionX = this.positionX = skill.Owner.logicPosition.x;
                this.startPositionZ = this.positionZ = skill.Owner.logicPosition.z;
                //播放特效
                skill.Owner.PlayEffectBulletRealCheck(EffectType.BulletRealCheck, skill.Define.BulletResource, this);
            }
            console.log('Bullet：'+this.skill.Define.Name+'，CastBullet：'+this.skill.Define.BulletResource+'，Target：'+(target ? target.characterDefine.Name : '')+'，Distance：'+distance+'，Time：'+this.duration+'，RealDetection：'+this.skill.Define.RealDetection);
        }

        public LogicUpdate()
        {
            if (this.Stoped) return;
            if (!this.skill.Define.RealDetection)  //非真实检测
            {
                this.UpdateTime();
            }
            else
            {
                this.UpdatePos();
            }
        }

        private UpdateTime()
        {
            this.flyTime += NetConfig.frameTime;
            if(this.flyTime > this.duration)
            {
                this.skill.Context.Target = this.target; //设置目标
                this.hitInfo.isBullet = true;
                this.skill.DoHit2(this.hitInfo);
                this.Stoped = true;
            }
        }

        private UpdatePos()
        {
            let rockerSpeedVo = DataManager.Instance.rockerSpeeds[this.skill.Context.dirDegree];
            if(!rockerSpeedVo){
                console.log('Bullet UpdatePos not rockerSpeedVo! dirDegree='+this.skill.Context.dirDegree)
                return;
            }
            this.positionX += (rockerSpeedVo.x * this.skill.Define.BulletSpeed);
            this.positionZ += (rockerSpeedVo.y * this.skill.Define.BulletSpeed);

            let dis = Math.floor(MathUtil.GetDistance(this.startPositionX, this.startPositionZ, this.positionX, this.positionZ));
            if(dis >= LogicRenderConvert.RenderToLogic_Value(this.skill.Define.CastRange)){  //超出范围则停止
                console.log('超出范围则停止：dis='+dis+'，CastRange='+LogicRenderConvert.RenderToLogic_Value(this.skill.Define.CastRange))
                this.Stoped = true;
                return;
            }

            let creatureArr = CreatureManager.Instance.FindUnitsInRange(this.positionX, this.positionZ, LogicRenderConvert.RenderToLogic_Value(this.skill.Define.BulletRadius), 1, this.skill.Owner.teamType2);
            if(creatureArr.length > 0){ //打中敌人
               for(let i=0; i < creatureArr.length; i++){
                   let creature = creatureArr[i];
                   if(this.hitMap.get(creature.entityId)){  //已经造成伤害的进入下一次循环
                       continue;
                   }
                   this.hitMap.put(creature.entityId, 1);

                   this.skill.Context.Target = creature; //设置目标
                   this.hitInfo.isBullet = true;
                   this.skill.DoHit2(this.hitInfo);
                   if(!this.skill.Define.MultipleHit){  //非多次伤害停止
                       this.Stoped = true;
                   }
               }  
            }
        }
}