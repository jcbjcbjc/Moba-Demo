System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, AttributeData, AttributeType, CreatureType, Attributes, _crd, NUser, TeamType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttributeData(extras) {
    _reporterNs.report("AttributeData", "./AttributeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttributeType(extras) {
    _reporterNs.report("AttributeType", "./AttributeType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterDefine(extras) {
    _reporterNs.report("CharacterDefine", "../../../Data/CharacterDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureType(extras) {
    _reporterNs.report("CreatureType", "../enums/CreatureType", _context.meta, extras);
  }

  _export("Attributes", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      AttributeData = _unresolved_3.AttributeData;
    }, function (_unresolved_4) {
      AttributeType = _unresolved_4.AttributeType;
    }, function (_unresolved_5) {
      CreatureType = _unresolved_5.CreatureType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bc5cUAfdZIlpiG94E6HetL", "Attributes", undefined);

      ({
        NUser,
        TeamType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("Attributes", Attributes = class Attributes {
        constructor() {
          _defineProperty(this, "Basic", new (_crd && AttributeData === void 0 ? (_reportPossibleCrUseOfAttributeData({
            error: Error()
          }), AttributeData) : AttributeData)());

          _defineProperty(this, "Buff", new (_crd && AttributeData === void 0 ? (_reportPossibleCrUseOfAttributeData({
            error: Error()
          }), AttributeData) : AttributeData)());

          _defineProperty(this, "Final", new (_crd && AttributeData === void 0 ? (_reportPossibleCrUseOfAttributeData({
            error: Error()
          }), AttributeData) : AttributeData)());

          _defineProperty(this, "hp", void 0);
        }

        //当前hp

        /**
         * 当前生命
         */
        get HP() {
          return this.hp;
        }

        set HP(value) {
          this.hp = Math.min(this.MaxHP, value);
        }
        /**
         * 最大生命
         */


        get MaxHP() {
          return this.Final.MaxHP;
        }
        /**
         * 攻击
         */


        get ATT() {
          return this.Final.ATT;
        }
        /**
         * 防御
         */


        get DEF() {
          return this.Final.DEF;
        }
        /**
         * 复活率
         */


        get RESU() {
          return this.Final.RESU;
        }
        /**
         * 速度
         */


        get Speed() {
          return this.Final.Speed;
        }
        /**
         * 暴击率
         */


        get CRI() {
          return this.Final.CRI;
        }
        /**
         * 初始化常用属性
         */


        InitFinalAttributes() {
          for (let i = 0; i < (_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).MAX; i++) {
            this.Final.Data[i] = this.Basic.Data[i] + this.Buff.Data[i];
          }
        }
        /**
         * 初始化基础属性
         */


        InitBasicAttributes(define, user, creatureType) {
          this.Basic.Reset();
          this.Buff.Reset();
          this.Final.Reset();

          if (creatureType == (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
            error: Error()
          }), CreatureType) : CreatureType).Character) {
            this.hp = this.Basic.MaxHP = user.character.hp;
            this.Basic.ATT = user.character.att;
            this.Basic.DEF = user.character.def;
            this.Basic.RESU = user.character.resu;
            this.Basic.Speed = user.character.speedValue;
            this.Basic.CRI = user.character.cri; // console.log('InitBasicAttributes Speed='+this.Basic.Speed)
          } else if (creatureType == (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
            error: Error()
          }), CreatureType) : CreatureType).Monster) {
            this.hp = this.Basic.MaxHP = define.HP;
            this.Basic.ATT = define.ATT;
            this.Basic.DEF = define.DEF;
            this.Basic.RESU = define.RESU;
            this.Basic.Speed = define.Speed;
            this.Basic.CRI = define.CRI;
          }

          this.InitFinalAttributes();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Attributes.js.map