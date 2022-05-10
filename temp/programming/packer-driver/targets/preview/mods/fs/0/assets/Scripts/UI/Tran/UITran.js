System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Prefab, instantiate, Button, UIWindow, proto, EventManager, ListView, UITranItem, UITranDetailItem, EventType, MessageBox, MessageBoxType, ItemService, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, NItem, Result, UITran;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "../Common/UIWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListView(extras) {
    _reporterNs.report("ListView", "../Common/ListView/ListView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUITranItem(extras) {
    _reporterNs.report("UITranItem", "./UITranItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUITranDetailItem(extras) {
    _reporterNs.report("UITranDetailItem", "./UITranDetailItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBoxType(extras) {
    _reporterNs.report("MessageBoxType", "../Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemService(extras) {
    _reporterNs.report("ItemService", "../../Services/ItemService", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      UIWindow = _unresolved_2.UIWindow;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      ListView = _unresolved_5.ListView;
    }, function (_unresolved_6) {
      UITranItem = _unresolved_6.UITranItem;
    }, function (_unresolved_7) {
      UITranDetailItem = _unresolved_7.UITranDetailItem;
    }, function (_unresolved_8) {
      EventType = _unresolved_8.EventType;
    }, function (_unresolved_9) {
      MessageBox = _unresolved_9.MessageBox;
      MessageBoxType = _unresolved_9.MessageBoxType;
    }, function (_unresolved_10) {
      ItemService = _unresolved_10.ItemService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5d1dJPKRtK2azotZiGK/h9", "UITran", undefined);

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

      _export("UITran", UITran = (_dec = ccclass('UITran'), _dec2 = property(Prefab), _dec3 = property(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
        error: Error()
      }), ListView) : ListView), _dec4 = property(_crd && UITranDetailItem === void 0 ? (_reportPossibleCrUseOfUITranDetailItem({
        error: Error()
      }), UITranDetailItem) : UITranDetailItem), _dec5 = property(Button), _dec(_class = (_class2 = (_temp = class UITran extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemPrefab", _descriptor, this);

          _initializerDefineProperty(this, "listMain", _descriptor2, this);

          _initializerDefineProperty(this, "uiTranDetailItem", _descriptor3, this);

          _initializerDefineProperty(this, "buyButton", _descriptor4, this);

          _defineProperty(this, "selectedIndex", 0);

          _defineProperty(this, "userId", 0);

          _defineProperty(this, "uiTranItem", null);
        }

        start() {
          this.listMain.owner = this;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).ListView_OnItemSelected, this.OnItemSelected, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnQueryTran_UI, this.OnQueryTran_UI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnBuyTran_UI, this.RefieshUI, this);
        }

        OnItemSelected(param) {
          this.uiTranItem = param[0];
          console.log('OnItemSelected=' + this.uiTranItem.itemDefine);
        }
        /**
         * 点击购买
         */


        OnClickBuy() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.uiTranItem) {
              (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
                error: Error()
              }), MessageBox) : MessageBox).Show("请选择要购买的道具", "购买提示");
              return;
            }

            var itemDefine = _this.uiTranItem.itemDefine; // let shopItemDefine=this.uiTranItem.shopItemDefine;

            var confirmObj = yield (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("确定要购买" + itemDefine.Name + "吗？", "购买", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Confirm, "确定", "取消");
            var this_ = _this;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIMessageBox_OnClickYes, function () {
              (_crd && ItemService === void 0 ? (_reportPossibleCrUseOfItemService({
                error: Error()
              }), ItemService) : ItemService).Instance.SendBuyTran(this_.userId, itemDefine.ID);
            }, confirmObj);
          })();
        }
        /**
         * 设置用户加载列表
         * @param userId 
         */


        SetUserLoadList(userId) {
          this.userId = userId;
          this.RefieshUI();
        }

        RefieshUI() {
          (_crd && ItemService === void 0 ? (_reportPossibleCrUseOfItemService({
            error: Error()
          }), ItemService) : ItemService).Instance.SendQueryTran(this.userId);
        }
        /**
         * 查询用户交易响应
         * @param param 
         */


        OnQueryTran_UI(param) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2.ClearList();

            var items = param[0];

            if (!items || items.length < 1) {
              _this2.uiTranDetailItem.node.active = false;
              return;
            }

            _this2.uiTranDetailItem.node.active = true;

            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              var node = instantiate(_this2.itemPrefab);
              var uiTranItem = node.getComponent(_crd && UITranItem === void 0 ? (_reportPossibleCrUseOfUITranItem({
                error: Error()
              }), UITranItem) : UITranItem);
              yield uiTranItem === null || uiTranItem === void 0 ? void 0 : uiTranItem.SetItemInfo(item, _this2.uiTranDetailItem, i == _this2.selectedIndex, i, _this2);

              _this2.listMain.AddItem(node, uiTranItem);
            }
          })();
        }

        ClearList() {
          this.listMain.RemoveAll();
        }

        onDestroy() {
          console.log('onDestroy');
          this.listMain.removeListener();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listMain", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uiTranDetailItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buyButton", [_dec5], {
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
//# sourceMappingURL=UITran.js.map