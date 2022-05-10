System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Prefab, UIWindow, proto, EventManager, ListView, UIFollowItem, EventType, FollowManager, List, FollowService, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, NItem, CombatPowerRankingResponse, NUser, FollowResponse, UIFollow;

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

  function _reportPossibleCrUseOfUIFollowItem(extras) {
    _reporterNs.report("UIFollowItem", "./UIFollowItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFollowManager(extras) {
    _reporterNs.report("FollowManager", "../../Managers/FollowManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "../Common/ScrollView/List", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFollowService(extras) {
    _reporterNs.report("FollowService", "../../Services/FollowService", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      UIWindow = _unresolved_2.UIWindow;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      ListView = _unresolved_5.ListView;
    }, function (_unresolved_6) {
      UIFollowItem = _unresolved_6.UIFollowItem;
    }, function (_unresolved_7) {
      EventType = _unresolved_7.EventType;
    }, function (_unresolved_8) {
      FollowManager = _unresolved_8.FollowManager;
    }, function (_unresolved_9) {
      List = _unresolved_9.default;
    }, function (_unresolved_10) {
      FollowService = _unresolved_10.FollowService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4bb42zB79hG5KzIzCJJ4hhb", "UIFollow", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        CombatPowerRankingResponse,
        NUser,
        FollowResponse
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIFollow", UIFollow = (_dec = ccclass('UIFollow'), _dec2 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec3 = property(Prefab), _dec4 = property(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
        error: Error()
      }), ListView) : ListView), _dec(_class = (_class2 = (_temp = class UIFollow extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "followList", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "listMain", _descriptor3, this);

          _defineProperty(this, "selectedIndex", 0);

          _defineProperty(this, "index", 0);

          _defineProperty(this, "uiFollowItem", null);
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
          }), EventType) : EventType).FollowListRefieshUI, this.RefieshUI, this);
          (_crd && FollowService === void 0 ? (_reportPossibleCrUseOfFollowService({
            error: Error()
          }), FollowService) : FollowService).Instance.SendFollowList();
        }

        OnItemSelected(param) {
          this.uiFollowItem = param[0];
          console.log('OnItemSelected=');
        }

        RefieshUI() {
          this.ClearList();
          this.InitFollow();
        }
        /**
        * 关注列表初始化
        */


        InitFollow() {
          var follows = (_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
            error: Error()
          }), FollowManager) : FollowManager).Instance.follows;
          this.followList.numItems = follows ? follows.length : 0;
        }

        ClearList() {
          this.listMain.RemoveAll();
        }
        /**
        * 关注列表渲染
        * @param node
        * @param index 
        */


        OnFollowListRender(node, index) {
          var follows = (_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
            error: Error()
          }), FollowManager) : FollowManager).Instance.follows;

          if (!follows) {
            return;
          }

          var uiFollowItem = node.getComponent(_crd && UIFollowItem === void 0 ? (_reportPossibleCrUseOfUIFollowItem({
            error: Error()
          }), UIFollowItem) : UIFollowItem);
          this.listMain.AddItem(node, uiFollowItem);
          uiFollowItem === null || uiFollowItem === void 0 ? void 0 : uiFollowItem.SetItemInfo(follows[index], this);
        }

        onDestroy() {
          console.log('onDestroy');
          this.listMain.removeListener();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "followList", [_dec2], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIFollow.js.map