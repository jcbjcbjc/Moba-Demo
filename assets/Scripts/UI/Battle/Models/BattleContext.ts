// import { Battle } from "./Battle";
import { Creature } from "../Enities/Creature";
import { Vec3 } from "cc";
import { SkillResult } from "../enums/SkillResult";
import { SkillHitInfo } from "../Vo/SkillHitInfo";
import { BuffInfo } from "../Vo/BuffInfo";
import { CreatureManager } from "../Managers/CreatureManager";

export class BattleContext{
        public skillId:number;
        public Caster:Creature;

        public Target:Creature; //目标根据ai自动搜索范围中的
        public positionX:number;  //x位置
        public positionZ:number;  //z位置

        public Result:SkillResult;
        public dirDegree:number = 0;  //方向性技能角度


       public Hits:Array<SkillHitInfo>=new Array<SkillHitInfo>();
       public BuffActions:Array<BuffInfo>=new Array<BuffInfo>();

       constructor(skillId:number, Caster:Creature){
           this.skillId = skillId;
           this.Caster = Caster;
       }

    // public AddHitInfo(hitInfo:SkillHitInfo)
    // {
    //     this.Hits.push(hitInfo);
    // }

    // public AddBuffAction(buff:BuffInfo)
    // {
    //     this.BuffActions.push(buff);
    // }

}