import { Vec3 } from "cc";

export class PositionVo{
    public position:Vec3=new Vec3();  //位置
    public rotation:Vec3=new Vec3();  //方向
 
    constructor(position:Vec3, rotation:Vec3){
        this.position=position;
        this.rotation=rotation;
    }
}