System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Sprite, proto, EventManager, LoadResUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, NItem, Result, UITranDetailItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemDefine(extras) {
    _reporterNs.report("ItemDefine", "../../Data/ItemDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUITran(extras) {
    _reporterNs.report("UITran", "./UITran", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      LoadResUtil = _unresolved_4.LoadResUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65e085KmuFHHbjmPuvEMppK", "UITranDetailItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        Result
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UITranDetailItem", UITranDetailItem = (_dec = ccclass('UITranDetailItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec(_class = (_class2 = (_temp = class UITranDetailItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "countLabel", _descriptor2, this);

          _initializerDefineProperty(this, "priceLabel", _descriptor3, this);

          _initializerDefineProperty(this, "descLabel", _descriptor4, this);

          _initializerDefineProperty(this, "imgSprite", _descriptor5, this);

          _defineProperty(this, "index", 0);

          _defineProperty(this, "itemDefine", null);

          _defineProperty(this, "uiTran", null);
        }

        start() {}

        async SetItemInfo(item, itemDefine, index = -1, uiTran) {
          if (index != -1) {
            this.index = index;
          }

          this.uiTran = uiTran;
          this.itemDefine = itemDefine;
          this.imgSprite.spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).load_local_sprite(this.itemDefine.Icon + '/spriteFrame');
          this.nameLabel.string = this.itemDefine.Name;
          this.countLabel.string = '数量：' + item.count;
          this.priceLabel.string = '价格：' + item.money;
          this.descLabel.string = '描述：' + this.itemDefine.Description;
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "countLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "priceLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "descLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "imgSprite", [_dec6], {
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
//# sourceMappingURL=UITranDetailItem.js.map