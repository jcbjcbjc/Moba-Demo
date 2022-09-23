import { AttributeType } from "./AttributeType";

export class AttributeData{
    public Data = new Array<number>(AttributeType.MAX);

    /**
     * 最大生命
     */
    public get MaxHP(){
      return this.Data[AttributeType.MaxHP];
    }
    public set MaxHP(value:number){
        this.Data[AttributeType.MaxHP] = value;
    }

    /**
     * 攻击
     */
    public get ATT(){
        return this.Data[AttributeType.ATT];
    }
    public set ATT(value:number){
       this.Data[AttributeType.ATT] = value;
    }

    /**
     * 防御
     */
    public get DEF(){
        return this.Data[AttributeType.DEF];
    }
    public set DEF(value:number){
       this.Data[AttributeType.DEF] = value;
    }

    /**
     * 复活率
     */
    public get RESU(){
        return this.Data[AttributeType.RESU];
    }
    public set RESU(value:number){
       this.Data[AttributeType.RESU] = value;
    }

    /**
     * 速度
     */
    public get Speed(){
        return this.Data[AttributeType.Speed];
    }
    public set Speed(value:number){
       this.Data[AttributeType.Speed] = value;
    }

    /**
     * 暴击率
     */
    public get CRI(){
        return this.Data[AttributeType.CRI];
    }
    public set CRI(value:number){
       this.Data[AttributeType.CRI] = value;
    }

    public  Reset()
    {
        for(let i = 0; i < AttributeType.MAX; i++)
        {
            this.Data[i] = 0;
        }
    }
}