import { BuffAction } from "../enums/BuffAction";
import { DamageInfo } from "./DamageInfo";

export class BuffInfo{
    public buffId:number;
    public buffType:number;
    public Action:BuffAction;
    public casterId:number;
    public ownerId:number;
    public damage:DamageInfo;


}