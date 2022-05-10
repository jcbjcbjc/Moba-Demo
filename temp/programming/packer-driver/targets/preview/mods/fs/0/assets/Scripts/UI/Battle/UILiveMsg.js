System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, RichText, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, UILiveMsg;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RichText = _cc.RichText;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5fe9Js8/pAJ5Hzvoyfaz0x", "UILiveMsg", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UILiveMsg", UILiveMsg = (_dec = ccclass('UILiveMsg'), _dec2 = property(RichText), _dec(_class = (_class2 = (_temp = class UILiveMsg extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "richText", _descriptor, this);
        }

        /**
         * 设置标签文字
         * @param str 
         */
        set Text(str) {
          this.richText.getComponent(RichText).string = str;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "richText", [_dec2], {
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
//# sourceMappingURL=UILiveMsg.js.map