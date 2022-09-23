import { CharacterClass } from "../../Proto/proto";
import { ShapeType } from "../UI/Battle/enums/ShapeType";

export class CharacterDefine{
    public ID:number=null as unknown as number;
    public Name:string=null as unknown as string;
    public UpperBodyImg:string=null as unknown as string;
    public Avatar:string=null as unknown as string;
    public Class:CharacterClass=null as unknown as CharacterClass;
    public Resource:string=null as unknown as string;
    public RedResource:string=null; //红队模型资源
    public Description:string=null as unknown as string;
    public AI:string=null;
    public ATT:number=null as unknown as number;
    public DEF:number=null as unknown as number;
    public RESU:number=null as unknown as number;
    public Speed:number=null as unknown as number;
    public HP:number=0; 
    public CRI:number=null as unknown as number;
    public IsCollision:boolean;
    public Shape:ShapeType;
    public Long_:number;
    public Width:number;
    public Height:number=null;
    public Radius:number=null;
    public UnlockCoin:number=null as unknown as number;
}