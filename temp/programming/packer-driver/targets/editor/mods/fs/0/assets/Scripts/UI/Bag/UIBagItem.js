System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ListViewItem, _decorator, Label, Sprite, SystemEventType, SpriteFrame, EventManager, DataManager, LoadResUtil, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, UIBagItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNItem(extras) {
    _reporterNs.report("NItem", "../../../Proto/proto", _context.meta, extras);
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

  function _reportPossibleCrUseOfUIBagDetailItem(extras) {
    _reporterNs.report("UIBagDetailItem", "./UIBagDetailItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBag(extras) {
    _reporterNs.report("UIBag", "./UIBag", _context.meta, extras);
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
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      LoadResUtil = _unresolved_5.LoadResUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a587oU5x1AIoItlgJT+poQ", "UIBagItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIBagItem", UIBagItem = (_dec = ccclass('UIBagItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class UIBagItem extends (_crd && ListViewItem === void 0 ? (_reportPossibleCrUseOfListViewItem({
        error: Error()
      }), ListViewItem) : ListViewItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "countLabel", _descriptor, this);

          _initializerDefineProperty(this, "tranLabel", _descriptor2, this);

          _initializerDefineProperty(this, "imgSprite", _descriptor3, this);

          _initializerDefineProperty(this, "selectBgSpriteFrame", _descriptor4, this);

          _defineProperty(this, "normalBgSpriteFrame", null);

          _defineProperty(this, "nodeBgSprite", null);

          _defineProperty(this, "item", null);

          _defineProperty(this, "uiBagDetailItem", null);

          _defineProperty(this, "index", 0);

          _defineProperty(this, "uiBag", null);

          _defineProperty(this, "define", null);
        }

        start() {
          this.imgSprite.node.on(SystemEventType.TOUCH_END, this.OnPointerClick, this);
          this.nodeBgSprite = this.node.getComponent(Sprite);
          this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame;
        }

        onSelected(selected) {
          console.log('selected=' + selected);

          if (this.nodeBgSprite) {
            this.nodeBgSprite.spriteFrame = selected ? this.selectBgSpriteFrame : this.normalBgSpriteFrame;
          }

          if (selected) {
            //选中，更新右边详细
            this.uiBagDetailItem.SetItemInfo(this.item);
            this.uiBag.selectedIndex = this.index;
          }
        }

        async SetItemInfo(item, uiBagDetailItem, selected = false, index = -1, uiBag) {
          this.item = item;

          if (index != -1) {
            this.index = index;
          }

          this.uiBag = uiBag;
          this.uiBagDetailItem = uiBagDetailItem;
          console.log('UIBagItem SetItemInfo:' + JSON.stringify(item));
          this.define = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.items[item.itemId];
          this.countLabel.string = item.count + '';
          this.tranLabel.node.active = item.isTran;
          this.imgSprite.spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).load_local_sprite(this.define.Icon + '/spriteFrame');

          if (selected) {
            // this.nodeBgSprite.spriteFrame = this.selectBgSpriteFrame;
            this.OnPointerClick();
            this.uiBagDetailItem.SetItemInfo(item);
          } //  console.log('spriteFrame='+this.imgSprite+'，Icon='+this.define.Icon)

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
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tranLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectBgSpriteFrame", [_dec5], {
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
//# sourceMappingURL=UIBagItem.js.map