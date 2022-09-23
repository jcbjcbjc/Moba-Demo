import { Vec3 } from "cc";
/**
 * 逻辑向量和渲染互相转换
 */
export class LogicRenderConvert{
    private static logicRenderRatio:number = 1000;  //逻辑和渲染系数
    private static logicRenderRatio2:number = 0.001;  //逻辑和渲染系数

    /**
     * 逻辑向量转渲染向量
     * @param vec3 逻辑向量 
     */
    public static LogicToRender_Vec3(vec3:Vec3):void{
        vec3.set(this.LogicToRender_Value(vec3.x), this.LogicToRender_Value(vec3.y), this.LogicToRender_Value(vec3.z));
    }

    /**
     * 渲染向量转逻辑向量
     * @param vec3 渲染向量 
     */
    public static RenderToLogic_Vec3(vec3:Vec3):void{
        vec3.set(this.RenderToLogic_Value(vec3.x), this.RenderToLogic_Value(vec3.y), this.RenderToLogic_Value(vec3.z));
    }

     /**
     * 逻辑向量转渲染向量
     * @param logicVec3 逻辑向量 
     * @param renderVec3 渲染向量 
     */
    public static LogicToRender_TwoVec3(logicVec3:Vec3, renderVec3:Vec3):void{
        renderVec3.set(this.LogicToRender_Value(logicVec3.x), this.LogicToRender_Value(logicVec3.y), this.LogicToRender_Value(logicVec3.z));
    }

    /**
     * 渲染向量转逻辑向量
     * @param logicVec3 逻辑向量 
     * @param renderVec3 渲染向量 
     */
    public static RenderToLogic_TwoVec3(logicVec3:Vec3, renderVec3:Vec3):void{
        logicVec3.set(this.RenderToLogic_Value(renderVec3.x), this.RenderToLogic_Value(renderVec3.y), this.RenderToLogic_Value(renderVec3.z));
    }

    /**
     * 逻辑值转渲染值
     * @param value 逻辑值 
     */
    public static LogicToRender_Value(value:number):number{
        return value * this.logicRenderRatio2;
    }
    /**
     * 渲染值转逻辑值
     * @param value 渲染值
     */
    public static RenderToLogic_Value(value:number):number{
        return Math.floor(value * this.logicRenderRatio);       
    }

    /**
     * 逻辑向量转渲染向量
     * @param renderVec3 渲染向量 
     */
    public static LogicToRender_TwoVec3_3f(renderVec3:Vec3, logicX:number, logicY:number, logicZ:number):void{
        renderVec3.set(this.LogicToRender_Value(logicX), this.LogicToRender_Value(logicY), this.LogicToRender_Value(logicZ));
    }

    /**
     * 渲染向量转逻辑向量
     * @param logicVec3 逻辑向量 
     */
    public static RenderToLogic_TwoVec3_3f(logicVec3:Vec3, renderX:number, renderY:number, renderZ:number):void{
        logicVec3.set(this.RenderToLogic_Value(renderX), this.RenderToLogic_Value(renderY), this.RenderToLogic_Value(renderZ));
    }
}