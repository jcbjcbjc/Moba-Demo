System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Prefab, UIWindow, User, proto, EventManager, ListView, UIBagItem, UIBagDetailItem, EventType, MessageBox, MessageBoxType, ItemService, InputBox, Validate, ItemManager, List, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, NItem, BagHandleType, BagHandleResponse, Result, UIBag;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "../Common/UIWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../../Models/User", _context.meta, extras);
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

  function _reportPossibleCrUseOfUIBagItem(extras) {
    _reporterNs.report("UIBagItem", "./UIBagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBagDetailItem(extras) {
    _reporterNs.report("UIBagDetailItem", "./UIBagDetailItem", _context.meta, extras);
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

  function _reportPossibleCrUseOfInputBox(extras) {
    _reporterNs.report("InputBox", "../Common/InputBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValidate(extras) {
    _reporterNs.report("Validate", "../../Utils/Validate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemManager(extras) {
    _reporterNs.report("ItemManager", "../../Managers/ItemManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "../Common/ScrollView/List", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIInputBox(extras) {
    _reporterNs.report("UIInputBox", "../Common/UIInputBox", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      UIWindow = _unresolved_2.UIWindow;
    }, function (_unresolved_3) {
      User = _unresolved_3.User;
    }, function (_unresolved_4) {
      proto = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      ListView = _unresolved_6.ListView;
    }, function (_unresolved_7) {
      UIBagItem = _unresolved_7.UIBagItem;
    }, function (_unresolved_8) {
      UIBagDetailItem = _unresolved_8.UIBagDetailItem;
    }, function (_unresolved_9) {
      EventType = _unresolved_9.EventType;
    }, function (_unresolved_10) {
      MessageBox = _unresolved_10.MessageBox;
      MessageBoxType = _unresolved_10.MessageBoxType;
    }, function (_unresolved_11) {
      ItemService = _unresolved_11.ItemService;
    }, function (_unresolved_12) {
      InputBox = _unresolved_12.InputBox;
    }, function (_unresolved_13) {
      Validate = _unresolved_13.Validate;
    }, function (_unresolved_14) {
      ItemManager = _unresolved_14.ItemManager;
    }, function (_unresolved_15) {
      List = _unresolved_15.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11d31+wJydPC6Ed7spLcVbO", "UIBag", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        BagHandleType,
        BagHandleResponse,
        Result
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIBag", UIBag = (_dec = ccclass('UIBag'), _dec2 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec3 = property(Prefab), _dec4 = property(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
        error: Error()
      }), ListView) : ListView), _dec5 = property(_crd && UIBagDetailItem === void 0 ? (_reportPossibleCrUseOfUIBagDetailItem({
        error: Error()
      }), UIBagDetailItem) : UIBagDetailItem), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class UIBag extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bagList", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "listMain", _descriptor3, this);

          _initializerDefineProperty(this, "uiBagDetailItem", _descriptor4, this);

          _initializerDefineProperty(this, "selectedButton", _descriptor5, this);

          _initializerDefineProperty(this, "normalNode", _descriptor6, this);

          _defineProperty(this, "selectedIndex", 0);

          _defineProperty(this, "uiBagItem", null);

          _defineProperty(this, "bagHandleType", null);

          _defineProperty(this, "money", '');

          _defineProperty(this, "listenerObj", void 0);

          _defineProperty(this, "bagItems", []);

          _defineProperty(this, "confirmTranObj", null);
        }

        start() {
          this.listMain.owner = this;
          this.listMain.isAddScene = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).ListView_OnItemSelected, this.OnItemSelected, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnBagHandle_UI, this.OnBagHandle_UI, this);
          this.RefieshUI();
        }

        OnItemSelected(param) {
          this.uiBagItem = param[0];
          console.log('OnItemSelected=' + this.uiBagItem);
        }

        RefieshUI() {
          this.ClearList();
          this.InitBags();
        }
        /**
         * 设置背包打开方式
         * @param mode 1、正常打开 2、拍卖大厅打开
         */


        SetUpOpenMode(mode = 1, listenerObj) {
          this.listenerObj = listenerObj ? listenerObj : this;

          if (mode == 1) {
            this.selectedButton.active = false;
            this.normalNode.active = true;
          } else if (mode == 2) {
            this.selectedButton.active = true;
            this.normalNode.active = false;
          }
        }
        /**
         * 初始化背包
         */


        InitBags() {
          this.bagItems = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.bag;

          if (!this.bagItems || this.bagItems.length < 1) {
            this.uiBagDetailItem.node.active = false;
          } else {
            this.uiBagDetailItem.node.active = true;
          }

          this.bagList.numItems = this.bagItems ? this.bagItems.length : 0;
        }

        ClearList() {
          this.listMain.RemoveAll();
        }
        /**
         * 点击出售
         */


        async OnClickSell() {
          if (!this.uiBagItem) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("请选择要出售的道具", "出售");
            return;
          }

          this.bagHandleType = BagHandleType.SELL;
          let confirmObj = await (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
            error: Error()
          }), MessageBox) : MessageBox).Show("确定要出售" + this.uiBagItem.define.Name + "吗？", "出售", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Confirm, "确定", "取消");
          let this_ = this;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIMessageBox_OnClickYes, function () {
            (_crd && ItemService === void 0 ? (_reportPossibleCrUseOfItemService({
              error: Error()
            }), ItemService) : ItemService).Instance.SendBagHandle(this_.uiBagItem.define.ID, this_.bagHandleType, 0);
          }, confirmObj);
        }
        /**
         * 点击交易
         */


        async OnClickTran() {
          if (!this.uiBagItem) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("请选择要交易的道具", "交易");
            return;
          }

          this.bagHandleType = BagHandleType.TRAN;
          this.confirmTranObj = await (_crd && InputBox === void 0 ? (_reportPossibleCrUseOfInputBox({
            error: Error()
          }), InputBox) : InputBox).Show('请输入交易金额', "交易");
          let this_ = this;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIInputBox_OnClickYes, function (param) {
            this_.money = param[0];

            if (!(_crd && Validate === void 0 ? (_reportPossibleCrUseOfValidate({
              error: Error()
            }), Validate) : Validate).isIntegerLarge0(this_.money)) {
              return '交易金额必须大于0';
            }

            (_crd && ItemService === void 0 ? (_reportPossibleCrUseOfItemService({
              error: Error()
            }), ItemService) : ItemService).Instance.SendBagHandle(this_.uiBagItem.define.ID, this_.bagHandleType, parseInt(this_.money));
            return '';
          }, this.confirmTranObj);
        }
        /**
         * 点击取消交易
         */


        async OnClickCancelTran() {
          if (!this.uiBagItem) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("请选择要取消交易的道具", "取消交易");
            return;
          }

          this.bagHandleType = BagHandleType.CANCELTRAN;
          let confirmObj = await (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
            error: Error()
          }), MessageBox) : MessageBox).Show("确定要取消交易" + this.uiBagItem.define.Name + "吗？", "取消交易", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Confirm, "确定", "取消");
          let this_ = this;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIMessageBox_OnClickYes, function () {
            (_crd && ItemService === void 0 ? (_reportPossibleCrUseOfItemService({
              error: Error()
            }), ItemService) : ItemService).Instance.SendBagHandle(this_.uiBagItem.define.ID, this_.bagHandleType, 0);
          }, confirmObj);
        }

        OnBagHandle_UI(param) {
          let response = param[0];

          if (response.result == Result.Success) {
            //成功
            if (this.bagHandleType == BagHandleType.TRAN) {
              //交易
              (_crd && ItemManager === void 0 ? (_reportPossibleCrUseOfItemManager({
                error: Error()
              }), ItemManager) : ItemManager).Instance.TranItem(this.uiBagItem.index, parseInt(this.money));
            } else if (this.bagHandleType == BagHandleType.CANCELTRAN) {
              //取消交易
              (_crd && ItemManager === void 0 ? (_reportPossibleCrUseOfItemManager({
                error: Error()
              }), ItemManager) : ItemManager).Instance.CancelTranItem(this.uiBagItem.index);
            }

            this.RefieshUI();

            if (this.confirmTranObj) {
              this.confirmTranObj.Close();
            }
          }
        }
        /**
        * 点击选择
        */


        async OnClickSelected() {
          if (!this.uiBagItem) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("请选择道具", "选择");
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatchObj((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIBag_OnClickSelected, this.listenerObj, this.uiBagItem.define.ID);
        }
        /**
        * 背包列表渲染
        * @param node
        * @param index 
        */


        OnBagListRender(node, index) {
          let uiBagItem = node.getComponent(_crd && UIBagItem === void 0 ? (_reportPossibleCrUseOfUIBagItem({
            error: Error()
          }), UIBagItem) : UIBagItem);
          this.listMain.AddItem(node, uiBagItem);
          uiBagItem === null || uiBagItem === void 0 ? void 0 : uiBagItem.SetItemInfo(this.bagItems[index], this.uiBagDetailItem, index == this.selectedIndex, index, this);
        }

        onDestroy() {
          console.log('onDestroy');
          this.listMain.removeListener();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bagList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listMain", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "uiBagDetailItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selectedButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "normalNode", [_dec7], {
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
//# sourceMappingURL=UIBag.js.map