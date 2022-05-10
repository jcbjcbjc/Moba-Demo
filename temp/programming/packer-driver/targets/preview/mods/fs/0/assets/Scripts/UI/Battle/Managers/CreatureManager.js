System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HashMap, UIWorldElementManager, Vec3, CollisionCheckManager, CreatureType, ShapeType, MathUtil, LogicRenderConvert, proto, CreatureManager, _crd, CharacterClass;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../../../Utils/HashMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIWorldElementManager(extras) {
    _reporterNs.report("UIWorldElementManager", "../UIWorldElementManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "../enums/TeamType2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionCheckManager(extras) {
    _reporterNs.report("CollisionCheckManager", "./CollisionCheckManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureType(extras) {
    _reporterNs.report("CreatureType", "../enums/CreatureType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShapeType(extras) {
    _reporterNs.report("ShapeType", "../enums/ShapeType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicRenderConvert(extras) {
    _reporterNs.report("LogicRenderConvert", "../Utils/LogicRenderConvert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../Proto/proto.js", _context.meta, extras);
  }

  _export("CreatureManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      HashMap = _unresolved_2.HashMap;
    }, function (_unresolved_3) {
      UIWorldElementManager = _unresolved_3.UIWorldElementManager;
    }, function (_unresolved_4) {
      CollisionCheckManager = _unresolved_4.CollisionCheckManager;
    }, function (_unresolved_5) {
      CreatureType = _unresolved_5.CreatureType;
    }, function (_unresolved_6) {
      ShapeType = _unresolved_6.ShapeType;
    }, function (_unresolved_7) {
      MathUtil = _unresolved_7.MathUtil;
    }, function (_unresolved_8) {
      LogicRenderConvert = _unresolved_8.LogicRenderConvert;
    }, function (_unresolved_9) {
      proto = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee0ccxlFtFEQIlxVgqdKEz1", "CreatureManager", undefined);

      ({
        CharacterClass
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      /**
       * 生物管理器
       */

      _export("CreatureManager", CreatureManager = class CreatureManager {
        constructor() {
          _defineProperty(this, "creatureMap", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());

          _defineProperty(this, "idx", 0);

          _defineProperty(this, "characterList", new Array());

          _defineProperty(this, "monsterList", new Array());

          _defineProperty(this, "emptyList", new Array());

          _defineProperty(this, "circleTempVec3", new Vec3());
        }

        Clear() {
          //移除生物血条节点
          var creatureData = this.creatureMap.data;

          for (var entityId in creatureData) {
            var creature = this.creatureMap.get(entityId);
            (_crd && UIWorldElementManager === void 0 ? (_reportPossibleCrUseOfUIWorldElementManager({
              error: Error()
            }), UIWorldElementManager) : UIWorldElementManager).Instance.RemoveCharacterHpBar(creature);
          }

          this.creatureMap.clear();
          this.idx = 0;
        }
        /**
         * 添加生物
         * @param node 模型节点
         * @param creature  生物对象
         * @param idx 唯一标识id
         */


        AddCreature(node, creature, idx) {
          if (idx === void 0) {
            idx = undefined;
          }

          if (idx) {
            this.idx = idx;
          } else {
            this.idx++;
          }

          creature.entityId = this.idx;
          node.entityId = this.idx;
          this.creatureMap.put(this.idx, creature); //添加血条

          (_crd && UIWorldElementManager === void 0 ? (_reportPossibleCrUseOfUIWorldElementManager({
            error: Error()
          }), UIWorldElementManager) : UIWorldElementManager).Instance.AddCharacterHpBar(node, creature); //添加到碰撞管理器

          if (creature.characterDefine.IsCollision) {
            //带碰撞
            (_crd && CollisionCheckManager === void 0 ? (_reportPossibleCrUseOfCollisionCheckManager({
              error: Error()
            }), CollisionCheckManager) : CollisionCheckManager).Instance.creatureList.push(creature);
          }
        }
        /**
         * 移除生物
         * @param entityId 实体id
         */


        RemoveCreature(entityId) {
          this.creatureMap.remove(entityId);
        }
        /**
         * 获取生物
         * @param entityId 实体id
         */


        GetCreature(entityId) {
          return this.creatureMap.get(entityId);
        }

        update(dt) {
          var creatureData = this.creatureMap.data;

          for (var entityId in creatureData) {
            var creature = this.creatureMap.get(entityId);
            creature.update(dt);
          }
        }
        /**
         * 根据类型查询数量
         * @param characterClass 
         */


        GetCountByClass(characterClass) {
          var count = 0;
          var creatureData = this.creatureMap.data;

          for (var entityId in creatureData) {
            var creature = this.creatureMap.get(entityId);

            if (creature.characterDefine.Class.toString() == CharacterClass[characterClass]) {
              count++;
            }
          }

          return count;
        }

        /**
         * 查询范围内的敌人
         * @param positionX 位置x
         * @param positionZ 位置z
         * @param radius 半径
         * @param blowsNum 个数  小于0所有
         * @param teamType2 队伍类型
         * @param isDirOrder 是否根据距离排序
         */
        FindUnitsInRange(positionX, positionZ, radius, blowsNum, teamType2, isDirOrder) {
          if (isDirOrder === void 0) {
            isDirOrder = false;
          }

          if (this.characterList.length > 0) {
            this.characterList = [];
          }

          if (this.monsterList.length > 0) {
            this.monsterList = [];
          }

          if (this.emptyList.length > 0) {
            this.emptyList = [];
          }

          var creatureMap = CreatureManager.Instance.creatureMap;
          var creatureData = creatureMap.data;

          for (var entityId in creatureData) {
            var creature = creatureMap.get(entityId);

            if (creature.IsDeath) {
              //死亡
              continue;
            }

            if (teamType2 == creature.teamType2) {
              //自己队伍的
              continue;
            }

            var isCollision = false; //是否碰撞 

            if (creature.characterDefine.Shape.toString() == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType)[(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).circle]) {
              //生物为圆形
              //两个圆形碰撞检测
              if (creature.Distance3(positionX, positionZ) < (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature.characterDefine.Radius) + radius) {
                isCollision = true;
              }
            } else if (creature.characterDefine.Shape.toString() == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType)[(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).rect]) {
              //生物为矩形
              //矩形和圆形碰撞检测
              this.circleTempVec3.set(positionX, 0, positionZ);
              isCollision = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                error: Error()
              }), MathUtil) : MathUtil).CollideCircleAndRectRotateRevise(this.circleTempVec3, radius, creature.CollisionTempVec3, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature.characterDefine.Width), (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature.characterDefine.Long_), creature._amend, 360 - creature.logicRotation.y);
            }

            if (isCollision) {
              //碰撞
              //计算到检测点的距离
              creature.dir = creature.Distance3(positionX, positionZ);

              if (creature.creatureType == (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
                error: Error()
              }), CreatureType) : CreatureType).Character) {
                this.characterList.push(creature);
              } else if (creature.creatureType == (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
                error: Error()
              }), CreatureType) : CreatureType).Monster) {
                this.monsterList.push(creature);
              }
            }
          }

          if (blowsNum == 0 || this.characterList.length + this.monsterList.length == 0) {
            return this.emptyList;
          } else {
            var resultList = this.characterList.concat(this.monsterList);

            if (isDirOrder) {
              resultList = resultList.sort((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                error: Error()
              }), MathUtil) : MathUtil).sortBy('dir', true));
              console.log('升序'); // for(let i=0; i < resultList.length; i++){
              //     console.log(resultList[i].dir)
              // }
            }

            if (blowsNum < 0) {
              return resultList;
            } else {
              if (blowsNum >= resultList.length) {
                return resultList;
              } else {
                resultList.splice(blowsNum);
                return resultList;
              }
            }
          }
        }

      });

      _defineProperty(CreatureManager, "Instance", new CreatureManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CreatureManager.js.map