System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, UIWorldElement, UIHpBar, proto, DataManager, UIPopupText, EventManager, EventType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, _crd, ccclass, property, NUser, UIWorldElementManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIWorldElement(extras) {
    _reporterNs.report("UIWorldElement", "./UIWorldElement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIHpBar(extras) {
    _reporterNs.report("UIHpBar", "./UIHpBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "./Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupType(extras) {
    _reporterNs.report("PopupType", "./enums/PopupType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPopupText(extras) {
    _reporterNs.report("UIPopupText", "./UIPopupText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      UIWorldElement = _unresolved_2.UIWorldElement;
    }, function (_unresolved_3) {
      UIHpBar = _unresolved_3.UIHpBar;
    }, function (_unresolved_4) {
      proto = _unresolved_4.default;
    }, function (_unresolved_5) {
      DataManager = _unresolved_5.DataManager;
    }, function (_unresolved_6) {
      UIPopupText = _unresolved_6.UIPopupText;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      EventType = _unresolved_8.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dabc1MOnS9K/4LVptSx49t6", "UIWorldElementManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NUser
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      /**
       * 世界元素管理器
       */

      _export("UIWorldElementManager", UIWorldElementManager = (_dec = ccclass('UIWorldElementManager'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = class UIWorldElementManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hpBarNode", _descriptor, this);

          _initializerDefineProperty(this, "popupTextNode", _descriptor2, this);
        }

        onLoad() {
          UIWorldElementManager.Instance = this;
        }
        /**
         * 添加生物血条
         * @param owner 生物节点
         * @param creature  生物对象
         */


        AddCharacterHpBar(owner, creature) {
          // console.log('AddCharacterHpBar hpBarNode='+this.hpBarNode);
          //创建血条节点
          var hpBarNode2 = instantiate(this.hpBarNode);
          this.node.addChild(hpBarNode2);
          creature.hpBarNode = hpBarNode2; //获取血条节点 UIWorldElement、UIHpBar组件
          // hpBarNode2.active=true;

          var uiWorldElement = hpBarNode2.getComponent(_crd && UIWorldElement === void 0 ? (_reportPossibleCrUseOfUIWorldElement({
            error: Error()
          }), UIWorldElement) : UIWorldElement);
          var uiHpBar = hpBarNode2.getComponent(_crd && UIHpBar === void 0 ? (_reportPossibleCrUseOfUIHpBar({
            error: Error()
          }), UIHpBar) : UIHpBar);
          uiWorldElement.owner = owner;
          uiWorldElement.height = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.characters[creature.characterDefine.ID].Height;
          uiHpBar.owner = creature;
        }
        /**
         * 移除生物血条
         * @param creature  生物对象
         */


        RemoveCharacterHpBar(creature) {
          if (creature.hpBarNode) {
            // let uiWorldElement=creature.hpBarNode.getComponent(UIWorldElement);
            // let uiHpBar=creature.hpBarNode.getComponent(UIHpBar);
            // uiWorldElement.owner=null;
            // uiHpBar.owner=null;
            creature.hpBarNode.destroy();
            creature.hpBarNode = null;
          }
        }

        ShowPopupText(type, creature, damage, isCrit, isBuff) {
          var goPopup = instantiate(this.popupTextNode);
          goPopup.setPosition(creature.GetPopupOffset().add(creature.renderPosition));
          var uiWorldElement = goPopup.getComponent(_crd && UIWorldElement === void 0 ? (_reportPossibleCrUseOfUIWorldElement({
            error: Error()
          }), UIWorldElement) : UIWorldElement);
          uiWorldElement.owner = creature.node;
          uiWorldElement.height = creature.characterDefine.Height;
          uiWorldElement.isExecuteOnce = true;
          goPopup.name = "Popup";
          goPopup.active = true;
          this.node.addChild(goPopup); // isCrit=true;

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnWorldElementExecuteOnceSuccess, function () {
            goPopup.getComponent(_crd && UIPopupText === void 0 ? (_reportPossibleCrUseOfUIPopupText({
              error: Error()
            }), UIPopupText) : UIPopupText).InitPopup(type, damage, isCrit, isBuff);
          }, uiWorldElement);
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hpBarNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popupTextNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIWorldElementManager.js.map