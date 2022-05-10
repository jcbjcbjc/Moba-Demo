System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EventManager, EventType, _dec, _class, _temp, _crd, ccclass, property, ListView;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "./ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Event/EventType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e489ChlkpATrFLRWp1oavA", "ListView", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ListView", ListView = (_dec = ccclass('ListView'), _dec(_class = (_temp = class ListView extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "items", []);

          _defineProperty(this, "owner", void 0);

          _defineProperty(this, "isAddScene", true);

          _defineProperty(this, "selectedItem", null);
        }

        get SelectedItem() {
          return this.selectedItem;
        }

        set SelectedItem(value) {
          if (this.selectedItem && this.selectedItem != value) {
            this.selectedItem.Selected = false;
          }

          this.selectedItem = value;

          if (this.owner) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatchObj((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).ListView_OnItemSelected, this.owner, value);
          }
        }

        AddItem(node, item) {
          item.owner = this; //判断存在则退出

          for (var i = 0; i < this.items.length; i++) {
            var listViewItem = this.items[i];

            if (listViewItem.uuid == item.uuid) {
              listViewItem.Selected = false;
              console.log('AddItem 已存在项');
              return;
            }
          }

          this.items.push(item);

          if (this.isAddScene) {
            this.node.addChild(node);
          }
        }

        RemoveAll() {
          if (this.isAddScene) {
            this.node.removeAllChildren();

            for (var i = 0; i < this.items.length; i++) {
              var listViewItem = this.items[i];
              listViewItem.destroy();
            }
          }

          this.items = [];
        } /// <summary>
        /// 清除所有的选中状态
        /// </summary>


        ClearAllSelect() {
          for (var i = 0; i < this.items.length; i++) {
            var listViewItem = this.items[i];

            if (listViewItem.Selected) {
              listViewItem.Selected = false;
            }
          }
        }

        removeListener() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ListView.js.map