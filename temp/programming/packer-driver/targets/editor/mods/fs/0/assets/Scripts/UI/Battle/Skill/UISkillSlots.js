System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, UISkillSlot, BattleManager, EventManager, EventType, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, UISkillSlots;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUISkillSlot(extras) {
    _reporterNs.report("UISkillSlot", "./UISkillSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "../Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../Common/Event/EventType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      UISkillSlot = _unresolved_2.UISkillSlot;
    }, function (_unresolved_3) {
      BattleManager = _unresolved_3.BattleManager;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      EventType = _unresolved_5.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2b26CCtkRGHohggPSfw2Rx", "UISkillSlots", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UISkillSlots", UISkillSlots = (_dec = ccclass('UISkillSlots'), _dec2 = property([_crd && UISkillSlot === void 0 ? (_reportPossibleCrUseOfUISkillSlot({
        error: Error()
      }), UISkillSlot) : UISkillSlot]), _dec(_class = (_class2 = (_temp = class UISkillSlots extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "slots", _descriptor, this);
        }

        // Use this for initialization
        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnBattleGameIn, this.UpdateSkills, this);
        } // Update is called once per frame


        UpdateSkills() {
          var Skills = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.currentCharacter.SkillMgr.Skills; // let skillIdx:number = 0;

          for (var skill of Skills) {
            let currentUISkillSlot = null;

            for (var uiSkillSlot of this.slots) {
              // console.log(uiSkillSlot.type+'========'+skill.Define.Type.toString())
              if (uiSkillSlot.type == skill.Define.Type.toString()) {
                //技能卡槽类型和技能类型一致
                currentUISkillSlot = uiSkillSlot;
                break;
              }
            }

            if (currentUISkillSlot) {
              currentUISkillSlot.SetSkill(skill);
            } // skillIdx++;

          }
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slots", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UISkillSlots.js.map