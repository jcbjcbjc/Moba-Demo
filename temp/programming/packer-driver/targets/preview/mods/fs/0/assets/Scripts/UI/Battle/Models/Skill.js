System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SkillStatus, DataManager, Bullet, SkillResult, TargetType, TriggerType, NetConfig, SkillHitInfo, Vec3, DamageInfo, RandomUtil, CreatureManager, LogicRenderConvert, MathUtil, EffectType, AniState, Skill, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillDefine(extras) {
    _reporterNs.report("SkillDefine", "../../../Data/SkillDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillStatus(extras) {
    _reporterNs.report("SkillStatus", "../enums/SkillStatus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleContext(extras) {
    _reporterNs.report("BattleContext", "./BattleContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillResult(extras) {
    _reporterNs.report("SkillResult", "../enums/SkillResult", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTargetType(extras) {
    _reporterNs.report("TargetType", "../enums/TargetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTriggerType(extras) {
    _reporterNs.report("TriggerType", "../enums/TriggerType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConfig(extras) {
    _reporterNs.report("NetConfig", "../../../Network/NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillHitInfo(extras) {
    _reporterNs.report("SkillHitInfo", "../Vo/SkillHitInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageInfo(extras) {
    _reporterNs.report("DamageInfo", "../Vo/DamageInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandomUtil(extras) {
    _reporterNs.report("RandomUtil", "../Utils/RandomUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureManager(extras) {
    _reporterNs.report("CreatureManager", "../Managers/CreatureManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicRenderConvert(extras) {
    _reporterNs.report("LogicRenderConvert", "../Utils/LogicRenderConvert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../Effects/EffectType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniState(extras) {
    _reporterNs.report("AniState", "../enums/AniState", _context.meta, extras);
  }

  _export("Skill", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SkillStatus = _unresolved_2.SkillStatus;
    }, function (_unresolved_3) {
      DataManager = _unresolved_3.DataManager;
    }, function (_unresolved_4) {
      Bullet = _unresolved_4.Bullet;
    }, function (_unresolved_5) {
      SkillResult = _unresolved_5.SkillResult;
    }, function (_unresolved_6) {
      TargetType = _unresolved_6.TargetType;
    }, function (_unresolved_7) {
      TriggerType = _unresolved_7.TriggerType;
    }, function (_unresolved_8) {
      NetConfig = _unresolved_8.NetConfig;
    }, function (_unresolved_9) {
      SkillHitInfo = _unresolved_9.SkillHitInfo;
    }, function (_unresolved_10) {
      DamageInfo = _unresolved_10.DamageInfo;
    }, function (_unresolved_11) {
      RandomUtil = _unresolved_11.RandomUtil;
    }, function (_unresolved_12) {
      CreatureManager = _unresolved_12.CreatureManager;
    }, function (_unresolved_13) {
      LogicRenderConvert = _unresolved_13.LogicRenderConvert;
    }, function (_unresolved_14) {
      MathUtil = _unresolved_14.MathUtil;
    }, function (_unresolved_15) {
      EffectType = _unresolved_15.EffectType;
    }, function (_unresolved_16) {
      AniState = _unresolved_16.AniState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6df135D/9hKxbbj7oBHZo7o", "Skill", undefined);

      _export("Skill", Skill = class Skill {
        //当前逻辑帧
        constructor(skillId, owner) {
          _defineProperty(this, "skillId", void 0);

          _defineProperty(this, "Owner", void 0);

          _defineProperty(this, "Define", void 0);

          _defineProperty(this, "Status", (_crd && SkillStatus === void 0 ? (_reportPossibleCrUseOfSkillStatus({
            error: Error()
          }), SkillStatus) : SkillStatus).None);

          _defineProperty(this, "cd", 0);

          _defineProperty(this, "castingTime", 0);

          _defineProperty(this, "skillTime", 0);

          _defineProperty(this, "Hit", 0);

          _defineProperty(this, "Context", void 0);

          _defineProperty(this, "frameId", void 0);

          _defineProperty(this, "Bullets", new Array());

          this.skillId = skillId;
          this.Owner = owner;
          this.Define = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.skills[this.Owner.characterDefine.ID][this.skillId];
        }

        get Instant() {
          if (this.Define.CastTime > 0) return false;
          if (this.Define.Bullet) return false;
          if (this.Define.Duration > 0) return false;
          if (this.Define.HitTimes != null && this.Define.HitTimes.length > 0) return false;
          return true;
        }

        CanCast(context) {
          if (this.Status != (_crd && SkillStatus === void 0 ? (_reportPossibleCrUseOfSkillStatus({
            error: Error()
          }), SkillStatus) : SkillStatus).None) {
            return (_crd && SkillResult === void 0 ? (_reportPossibleCrUseOfSkillResult({
              error: Error()
            }), SkillResult) : SkillResult).Casting;
          } // if(this.Define.CastTarget == TargetType.Target)
          // {
          //     if (!context.Target || context.Target == this.Owner)
          //         return SkillResult.InvalidTarget;
          //     let distance = this.Owner.Distance(context.Target);
          //     if(distance > this.Define.CastRange)
          //     {
          //         return SkillResult.OutOfRange;
          //     }
          // }
          // if (this.Define.CastTarget == TargetType.Position)
          // {
          //     if (!context.Position)
          //         return SkillResult.InvalidTarget;
          //     if(this.Owner.Distance2(context.Position) > this.Define.CastRange)
          //     {
          //         return SkillResult.OutOfRange;
          //     }
          // }


          if (this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).SelectedRange]) {
            //选择范围
            console.log('positionX：' + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(context.positionX) + '，positionZ：' + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(context.positionZ) + '，CastRange：' + (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(this.Define.CastRange) + '，dis：' + this.Owner.Distance3((_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(context.positionX), (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(context.positionZ)));

            if (this.Owner.Distance3((_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(context.positionX), (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(context.positionZ)) > (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(this.Define.CastRange)) {
              return (_crd && SkillResult === void 0 ? (_reportPossibleCrUseOfSkillResult({
                error: Error()
              }), SkillResult) : SkillResult).OutOfRange;
            }
          }

          if (this.cd > 0) {
            return (_crd && SkillResult === void 0 ? (_reportPossibleCrUseOfSkillResult({
              error: Error()
            }), SkillResult) : SkillResult).CoolDown;
          }

          return (_crd && SkillResult === void 0 ? (_reportPossibleCrUseOfSkillResult({
            error: Error()
          }), SkillResult) : SkillResult).Ok;
        }

        Cast(context) {
          var result = this.CanCast(context);

          if (result == (_crd && SkillResult === void 0 ? (_reportPossibleCrUseOfSkillResult({
            error: Error()
          }), SkillResult) : SkillResult).Ok) {
            this.Owner.SetAnim((_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
              error: Error()
            }), AniState) : AniState)[this.Define.SkillAnim], true); //播放动作

            this.castingTime = 0;
            this.skillTime = 0;
            this.cd = this.Define.CD;
            this.Context = context;
            this.Hit = 0;
            this.Bullets = [];
            this.AddBuff((_crd && TriggerType === void 0 ? (_reportPossibleCrUseOfTriggerType({
              error: Error()
            }), TriggerType) : TriggerType).SkillCast, this.Context.Target);

            if (this.Instant) {
              this.DoHit();
            } else {
              if (this.Define.CastTime > 0) {
                this.Status = (_crd && SkillStatus === void 0 ? (_reportPossibleCrUseOfSkillStatus({
                  error: Error()
                }), SkillStatus) : SkillStatus).Casting;
              } else {
                this.StartSkill();
              }
            }

            this.cd = this.Define.CD;
          }

          console.log("Skill[{0}].Cast Result:[{1}] Status:{2}", this.Define.Name, result, this.Status);
          return result;
        } /// <summary>
        /// 技能执行开始
        /// </summary>


        StartSkill() {
          this.Status = (_crd && SkillStatus === void 0 ? (_reportPossibleCrUseOfSkillStatus({
            error: Error()
          }), SkillStatus) : SkillStatus).Running;
          console.log('Skill StartSkill');

          if (this.Define.AOEEffect) {
            if (this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType).SelectedRange]) //选择范围
              {
                var renderVec3 = new Vec3(this.Context.positionX, 0, this.Context.positionZ);
                this.Owner.PlayEffect2((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).Position, this.Define.AOEEffect, renderVec3);
              } else if (this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType).Target]) //目标
              {
                this.Owner.PlayEffect((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).Position, this.Define.AOEEffect, this.Context.Target);
              } else if (this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType).Self]) //自己
              {
                this.Owner.PlayEffect((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).Position, this.Define.AOEEffect, this.Owner);
              }
          }
        }

        AddBuff(trigger, target) {
          if (this.Define.Buff == null || this.Define.Buff.length == 0) return; // console.log('Define.Buff='+this.Define.Buff);

          for (var buffId of this.Define.Buff) {
            if (!buffId) {
              continue;
            }

            var buffDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.buffs[buffId];
            console.log(buffId + '==' + buffDefine);
            if (buffDefine.Trigger.toString() != (_crd && TriggerType === void 0 ? (_reportPossibleCrUseOfTriggerType({
              error: Error()
            }), TriggerType) : TriggerType)[trigger]) continue; //触发类型不一致

            console.log('buffDefine.Target=' + buffDefine.Target.toString());

            if (buffDefine.Target.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType).Self]) {
              this.Owner.AddBuf(this.Context, buffDefine);
            } else if (buffDefine.Target.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType).Target]) {
              if (!target) {
                continue;
              }

              target.AddBuf(this.Context, buffDefine);
            }
          }
        }

        LogicUpdate(frameId) {
          this.frameId = frameId;
          this.UpdateCD();

          if (this.Status == (_crd && SkillStatus === void 0 ? (_reportPossibleCrUseOfSkillStatus({
            error: Error()
          }), SkillStatus) : SkillStatus).Casting) //前摇状态
            {
              this.UpdateCasting();
            } else if (this.Status == (_crd && SkillStatus === void 0 ? (_reportPossibleCrUseOfSkillStatus({
            error: Error()
          }), SkillStatus) : SkillStatus).Running) //执行中
            {
              this.UpdateSkill();
            }
        }
        /**
         * 更新前摇时间
         */


        UpdateCasting() {
          if (this.castingTime < this.Define.CastTime) {
            this.castingTime += (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
              error: Error()
            }), NetConfig) : NetConfig).frameTime; //Time.deltaTime;
          } else {
            this.castingTime = 0;
            this.StartSkill();
            console.log("Skill[{0}].UpdateCasting Finish", this.Define.Name);
          }
        }
        /**
         * 更新cd时间
         */


        UpdateCD() {
          if (this.cd > 0) {
            this.cd -= (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
              error: Error()
            }), NetConfig) : NetConfig).frameTime; //Time.deltaTime;
          }

          if (this.cd < 0) this.cd = 0;
        }
        /**
         * 更新技能
         */


        UpdateSkill() {
          this.skillTime += (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
            error: Error()
          }), NetConfig) : NetConfig).frameTime; //Time.deltaTime;
          //持续技能

          if (this.Define.Duration > 0) {
            // console.log('UpdateSkill skillTime：'+this.skillTime+'=='+(this.Define.Interval * (this.Hit + 1))+'=='+ this.Define.Interval)
            if (this.skillTime > this.Define.Interval * (this.Hit + 1)) {
              this.DoHit();
            }

            if (this.skillTime >= this.Define.Duration) {
              this.Status = (_crd && SkillStatus === void 0 ? (_reportPossibleCrUseOfSkillStatus({
                error: Error()
              }), SkillStatus) : SkillStatus).None;
              console.log("Skill[{0}].UpdateSkill Finish", this.Define.Name);
            }
          } else if (this.Define.HitTimes && this.Define.HitTimes.length > 0) {
            if (this.Hit < this.Define.HitTimes.length) {
              if (this.skillTime > this.Define.HitTimes[this.Hit]) {
                this.DoHit();
              }
            } else {
              if (!this.Define.Bullet) {
                this.Status = (_crd && SkillStatus === void 0 ? (_reportPossibleCrUseOfSkillStatus({
                  error: Error()
                }), SkillStatus) : SkillStatus).None;
                console.log("Skill[{0}].UpdateSkill Finish", this.Define.Name);
              }
            }
          }

          if (this.Define.Bullet) {
            var finish = true;

            for (var bullet of this.Bullets) {
              bullet.LogicUpdate();
              if (!bullet.Stoped) finish = false;
            }

            if (finish && this.Hit >= this.Define.HitTimes.length) {
              this.Status = (_crd && SkillStatus === void 0 ? (_reportPossibleCrUseOfSkillStatus({
                error: Error()
              }), SkillStatus) : SkillStatus).None;
              console.log("Skill[{0}].UpdateSkill Finish", this.Define.Name);
            }
          }
        }

        InitHitInfo(isBullet) {
          var hitInfo = new (_crd && SkillHitInfo === void 0 ? (_reportPossibleCrUseOfSkillHitInfo({
            error: Error()
          }), SkillHitInfo) : SkillHitInfo)();
          hitInfo.casterId = this.Context.Caster.entityId;
          hitInfo.skillId = this.skillId;
          hitInfo.hitId = this.Hit;
          hitInfo.isBullet = isBullet;
          return hitInfo;
        }

        DoHit() {
          var hitInfo = this.InitHitInfo(false);
          console.log("Skill[{0}].DoHit:[{1}]", this.Define.Name, this.Hit);
          this.Hit++;

          if (this.Define.Bullet) //是子弹
            {
              if (this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType).RangeTarget]) //范围目标
                {
                  console.log('DoHit 范围目标并且是子弹');
                  var creatureArr = this.GetRangeTargetList();

                  for (var target of creatureArr) {
                    this.CastBullet(hitInfo, target);
                  }

                  return;
                }

              this.CastBullet(hitInfo, this.Context.Target);
              return;
            }

          this.DoHit2(hitInfo);
        }

        DoHit2(hitInfo) {
          // this.Context.AddHitInfo(hitInfo);
          console.log("Skill[{0}].DoHit2[{1}] IsBullet:{2}", this.Define.Name, hitInfo.hitId, hitInfo.isBullet);

          if (this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).RangeTarget] && !this.Define.Bullet || this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).SelectedRange]) {
            this.HitRange(hitInfo);
            return;
          }

          if (this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).Target] || this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).StraightLine] || this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).RangeTarget] && this.Define.Bullet) {
            this.HitTarget(this.Context.Target, hitInfo);
          }
        }

        CastBullet(hitInfo, target) {
          //   this.Context.AddHitInfo(hitInfo);
          console.log("Skill[{0}].CastBullet[{1}]", this.Define.Name, this.Define.BulletResource);
          var bullet = new (_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet)(this, target, hitInfo);
          this.Bullets.push(bullet);
        }
        /**
         * 获取范围目标集合
         */


        GetRangeTargetList() {
          var positionX;
          var positionZ;
          var radius; //半径

          var blowsNum; //个数

          var isRangeTarget = false; //范围目标

          if (this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).RangeTarget]) {
            positionX = this.Owner.logicPosition.x;
            positionZ = this.Owner.logicPosition.z;
            radius = this.Define.CastRange;
            blowsNum = this.Define.BlowsNum || -1;
            isRangeTarget = true;
          } else if (this.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).SelectedRange]) {
            positionX = (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(this.Context.positionX);
            positionZ = (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(this.Context.positionZ);
            radius = this.Define.AOERange;
            blowsNum = this.Define.BlowsNum || -1;
          }

          var creatureArr = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
            error: Error()
          }), CreatureManager) : CreatureManager).Instance.FindUnitsInRange(positionX, positionZ, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
            error: Error()
          }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(radius), blowsNum, this.Owner.teamType2, isRangeTarget);
          console.log('GetRangeTargetList creatureArr：' + creatureArr.length);

          if (creatureArr.length > 0) {
            var index = 0;

            for (var target of creatureArr) {
              if (isRangeTarget && index == 0 && blowsNum == 1) {
                //搜索1个敌人，朝向目标
                var newDegree = Math.round((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                  error: Error()
                }), MathUtil) : MathUtil).GetAngle(target.logicPosition.z - this.Owner.logicPosition.z, target.logicPosition.x - this.Owner.logicPosition.x));
                newDegree = newDegree < 0 ? newDegree + 360 : newDegree; //角色旋转

                this.Owner.RotateHandle(newDegree);
                break;
              }

              index++; //   console.log('target dir='+target.dir)
            }
          }

          return creatureArr;
        }

        HitRange(hit) {
          var creatureArr = this.GetRangeTargetList();

          for (var target of creatureArr) {
            this.HitTarget(target, hit);
          }
        }

        HitTarget(target, hit) {
          if (this.Define.CastTarget == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).Self && target != this.Context.Caster) return;else if (target == this.Context.Caster) return;
          var damage = this.CalcSkillDamage(this.Context.Caster, target);
          console.log("Skill[{0}].HitTarget[{1}] Damage:{2} Crit:{3}", this.Define.Name, target.characterDefine.Name, damage.Damage, damage.Crit);
          target.DoDamage(damage, this.Context.Caster);
          hit.Damages.push(damage);
          this.AddBuff((_crd && TriggerType === void 0 ? (_reportPossibleCrUseOfTriggerType({
            error: Error()
          }), TriggerType) : TriggerType).SkillHit, target); //播放受击特效

          if (this.Define.HitEffect) {
            target.PlayEffect((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).Hit, this.Define.HitEffect, target);
          }
        }
        /*
         * 战斗计算
         */


        CalcSkillDamage(caster, target) {
          var attFator = this.Define.ATTFator; //技能攻击系数
          //计算伤害

          var final = caster.attributes.ATT * attFator * (1 - target.attributes.DEF / (602 + target.attributes.DEF));
          var isCrit = this.IsCrit(caster.attributes.CRI);

          if (isCrit) {
            final = final * 1.5; //暴击伤害1.5倍
          }

          var damage = new (_crd && DamageInfo === void 0 ? (_reportPossibleCrUseOfDamageInfo({
            error: Error()
          }), DamageInfo) : DamageInfo)();
          damage.entityId = target.entityId;
          damage.Damage = Math.max(1, Math.floor(final));
          damage.Crit = isCrit;
          return damage;
        }

        IsCrit(crit) {
          return (_crd && RandomUtil === void 0 ? (_reportPossibleCrUseOfRandomUtil({
            error: Error()
          }), RandomUtil) : RandomUtil).limit(0, 1) < crit;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Skill.js.map