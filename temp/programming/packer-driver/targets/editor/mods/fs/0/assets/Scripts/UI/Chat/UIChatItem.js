System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ListViewItem, _decorator, Node, Label, SystemEventType, User, proto, EventManager, UIOtherMyUserItem, ChatManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, NItem, ChatMessage, ChatChannel, UIChatItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
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

  function _reportPossibleCrUseOfUIOtherMyUserItem(extras) {
    _reporterNs.report("UIOtherMyUserItem", "./UIOtherMyUserItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatManager(extras) {
    _reporterNs.report("ChatManager", "../../Managers/ChatManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      SystemEventType = _cc.SystemEventType;
    }, function (_unresolved_2) {
      ListViewItem = _unresolved_2.ListViewItem;
    }, function (_unresolved_3) {
      User = _unresolved_3.User;
    }, function (_unresolved_4) {
      proto = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      UIOtherMyUserItem = _unresolved_6.UIOtherMyUserItem;
    }, function (_unresolved_7) {
      ChatManager = _unresolved_7.ChatManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "206af6u5WRJH5xD4OxpKBdW", "UIChatItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        ChatMessage,
        ChatChannel
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIChatItem", UIChatItem = (_dec = ccclass('UIChatItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec(_class = (_class2 = (_temp = class UIChatItem extends (_crd && ListViewItem === void 0 ? (_reportPossibleCrUseOfListViewItem({
        error: Error()
      }), ListViewItem) : ListViewItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "otherUser", _descriptor, this);

          _initializerDefineProperty(this, "myUser", _descriptor2, this);

          _initializerDefineProperty(this, "timeNode", _descriptor3, this);

          _initializerDefineProperty(this, "timeLabel", _descriptor4, this);
        }

        onLoad() {
          this.node.on(SystemEventType.TOUCH_END, this.OnPointerClick, this);
        }

        async SetItemInfo(chatMessage, enterFontCount, index, chatChannel, chatMessageList) {
          var _uiOtherMyUserItem;

          this.timeNode.active = false;

          if (!chatMessage) {
            return;
          }

          let uiOtherMyUserItem = null;

          if (chatMessage.fromId == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id) {
            this.myUser.active = true;
            this.otherUser.active = false;
            uiOtherMyUserItem = this.myUser.getComponent(_crd && UIOtherMyUserItem === void 0 ? (_reportPossibleCrUseOfUIOtherMyUserItem({
              error: Error()
            }), UIOtherMyUserItem) : UIOtherMyUserItem);
          } else {
            this.myUser.active = false;
            this.otherUser.active = true;
            uiOtherMyUserItem = this.otherUser.getComponent(_crd && UIOtherMyUserItem === void 0 ? (_reportPossibleCrUseOfUIOtherMyUserItem({
              error: Error()
            }), UIOtherMyUserItem) : UIOtherMyUserItem);
          }

          (_uiOtherMyUserItem = uiOtherMyUserItem) === null || _uiOtherMyUserItem === void 0 ? void 0 : _uiOtherMyUserItem.SetItemInfo(chatMessage, enterFontCount); //判断时间是否显示

          let isShowTime = false;

          if (index - 1 < 0) {
            //第一个显示
            isShowTime = true;
          } else {
            //与上一条聊天的时间间隔
            console.log('chat Type=' + chatChannel);
            let prevCompMessage;

            if (chatChannel == ChatChannel.Comp) {
              //综合
              prevCompMessage = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
                error: Error()
              }), ChatManager) : ChatManager).Instance.compMessages[index - 1];
            } else if (chatChannel == ChatChannel.Private) {
              //私聊
              prevCompMessage = chatMessageList[index - 1];
            } else if (chatChannel == ChatChannel.RoomChat) {
              //房间
              prevCompMessage = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
                error: Error()
              }), ChatManager) : ChatManager).Instance.roomMessages[index - 1];
            }

            if (prevCompMessage) {
              let jgTime = chatMessage.time - prevCompMessage.time;

              if (jgTime > 3 * 60 * 1000) {
                isShowTime = true;
              }
            }
          }

          if (isShowTime) {
            this.timeNode.active = true;
            console.log('chatMessage.time=' + chatMessage.time);
            this.timeLabel.string = new Date(parseInt(chatMessage.time)).toWeiXinString();
          }
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "otherUser", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myUser", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "timeNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [_dec5], {
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
//# sourceMappingURL=UIChatItem.js.map