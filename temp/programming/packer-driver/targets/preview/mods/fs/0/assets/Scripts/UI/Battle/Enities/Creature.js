System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Vec3, animation, LogicRenderConvert, MathUtil, NetConfig, SkillManager, BuffManager, SkillResult, BattleState, EffectManager, proto, BattleManager, UIWorldElementManager, CollisionCheckManager, AiManager, Attributes, EffectType, FXManager, EntityEffectManager, AniState, PopupType, Creature, _crd, NUser, TeamType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "../enums/TeamType2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicRenderConvert(extras) {
    _reporterNs.report("LogicRenderConvert", "../Utils/LogicRenderConvert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConfig(extras) {
    _reporterNs.report("NetConfig", "../../../Network/NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillManager(extras) {
    _reporterNs.report("SkillManager", "../Managers/SkillManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleContext(extras) {
    _reporterNs.report("BattleContext", "../Models/BattleContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffDefine(extras) {
    _reporterNs.report("BuffDefine", "../../../Data/BuffDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffManager(extras) {
    _reporterNs.report("BuffManager", "../Managers/BuffManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterDefine(extras) {
    _reporterNs.report("CharacterDefine", "../../../Data/CharacterDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageInfo(extras) {
    _reporterNs.report("DamageInfo", "../Vo/DamageInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillResult(extras) {
    _reporterNs.report("SkillResult", "../enums/SkillResult", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleState(extras) {
    _reporterNs.report("BattleState", "../enums/BattleState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../Managers/EffectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureType(extras) {
    _reporterNs.report("CreatureType", "../enums/CreatureType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "../Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpawnRuleDefine(extras) {
    _reporterNs.report("SpawnRuleDefine", "../../../Data/SpawnRuleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIWorldElementManager(extras) {
    _reporterNs.report("UIWorldElementManager", "../UIWorldElementManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionCheckManager(extras) {
    _reporterNs.report("CollisionCheckManager", "../Managers/CollisionCheckManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAiManager(extras) {
    _reporterNs.report("AiManager", "../Managers/AiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "../Models/Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttributes(extras) {
    _reporterNs.report("Attributes", "../Attribute/Attributes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../Effects/EffectType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXManager(extras) {
    _reporterNs.report("FXManager", "../Effects/FXManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityEffectManager(extras) {
    _reporterNs.report("EntityEffectManager", "../Effects/EntityEffectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniState(extras) {
    _reporterNs.report("AniState", "../enums/AniState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Models/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupType(extras) {
    _reporterNs.report("PopupType", "../enums/PopupType", _context.meta, extras);
  }

  _export("Creature", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
      animation = _cc.animation;
    }, function (_unresolved_2) {
      LogicRenderConvert = _unresolved_2.LogicRenderConvert;
    }, function (_unresolved_3) {
      MathUtil = _unresolved_3.MathUtil;
    }, function (_unresolved_4) {
      NetConfig = _unresolved_4.NetConfig;
    }, function (_unresolved_5) {
      SkillManager = _unresolved_5.SkillManager;
    }, function (_unresolved_6) {
      BuffManager = _unresolved_6.BuffManager;
    }, function (_unresolved_7) {
      SkillResult = _unresolved_7.SkillResult;
    }, function (_unresolved_8) {
      BattleState = _unresolved_8.BattleState;
    }, function (_unresolved_9) {
      EffectManager = _unresolved_9.EffectManager;
    }, function (_unresolved_10) {
      proto = _unresolved_10.default;
    }, function (_unresolved_11) {
      BattleManager = _unresolved_11.BattleManager;
    }, function (_unresolved_12) {
      UIWorldElementManager = _unresolved_12.UIWorldElementManager;
    }, function (_unresolved_13) {
      CollisionCheckManager = _unresolved_13.CollisionCheckManager;
    }, function (_unresolved_14) {
      AiManager = _unresolved_14.AiManager;
    }, function (_unresolved_15) {
      Attributes = _unresolved_15.Attributes;
    }, function (_unresolved_16) {
      EffectType = _unresolved_16.EffectType;
    }, function (_unresolved_17) {
      FXManager = _unresolved_17.FXManager;
    }, function (_unresolved_18) {
      EntityEffectManager = _unresolved_18.EntityEffectManager;
    }, function (_unresolved_19) {
      AniState = _unresolved_19.AniState;
    }, function (_unresolved_20) {
      PopupType = _unresolved_20.PopupType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a69b+QzR1CvaCqPqm7/cE5", "Creature", undefined);

      ({
        NUser,
        TeamType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("Creature", Creature = class Creature {
        //实体id
        //角色配置
        //刷怪配置 
        //队伍类型
        //节点对象
        //逻辑位置
        //渲染位置
        //是否死亡
        //死亡逻辑帧数
        //出生位置
        //出生方向
        //逻辑方向
        //生物类型
        //血条节点
        //修正值 
        //碰撞临时坐标
        //动画状态

        /** 组件 */
        // public animationComponent: AnimationComponent; //动画组件
        // 特效管理器组件
        //动画控制器

        /**角色属性 */
        //无操作帧数

        /**怪物属性 */
        //是否守护镖车
        //守护镖车有效，小兵在镖车的方向
        //ai管理器
        //距离
        constructor(teamType2, node, define, user, creatureType, birthPosition, birthRotation) {
          if (birthPosition === void 0) {
            birthPosition = null;
          }

          if (birthRotation === void 0) {
            birthRotation = null;
          }

          _defineProperty(this, "entityId", void 0);

          _defineProperty(this, "characterDefine", void 0);

          _defineProperty(this, "spawnRuleDefine", void 0);

          _defineProperty(this, "teamType2", void 0);

          _defineProperty(this, "node", void 0);

          _defineProperty(this, "logicPosition", new Vec3());

          _defineProperty(this, "renderPosition", new Vec3());

          _defineProperty(this, "SkillMgr", void 0);

          _defineProperty(this, "BuffMgr", void 0);

          _defineProperty(this, "BattleState", void 0);

          _defineProperty(this, "EffectMgr", void 0);

          _defineProperty(this, "IsDeath", false);

          _defineProperty(this, "deathFrameId", 0);

          _defineProperty(this, "birthPosition", new Vec3());

          _defineProperty(this, "birthRotation", new Vec3());

          _defineProperty(this, "logicRotation", new Vec3());

          _defineProperty(this, "creatureType", void 0);

          _defineProperty(this, "hpBarNode", void 0);

          _defineProperty(this, "_amend", new Vec3());

          _defineProperty(this, "collisionTempVec3", new Vec3());

          _defineProperty(this, "aniState", void 0);

          _defineProperty(this, "EntityEffectMgr", void 0);

          _defineProperty(this, "animationController", void 0);

          _defineProperty(this, "user", null);

          _defineProperty(this, "notHandleFrameCount", 0);

          _defineProperty(this, "attributes", new (_crd && Attributes === void 0 ? (_reportPossibleCrUseOfAttributes({
            error: Error()
          }), Attributes) : Attributes)());

          _defineProperty(this, "isGuardCart", false);

          _defineProperty(this, "soldierCardDir", 0);

          _defineProperty(this, "AiMgr", void 0);

          _defineProperty(this, "dir", 0);

          _defineProperty(this, "nodeCurrentPosition", new Vec3());

          //初始化基础属性
          this.attributes.InitBasicAttributes(define, user, creatureType);
          this.user = user;
          this.creatureType = creatureType;
          this.teamType2 = teamType2;
          this.node = node;
          this.characterDefine = define; // this.animationComponent = node.getComponent(AnimationComponent);

          this.EntityEffectMgr = node.getComponent(_crd && EntityEffectManager === void 0 ? (_reportPossibleCrUseOfEntityEffectManager({
            error: Error()
          }), EntityEffectManager) : EntityEffectManager);
          this.animationController = node.getComponent(animation.AnimationController); //出生位置

          if (birthPosition) {
            this.birthPosition = birthPosition;
            this.node.parent.setWorldPosition(birthPosition);
          } else {
            this.node.parent.getWorldPosition(this.birthPosition);
          } //初始化逻辑位置、方向


          node.parent.getWorldPosition(this.renderPosition);
          (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
            error: Error()
          }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_TwoVec3(this.logicPosition, this.renderPosition);
          node.parent.getRotation().getEulerAngles(this.logicRotation); //出生方向

          if (birthRotation) {
            this.birthRotation = birthRotation;
            node.parent.setRotationFromEuler(birthRotation);
          } else {
            this.birthRotation.set(this.logicRotation.x, this.logicRotation.y, this.logicRotation.z);
          }

          this.SkillMgr = new (_crd && SkillManager === void 0 ? (_reportPossibleCrUseOfSkillManager({
            error: Error()
          }), SkillManager) : SkillManager)(this);
          this.BuffMgr = new (_crd && BuffManager === void 0 ? (_reportPossibleCrUseOfBuffManager({
            error: Error()
          }), BuffManager) : BuffManager)(this);
          this.EffectMgr = new (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager)(this);
          this.AiMgr = new (_crd && AiManager === void 0 ? (_reportPossibleCrUseOfAiManager({
            error: Error()
          }), AiManager) : AiManager)(this);
        }
        /**
         * 获取碰撞临时坐标，避免值改变影响原坐标
         */


        get CollisionTempVec3() {
          this.collisionTempVec3.set(this.logicPosition.x, this.logicPosition.y, this.logicPosition.z);
          return this.collisionTempVec3;
        }
        /**
         * 逻辑转渲染位置
         */


        LogicToRenderPosition(logicX, logicY, logicZ) {
          this.logicPosition.set(logicX, logicY, logicZ);
          (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
            error: Error()
          }), LogicRenderConvert) : LogicRenderConvert).LogicToRender_TwoVec3(this.logicPosition, this.renderPosition); // this.node.parent.setWorldPosition(this.renderPosition);
          // console.log('logicPosition='+this.logicPosition+'，renderPosition='+this.renderPosition)
        }

        update(dt) {
          // console.log('dt='+dt)
          //插值位置
          if (this.node.parent) {
            this.node.parent.getWorldPosition(this.nodeCurrentPosition);
            this.node.parent.setWorldPosition((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).lerp(this.nodeCurrentPosition, this.renderPosition, dt * 1000, (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
              error: Error()
            }), NetConfig) : NetConfig).frameTime));
          }
        }

        CastSkill(context, skill) {
          context.Result = skill.Cast(context);

          if (context.Result == (_crd && SkillResult === void 0 ? (_reportPossibleCrUseOfSkillResult({
            error: Error()
          }), SkillResult) : SkillResult).Ok) {
            this.BattleState = (_crd && BattleState === void 0 ? (_reportPossibleCrUseOfBattleState({
              error: Error()
            }), BattleState) : BattleState).InBattle;
          }
        }

        DoDamage(damage, source) {
          this.BattleState = (_crd && BattleState === void 0 ? (_reportPossibleCrUseOfBattleState({
            error: Error()
          }), BattleState) : BattleState).InBattle;
          this.attributes.HP -= damage.Damage;

          if (this.attributes.HP < 0) {
            this.DoDeath();
            damage.WillDead = true;
          }

          this.OnDamage(damage, source);
          (_crd && UIWorldElementManager === void 0 ? (_reportPossibleCrUseOfUIWorldElementManager({
            error: Error()
          }), UIWorldElementManager) : UIWorldElementManager).Instance.ShowPopupText((_crd && PopupType === void 0 ? (_reportPossibleCrUseOfPopupType({
            error: Error()
          }), PopupType) : PopupType).Damage, this, -damage.Damage, damage.Crit, damage.isBuff);
        }

        OnDamage(damage, source) {}
        /**
         * 逻辑更新
         */


        LogicUpdate(frameId) {
          this.SkillMgr.LogicUpdate(frameId);
          this.BuffMgr.LogicUpdate();
          this.AiMgr.LogicUpdate();
        }

        Distance(target) {
          var dis = Math.floor((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetDistance(this.logicPosition.x, this.logicPosition.z, target.logicPosition.x, target.logicPosition.z));
          return dis;
        }

        Distance2(position) {
          var dis = Math.floor((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetDistance(this.logicPosition.x, this.logicPosition.z, position.x, position.z));
          return dis;
        }

        Distance3(positionX, positionZ) {
          var dis = Math.floor((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetDistance(this.logicPosition.x, this.logicPosition.z, positionX, positionZ));
          return dis;
        }

        AddBuf(context, buffDefine) {
          this.BuffMgr.AddBuf(context, buffDefine);
        }
        /**
         * 死亡
         */


        DoDeath() {
          this.SetAnim((_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
            error: Error()
          }), AniState) : AniState).Death, true);
          this.IsDeath = true;
          this.deathFrameId = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.executeFrameId;
          (_crd && UIWorldElementManager === void 0 ? (_reportPossibleCrUseOfUIWorldElementManager({
            error: Error()
          }), UIWorldElementManager) : UIWorldElementManager).Instance.RemoveCharacterHpBar(this);
        }
        /**
         * 移动处理
         */


        MoveHandle() {
          (_crd && CollisionCheckManager === void 0 ? (_reportPossibleCrUseOfCollisionCheckManager({
            error: Error()
          }), CollisionCheckManager) : CollisionCheckManager).Instance.CollisionCheck(this);
        }
        /**
         * 旋转处理
         * @param angle 角度
         */


        RotateHandle(angle) {
          // if(!this.node.parent){
          //    console.log('RotateHandle: character id='+this.characterDefine.ID+'，node id='+this.node.uuid+'，teamType2='+this.teamType2)
          // }
          //更新方向逻辑
          this.logicRotation.y = angle; //更新方向渲染

          this.node.parent.setRotationFromEuler(0, angle, 0);
        }

        GetPopupOffset() {
          return new Vec3(0, this.characterDefine.Height, 0);
        }

        GetHitOffset() {
          return new Vec3(0, this.characterDefine.Height * 0.8, 0);
        }

        PlayEffect(type, name, target, duration) {
          if (duration === void 0) {
            duration = 0;
          }

          console.log('EntityEffectMgr=' + this.EntityEffectMgr + '，type=' + type + '，name=' + name + '，height=' + target.GetHitOffset() + '，duration=' + duration);

          if (type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).Position || type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).Hit) {
            (_crd && FXManager === void 0 ? (_reportPossibleCrUseOfFXManager({
              error: Error()
            }), FXManager) : FXManager).Instance.PlayEffect(type, name, target.node, target.GetHitOffset(), duration);
          } else {
            this.EntityEffectMgr.PlayEffect2(type, name, target.node, target.GetHitOffset(), duration);
          }
        }

        PlayEffect2(type, name, position, duration) {
          if (duration === void 0) {
            duration = 0;
          }

          if (type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).Position || type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).Hit) (_crd && FXManager === void 0 ? (_reportPossibleCrUseOfFXManager({
            error: Error()
          }), FXManager) : FXManager).Instance.PlayEffect(type, name, null, position, duration);else this.EntityEffectMgr.PlayEffect2(type, name, null, position, duration);
        }

        PlayEffectBulletRealCheck(type, name, bullet) {
          this.EntityEffectMgr.PlayEffectBulletRealCheck(type, name, bullet);
        }
        /**
         * 设置动画状态
         * @param entityState  动画状态 
         * @param value  值
         */


        SetAnim(aniState, value) {
          if (value) {
            this.aniState = aniState;
          }

          if (!this.animationController) {
            return;
          }

          this.animationController.setValue((_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
            error: Error()
          }), AniState) : AniState)[aniState], value);

          if (aniState == (_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
            error: Error()
          }), AniState) : AniState).Move) {
            this.MoveHandle();
          } else if (aniState == (_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
            error: Error()
          }), AniState) : AniState).Idle) {
            //空闲
            this.animationController.setValue((_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
              error: Error()
            }), AniState) : AniState)[(_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
              error: Error()
            }), AniState) : AniState).Move], false);
          }
        }
        /**
         * 获取动画状态值
         * @param entityState 动画状态
         * @return 值
         */
        // public GetAnim(aniState:AniState) :any {
        //     return this.animationController.getValue(AniState[aniState]);
        // }


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Creature.js.map