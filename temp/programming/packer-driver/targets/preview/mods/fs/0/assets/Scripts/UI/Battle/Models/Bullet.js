System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetConfig, CreatureManager, DataManager, LogicRenderConvert, MathUtil, HashMap, EffectType, Bullet, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "./Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillHitInfo(extras) {
    _reporterNs.report("SkillHitInfo", "../Vo/SkillHitInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConfig(extras) {
    _reporterNs.report("NetConfig", "../../../Network/NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureManager(extras) {
    _reporterNs.report("CreatureManager", "../Managers/CreatureManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicRenderConvert(extras) {
    _reporterNs.report("LogicRenderConvert", "../Utils/LogicRenderConvert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../../../Utils/HashMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../Effects/EffectType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectController(extras) {
    _reporterNs.report("EffectController", "../Effects/EffectController", _context.meta, extras);
  }

  _export("Bullet", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NetConfig = _unresolved_2.NetConfig;
    }, function (_unresolved_3) {
      CreatureManager = _unresolved_3.CreatureManager;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      LogicRenderConvert = _unresolved_5.LogicRenderConvert;
    }, function (_unresolved_6) {
      MathUtil = _unresolved_6.MathUtil;
    }, function (_unresolved_7) {
      HashMap = _unresolved_7.HashMap;
    }, function (_unresolved_8) {
      EffectType = _unresolved_8.EffectType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3f19BTSAJKS4kVrDk4U3+H", "Bullet", undefined);

      _export("Bullet", Bullet = class Bullet {
        //x位置
        //z位置
        //开始x位置
        //开始z位置
        //已经造成伤害的目标 key=>entintyId  value=>1
        constructor(skill, target, hitInfo) {
          _defineProperty(this, "skill", void 0);

          _defineProperty(this, "hitInfo", void 0);

          _defineProperty(this, "duration", 0);

          _defineProperty(this, "flyTime", 0);

          _defineProperty(this, "positionX", void 0);

          _defineProperty(this, "positionZ", void 0);

          _defineProperty(this, "startPositionX", void 0);

          _defineProperty(this, "startPositionZ", void 0);

          _defineProperty(this, "hitMap", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());

          _defineProperty(this, "Stoped", false);

          _defineProperty(this, "effect", void 0);

          _defineProperty(this, "target", void 0);

          this.skill = skill;
          this.hitInfo = hitInfo;
          this.target = target;
          var distance = 0;

          if (!this.skill.Define.RealDetection) {
            //非实时检测
            distance = skill.Owner.Distance(target);
            this.duration = distance / this.skill.Define.BulletSpeed; //播放特效，子弹朝着目标飞

            console.log('子弹朝着目标飞');
            skill.Owner.PlayEffect((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).Bullet, skill.Define.BulletResource, target, this.duration);
          } else {
            //实时检测
            this.startPositionX = this.positionX = skill.Owner.logicPosition.x;
            this.startPositionZ = this.positionZ = skill.Owner.logicPosition.z; //播放特效

            skill.Owner.PlayEffectBulletRealCheck((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).BulletRealCheck, skill.Define.BulletResource, this);
          }

          console.log('Bullet：' + this.skill.Define.Name + '，CastBullet：' + this.skill.Define.BulletResource + '，Target：' + (target ? target.characterDefine.Name : '') + '，Distance：' + distance + '，Time：' + this.duration + '，RealDetection：' + this.skill.Define.RealDetection);
        }

        LogicUpdate() {
          if (this.Stoped) return;

          if (!this.skill.Define.RealDetection) //非真实检测
            {
              this.UpdateTime();
            } else {
            this.UpdatePos();
          }
        }

        UpdateTime() {
          this.flyTime += (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
            error: Error()
          }), NetConfig) : NetConfig).frameTime;

          if (this.flyTime > this.duration) {
            this.skill.Context.Target = this.target; //设置目标

            this.hitInfo.isBullet = true;
            this.skill.DoHit2(this.hitInfo);
            this.Stoped = true;
          }
        }

        UpdatePos() {
          var rockerSpeedVo = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.rockerSpeeds[this.skill.Context.dirDegree];

          if (!rockerSpeedVo) {
            console.log('Bullet UpdatePos not rockerSpeedVo! dirDegree=' + this.skill.Context.dirDegree);
            return;
          }

          this.positionX += rockerSpeedVo.x * this.skill.Define.BulletSpeed;
          this.positionZ += rockerSpeedVo.y * this.skill.Define.BulletSpeed;
          var dis = Math.floor((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetDistance(this.startPositionX, this.startPositionZ, this.positionX, this.positionZ));

          if (dis >= (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
            error: Error()
          }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(this.skill.Define.CastRange)) {
            //超出范围则停止
            console.log('超出范围则停止：dis=' + dis + '，CastRange=' + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(this.skill.Define.CastRange));
            this.Stoped = true;
            return;
          }

          var creatureArr = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
            error: Error()
          }), CreatureManager) : CreatureManager).Instance.FindUnitsInRange(this.positionX, this.positionZ, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
            error: Error()
          }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(this.skill.Define.BulletRadius), 1, this.skill.Owner.teamType2);

          if (creatureArr.length > 0) {
            //打中敌人
            for (var i = 0; i < creatureArr.length; i++) {
              var creature = creatureArr[i];

              if (this.hitMap.get(creature.entityId)) {
                //已经造成伤害的进入下一次循环
                continue;
              }

              this.hitMap.put(creature.entityId, 1);
              this.skill.Context.Target = creature; //设置目标

              this.hitInfo.isBullet = true;
              this.skill.DoHit2(this.hitInfo);

              if (!this.skill.Define.MultipleHit) {
                //非多次伤害停止
                this.Stoped = true;
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Bullet.js.map