System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, ShapeType, MathUtil, LogicRenderConvert, TeamType2, CollisionCheckManager, _crd, CharacterClass;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
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

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "../enums/TeamType2", _context.meta, extras);
  }

  _export("CollisionCheckManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      ShapeType = _unresolved_3.ShapeType;
    }, function (_unresolved_4) {
      MathUtil = _unresolved_4.MathUtil;
    }, function (_unresolved_5) {
      LogicRenderConvert = _unresolved_5.LogicRenderConvert;
    }, function (_unresolved_6) {
      TeamType2 = _unresolved_6.TeamType2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2108/EJ19NS5xlJXYM8h0/", "CollisionCheckManager", undefined);

      ({
        CharacterClass
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      /**
       * 碰撞管理器
       */

      _export("CollisionCheckManager", CollisionCheckManager = class CollisionCheckManager {
        constructor() {
          _defineProperty(this, "creatureList", []);
        }

        //碰撞生物集合

        /**
        * 清理
        */
        Clear() {
          this.creatureList = [];
        }
        /**
         * 碰撞检测
         * @param creature 
         */


        CollisionCheck(creature) {
          //和其它生物进行碰撞检测
          for (let creature2 of this.creatureList) {
            if (!creature.characterDefine.IsCollision || !creature2.characterDefine.IsCollision || creature.IsDeath || creature2.IsDeath || creature.entityId == creature2.entityId) {
              //死亡或自己
              continue;
            }

            let myLogicPosition = creature.CollisionTempVec3; //我方位置坐标

            let enemyLogicPosition = creature2.CollisionTempVec3; //敌方位置坐标
            //碰撞检测开始

            let isCollision = false; //是否碰撞

            let isReviseMyFlag = true; //是否修正自己

            if (creature.characterDefine.Shape.toString() == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType)[(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).circle] && creature2.characterDefine.Shape.toString() == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType)[(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).circle]) {
              //都为圆形
              isCollision = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                error: Error()
              }), MathUtil) : MathUtil).CollideCircleAndCircleRevise(myLogicPosition, enemyLogicPosition, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature.characterDefine.Radius), (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature2.characterDefine.Radius), creature._amend);
            } else if (creature.characterDefine.Shape.toString() == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType)[(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).circle] && creature2.characterDefine.Shape.toString() == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType)[(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).rect]) {
              //自己为圆形、敌方为矩形
              isCollision = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                error: Error()
              }), MathUtil) : MathUtil).CollideCircleAndRectRotateRevise(myLogicPosition, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature.characterDefine.Radius), enemyLogicPosition, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature2.characterDefine.Width), (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature2.characterDefine.Long_), creature._amend, 360 - creature2.logicRotation.y);

              if (creature.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Blue) {
                creature._amend.x = -creature._amend.x;
                creature._amend.z = -creature._amend.z;
              }
            } else if (creature.characterDefine.Shape.toString() == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType)[(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).rect] && creature2.characterDefine.Shape.toString() == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType)[(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).circle]) {
              //自己为矩形、敌方为圆形
              if (creature.characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                //镖车
                isReviseMyFlag = false; //修正敌人
              }

              isCollision = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                error: Error()
              }), MathUtil) : MathUtil).CollideCircleAndRectRotateRevise(enemyLogicPosition, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature2.characterDefine.Radius), myLogicPosition, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature.characterDefine.Width), (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
                error: Error()
              }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(creature.characterDefine.Long_), isReviseMyFlag ? creature._amend : creature2._amend, 360 - creature.logicRotation.y); // if(creature.teamType2==TeamType2.Blue){
              //     console.log('镖车角度='+(creature.logicRotation.y))
              // }

              if (creature.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Blue) {
                if (isReviseMyFlag) {
                  //修正自己
                  creature._amend.x = -creature._amend.x;
                  creature._amend.z = -creature._amend.z;
                } else {
                  creature2._amend.x = -creature2._amend.x;
                  creature2._amend.z = -creature2._amend.z;
                }
              }
            }

            if (isCollision) {
              //碰撞到了，修正自己
              console.log('碰撞到了，修正位置：' + (isReviseMyFlag ? creature._amend : creature2._amend));

              if (isReviseMyFlag) {
                //修正自己
                creature.LogicToRenderPosition(creature.logicPosition.x + creature._amend.x, creature.logicPosition.y, creature.logicPosition.z + creature._amend.z);
              } else {
                //修正敌人
                creature2.LogicToRenderPosition(creature2.logicPosition.x + creature2._amend.x, creature2.logicPosition.y, creature2.logicPosition.z + creature2._amend.z);
              }
            }
          }
        }

      });

      _defineProperty(CollisionCheckManager, "Instance", new CollisionCheckManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CollisionCheckManager.js.map