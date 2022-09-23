import { Creature } from "../Enities/Creature";
import { BuffEffect } from "../enums/BuffEffect";
import { HashMap } from "../../../Utils/HashMap";

export class EffectManager{
    private Owner:Creature;

    //key：BuffEffect  value：number
    public Effects=new HashMap();

    public constructor(owner:Creature)
    {
        this.Owner = owner;
    }

    public HasEffect(effect:BuffEffect):boolean
    {
        let val=this.Effects.get(effect);
        if(val)
        {
            return val > 0;
        }
        return false;
    }

    public AddEffect(effect:BuffEffect)
    {
        console.log("[{0}].AddEffect{1}", this.Owner.characterDefine.Name, effect);
        let val = this.Effects.get(effect);
        if (!val)
            this.Effects.put(effect , 1);
        else
            this.Effects.put(effect, ++val);
    }

    public RemoveEffect(effect:BuffEffect)
    {
        console.log("[{0}].RemoveEffect{1}", this.Owner.characterDefine.Name, effect);
        let val = this.Effects.get(effect);
        if (val > 0)
          this.Effects.put(effect, --val);
    }
}