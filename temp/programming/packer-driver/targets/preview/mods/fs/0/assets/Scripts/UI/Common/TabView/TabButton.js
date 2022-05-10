System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, SpriteFrame, Button, EventManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TabButton;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTabView(extras) {
    _reporterNs.report("TabView", "./TabView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Event/EventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc158Jt+H1LAJxH5DdxVSTo", "TabButton", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TabButton", TabButton = (_dec = ccclass('TabButton'), _dec2 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class TabButton extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "activeSpriteFrame", _descriptor, this);

          _defineProperty(this, "normalSpriteFrame", null);

          _defineProperty(this, "tabView", null);

          _defineProperty(this, "tabIndex", 0);

          _defineProperty(this, "selected", false);

          _defineProperty(this, "tabSprite", null);

          _defineProperty(this, "btn", null);
        }

        //按钮
        // Use this for initialization
        start() {
          var _this$getComponent;

          this.tabSprite = this.getComponent(Sprite);
          this.btn = this.getComponent(Button);
          this.normalSpriteFrame = this.tabSprite.spriteFrame;
          (_this$getComponent = this.getComponent(Button)) === null || _this$getComponent === void 0 ? void 0 : _this$getComponent.clickEvents.push((_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.createButtonClickEvent(this.node, "TabButton", "OnClick"));
        }

        SelectBtn(select) {
          if (!this.node.active) {
            return;
          }

          console.log('SelectBtn select=' + select);
          this.btn.normalSprite = this.tabSprite.spriteFrame = select ? this.activeSpriteFrame : this.normalSpriteFrame;
        }

        OnClick() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.tabView.SelectTab(_this.tabIndex);
          })();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activeSpriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TabButton.js.map