System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EditBox, proto, TabView, EventManager, EventType, ChatManager, UIBattleChatItem, List, TipsManager, ChatService, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, NItem, ChatMessage, ChatChannel, ChatRoomType, UIBattleChat;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
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

  function _reportPossibleCrUseOfChatManager(extras) {
    _reporterNs.report("ChatManager", "../../Managers/ChatManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBattleChatItem(extras) {
    _reporterNs.report("UIBattleChatItem", "./UIBattleChatItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "../Common/ScrollView/List", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsManager(extras) {
    _reporterNs.report("TipsManager", "../TipsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatService(extras) {
    _reporterNs.report("ChatService", "../../Services/ChatService", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      TabView = _unresolved_3.TabView;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      EventType = _unresolved_5.EventType;
    }, function (_unresolved_6) {
      ChatManager = _unresolved_6.ChatManager;
    }, function (_unresolved_7) {
      UIBattleChatItem = _unresolved_7.UIBattleChatItem;
    }, function (_unresolved_8) {
      List = _unresolved_8.default;
    }, function (_unresolved_9) {
      TipsManager = _unresolved_9.TipsManager;
    }, function (_unresolved_10) {
      ChatService = _unresolved_10.ChatService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3aec4szYNEepoyXykNRJzb", "UIBattleChat", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        ChatMessage,
        ChatChannel,
        ChatRoomType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIBattleChat", UIBattleChat = (_dec = ccclass('UIBattleChat'), _dec2 = property(_crd && TabView === void 0 ? (_reportPossibleCrUseOfTabView({
        error: Error()
      }), TabView) : TabView), _dec3 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec4 = property(EditBox), _dec(_class = (_class2 = (_temp = class UIBattleChat extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tab", _descriptor, this);

          _initializerDefineProperty(this, "chatList", _descriptor2, this);

          _initializerDefineProperty(this, "contentEditBox", _descriptor3, this);

          _defineProperty(this, "index", -1);

          _defineProperty(this, "messageList", new Array());
        }

        //消息集合
        start() {
          if (this.tab) {
            //对战玩家
            this.tab.owner = this;
          } else {
            //观看直播用户
            this.OnChangeChannel([1]);
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).TabView_OnTabSelect, this.OnChangeChannel, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnChat_UI, this.OnChat_UI, this);
        }
        /**
         * 收到消息更新
         * @param param 
         */


        OnChat_UI(param) {
          var channel = param[0];

          if (channel == ChatChannel.RoomChat) {
            //房间
            this.InitChat();
          }
        }
        /**
         * 切换选择频道
         * @param param 索引
         */


        OnChangeChannel(param) {
          var index = param[0];

          if (this.index == index) {
            return;
          }

          this.index = index;
          console.log('OnChangeChannel index=' + this.index);
          this.InitChat();
        }
        /**
         * 初始化聊天
         */


        InitChat() {
          this.messageList = this.index == 0 ? (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.gameMessages : (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.liveMessages;
          this.chatList.numItems = this.messageList.length;
          this.chatList.scrollTo(this.messageList.length);
        }
        /**
         * 聊天列表渲染
         * @param item 
         * @param index 
         */


        OnChatListRender(item, index) {
          var uiBattleChatItem = item.getComponent(_crd && UIBattleChatItem === void 0 ? (_reportPossibleCrUseOfUIBattleChatItem({
            error: Error()
          }), UIBattleChatItem) : UIBattleChatItem);
          uiBattleChatItem === null || uiBattleChatItem === void 0 ? void 0 : uiBattleChatItem.SetItemInfo(this.messageList[index], this.index);
        }
        /**
         * 点击发送
         */


        OnClickSend() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.contentEditBox.string) {
              (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
                error: Error()
              }), TipsManager) : TipsManager).Instance.showTips('请输入发送的内容');
              return;
            }

            (_crd && ChatService === void 0 ? (_reportPossibleCrUseOfChatService({
              error: Error()
            }), ChatService) : ChatService).Instance.SendChat(ChatChannel.RoomChat, _this.contentEditBox.string, _this.index == 0 ? ChatRoomType.Game_ : ChatRoomType.Live_);
            _this.contentEditBox.string = '';
          })();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chatList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentEditBox", [_dec4], {
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
//# sourceMappingURL=UIBattleChat.js.map