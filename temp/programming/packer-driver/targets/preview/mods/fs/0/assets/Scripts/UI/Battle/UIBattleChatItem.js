System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, RichText, proto, BattleGlobal, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, NItem, ChatMessage, ChatChannel, UIBattleChatItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "./Utils/BattleGlobal", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      BattleGlobal = _unresolved_3.BattleGlobal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0db80SfPStG86VR/3K2HN7/", "UIBattleChatItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        ChatMessage,
        ChatChannel
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIBattleChatItem", UIBattleChatItem = (_dec = ccclass('UIBattleChatItem'), _dec2 = property(RichText), _dec(_class = (_class2 = (_temp = class UIBattleChatItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentRichText", _descriptor, this);
        }

        SetItemInfo(chatMessage, index) {
          this.contentRichText.string = (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).getBattleMsgContent(chatMessage, -1, index);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentRichText", [_dec2], {
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
//# sourceMappingURL=UIBattleChatItem.js.map