System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetConfig, DamageInfo, Buff, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffDefine(extras) {
    _reporterNs.report("BuffDefine", "../../../Data/BuffDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleContext(extras) {
    _reporterNs.report("BattleContext", "./BattleContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConfig(extras) {
    _reporterNs.report("NetConfig", "../../../Network/NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageInfo(extras) {
    _reporterNs.report("DamageInfo", "../Vo/DamageInfo", _context.meta, extras);
  }

  _export("Buff", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NetConfig = _unresolved_2.NetConfig;
    }, function (_unresolved_3) {
      DamageInfo = _unresolved_3.DamageInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a458xoRH5ERr0pD42LiYnw", "Buff", undefined);

      _export("Buff", Buff = class Buff {
        constructor(buffID, owner, define, context) {
          _defineProperty(this, "BuffID", void 0);

          _defineProperty(this, "Owner", void 0);

          _defineProperty(this, "Define", void 0);

          _defineProperty(this, "Context", void 0);

          _defineProperty(this, "time", 0);

          _defineProperty(this, "hit", 0);

          _defineProperty(this, "Stoped", false);

          this.BuffID = buffID;
          this.Owner = owner;
          this.Define = define;
          this.Context = context;
          this.OnAdd();
        }

        OnAdd() {
          console.log('Buff OnAdd');

          if (this.Define.Effect) {
            this.Owner.EffectMgr.AddEffect(this.Define.Effect);
          }

          this.AddAttr(); // let buff = new BuffInfo();
          // buff.buffId=this.BuffID;
          // buff.buffType=this.Define.ID;
          // buff.casterId=this.Context.Caster.entityId;
          // buff.ownerId=this.Owner.entityId
          // buff.Action=BuffAction.Add;
          // this.Context.Battle.AddBuffAction(buff);
        }

        OnRemove() {
          console.log('Buff OnRemove');
          this.RemoveAttr();
          this.Stoped = true;

          if (this.Define.Effect) {
            this.Owner.EffectMgr.RemoveEffect(this.Define.Effect);
          } // let buff = new BuffInfo();
          // buff.buffId=this.BuffID;
          // buff.buffType=this.Define.ID;
          // buff.casterId=this.Context.Caster.entityId;
          // buff.ownerId=this.Owner.entityId
          // buff.Action=BuffAction.Remove;
          // this.Context.Battle.AddBuffAction(buff);

        }

        AddAttr() {
          if (this.Define.DEFRatio) {
            this.Owner.attributes.Buff.DEF += this.Owner.attributes.Basic.DEF * this.Define.DEFRatio;
            this.Owner.attributes.InitFinalAttributes();
          }
        }

        RemoveAttr() {
          if (this.Define.DEFRatio) {
            this.Owner.attributes.Buff.DEF -= this.Owner.attributes.Basic.DEF * this.Define.DEFRatio;
            this.Owner.attributes.InitFinalAttributes();
          }
        }

        LogicUpdate() {
          if (this.Stoped) return;
          this.time += (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
            error: Error()
          }), NetConfig) : NetConfig).frameTime; //Time.deltaTime;

          if (this.Define.Interval > 0) {
            //带有间隔时间
            if (this.time > this.Define.Interval * (this.hit + 1)) {
              this.DoBufDamage();
            }
          }

          if (this.time > this.Define.Duration) {
            this.OnRemove();
          }
        }

        CalcBuffDamage(caster) {
          var attFator = this.Define.ATTFator; //技能攻击系数
          //计算伤害

          var final = caster.attributes.ATT * attFator * (1 - this.Owner.attributes.DEF / (602 + this.Owner.attributes.DEF));
          var damage = new (_crd && DamageInfo === void 0 ? (_reportPossibleCrUseOfDamageInfo({
            error: Error()
          }), DamageInfo) : DamageInfo)();
          damage.entityId = this.Owner.entityId;
          damage.Damage = Math.max(1, Math.floor(final));
          return damage;
        }

        DoBufDamage() {
          this.hit++;
          var damage = this.CalcBuffDamage(this.Context.Caster);
          damage.isBuff = true;
          console.log("Skill[{0}].DoBufDamage[{1}] Damage:{2}", this.Define.Name, this.Owner.characterDefine.Name, damage.Damage);
          this.Owner.DoDamage(damage, this.Context.Caster); // let buff = new BuffInfo();
          // buff.buffId=this.BuffID;
          // buff.buffType=this.Define.ID;
          // buff.casterId=this.Context.Caster.entityId;
          // buff.ownerId=this.Owner.entityId
          // buff.Action=BuffAction.Hit;
          // buff.damage=damage;
          // this.Context.Battle.AddBuffAction(buff);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Buff.js.map