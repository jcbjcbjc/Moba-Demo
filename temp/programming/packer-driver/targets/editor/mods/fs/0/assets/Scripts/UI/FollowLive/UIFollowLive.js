System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, Prefab, TabView, EventManager, EventType, proto, UIFollowLiveItem, ListView, FollowManager, List, FollowService, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, CharacterClass, UserStatus, ccclass, property, UIFollowLive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTabView(extras) {
    _reporterNs.report("TabView", "../Common/TabView/TabView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIFollowLiveItem(extras) {
    _reporterNs.report("UIFollowLiveItem", "./UIFollowLiveItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListView(extras) {
    _reporterNs.report("ListView", "../Common/ListView/ListView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
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
      Component = _cc.Component;
      director = _cc.director;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      TabView = _unresolved_2.TabView;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      proto = _unresolved_5.default;
    }, function (_unresolved_6) {
      UIFollowLiveItem = _unresolved_6.UIFollowLiveItem;
    }, function (_unresolved_7) {
      ListView = _unresolved_7.ListView;
    }, function (_unresolved_8) {
      FollowManager = _unresolved_8.FollowManager;
    }, function (_unresolved_9) {
      List = _unresolved_9.default;
    }, function (_unresolved_10) {
      FollowService = _unresolved_10.FollowService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66d09KNXtNP37qih/cPQcFR", "UIFollowLive", undefined);

      ({
        CharacterClass,
        UserStatus
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 关注直播
       */

      _export("UIFollowLive", UIFollowLive = (_dec = ccclass('UIFollowLive'), _dec2 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec3 = property(_crd && TabView === void 0 ? (_reportPossibleCrUseOfTabView({
        error: Error()
      }), TabView) : TabView), _dec4 = property(Prefab), _dec5 = property(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
        error: Error()
      }), ListView) : ListView), _dec(_class = (_class2 = (_temp = class UIFollowLive extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "followLiveList", _descriptor, this);

          _initializerDefineProperty(this, "tab", _descriptor2, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "listMain", _descriptor4, this);

          _defineProperty(this, "followList", []);

          _defineProperty(this, "index", -1);
        }

        //选择索引
        start() {
          this.tab.owner = this;
          this.listMain.isAddScene = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).FollowListRefieshUI, this.FollowListRefieshUI, this);
          (_crd && FollowService === void 0 ? (_reportPossibleCrUseOfFollowService({
            error: Error()
          }), FollowService) : FollowService).Instance.SendFollowList();
        }
        /**
         * 关注数据响应
         */


        FollowListRefieshUI() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).TabView_OnTabSelect, this.OnTabSelect, this);
        }
        /**
         * 刷新UI
         */


        RefreshUI() {
          console.log('RefreshUI');
          this.ClearList(); //获取对应索引

          let follows = (_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
            error: Error()
          }), FollowManager) : FollowManager).Instance.follows;
          this.followList = [];

          for (let i = 0; i < follows.length; i++) {
            let follow = follows[i];

            if (this.index == 0) {
              //直播中
              if (!follow.status || follow.userStatus != UserStatus.Game) {
                //离线或非游戏状态
                continue;
              }
            } else if (this.index == 1) {
              //在线
              if (!follow.status || follow.userStatus == UserStatus.Game) {
                //离线或游戏状态
                continue;
              }
            } else if (this.index == 2) {
              //离线
              if (follow.status || follow.userStatus == UserStatus.Game) {
                //在线或游戏状态
                continue;
              }
            }

            this.followList.push(follow);
          }

          this.followLiveList.numItems = this.followList.length;
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
          console.log('OnTabSelect index=' + this.index, this);
          this.RefreshUI();
        }

        ClearList() {
          this.listMain.RemoveAll();
        }
        /**
         * 返回
         */


        back() {
          director.loadScene('UIMain');
        }
        /**
         * 关注/直播列表渲染
         * @param node
         * @param index 
         */


        OnFollowLiveListRender(node, index) {
          let uiFollowLiveItem = node.getComponent(_crd && UIFollowLiveItem === void 0 ? (_reportPossibleCrUseOfUIFollowLiveItem({
            error: Error()
          }), UIFollowLiveItem) : UIFollowLiveItem);
          this.listMain.AddItem(node, uiFollowLiveItem);
          uiFollowLiveItem === null || uiFollowLiveItem === void 0 ? void 0 : uiFollowLiveItem.SetItemInfo(this.followList[index], this.index);
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "followLiveList", [_dec2], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIFollowLive.js.map