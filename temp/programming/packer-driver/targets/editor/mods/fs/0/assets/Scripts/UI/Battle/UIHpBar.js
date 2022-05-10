System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, Color, BattleManager, CreatureType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, UIHpBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "./Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "./Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureType(extras) {
    _reporterNs.report("CreatureType", "./enums/CreatureType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      BattleManager = _unresolved_2.BattleManager;
    }, function (_unresolved_3) {
      CreatureType = _unresolved_3.CreatureType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bf5br2M/NHU4CLaqm2AAnB", "UIHpBar", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 血量条
       */

      _export("UIHpBar", UIHpBar = (_dec = ccclass('UIHpBar'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = (_temp = class UIHpBar extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "hpSprite", _descriptor, this);

          _initializerDefineProperty(this, "hpLabel", _descriptor2, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor3, this);

          _defineProperty(this, "owner", null);

          _defineProperty(this, "tempColor", new Color());
        }

        start() {}

        /**
         * 设置血条信息
         * @param level 等级 
         * @param nickName  昵称
         * @param currentHp 当前hp
         * @param maxHp  最大hp
         * @param isCharacter 是否是角色
         * @param type 类型 1、自己  2、队友  3、敌队
         */
        SetItemInfo(level, nickName, currentHp, maxHp, isCharacter, type) {
          if (isCharacter) {
            this.nameLabel.string = 'Lv' + level + '.' + nickName;
          } else {
            this.nameLabel.string = '';
          }

          this.hpLabel.string = currentHp + '/' + maxHp;
          this.hpSprite.fillRange = currentHp / maxHp; // this.hpSprite.color.fromHEX(type==1?'#00FF00':(type==2?'#0085FF':'#FF0000'));

          this.tempColor.fromHEX(type == 1 ? '#00FF00' : type == 2 ? '#0085FF' : '#FF0000');
          this.hpSprite.color = this.tempColor;
        }

        update() {
          if (this.owner) {
            let currentCharacter = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.currentCharacter;

            if (currentCharacter && this.owner.creatureType == (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
              error: Error()
            }), CreatureType) : CreatureType).Character) {
              //角色
              let user = this.owner.user;
              let type = user.id == currentCharacter.user.id ? 1 : this.owner.teamType2 == currentCharacter.teamType2 ? 2 : 3;
              this.SetItemInfo(user.character.level, user.nickname, this.owner.attributes.HP, user.character.hp, true, type);
            } else if (this.owner.creatureType == (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
              error: Error()
            }), CreatureType) : CreatureType).Monster) {
              //怪物
              let type = this.owner.teamType2 == currentCharacter.teamType2 ? 2 : 3;
              this.SetItemInfo(undefined, undefined, this.owner.attributes.HP, this.owner.characterDefine.HP, false, type);
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hpSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hpLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIHpBar.js.map