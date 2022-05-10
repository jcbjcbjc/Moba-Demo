System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, Prefab, DataManager, TabView, EventManager, EventType, proto, UICharacterSelectItem, ListView, List, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, CharacterClass, ccclass, property, UICharacterSelect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTabView(extras) {
    _reporterNs.report("TabView", "../Common/TabView/TabView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterDefine(extras) {
    _reporterNs.report("CharacterDefine", "../../Data/CharacterDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICharacterSelectItem(extras) {
    _reporterNs.report("UICharacterSelectItem", "./UICharacterSelectItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListView(extras) {
    _reporterNs.report("ListView", "../Common/ListView/ListView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
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
      Component = _cc.Component;
      director = _cc.director;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      DataManager = _unresolved_2.DataManager;
    }, function (_unresolved_3) {
      TabView = _unresolved_3.TabView;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      EventType = _unresolved_5.EventType;
    }, function (_unresolved_6) {
      proto = _unresolved_6.default;
    }, function (_unresolved_7) {
      UICharacterSelectItem = _unresolved_7.UICharacterSelectItem;
    }, function (_unresolved_8) {
      ListView = _unresolved_8.ListView;
    }, function (_unresolved_9) {
      List = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6541dQ5HaJEOLuEGXP1YYje", "UICharacterSelect", undefined);

      ({
        CharacterClass
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 英雄选择
       */

      _export("UICharacterSelect", UICharacterSelect = (_dec = ccclass('UICharacterSelect'), _dec2 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec3 = property(_crd && TabView === void 0 ? (_reportPossibleCrUseOfTabView({
        error: Error()
      }), TabView) : TabView), _dec4 = property(Prefab), _dec5 = property(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
        error: Error()
      }), ListView) : ListView), _dec(_class = (_class2 = (_temp = class UICharacterSelect extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "characterList", _descriptor, this);

          _initializerDefineProperty(this, "tab", _descriptor2, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "listMain", _descriptor4, this);

          _defineProperty(this, "characterDefineList", []);

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
          }), EventType) : EventType).TabView_OnTabSelect, this.OnTabSelect, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UICharacterSelect_list, this.RefreshUI, this);
        }
        /**
         * 刷新UI
         */


        RefreshUI() {
          console.log('RefreshUI');
          this.ClearList(); //获取对应索引的英雄

          let charactersMap = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.characters;
          this.characterDefineList = [];

          for (let id in charactersMap) {
            if (parseInt(id) > 1000) {
              continue;
            }

            let define = charactersMap[id];

            if (this.index == 0 || this.index + '' == CharacterClass[define.Class]) {
              this.characterDefineList.push(define); // console.log('id='+define.ID)
            }
          }

          this.characterList.numItems = this.characterDefineList.length;
          this.characterList.scrollTo(0);
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
        * 英雄列表渲染
        * @param node
        * @param index 
        */


        OnCharacterListRender(node, index) {
          let uiCharacterSelectItem = node.getComponent(_crd && UICharacterSelectItem === void 0 ? (_reportPossibleCrUseOfUICharacterSelectItem({
            error: Error()
          }), UICharacterSelectItem) : UICharacterSelectItem);
          this.listMain.AddItem(node, uiCharacterSelectItem);
          uiCharacterSelectItem === null || uiCharacterSelectItem === void 0 ? void 0 : uiCharacterSelectItem.SetItemInfo(this.characterDefineList[index]);
        }
        /**
         * 返回
         */


        back() {
          director.loadScene('UIMain');
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "characterList", [_dec2], {
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
//# sourceMappingURL=UICharacterSelect.js.map