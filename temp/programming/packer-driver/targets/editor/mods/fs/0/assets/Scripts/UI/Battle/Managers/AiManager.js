System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Vec3, proto, MathUtil, LogicRenderConvert, DataManager, CreatureManager, TeamType2, BattleGlobal, CarDirType, BattleManager, AiManager, _crd, CharacterClass;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicRenderConvert(extras) {
    _reporterNs.report("LogicRenderConvert", "../Utils/LogicRenderConvert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureManager(extras) {
    _reporterNs.report("CreatureManager", "./CreatureManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "../enums/TeamType2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "../Utils/BattleGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarDirType(extras) {
    _reporterNs.report("CarDirType", "../enums/CarDirType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "./BattleManager", _context.meta, extras);
  }

  _export("AiManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      MathUtil = _unresolved_3.MathUtil;
    }, function (_unresolved_4) {
      LogicRenderConvert = _unresolved_4.LogicRenderConvert;
    }, function (_unresolved_5) {
      DataManager = _unresolved_5.DataManager;
    }, function (_unresolved_6) {
      CreatureManager = _unresolved_6.CreatureManager;
    }, function (_unresolved_7) {
      TeamType2 = _unresolved_7.TeamType2;
    }, function (_unresolved_8) {
      BattleGlobal = _unresolved_8.BattleGlobal;
    }, function (_unresolved_9) {
      CarDirType = _unresolved_9.CarDirType;
    }, function (_unresolved_10) {
      BattleManager = _unresolved_10.BattleManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6581WacgBOEJ3WijPhrL8Z", "AiManager", undefined);

      ({
        CharacterClass
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("AiManager", AiManager = class AiManager {
        constructor(creature) {
          _defineProperty(this, "Owner", void 0);

          _defineProperty(this, "finishPathWayIndex", -1);

          _defineProperty(this, "targetLogicVec3List", []);

          _defineProperty(this, "pathWayFlag", false);

          _defineProperty(this, "isFinishPathWay", false);

          _defineProperty(this, "pathWayTempVec3", new Vec3());

          _defineProperty(this, "targetDirZ", 0);

          _defineProperty(this, "targetDirX", 0);

          _defineProperty(this, "targetCreature", void 0);

          _defineProperty(this, "offsetDir", 0);

          this.Owner = creature;
        }

        //寻路与目标的偏移距离

        /**
        * 寻路
        */
        PathWay() {
          //不是寻路状态
          if (!this.pathWayFlag) {
            return;
          }

          if (this.targetLogicVec3List.length < 1) {
            return;
          }

          if (this.Owner.IsDeath) {
            //死亡
            return;
          } //判断目标过近


          let endLogicVec3 = this.targetLogicVec3List[this.targetLogicVec3List.length - 1];
          let dis = Math.floor((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetDistance(this.Owner.logicPosition.x, this.Owner.logicPosition.z, endLogicVec3.x, endLogicVec3.z)); // console.log('dis='+dis)

          if (dis < (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
            error: Error()
          }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(0.5 + this.offsetDir)) {
            // console.log('目标距离过近');
            this.PathWayEnd();
            return;
          }

          let index = this.finishPathWayIndex + 1;

          if (index < this.targetLogicVec3List.length) {
            let targetLogicVec3 = this.targetLogicVec3List[index]; //获取目标方向

            let targetDirZ2 = targetLogicVec3.z < this.Owner.logicPosition.z ? 1 : -1;
            let targetDirX2 = targetLogicVec3.x < this.Owner.logicPosition.x ? 1 : -1;

            if (this.targetDirZ == 0 || this.targetDirX == 0) {
              this.targetDirZ = targetDirZ2;
              this.targetDirX = targetDirX2;
            } else if (this.targetDirZ != targetDirZ2 || this.targetDirX != targetDirX2) {
              //目标位置到了
              this.targetDirZ = 0;
              this.targetDirX = 0;
              this.finishPathWayIndex++; //   console.log('目标位置到了 index='+index+'，len='+this.targetLogicVec3List.length)

              if (index == this.targetLogicVec3List.length - 1) {
                this.PathWayEnd();
                return;
              }
            } //计算夹角


            let newDegree = Math.round((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).GetAngle(targetLogicVec3.z - this.Owner.logicPosition.z, targetLogicVec3.x - this.Owner.logicPosition.x));
            newDegree = newDegree < 0 ? newDegree + 360 : newDegree; // console.log('degree='+degree+'，newDegree='+newDegree)
            // this.Owner.logicRotation.y = newDegree;
            // this.Owner.node.parent.setRotationFromEuler(this.Owner.logicRotation.x, newDegree, this.Owner.logicRotation.z);

            this.Owner.RotateHandle(newDegree); //向目标移动
            // if(degree==0){  

            let rockerSpeedVo = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.rockerSpeeds[newDegree]; // console.log('degree='+degree+'，newDegree='+newDegree)

            let vx = this.Owner.logicPosition.x + rockerSpeedVo.x * this.Owner.attributes.Speed;
            let vz = this.Owner.logicPosition.z + rockerSpeedVo.y * this.Owner.attributes.Speed;
            this.Owner.LogicToRenderPosition(vx, this.Owner.logicPosition.y, vz); // }

            this.Owner.MoveHandle();
          } else {
            //寻路结束
            this.PathWayEnd();
          }
        }
        /**
         * 寻路结束
         */


        PathWayEnd() {
          this.finishPathWayIndex = -1;
          this.pathWayFlag = false;
          this.targetDirZ = 0;
          this.targetDirX = 0;
          this.isFinishPathWay = true;
        }
        /**
        * 逻辑更新
        */


        LogicUpdate() {
          this.PathWay(); //寻路

          this.AiExecute();
        }
        /**
         * ai执行
         */


        AiExecute() {
          let creatureClass = this.Owner.characterDefine.Class.toString(); //移动车

          if (!this.Owner.IsDeath && creatureClass == CharacterClass[CharacterClass.Cart]) {
            //未死亡
            this.offsetDir = 1.2; //开始寻路

            if (!this.pathWayFlag && !this.isFinishPathWay) {
              //未寻路
              this.targetLogicVec3List = []; // console.log('npcMoveWayNode='+BattleManager.Instance.npcMoveWayNode)

              let npcMoveWayArr = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                error: Error()
              }), BattleManager) : BattleManager).Instance.npcMoveWayNode.children;

              for (let i = 0; i < npcMoveWayArr.length; i++) {
                let node = npcMoveWayArr[i];
                let name = node.name;

                if (this.Owner.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                  error: Error()
                }), TeamType2) : TeamType2).Blue) {
                  //蓝队
                  if (name.indexOf('Blue') != -1 || name.indexOf('Npc') != -1) {
                    (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                      error: Error()
                    }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_TwoVec3(this.pathWayTempVec3, node.getWorldPosition());
                    this.targetLogicVec3List.push(this.pathWayTempVec3.clone());
                  }
                } else {
                  //红队
                  if (name.indexOf('Red') != -1 || name.indexOf('Npc') != -1) {
                    (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                      error: Error()
                    }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_TwoVec3(this.pathWayTempVec3, node.getWorldPosition());
                    this.targetLogicVec3List.push(this.pathWayTempVec3.clone());
                  }
                }
              }

              this.pathWayFlag = true;
            } //判断镖车到达目的地后，守护镖车小兵开始寻路


            if (this.targetLogicVec3List.length < 1) {
              return;
            } //判断目标过近


            let endLogicVec3 = this.targetLogicVec3List[this.targetLogicVec3List.length - 1];
            let dis = Math.floor((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).GetDistance(this.Owner.logicPosition.x, this.Owner.logicPosition.z, endLogicVec3.x, endLogicVec3.z));

            if (dis < (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(4)) {
              //镖车距離國近
              //遍历所有生物
              let creatureMap = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
                error: Error()
              }), CreatureManager) : CreatureManager).Instance.creatureMap;
              let creatureData = creatureMap.data;

              for (let entityId in creatureData) {
                let creature = creatureMap.get(entityId);
                creature.isGuardCart = false;
              }
            }

            return;
          } //小兵逻辑


          if (!this.Owner.IsDeath && creatureClass == CharacterClass[CharacterClass.Soldier]) {
            if (this.Owner.isGuardCart) {
              //守护镖车
              if (this.pathWayFlag) {
                //寻路中
                return;
              }

              let dir = this.Owner.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Blue ? 1 : -1;
              let cart = this.Owner.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Blue ? (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                error: Error()
              }), BattleGlobal) : BattleGlobal).blueCart : (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                error: Error()
              }), BattleGlobal) : BattleGlobal).redCart; // console.log('soldierCardDir：'+creature.soldierCardDir+'，=leftTop：'+(creature.soldierCardDir == CarDirType.leftTop.valueOf()))

              if (this.Owner.soldierCardDir == (_crd && CarDirType === void 0 ? (_reportPossibleCrUseOfCarDirType({
                error: Error()
              }), CarDirType) : CarDirType).leftTop.valueOf()) {
                this.pathWayTempVec3.set(cart.logicPosition.x + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(-2.2), cart.logicPosition.y, cart.logicPosition.z + dir * (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(-2.2)); // console.log(creature.logicPosition+'，'+creature.pathWayTempVec3)
              } else if (this.Owner.soldierCardDir == (_crd && CarDirType === void 0 ? (_reportPossibleCrUseOfCarDirType({
                error: Error()
              }), CarDirType) : CarDirType).rightTop.valueOf()) {
                this.pathWayTempVec3.set(cart.logicPosition.x + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(2.2), cart.logicPosition.y, cart.logicPosition.z + dir * (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(-2.2));
              } else if (this.Owner.soldierCardDir == (_crd && CarDirType === void 0 ? (_reportPossibleCrUseOfCarDirType({
                error: Error()
              }), CarDirType) : CarDirType).left.valueOf()) {
                this.pathWayTempVec3.set(cart.logicPosition.x + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(-2.2), cart.logicPosition.y, cart.logicPosition.z);
              } else if (this.Owner.soldierCardDir == (_crd && CarDirType === void 0 ? (_reportPossibleCrUseOfCarDirType({
                error: Error()
              }), CarDirType) : CarDirType).right.valueOf()) {
                this.pathWayTempVec3.set(cart.logicPosition.x + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(2.2), cart.logicPosition.y, cart.logicPosition.z);
              } else if (this.Owner.soldierCardDir == (_crd && CarDirType === void 0 ? (_reportPossibleCrUseOfCarDirType({
                error: Error()
              }), CarDirType) : CarDirType).leftbottom.valueOf()) {
                this.pathWayTempVec3.set(cart.logicPosition.x + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(-2.2), cart.logicPosition.y, cart.logicPosition.z + dir * (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(2.2));
              } else if (this.Owner.soldierCardDir == (_crd && CarDirType === void 0 ? (_reportPossibleCrUseOfCarDirType({
                error: Error()
              }), CarDirType) : CarDirType).rightbottom.valueOf()) {
                this.pathWayTempVec3.set(cart.logicPosition.x + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(2.2), cart.logicPosition.y, cart.logicPosition.z + dir * (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                  error: Error()
                }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(2.2));
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


        SearchTargetMove() {
          if (this.pathWayFlag) {
            //寻路中
            return;
          }

          if (this.targetCreature) {
            //存在目标生物
            return;
          }

          let targetTeamType2 = this.Owner.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue ? (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Red : (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue; //目标队伍类型

          let minDis; //最小距离

          let targetCreature; //目标生物
          //遍历所有生物

          let creatureMap = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
            error: Error()
          }), CreatureManager) : CreatureManager).Instance.creatureMap;
          let creatureData = creatureMap.data;

          for (let entityId in creatureData) {
            let creature = creatureMap.get(entityId);

            if (!creature.IsDeath && creature.teamType2 == targetTeamType2) {
              //未死亡是目标队伍类型
              let dis = Math.floor((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                error: Error()
              }), MathUtil) : MathUtil).GetDistance(this.Owner.logicPosition.x, this.Owner.logicPosition.z, creature.logicPosition.x, creature.logicPosition.z));

              if (!minDis || dis < minDis) {
                targetCreature = creature;
              }
            }
          }

          if (targetCreature) {
            //存在目标生物，寻路过去
            this.targetCreature = targetCreature;
            this.targetLogicVec3List = [this.targetCreature.logicPosition];
            this.pathWayFlag = true;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AiManager.js.map