import { TargetType } from "../UI/Battle/enums/TargetType";
import { BuffEffect } from "../UI/Battle/enums/BuffEffect";
import { TriggerType } from "../UI/Battle/enums/TriggerType";

export class BuffDefine{
    public ID:number=null;
    public Name:string=null;
    public Description:string=null;
    public Icon:string=null;
    public Target:TargetType=null;
    public Effect:BuffEffect=null;
    public Trigger:TriggerType=null;
    public CD:number=null;
    public Duration:number=null;
    public Interval:number=null;

    public ATTRatio:number=null;
    public DEFRatio:number=null;
    public ATTFator:number;
}