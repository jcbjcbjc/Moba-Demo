System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Prefab, Button, UIWindow, proto, EventManager, ListView, UIAuctionItem, UIAuctionDetailItem, EventType, MessageBox, AuctionService, InputBox, Validate, UIManager, List, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, NItem, Result, NAuctionItem, UIAuction;

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

  function _reportPossibleCrUseOfUIAuctionItem(extras) {
    _reporterNs.report("UIAuctionItem", "./UIAuctionItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIAuctionDetailItem(extras) {
    _reporterNs.report("UIAuctionDetailItem", "./UIAuctionDetailItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAuctionService(extras) {
    _reporterNs.report("AuctionService", "../../Services/AuctionService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputBox(extras) {
    _reporterNs.report("InputBox", "../Common/InputBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValidate(extras) {
    _reporterNs.report("Validate", "../../Utils/Validate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBag(extras) {
    _reporterNs.report("UIBag", "../Bag/UIBag", _context.meta, extras);
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
      Prefab = _cc.Prefab;
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
      UIAuctionItem = _unresolved_6.UIAuctionItem;
    }, function (_unresolved_7) {
      UIAuctionDetailItem = _unresolved_7.UIAuctionDetailItem;
    }, function (_unresolved_8) {
      EventType = _unresolved_8.EventType;
    }, function (_unresolved_9) {
      MessageBox = _unresolved_9.MessageBox;
    }, function (_unresolved_10) {
      AuctionService = _unresolved_10.AuctionService;
    }, function (_unresolved_11) {
      InputBox = _unresolved_11.InputBox;
    }, function (_unresolved_12) {
      Validate = _unresolved_12.Validate;
    }, function (_unresolved_13) {
      UIManager = _unresolved_13.UIManager;
    }, function (_unresolved_14) {
      List = _unresolved_14.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18e551owHZLn6sJlsbCM8Xj", "UIAuction", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        Result,
        NAuctionItem
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIAuction", UIAuction = (_dec = ccclass('UIAuction'), _dec2 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec3 = property(Prefab), _dec4 = property(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
        error: Error()
      }), ListView) : ListView), _dec5 = property(_crd && UIAuctionDetailItem === void 0 ? (_reportPossibleCrUseOfUIAuctionDetailItem({
        error: Error()
      }), UIAuctionDetailItem) : UIAuctionDetailItem), _dec6 = property(Button), _dec7 = property(Button), _dec(_class = (_class2 = (_temp = class UIAuction extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "auctionList", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "listMain", _descriptor3, this);

          _initializerDefineProperty(this, "uiAuctionDetailItem", _descriptor4, this);

          _initializerDefineProperty(this, "offerPriceButton", _descriptor5, this);

          _initializerDefineProperty(this, "auctionButton", _descriptor6, this);

          _defineProperty(this, "selectedIndex", 0);

          _defineProperty(this, "timer", 0);

          _defineProperty(this, "uiAuctionItem", null);

          _defineProperty(this, "uiBag", null);

          _defineProperty(this, "auctionItemList", []);

          _defineProperty(this, "confirmInputCoinObj", null);

          _defineProperty(this, "confirmInputOfferPriceObj", null);
        }

        //出价金额框
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
          }), EventType) : EventType).OnGetAuctionList_UI, this.OnGetAuctionList_UI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).AuctionRefreshUI, this.OnOfferPrice, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnAuction_UI, this.OnAuction_UI, this);
          this.RefieshUI();
          var this_ = this;
          this.timer = setInterval(function () {
            this_.RefieshUI();
          }, 5000);
        }

        OnItemSelected(param) {
          this.uiAuctionItem = param[0];
          console.log('OnItemSelected=' + this.uiAuctionItem.itemDefine);
        }
        /**
         * 点击出价
         */


        OnClickOfferPrice() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.uiAuctionItem) {
              (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
                error: Error()
              }), MessageBox) : MessageBox).Show("请选择要出价的道具", "出价");
              return;
            }

            var item = _this.uiAuctionItem.item;
            _this.confirmInputOfferPriceObj = yield (_crd && InputBox === void 0 ? (_reportPossibleCrUseOfInputBox({
              error: Error()
            }), InputBox) : InputBox).Show('请输入出价金额', "出价");
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIInputBox_OnClickYes, function (param) {
              var money = param[0];

              if (!(_crd && Validate === void 0 ? (_reportPossibleCrUseOfValidate({
                error: Error()
              }), Validate) : Validate).isIntegerLarge0(money)) {
                return '出价金额必须大于0';
              }

              (_crd && AuctionService === void 0 ? (_reportPossibleCrUseOfAuctionService({
                error: Error()
              }), AuctionService) : AuctionService).Instance.SendOfferPrice(item.id, parseInt(money));
              return '';
            }, _this.confirmInputOfferPriceObj);
          })();
        }
        /**
         * 出价响应
         */


        OnOfferPrice() {
          this.RefieshUI();

          if (this.confirmInputOfferPriceObj) {
            this.confirmInputOfferPriceObj.Close();
          }
        }
        /**
         * 拍卖响应
         */


        OnAuction_UI() {
          console.log('OnAuction_UI confirmInputCoinObj=' + this.confirmInputCoinObj);
          this.RefieshUI();

          if (this.uiBag) {
            this.uiBag.Close();
          }

          if (this.confirmInputCoinObj) {
            this.confirmInputCoinObj.Close();
          }
        }
        /**
         * 点击拍卖
         */


        OnClickAuction() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2.uiBag = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UIBag");

            _this2.uiBag.SetUpOpenMode(2, _this2);

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIBag_OnClickSelected, _this2.UIBag_OnClickSelected, _this2);
          })();
        }
        /**
         * 背包物品选择
         * @param param 
         */


        UIBag_OnClickSelected(param) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var itemId = param[0];
            _this3.confirmInputCoinObj = yield (_crd && InputBox === void 0 ? (_reportPossibleCrUseOfInputBox({
              error: Error()
            }), InputBox) : InputBox).Show('请输入拍卖金额', "拍卖");
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIInputBox_OnClickYes, function (param2) {
              var money = param2[0];

              if (!(_crd && Validate === void 0 ? (_reportPossibleCrUseOfValidate({
                error: Error()
              }), Validate) : Validate).isIntegerLarge0(money)) {
                return '拍卖金额必须大于0';
              }

              (_crd && AuctionService === void 0 ? (_reportPossibleCrUseOfAuctionService({
                error: Error()
              }), AuctionService) : AuctionService).Instance.SendAuction(itemId, parseInt(money));
              return '';
            }, _this3.confirmInputCoinObj);
          })();
        }

        RefieshUI() {
          (_crd && AuctionService === void 0 ? (_reportPossibleCrUseOfAuctionService({
            error: Error()
          }), AuctionService) : AuctionService).Instance.SendGetAuctionList();
        }
        /**
         * 查询拍卖大厅响应
         * @param param 
         */


        OnGetAuctionList_UI(param) {
          this.ClearList();
          this.auctionItemList = param[0]; // console.log('OnGetAuctionList_UI：'+auctionItems)

          if (!this.auctionItemList || this.auctionItemList.length < 1) {
            this.uiAuctionDetailItem.node.active = false;
          } else {
            this.uiAuctionDetailItem.node.active = true;
          }

          this.auctionList.numItems = this.auctionItemList.length;
        }

        ClearList() {
          this.listMain.RemoveAll();
        }
        /**
        * 拍卖列表渲染
        * @param node
        * @param index 
        */


        OnAuctionListRender(node, index) {
          var uiAuctionItem = node.getComponent(_crd && UIAuctionItem === void 0 ? (_reportPossibleCrUseOfUIAuctionItem({
            error: Error()
          }), UIAuctionItem) : UIAuctionItem);
          this.listMain.AddItem(node, uiAuctionItem);
          uiAuctionItem === null || uiAuctionItem === void 0 ? void 0 : uiAuctionItem.SetItemInfo(this.auctionItemList[index], this.uiAuctionDetailItem, index == this.selectedIndex, index, this);
        }

        onDestroy() {
          console.log('onDestroy');
          this.listMain.removeListener();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
          clearInterval(this.timer);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "auctionList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listMain", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "uiAuctionDetailItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "offerPriceButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "auctionButton", [_dec7], {
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
//# sourceMappingURL=UIAuction.js.map