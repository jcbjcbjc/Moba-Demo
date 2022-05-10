System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Sprite, proto, EventManager, DataManager, LoadResUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, NItem, BagHandleResponse, BagHandleType, Result, UIBagDetailItem;

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

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemDefine(extras) {
    _reporterNs.report("ItemDefine", "../../Data/ItemDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      LoadResUtil = _unresolved_5.LoadResUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ac8dUeeYFNTpP9HOuz9u+k", "UIBagDetailItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        BagHandleResponse,
        BagHandleType,
        Result
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIBagDetailItem", UIBagDetailItem = (_dec = ccclass('UIBagDetailItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = (_temp = class UIBagDetailItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "countLabel", _descriptor2, this);

          _initializerDefineProperty(this, "priceLabel", _descriptor3, this);

          _initializerDefineProperty(this, "descLabel", _descriptor4, this);

          _initializerDefineProperty(this, "imgSprite", _descriptor5, this);

          _initializerDefineProperty(this, "tranButton", _descriptor6, this);

          _initializerDefineProperty(this, "cancelTranButton", _descriptor7, this);

          _defineProperty(this, "define", null);
        }

        start() {}

        async SetItemInfo(item) {
          this.define = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.items[item.itemId];
          this.imgSprite.spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).load_local_sprite(this.define.Icon + '/spriteFrame');
          this.nameLabel.string = this.define.Name;
          this.countLabel.string = '数量：' + item.count;
          this.priceLabel.node.active = item.isTran;
          let descPos = this.descLabel.node.getPosition();

          if (item.isTran) {
            //交易
            this.priceLabel.string = '价格：' + item.money;
            this.descLabel.node.setPosition(descPos.x, -118, descPos.z);
            this.tranButton.active = false;
            this.cancelTranButton.active = true;
          } else {
            //未交易设置描述位置
            this.descLabel.node.setPosition(descPos.x, -78, descPos.z);
            this.tranButton.active = true;
            this.cancelTranButton.active = false;
          }

          this.descLabel.string = '描述：' + this.define.Description;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tranButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cancelTranButton", [_dec8], {
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
//# sourceMappingURL=UIBagDetailItem.js.map