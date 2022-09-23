import { Creature } from "../Enities/Creature";
import { Vec3 } from "cc";
import proto from "../../../../Proto/proto.js";
import { MathUtil } from "../../../Utils/MathUtil";
import { LogicRenderConvert } from "../Utils/LogicRenderConvert";
import { DataManager } from "../../../Managers/DataManager";
import { CreatureManager } from "./CreatureManager";
import { TeamType2 } from "../enums/TeamType2";
import { BattleGlobal } from "../Utils/BattleGlobal";
import { CarDirType } from "../enums/CarDirType";
import { BattleManager } from "./BattleManager";
const { CharacterClass } = proto;

export class AiManager {

    private Owner: Creature;
    public constructor(creature: Creature) {
        this.Owner = creature;
    }
    private finishPathWayIndex: number = -1;  //完成寻路索引
    public targetLogicVec3List: Array<Vec3> = [];  //目标逻辑位置集合
    public pathWayFlag: boolean = false;  //是否寻路标识
    public isFinishPathWay: boolean = false; //是否完成寻路
    public pathWayTempVec3: Vec3 = new Vec3();   //寻路临时坐标

    private targetDirZ: number = 0; //寻路目标方向z轴
    private targetDirX: number = 0; //寻路目标方向x轴
    private targetCreature: Creature;  //目标生物  
    private offsetDir: number = 0; //寻路与目标的偏移距离

    /**
    * 寻路
    */
    private PathWay() {
        //不是寻路状态
        if (!this.pathWayFlag) {
            return;
        }
        if (this.targetLogicVec3List.length < 1) {
            return;
        }
        if(this.Owner.IsDeath){  //死亡
            return;
        }
        //判断目标过近
        let endLogicVec3 = this.targetLogicVec3List[this.targetLogicVec3List.length - 1];
        let dis = Math.floor(MathUtil.GetDistance(this.Owner.logicPosition.x, this.Owner.logicPosition.z, endLogicVec3.x, endLogicVec3.z));
        // console.log('dis='+dis)
        if (dis < LogicRenderConvert.RenderToLogic_Value(0.5 + this.offsetDir)) {
            // console.log('目标距离过近');
            this.PathWayEnd();
            return;
        }
        let index = this.finishPathWayIndex + 1;
        if (index < this.targetLogicVec3List.length) {
            let targetLogicVec3 = this.targetLogicVec3List[index];
            //获取目标方向
            let targetDirZ2 = targetLogicVec3.z < this.Owner.logicPosition.z ? 1 : -1;
            let targetDirX2 = targetLogicVec3.x < this.Owner.logicPosition.x ? 1 : -1;
            if (this.targetDirZ == 0 || this.targetDirX == 0) {
                this.targetDirZ = targetDirZ2;
                this.targetDirX = targetDirX2;
            } else if (this.targetDirZ != targetDirZ2 || this.targetDirX != targetDirX2) {  //目标位置到了
                this.targetDirZ = 0;
                this.targetDirX = 0;
                this.finishPathWayIndex++;
                //   console.log('目标位置到了 index='+index+'，len='+this.targetLogicVec3List.length)
                if (index == this.targetLogicVec3List.length - 1) {
                    this.PathWayEnd();
                    return;
                }
            }

            //计算夹角
            let newDegree = Math.round(MathUtil.GetAngle(targetLogicVec3.z - this.Owner.logicPosition.z, targetLogicVec3.x - this.Owner.logicPosition.x));
            newDegree = (newDegree < 0 ? newDegree + 360 : newDegree);
            // console.log('degree='+degree+'，newDegree='+newDegree)

            // this.Owner.logicRotation.y = newDegree;
            // this.Owner.node.parent.setRotationFromEuler(this.Owner.logicRotation.x, newDegree, this.Owner.logicRotation.z);
            this.Owner.RotateHandle(newDegree);
            //向目标移动
            // if(degree==0){  
            let rockerSpeedVo = DataManager.Instance.rockerSpeeds[newDegree];
            // console.log('degree='+degree+'，newDegree='+newDegree)
            let vx = this.Owner.logicPosition.x + (rockerSpeedVo.x * this.Owner.attributes.Speed);
            let vz = this.Owner.logicPosition.z + (rockerSpeedVo.y * this.Owner.attributes.Speed);
            this.Owner.LogicToRenderPosition(vx, this.Owner.logicPosition.y, vz);
            // }
            this.Owner.MoveHandle();
        } else {  //寻路结束
            this.PathWayEnd();
        }
    }

    /**
     * 寻路结束
     */
    private PathWayEnd() {
        this.finishPathWayIndex = -1;
        this.pathWayFlag = false;
        this.targetDirZ = 0;
        this.targetDirX = 0;
        this.isFinishPathWay = true;
    }

    /**
    * 逻辑更新
    */
    public LogicUpdate() {
        this.PathWay();  //寻路
        this.AiExecute();
    }

    /**
     * ai执行
     */
    private AiExecute() {
        let creatureClass = this.Owner.characterDefine.Class.toString();
        //移动车
        if (!this.Owner.IsDeath && (creatureClass == CharacterClass[CharacterClass.Cart])) {  //未死亡
            this.offsetDir = 1.2;
            //开始寻路
            if (!this.pathWayFlag && !this.isFinishPathWay) { //未寻路
                this.targetLogicVec3List = [];
                // console.log('npcMoveWayNode='+BattleManager.Instance.npcMoveWayNode)
                let npcMoveWayArr = BattleManager.Instance.npcMoveWayNode.children;
                for (let i = 0; i < npcMoveWayArr.length; i++) {
                    let node = npcMoveWayArr[i];
                    let name = node.name;
                    if (this.Owner.teamType2 == TeamType2.Blue) {  //蓝队
                        if (name.indexOf('Blue') != -1 || name.indexOf('Npc') != -1) {
                            LogicRenderConvert.RenderToLogic_TwoVec3(this.pathWayTempVec3, node.getWorldPosition());
                            this.targetLogicVec3List.push(this.pathWayTempVec3.clone());
                        }
                    } else {  //红队
                        if (name.indexOf('Red') != -1 || name.indexOf('Npc') != -1) {
                            LogicRenderConvert.RenderToLogic_TwoVec3(this.pathWayTempVec3, node.getWorldPosition());
                            this.targetLogicVec3List.push(this.pathWayTempVec3.clone());
                        }
                    }
                }
                this.pathWayFlag = true;
            }
            //判断镖车到达目的地后，守护镖车小兵开始寻路
            if (this.targetLogicVec3List.length < 1) {
                return;
            }
            //判断目标过近
            let endLogicVec3 = this.targetLogicVec3List[this.targetLogicVec3List.length - 1];
            let dis = Math.floor(MathUtil.GetDistance(this.Owner.logicPosition.x, this.Owner.logicPosition.z, endLogicVec3.x, endLogicVec3.z));
            if (dis < LogicRenderConvert.RenderToLogic_Value(4)) {  //镖车距離國近
                //遍历所有生物
                let creatureMap = CreatureManager.Instance.creatureMap;
                let creatureData = creatureMap.data;
                for (let entityId in creatureData) {
                    let creature = creatureMap.get(entityId) as Creature;
                    creature.isGuardCart=false;
                }
            }
            return;
        }
        //小兵逻辑
        if (!this.Owner.IsDeath && creatureClass == CharacterClass[CharacterClass.Soldier]) {
            if (this.Owner.isGuardCart) {  //守护镖车
                if (this.pathWayFlag) {  //寻路中
                    return;
                }
                let dir = this.Owner.teamType2 == TeamType2.Blue ? 1 : -1;
                let cart = this.Owner.teamType2 == TeamType2.Blue ? BattleGlobal.blueCart : BattleGlobal.redCart;
                // console.log('soldierCardDir：'+creature.soldierCardDir+'，=leftTop：'+(creature.soldierCardDir == CarDirType.leftTop.valueOf()))
                if (this.Owner.soldierCardDir == CarDirType.leftTop.valueOf()) {
                    this.pathWayTempVec3.set(cart.logicPosition.x + ( LogicRenderConvert.RenderToLogic_Value(-2.2)), cart.logicPosition.y, cart.logicPosition.z + (dir * LogicRenderConvert.RenderToLogic_Value(-2.2)));
                    // console.log(creature.logicPosition+'，'+creature.pathWayTempVec3)
                } else if (this.Owner.soldierCardDir == CarDirType.rightTop.valueOf()) {
                    this.pathWayTempVec3.set(cart.logicPosition.x + ( LogicRenderConvert.RenderToLogic_Value(2.2)), cart.logicPosition.y, cart.logicPosition.z + (dir * LogicRenderConvert.RenderToLogic_Value(-2.2)));
                } else if (this.Owner.soldierCardDir == CarDirType.left.valueOf()) {
                    this.pathWayTempVec3.set(cart.logicPosition.x + ( LogicRenderConvert.RenderToLogic_Value(-2.2)), cart.logicPosition.y, cart.logicPosition.z);
                } else if (this.Owner.soldierCardDir == CarDirType.right.valueOf()) {
                    this.pathWayTempVec3.set(cart.logicPosition.x + ( LogicRenderConvert.RenderToLogic_Value(2.2)), cart.logicPosition.y, cart.logicPosition.z);
                } else if (this.Owner.soldierCardDir == CarDirType.leftbottom.valueOf()) {
                    this.pathWayTempVec3.set(cart.logicPosition.x + ( LogicRenderConvert.RenderToLogic_Value(-2.2)), cart.logicPosition.y, cart.logicPosition.z + (dir * LogicRenderConvert.RenderToLogic_Value(2.2)));
                } else if (this.Owner.soldierCardDir == CarDirType.rightbottom.valueOf()) {
                    this.pathWayTempVec3.set(cart.logicPosition.x + ( LogicRenderConvert.RenderToLogic_Value(2.2)), cart.logicPosition.y, cart.logicPosition.z + (dir * LogicRenderConvert.RenderToLogic_Value(2.2)));
                }
                this.targetLogicVec3List = [this.pathWayTempVec3];
                this.pathWayFlag = true;
            } else {
                this.offsetDir = 2;
                this.SearchTargetMove();
            }
            return;
        }

    }


    /**
     * 寻找目标并向目标移动
     */
    public SearchTargetMove() {
        if (this.pathWayFlag) {  //寻路中
            return;
        }
        if (this.targetCreature) {  //存在目标生物
            return;
        }
        let targetTeamType2 = this.Owner.teamType2 == TeamType2.Blue ? TeamType2.Red : TeamType2.Blue;  //目标队伍类型
        let minDis: number;  //最小距离
        let targetCreature: Creature;   //目标生物
        //遍历所有生物
        let creatureMap = CreatureManager.Instance.creatureMap;
        let creatureData = creatureMap.data;
        for (let entityId in creatureData) {
            let creature = creatureMap.get(entityId) as Creature;
            if (!creature.IsDeath && creature.teamType2 == targetTeamType2) {  //未死亡是目标队伍类型
                let dis = Math.floor(MathUtil.GetDistance(this.Owner.logicPosition.x, this.Owner.logicPosition.z, creature.logicPosition.x, creature.logicPosition.z));
                if (!minDis || dis < minDis) {
                    targetCreature = creature;
                }
            }
        }
        if (targetCreature) {  //存在目标生物，寻路过去
            this.targetCreature = targetCreature;
            this.targetLogicVec3List = [this.targetCreature.logicPosition];
            this.pathWayFlag = true;
        }
    }

}