export class MinimapBoxVo{
    public width:number;  //包围盒宽
    public height:number;  //包围盒高
    public x:number;  //包围盒x
    public z:number;  //包围盒z

    public minimapWidth:number;  //小地图宽
    public minimapHeight:number;  //小地图高


    constructor(width:number, height:number, x:number, z:number, minimapWidth:number, minimapHeight:number){
        this.width=width;
        this.height=height;
        this.x=x;
        this.z=z;
        this.minimapWidth=minimapWidth;
        this.minimapHeight=minimapHeight;
    }
}