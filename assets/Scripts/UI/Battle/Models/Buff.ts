import { Creature } from "../Enities/Creature";
import { BuffDefine } from "../../../Data/BuffDefine";
import { BattleContext } from "./BattleContext";
import { BuffEffect } from "../enums/BuffEffect";
import { BuffInfo } from "../Vo/BuffInfo";
import { BuffAction } from "../enums/BuffAction";
import { NetConfig } from "../../../Network/NetConfig";
import { DamageInfo } from "../Vo/DamageInfo";

export class Buff{
    public BuffID:number;
    private Owner:Creature;
    private Define:BuffDefine;
    private Context:BattleContext;
    private time:number=0;
    private hit:number= 0;;

    public Stoped:boolean=false;

    public constructor(buffID:number, owner:Creature, define:BuffDefine, context:BattleContext)
    {
        this.BuffID = buffID;
        this.Owner = owner;
        this.Define = define;
        this.Context = context;

        this.OnAdd();
    }

    private OnAdd()
    {
        console.log('Buff OnAdd')
        if(this.Define.Effect)
        {
            this.Owner.EffectMgr.AddEffect(this.Define.Effect);
        }
        this.AddAttr();

        // let buff = new BuffInfo();
        // buff.buffId=this.BuffID;
        // buff.buffType=this.Define.ID;
        // buff.casterId=this.Context.Caster.entityId;
        // buff.ownerId=this.Owner.entityId
        // buff.Action=BuffAction.Add;

        // this.Context.Battle.AddBuffAction(buff);
    }

    private OnRemove()
    {
        console.log('Buff OnRemove')
        this.RemoveAttr();
        this.Stoped = true;
        if (this.Define.Effect)
        {
            this.Owner.EffectMgr.RemoveEffect(this.Define.Effect);
        }

        // let buff = new BuffInfo();
        // buff.buffId=this.BuffID;
        // buff.buffType=this.Define.ID;
        // buff.casterId=this.Context.Caster.entityId;
        // buff.ownerId=this.Owner.entityId
        // buff.Action=BuffAction.Remove;

        // this.Context.Battle.AddBuffAction(buff);
    }

    private AddAttr()
    {
        if (this.Define.DEFRatio)
        {
            this.Owner.attributes.Buff.DEF += this.Owner.attributes.Basic.DEF * this.Define.DEFRatio;
            this.Owner.attributes.InitFinalAttributes();
        }
    }

    private RemoveAttr()
    {
        if (this.Define.DEFRatio)
        {
            this.Owner.attributes.Buff.DEF -= this.Owner.attributes.Basic.DEF * this.Define.DEFRatio;
            this.Owner.attributes.InitFinalAttributes();
        }
    }

    public LogicUpdate()
    {
        if (this.Stoped) return;
        this.time += NetConfig.frameTime;   //Time.deltaTime;
        if(this.Define.Interval > 0)
        {//带有间隔时间
            if(this.time > this.Define.Interval * (this.hit + 1))
            {
                this.DoBufDamage();
            }
        }
        if(this.time > this.Define.Duration)
        {
            this.OnRemove();
        }
    }

    private CalcBuffDamage(caster:Creature):DamageInfo
    {
        let attFator=this.Define.ATTFator; //技能攻击系数
        //计算伤害
        let final = caster.attributes.ATT*attFator*(1-this.Owner.attributes.DEF/(602+this.Owner.attributes.DEF));

        let damage = new DamageInfo();
        damage.entityId = this.Owner.entityId;
        damage.Damage = Math.max(1, Math.floor(final));
        return damage;
    }
    
    private DoBufDamage()
    {
        this.hit++;

        let damage = this.CalcBuffDamage(this.Context.Caster);
        damage.isBuff = true;
        console.log("Skill[{0}].DoBufDamage[{1}] Damage:{2}", this.Define.Name, this.Owner.characterDefine.Name, damage.Damage);
        this.Owner.DoDamage(damage, this.Context.Caster);

        // let buff = new BuffInfo();
        // buff.buffId=this.BuffID;
        // buff.buffType=this.Define.ID;
        // buff.casterId=this.Context.Caster.entityId;
        // buff.ownerId=this.Owner.entityId
        // buff.Action=BuffAction.Hit;
        // buff.damage=damage;
        
        // this.Context.Battle.AddBuffAction(buff);
    }
}