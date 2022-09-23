import { AddAttrType } from "../../Proto/proto";

export class AddAttrDefine{
    public ID:number=null as unknown as number;
	public Range:Array<number>=null as unknown as Array<number>;
    public Probability:number=null as unknown as number;
    public Type:AddAttrType=null as unknown as AddAttrType;
}