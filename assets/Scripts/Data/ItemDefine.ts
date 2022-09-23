import { ItemType, CharacterClass, ItemFunction } from "../../Proto/proto";

export class ItemDefine{
    public ID:number=null as unknown as number;
    public Name:string=null as unknown as string;
    public Description:string=null as unknown as string;
    public Spot:number=null as unknown as number;
    public Type:ItemType=null as unknown as ItemType;
    public Category:string=null as unknown as string;
    public Level:number=null as unknown as number;
    public LimitClass:CharacterClass=null as unknown as CharacterClass;
    public CanUse:boolean=null as unknown as boolean;
    public UseCD:number=null as unknown as number;
    public Price:number=null as unknown as number;
    public SellPrice:number=null as unknown as number;
    public StackLimit:number=null as unknown as number;
    public Icon:string =null as unknown as string;
    public Function:ItemFunction = null as unknown as ItemFunction;
    public Param :number=null as unknown as number;
    public Params:Array<number>=null as unknown as Array<number>;


}