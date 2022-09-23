import { DamageInfo } from "./DamageInfo";

export class SkillHitInfo{
    public skillId:number;
    public casterId:number;
    public hitId:number;
    public isBullet:boolean;
    public Damages:Array<DamageInfo>=[];
}