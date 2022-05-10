System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, TabButton, EventManager, EventType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TabView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTabButton(extras) {
    _reporterNs.report("TabButton", "./TabButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Event/EventType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      TabButton = _unresolved_2.TabButton;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d35e1rZIBN6oLMyj6uclbf", "TabView", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TabView", TabView = (_dec = ccclass('TabView'), _dec2 = property([_crd && TabButton === void 0 ? (_reportPossibleCrUseOfTabButton({
        error: Error()
      }), TabButton) : TabButton]), _dec3 = property([Node]), _dec(_class = (_class2 = (_temp = class TabView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tabButtons", _descriptor, this);

          _initializerDefineProperty(this, "tabPages", _descriptor2, this);

          _defineProperty(this, "owner", null);

          _defineProperty(this, "index", -1);

          _defineProperty(this, "defaultIndex", 0);
        }

        start() {
          for (let i = 0; i < this.tabButtons.length; i++) {
            this.tabButtons[i].tabView = this;
            this.tabButtons[i].tabIndex = i;
          }

          console.log('SelectTab(0)');
          let this_ = this;
          setTimeout(function () {
            this_.SelectTab(this_.defaultIndex);
          }, 500);
        }

        SelectTab(index) {
          if (this.index != index) {
            this.index = index; // console.log('tabButtons.length='+this.tabButtons.length)

            for (let i = 0; i < this.tabButtons.length; i++) {
              // console.log(this.tabButtons[i])
              this.tabButtons[i].SelectBtn(i == index);

              if (this.tabPages.length > 0) {
                this.tabPages[i].active = i == index;
              }
            }

            console.log('dispatchObj index=' + index);

            if (this.owner) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.dispatchObj((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).TabView_OnTabSelect, this.owner, index);
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabButtons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabPages", [_dec3], {
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
//# sourceMappingURL=TabView.js.map