System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Label, Sprite, SpriteFrame, SystemEventType, ListViewItem, LoadResUtil, DataManager, EventManager, EventType, ChatManager, UIManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, UIChatUserItem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfChatUserVo(extras) {
    _reporterNs.report("ChatUserVo", "../../Vo/ChatUserVo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatManager(extras) {
    _reporterNs.report("ChatManager", "../../Managers/ChatManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICharacterDetail(extras) {
    _reporterNs.report("UICharacterDetail", "../UICharacterDetail/UICharacterDetail", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      SystemEventType = _cc.SystemEventType;
    }, function (_unresolved_2) {
      ListViewItem = _unresolved_2.ListViewItem;
    }, function (_unresolved_3) {
      LoadResUtil = _unresolved_3.LoadResUtil;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }, function (_unresolved_7) {
      ChatManager = _unresolved_7.ChatManager;
    }, function (_unresolved_8) {
      UIManager = _unresolved_8.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "710ceJqFZhD371B58T9uOpG", "UIChatUserItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIChatUserItem", UIChatUserItem = (_dec = ccclass('UIChatUserItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class UIChatUserItem extends (_crd && ListViewItem === void 0 ? (_reportPossibleCrUseOfListViewItem({
        error: Error()
      }), ListViewItem) : ListViewItem) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "avatarSprite", _descriptor, this);

          _initializerDefineProperty(this, "levelLabel", _descriptor2, this);

          _initializerDefineProperty(this, "nickNameLabel", _descriptor3, this);

          _initializerDefineProperty(this, "onLineLabel", _descriptor4, this);

          _initializerDefineProperty(this, "offLineLabel", _descriptor5, this);

          _defineProperty(this, "chatUserVo", null);

          _initializerDefineProperty(this, "chatRedSprite", _descriptor6, this);

          _initializerDefineProperty(this, "selectBgSpriteFrame", _descriptor7, this);

          _defineProperty(this, "normalBgSpriteFrame", null);

          _defineProperty(this, "nodeBgSprite", null);

          _defineProperty(this, "index", 0);
        }

        onLoad() {
          this.node.on(SystemEventType.TOUCH_END, this.OnPointerClick, this);
          this.avatarSprite.node.on(SystemEventType.TOUCH_END, this.avatarClick, this);
        }

        start() {
          this.nodeBgSprite = this.node.getComponent(Sprite);
          this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame;
          this.chatRedSprite.node.active = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnChangeRedNum, this.OnChangeRedNum, this);
          this.OnChangeRedNum();
        }

        onSelected(selected) {
          // console.log('selected='+selected)
          if (this.nodeBgSprite) {
            this.nodeBgSprite.spriteFrame = selected ? this.selectBgSpriteFrame : this.normalBgSpriteFrame;
          }
        }

        SetItemInfo(chatUserVo, selected, index) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (selected === void 0) {
              selected = false;
            }

            _this.index = index;

            if (!chatUserVo) {
              return;
            }

            _this.chatUserVo = chatUserVo;
            _this.avatarSprite.spriteFrame = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_sprite((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.characters[chatUserVo.cCharacterId].Avatar + '/spriteFrame');
            _this.levelLabel.string = 'lv' + chatUserVo.level;
            _this.nickNameLabel.string = chatUserVo.nickName;
            _this.onLineLabel.active = chatUserVo.status;
            _this.offLineLabel.active = !chatUserVo.status;

            if (selected) {
              _this.OnPointerClick();
            }
          })();
        }
        /**
         * 消息数量改变
         */


        OnChangeRedNum() {
          var userMsgNum = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.privateUserNum.get(this.chatUserVo.userId) || 0; // this.userMsgNumLabel.string=(userMsgNum > 99 ? '99+' : userMsgNum+'');

          if (userMsgNum > 0) {
            this.chatRedSprite.node.active = true;
          } else {
            this.chatRedSprite.node.active = false;
          }
        }
        /**
         * 头像点击
         */


        avatarClick() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            console.log('avatarClick');
            var uiCharacterDetail = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UICharacterDetail");
            uiCharacterDetail.SendCharacterDetail(_this2.chatUserVo.userId, 0, 2);
          })();
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "avatarSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nickNameLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "onLineLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "offLineLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "chatRedSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "selectBgSpriteFrame", [_dec8], {
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
//# sourceMappingURL=UIChatUserItem.js.map