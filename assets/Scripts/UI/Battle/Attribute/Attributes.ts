import proto from "../../../../Proto/proto.js";
import { AttributeData } from "./AttributeData";
import { AttributeType } from "./AttributeType";
import { CharacterDefine } from "../../../Data/CharacterDefine";
import { CreatureType } from "../enums/CreatureType";
const { NUser, TeamType } = proto;

export class Attributes{
    public Basic = new AttributeData();   //基础
    public Buff = new AttributeData();   //buff
    public Final = new AttributeData();   //常用
    private hp:number;     //当前hp

    /**
     * 当前生命
     */
    public get HP(){
        return this.hp;
    }
    public set HP(value:number){
        this.hp = Math.min(this.MaxHP, value);
    }
    
    /**
     * 最大生命
     */
    public get MaxHP(){
        return this.Final.MaxHP;
    }

    /**
     * 攻击
     */
    public get ATT(){
        return this.Final.ATT;
    }

    /**
     * 防御
     */
    public get DEF(){
        return this.Final.DEF;
    }

    /**
     * 复活率
     */
    public get RESU(){
        return this.Final.RESU;
    }

    /**
     * 速度
     */
    public get Speed(){
        return this.Final.Speed;
    }

    /**
     * 暴击率
     */
    public get CRI(){
        return this.Final.CRI;
    }

    /**
     * 初始化常用属性
     */
    public InitFinalAttributes() {
       for(let i = 0; i < AttributeType.MAX; i++)
       {
          this.Final.Data[i] = this.Basic.Data[i] + this.Buff.Data[i];
       }
    }

    /**
     * 初始化基础属性
     */
    public InitBasicAttributes(define: CharacterDefine, user: NUser,creatureType: CreatureType){
        this.Basic.Reset();
        this.Buff.Reset();
        this.Final.Reset();
        if (creatureType == CreatureType.Character) {
            this.hp=this.Basic.MaxHP=user.character.hp;
            this.Basic.ATT = user.character.att;
            this.Basic.DEF = user.character.def;
            this.Basic.RESU = user.character.resu;
            this.Basic.Speed = user.character.speedValue;
            this.Basic.CRI = user.character.cri;

            // console.log('InitBasicAttributes Speed='+this.Basic.Speed)
        } else if (creatureType == CreatureType.Monster) {
            this.hp=this.Basic.MaxHP=define.HP;
            this.Basic.ATT = define.ATT;
            this.Basic.DEF = define.DEF;
            this.Basic.RESU = define.RESU;
            this.Basic.Speed = define.Speed;
            this.Basic.CRI = define.CRI;
        }
        this.InitFinalAttributes();
    }


}