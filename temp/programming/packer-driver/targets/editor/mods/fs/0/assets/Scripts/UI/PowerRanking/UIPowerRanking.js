System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Prefab, Label, UIWindow, proto, EventManager, ListView, UIPowerRankingItem, EventType, CombatPowerRankingManager, List, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, NItem, CombatPowerRankingResponse, NUser, FollowResponse, UIPowerRanking;

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

  function _reportPossibleCrUseOfUIPowerRankingItem(extras) {
    _reporterNs.report("UIPowerRankingItem", "./UIPowerRankingItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombatPowerRankingManager(extras) {
    _reporterNs.report("CombatPowerRankingManager", "../../Managers/CombatPowerRankingManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "../Common/ScrollView/List", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      UIWindow = _unresolved_2.UIWindow;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      ListView = _unresolved_5.ListView;
    }, function (_unresolved_6) {
      UIPowerRankingItem = _unresolved_6.UIPowerRankingItem;
    }, function (_unresolved_7) {
      EventType = _unresolved_7.EventType;
    }, function (_unresolved_8) {
      CombatPowerRankingManager = _unresolved_8.CombatPowerRankingManager;
    }, function (_unresolved_9) {
      List = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8cce6ZQSmhLrr0vkocJWZLm", "UIPowerRanking", undefined);

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

      _export("UIPowerRanking", UIPowerRanking = (_dec = ccclass('UIPowerRanking'), _dec2 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec3 = property(Prefab), _dec4 = property(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
        error: Error()
      }), ListView) : ListView), _dec5 = property(Label), _dec(_class = (_class2 = (_temp = class UIPowerRanking extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "powerRankingList", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "listMain", _descriptor3, this);

          _initializerDefineProperty(this, "myPowerRankingLabel", _descriptor4, this);

          _defineProperty(this, "selectedIndex", 0);

          _defineProperty(this, "index", 0);

          _defineProperty(this, "uiPowerRankingItem", null);

          _defineProperty(this, "userList", []);
        }

        start() {
          console.log('UIPowerRanking start');
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
          }), EventType) : EventType).CombatPowerRankingRefieshUI, this.RefieshUI, this);
          (_crd && CombatPowerRankingManager === void 0 ? (_reportPossibleCrUseOfCombatPowerRankingManager({
            error: Error()
          }), CombatPowerRankingManager) : CombatPowerRankingManager).Instance.SendCombatPowerRanking();
        }

        OnItemSelected(param) {
          this.uiPowerRankingItem = param[0];
          console.log('OnItemSelected=');
        }

        RefieshUI() {
          this.ClearList();
          this.InitCombatPowerRanking();
        }
        /**
        * 排行榜初始化
        */


        async InitCombatPowerRanking() {
          this.userList = [];
          let response = (_crd && CombatPowerRankingManager === void 0 ? (_reportPossibleCrUseOfCombatPowerRankingManager({
            error: Error()
          }), CombatPowerRankingManager) : CombatPowerRankingManager).Instance.combatPowerRankingResponse;

          if (response) {
            for (let i = 0; i < response.users.length; i++) {
              let user = response.users[i];
              this.userList.push(user);
            }

            this.myPowerRankingLabel.string = response.myRanking == -1 ? '你当前未上榜' : '你当前排在' + response.myRanking + '位';
          }

          this.powerRankingList.numItems = this.userList.length;
        }

        ClearList() {
          this.listMain.RemoveAll();
        }
        /**
        * 战力排行列表渲染
        * @param node
        * @param index 
        */


        OnPowerRankingListRender(node, index) {
          let uiPowerRankingItem = node.getComponent(_crd && UIPowerRankingItem === void 0 ? (_reportPossibleCrUseOfUIPowerRankingItem({
            error: Error()
          }), UIPowerRankingItem) : UIPowerRankingItem);
          this.listMain.AddItem(node, uiPowerRankingItem);
          uiPowerRankingItem === null || uiPowerRankingItem === void 0 ? void 0 : uiPowerRankingItem.SetItemInfo(this.userList[index], this);
        }

        onDestroy() {
          console.log('onDestroy');
          this.listMain.removeListener();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "powerRankingList", [_dec2], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "myPowerRankingLabel", [_dec5], {
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
//# sourceMappingURL=UIPowerRanking.js.map