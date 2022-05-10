System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Prefab, Button, UIWindow, EventManager, ListView, UIShopItem, UIShopDetailItem, EventType, TabView, DataManager, MessageBox, ItemService, List, InputBox, Validate, SoundManager, SoundDefine, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, UIShop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "../Common/UIWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListView(extras) {
    _reporterNs.report("ListView", "../Common/ListView/ListView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIShopItem(extras) {
    _reporterNs.report("UIShopItem", "./UIShopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIShopDetailItem(extras) {
    _reporterNs.report("UIShopDetailItem", "./UIShopDetailItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTabView(extras) {
    _reporterNs.report("TabView", "../Common/TabView/TabView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemService(extras) {
    _reporterNs.report("ItemService", "../../Services/ItemService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "../Common/ScrollView/List", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopItemDefine(extras) {
    _reporterNs.report("ShopItemDefine", "../../Data/ShopItemDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputBox(extras) {
    _reporterNs.report("InputBox", "../Common/InputBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValidate(extras) {
    _reporterNs.report("Validate", "../../Utils/Validate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIInputBox(extras) {
    _reporterNs.report("UIInputBox", "../Common/UIInputBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../../Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundDefine(extras) {
    _reporterNs.report("SoundDefine", "../../../Sound/SoundDefine", _context.meta, extras);
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
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      ListView = _unresolved_4.ListView;
    }, function (_unresolved_5) {
      UIShopItem = _unresolved_5.UIShopItem;
    }, function (_unresolved_6) {
      UIShopDetailItem = _unresolved_6.UIShopDetailItem;
    }, function (_unresolved_7) {
      EventType = _unresolved_7.EventType;
    }, function (_unresolved_8) {
      TabView = _unresolved_8.TabView;
    }, function (_unresolved_9) {
      DataManager = _unresolved_9.DataManager;
    }, function (_unresolved_10) {
      MessageBox = _unresolved_10.MessageBox;
    }, function (_unresolved_11) {
      ItemService = _unresolved_11.ItemService;
    }, function (_unresolved_12) {
      List = _unresolved_12.default;
    }, function (_unresolved_13) {
      InputBox = _unresolved_13.InputBox;
    }, function (_unresolved_14) {
      Validate = _unresolved_14.Validate;
    }, function (_unresolved_15) {
      SoundManager = _unresolved_15.SoundManager;
    }, function (_unresolved_16) {
      SoundDefine = _unresolved_16.SoundDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6cacJwmMlGj6uJIqw4Gtvv", "UIShop", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIShop", UIShop = (_dec = ccclass('UIShop'), _dec2 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec3 = property(_crd && TabView === void 0 ? (_reportPossibleCrUseOfTabView({
        error: Error()
      }), TabView) : TabView), _dec4 = property(Prefab), _dec5 = property(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
        error: Error()
      }), ListView) : ListView), _dec6 = property(_crd && UIShopDetailItem === void 0 ? (_reportPossibleCrUseOfUIShopDetailItem({
        error: Error()
      }), UIShopDetailItem) : UIShopDetailItem), _dec7 = property(Button), _dec(_class = (_class2 = (_temp = class UIShop extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "shopList", _descriptor, this);

          _initializerDefineProperty(this, "tab", _descriptor2, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "listMain", _descriptor4, this);

          _initializerDefineProperty(this, "uiShopDetailItem", _descriptor5, this);

          _initializerDefineProperty(this, "buyButton", _descriptor6, this);

          _defineProperty(this, "selectedIndex", 0);

          _defineProperty(this, "index", 0);

          _defineProperty(this, "uiShopItem", null);

          _defineProperty(this, "shopItemList", []);

          _defineProperty(this, "buyCountInputObj", void 0);
        }

        start() {
          this.tab.owner = this;
          this.listMain.owner = this;
          this.listMain.isAddScene = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).TabView_OnTabSelect, this.OnTabSelect, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).ListView_OnItemSelected, this.OnItemSelected, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnItemBuy_UI, this.OnItemBuyUI, this);
          this.RefieshUI();
        }

        OnItemSelected(param) {
          this.uiShopItem = param[0];
          console.log('OnItemSelected=' + this.uiShopItem.itemDefine);
        }
        /**
         * 点击购买
         */


        async OnClickBuy() {
          if (!this.uiShopItem) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("请选择要购买的道具", "购买提示");
            return;
          }

          let itemDefine = this.uiShopItem.itemDefine; // let confirmObj= await MessageBox.Show("确定要购买"+itemDefine.Name+"吗？", "购买", MessageBoxType.Confirm,"确定","取消"); 
          // let this_=this;
          // EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,function(){
          //     ItemService.Instance.SendItemBuy(this_.index+1,itemDefine.ID,1);
          // },confirmObj);

          this.buyCountInputObj = await (_crd && InputBox === void 0 ? (_reportPossibleCrUseOfInputBox({
            error: Error()
          }), InputBox) : InputBox).Show('请输入购买数量', "购买");
          this.buyCountInputObj.input.string = '1'; //默认值

          let this_ = this;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UIInputBox_OnClickYes, function (param) {
            let count = param[0];

            if (!(_crd && Validate === void 0 ? (_reportPossibleCrUseOfValidate({
              error: Error()
            }), Validate) : Validate).isIntegerLarge0(count)) {
              return '购买数量必须大于0';
            }

            (_crd && ItemService === void 0 ? (_reportPossibleCrUseOfItemService({
              error: Error()
            }), ItemService) : ItemService).Instance.SendItemBuy(this_.index + 1, itemDefine.ID, parseInt(count));
            return '';
          }, this.buyCountInputObj);
        }
        /**
         * 购买成功响应
         * @param param 
         */


        OnItemBuyUI(param) {
          this.buyCountInputObj.Close();
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_Success);
        }

        RefieshUI() {
          this.ClearList();
          this.InitShop();
        }
        /**
        * 切换选择
        * @param param 索引
        */


        OnTabSelect(param) {
          let index = param[0];

          if (this.index == index) {
            return;
          }

          this.index = index;
          this.selectedIndex = 0;
          console.log('OnTabSelect index=' + this.index);
          this.RefieshUI();
        }
        /**
         * 初始化商店
         */


        async InitShop() {
          this.shopItemList = [];
          let shopItems = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.shopItems[this.index + 1];

          if (!shopItems || Object.keys(shopItems).length < 1) {
            this.uiShopDetailItem.node.active = false;
          } else {
            this.uiShopDetailItem.node.active = true;
            let i = 0;

            for (let key in shopItems) {
              let shopItem = shopItems[key];

              if (shopItem.Status > 0) {
                this.shopItemList.push(shopItem);
                i++;
              }
            }
          }

          this.shopList.numItems = this.shopItemList.length;
          this.shopList.scrollTo(0);
        }

        ClearList() {
          this.listMain.RemoveAll();
        }
        /**
        * 商品列表渲染
        * @param node
        * @param index 
        */


        OnShopListRender(node, index) {
          let uiShopItem = node.getComponent(_crd && UIShopItem === void 0 ? (_reportPossibleCrUseOfUIShopItem({
            error: Error()
          }), UIShopItem) : UIShopItem);
          this.listMain.AddItem(node, uiShopItem);
          uiShopItem === null || uiShopItem === void 0 ? void 0 : uiShopItem.SetItemInfo(this.shopItemList[index], this.uiShopDetailItem, index == this.selectedIndex, index, this); // console.log('OnShopListRender index='+index+'，name='+uiShopItem.itemDefine.Name)
        }

        onDestroy() {
          console.log('onDestroy');
          this.listMain.removeListener();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shopList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "listMain", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiShopDetailItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buyButton", [_dec7], {
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
//# sourceMappingURL=UIShop.js.map