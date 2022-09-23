import { Creature } from "../Enities/Creature";
import { Buff } from "../Models/Buff";
import { BattleContext } from "../Models/BattleContext";
import { BuffDefine } from "../../../Data/BuffDefine";

export class BuffManager{
    private Owner:Creature;
    private Buffs=new Array<Buff>();

    private idx:number = 1;
    private get BuffID()
    {
        return this.idx++; 
    }

    public constructor(creature:Creature)
    {
        this.Owner = creature;
    }

    public AddBuf(context:BattleContext, define:BuffDefine)
    {
        let buff = new Buff(this.BuffID,this.Owner, define, context);
        this.Buffs.push(buff);
    }

    public LogicUpdate()
    {
        for(let i = 0; i < this.Buffs.length; i++)
        {
            if (!this.Buffs[i].Stoped)  //未停止
            {
                this.Buffs[i].LogicUpdate();
            }else{  //停止删除
                this.Buffs.splice(i,1);
                i--;
            }
        }
    }
}