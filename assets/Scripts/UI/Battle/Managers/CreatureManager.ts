import { HashMap } from "../../../Utils/HashMap";
import { Creature } from "../Enities/Creature";
import { UIWorldElementManager } from "../UIWorldElementManager";
import { Vec3, instantiate, Node } from "cc";
import { BattleManager } from "./BattleManager";
import { TeamType2 } from "../enums/TeamType2";
import { DataManager } from "../../../Managers/DataManager";
import { SpawnRuleDefine } from "../../../Data/SpawnRuleDefine";
import { LoadResUtil } from '../../../Utils/LoadResUtil';
import { CollisionCheckManager } from "./CollisionCheckManager";
import { CreatureType } from "../enums/CreatureType";
import { ShapeType } from "../enums/ShapeType";
import { MathUtil } from "../../../Utils/MathUtil";
import { LogicRenderConvert } from "../Utils/LogicRenderConvert";
import proto from "../../../../Proto/proto.js";
const { CharacterClass }=proto;

/**
 * 生物管理器
 */
export class CreatureManager{

    public static Instance:CreatureManager=new CreatureManager(); 

    //key：entityId   value：Creature
    public creatureMap=new HashMap();
    private idx:number=0;

    public Clear(){
        //移除生物血条节点
        let creatureData = this.creatureMap.data;
        for(let entityId in creatureData){
            let creature = this.creatureMap.get(entityId);
            UIWorldElementManager.Instance.RemoveCharacterHpBar(creature);
        }

        this.creatureMap.clear();
        this.idx=0;
    }

    /**
     * 添加生物
     * @param node 模型节点
     * @param creature  生物对象
     * @param idx 唯一标识id
     */
    public AddCreature(node, creature:Creature, idx:number=undefined){
        if(idx){
            this.idx=idx;
        }else{
            this.idx++;
        }
        creature.entityId=this.idx;
        node.entityId=this.idx;
        this.creatureMap.put(this.idx, creature);
        //添加血条
        UIWorldElementManager.Instance.AddCharacterHpBar(node, creature);
        //添加到碰撞管理器
      if(creature.characterDefine.IsCollision){  //带碰撞
          CollisionCheckManager.Instance.creatureList.push(creature);
      } 
    }

    /**
     * 移除生物
     * @param entityId 实体id
     */
    public RemoveCreature(entityId:number){
        this.creatureMap.remove(entityId);
    }

    /**
     * 获取生物
     * @param entityId 实体id
     */
    public GetCreature(entityId:number) : Creature {
        return this.creatureMap.get(entityId);
    }

    public update(dt:number){
        let creatureData = this.creatureMap.data;
        for(let entityId in creatureData){
            let creature = this.creatureMap.get(entityId);
            creature.update(dt);
        }
    }

    /**
     * 根据类型查询数量
     * @param characterClass 
     */
    public GetCountByClass(characterClass:CharacterClass):number{
        let count:number = 0;
        let creatureData = this.creatureMap.data;
        for(let entityId in creatureData){
          let creature = this.creatureMap.get(entityId) as Creature;
          if(creature.characterDefine.Class.toString() == CharacterClass[characterClass]){  
              count++;
          }
        }
        return count;
    }

    private characterList=new Array<Creature>();
    private monsterList=new Array<Creature>();    
    private emptyList=new Array<Creature>();
    private circleTempVec3=new Vec3();

    /**
     * 查询范围内的敌人
     * @param positionX 位置x
     * @param positionZ 位置z
     * @param radius 半径
     * @param blowsNum 个数  小于0所有
     * @param teamType2 队伍类型
     * @param isDirOrder 是否根据距离排序
     */
    public FindUnitsInRange(positionX:number, positionZ:number, radius:number, blowsNum:number, teamType2:TeamType2, isDirOrder:boolean = false):Array<Creature>
    {
        if(this.characterList.length > 0){
            this.characterList=[];
        }
        if(this.monsterList.length > 0){
            this.monsterList=[];
        }
        if(this.emptyList.length > 0){
            this.emptyList=[];
        }

        let creatureMap = CreatureManager.Instance.creatureMap;
        let creatureData = creatureMap.data;
        for (let entityId in creatureData) 
        {
            let creature = creatureMap.get(entityId) as Creature;
            if(creature.IsDeath){  //死亡
                continue;
            }
            if(teamType2==creature.teamType2){  //自己队伍的
                continue;
            }
            let isCollision:boolean=false;  //是否碰撞 
            if(creature.characterDefine.Shape.toString()==ShapeType[ShapeType.circle]){  //生物为圆形
                //两个圆形碰撞检测
                if(creature.Distance3(positionX, positionZ) < LogicRenderConvert.RenderToLogic_Value(creature.characterDefine.Radius) + radius){
                    isCollision=true;
                }
            }else if(creature.characterDefine.Shape.toString()==ShapeType[ShapeType.rect]){  //生物为矩形
                //矩形和圆形碰撞检测
                this.circleTempVec3.set(positionX, 0, positionZ);
                isCollision=MathUtil.CollideCircleAndRectRotateRevise(this.circleTempVec3, radius, creature.CollisionTempVec3, LogicRenderConvert.RenderToLogic_Value(creature.characterDefine.Width), LogicRenderConvert.RenderToLogic_Value(creature.characterDefine.Long_),  creature._amend, 360-creature.logicRotation.y);
            }
            if(isCollision) {  //碰撞
                //计算到检测点的距离
                creature.dir = creature.Distance3(positionX, positionZ);
                
                if(creature.creatureType == CreatureType.Character){
                    this.characterList.push(creature);
                }else if(creature.creatureType == CreatureType.Monster){
                    this.monsterList.push(creature);
                }
            }
        }
        if(blowsNum==0 || (this.characterList.length + this.monsterList.length) == 0) {
            return this.emptyList;
        }else {
            let resultList = this.characterList.concat(this.monsterList);
            if(isDirOrder){
                resultList = resultList.sort(MathUtil.sortBy('dir', true));
                console.log('升序')
                // for(let i=0; i < resultList.length; i++){
                //     console.log(resultList[i].dir)
                // }
            }
            if(blowsNum < 0){
                return resultList;
            }else {
                if(blowsNum >= resultList.length) {
                    return resultList;                
                }else{
                    resultList.splice(blowsNum); 
                    return  resultList;
                }
            }
        }
    }


}