import proto from "../../../../Proto/proto.js";
import { CreatureManager } from "./CreatureManager";
import { Creature } from "../Enities/Creature";
import { ShapeType } from "../enums/ShapeType";
import { MathUtil } from "../../../Utils/MathUtil";
import { LogicRenderConvert } from "../Utils/LogicRenderConvert";
import { TeamType2 } from "../enums/TeamType2";
const { CharacterClass } = proto;

/**
 * 碰撞管理器
 */
export class CollisionCheckManager{
    public static Instance: CollisionCheckManager = new CollisionCheckManager();
    public creatureList:Array<Creature>=[];  //碰撞生物集合

     /**
     * 清理
     */
    public Clear() {
      this.creatureList=[];
    }


    /**
     * 碰撞检测
     * @param creature 
     */
    public CollisionCheck(creature:Creature){
        //和其它生物进行碰撞检测
        for(let creature2 of this.creatureList){
            if (!creature.characterDefine.IsCollision || !creature2.characterDefine.IsCollision || creature.IsDeath || creature2.IsDeath || creature.entityId == creature2.entityId){  //死亡或自己
                continue;
            }
            let myLogicPosition = creature.CollisionTempVec3; //我方位置坐标
            let enemyLogicPosition = creature2.CollisionTempVec3; //敌方位置坐标
            //碰撞检测开始
            let isCollision:boolean=false;  //是否碰撞
            let isReviseMyFlag:boolean=true; //是否修正自己
            if(creature.characterDefine.Shape.toString()==ShapeType[ShapeType.circle] && creature2.characterDefine.Shape.toString()==ShapeType[ShapeType.circle]){  //都为圆形
                isCollision=MathUtil.CollideCircleAndCircleRevise(myLogicPosition, enemyLogicPosition, LogicRenderConvert.RenderToLogic_Value(creature.characterDefine.Radius), LogicRenderConvert.RenderToLogic_Value(creature2.characterDefine.Radius), creature._amend);
            }else if(creature.characterDefine.Shape.toString()==ShapeType[ShapeType.circle] && creature2.characterDefine.Shape.toString()==ShapeType[ShapeType.rect]){  //自己为圆形、敌方为矩形
                isCollision=MathUtil.CollideCircleAndRectRotateRevise(myLogicPosition, LogicRenderConvert.RenderToLogic_Value(creature.characterDefine.Radius), enemyLogicPosition, LogicRenderConvert.RenderToLogic_Value(creature2.characterDefine.Width), LogicRenderConvert.RenderToLogic_Value(creature2.characterDefine.Long_), creature._amend, 360-creature2.logicRotation.y);
                if(creature.teamType2==TeamType2.Blue){
                    creature._amend.x = -creature._amend.x;
                    creature._amend.z = -creature._amend.z;
                }
            }else if(creature.characterDefine.Shape.toString()==ShapeType[ShapeType.rect] && creature2.characterDefine.Shape.toString()==ShapeType[ShapeType.circle]){  //自己为矩形、敌方为圆形
                if(creature.characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]){  //镖车
                    isReviseMyFlag=false;  //修正敌人
                }
                isCollision=MathUtil.CollideCircleAndRectRotateRevise(enemyLogicPosition, LogicRenderConvert.RenderToLogic_Value(creature2.characterDefine.Radius), myLogicPosition, LogicRenderConvert.RenderToLogic_Value(creature.characterDefine.Width), LogicRenderConvert.RenderToLogic_Value(creature.characterDefine.Long_), isReviseMyFlag ? creature._amend : creature2._amend, 360-creature.logicRotation.y);
                // if(creature.teamType2==TeamType2.Blue){
                //     console.log('镖车角度='+(creature.logicRotation.y))
                // }
                if(creature.teamType2==TeamType2.Blue){
                    if(isReviseMyFlag){  //修正自己
                        creature._amend.x = -creature._amend.x;
                        creature._amend.z = -creature._amend.z;
                    }else{
                        creature2._amend.x = -creature2._amend.x;
                        creature2._amend.z = -creature2._amend.z;
                    } 
                }
            }
            if(isCollision){  //碰撞到了，修正自己
                console.log('碰撞到了，修正位置：'+(isReviseMyFlag ? creature._amend : creature2._amend));
                if(isReviseMyFlag){  //修正自己
                    creature.LogicToRenderPosition(creature.logicPosition.x + creature._amend.x, creature.logicPosition.y, creature.logicPosition.z + creature._amend.z); 
                }else{  //修正敌人
                    creature2.LogicToRenderPosition(creature2.logicPosition.x + creature2._amend.x, creature2.logicPosition.y, creature2.logicPosition.z + creature2._amend.z); 
                } 
            }
        } 
    }
}