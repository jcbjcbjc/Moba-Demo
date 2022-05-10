System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ListViewItem, _decorator, Label, Sprite, SystemEventType, SpriteFrame, proto, EventManager, DataManager, LoadResUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, NItem, Result, UITranItem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfUITranDetailItem(extras) {
    _reporterNs.report("UITranDetailItem", "./UITranDetailItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUITran(extras) {
    _reporterNs.report("UITran", "./UITran", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SystemEventType = _cc.SystemEventType;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ListViewItem = _unresolved_2.ListViewItem;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      DataManager = _unresolved_5.DataManager;
    }, function (_unresolved_6) {
      LoadResUtil = _unresolved_6.LoadResUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4586dOzdINEhKGKxl9gKljZ", "UITranItem", undefined);

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

      _export("UITranItem", UITranItem = (_dec = ccclass('UITranItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class UITranItem extends (_crd && ListViewItem === void 0 ? (_reportPossibleCrUseOfListViewItem({
        error: Error()
      }), ListViewItem) : ListViewItem) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "countLabel", _descriptor, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor2, this);

          _initializerDefineProperty(this, "imgSprite", _descriptor3, this);

          _initializerDefineProperty(this, "priceLabel", _descriptor4, this);

          _initializerDefineProperty(this, "selectBgSpriteFrame", _descriptor5, this);

          _defineProperty(this, "normalBgSpriteFrame", null);

          _defineProperty(this, "nodeBgSprite", null);

          _defineProperty(this, "item", null);

          _defineProperty(this, "uiTranDetailItem", null);

          _defineProperty(this, "index", 0);

          _defineProperty(this, "uiTran", null);

          _defineProperty(this, "itemDefine", null);
        }

        onLoad() {
          if (this.index == 0) {
            console.log('onLoad index=' + this.index);
          }

          this.node.on(SystemEventType.TOUCH_END, this.OnPointerClick, this);
          this.nodeBgSprite = this.node.getComponent(Sprite);
          this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame;
        }

        onSelected(selected) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.index == 0) {
              console.log('onSelected index=' + _this.index);
            } // console.log('selected='+selected)


            if (_this.nodeBgSprite) {
              _this.nodeBgSprite.spriteFrame = selected ? _this.selectBgSpriteFrame : _this.normalBgSpriteFrame;
            }

            if (selected) {
              //选中，更新右边详细
              yield _this.uiTranDetailItem.SetItemInfo(_this.item, _this.itemDefine, _this.index, _this.uiTran);
              _this.uiTran.selectedIndex = _this.index;
            }
          })();
        }

        SetItemInfo(item, uiTranDetailItem, selected, index, uiTran) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (selected === void 0) {
              selected = false;
            }

            if (index === void 0) {
              index = -1;
            }

            _this2.item = item;

            if (index != -1) {
              _this2.index = index;
            }

            _this2.uiTran = uiTran;
            _this2.uiTranDetailItem = uiTranDetailItem;
            _this2.itemDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.items[item.itemId];
            _this2.nameLabel.string = _this2.itemDefine.Name + 'x' + item.count;
            _this2.priceLabel.string = item.money + '';
            _this2.imgSprite.spriteFrame = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_sprite(_this2.itemDefine.Icon + '/spriteFrame');

            if (selected) {
              _this2.OnPointerClick();
            }
          })();
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "countLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "priceLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selectBgSpriteFrame", [_dec6], {
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
//# sourceMappingURL=UITranItem.js.map