System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtil, proto, NetClient, EventManager, EventType, User, ChatManager, TipsManager, ChatService, _crd, NetMessage, NetMessageRequest, Result, ChatRequest, ChatMessage, ChatChannel, ChatResponse, ChatRoomType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../Log/LogUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetClient(extras) {
    _reporterNs.report("NetClient", "../Network/NetClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../UI/Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../UI/Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatManager(extras) {
    _reporterNs.report("ChatManager", "../Managers/ChatManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsManager(extras) {
    _reporterNs.report("TipsManager", "../UI/TipsManager", _context.meta, extras);
  }

  _export("ChatService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LogUtil = _unresolved_2.LogUtil;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      NetClient = _unresolved_4.NetClient;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }, function (_unresolved_7) {
      User = _unresolved_7.User;
    }, function (_unresolved_8) {
      ChatManager = _unresolved_8.ChatManager;
    }, function (_unresolved_9) {
      TipsManager = _unresolved_9.TipsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61c97hfMIJP95UZOslqeLKs", "ChatService", undefined);

      ({
        NetMessage,
        NetMessageRequest,
        Result,
        ChatRequest,
        ChatMessage,
        ChatChannel,
        ChatResponse,
        ChatRoomType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("ChatService", ChatService = class ChatService {
        Init() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnChat, this.OnChat, this);
        }
        /**
         * 发送聊天
         */


        SendChat(chatChannel, msg, chatRoomType, toId, toName, toLevel, toCCharacterId) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendChat");
          let message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.chatReq = new ChatRequest();
          message.Request.chatReq.chatMessage = new ChatMessage();
          message.Request.chatReq.chatMessage.chatChannel = chatChannel;
          message.Request.chatReq.chatMessage.fromId = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          message.Request.chatReq.chatMessage.fromName = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.nickname;
          message.Request.chatReq.chatMessage.fromLevel = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.character.level;
          message.Request.chatReq.chatMessage.fromCCharacterId = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.character.cid;
          message.Request.chatReq.chatMessage.chatRoomType = chatRoomType;
          message.Request.chatReq.chatMessage.toId = toId;
          message.Request.chatReq.chatMessage.toName = toName;
          message.Request.chatReq.chatMessage.toLevel = toLevel;
          message.Request.chatReq.chatMessage.toCCharacterId = toCCharacterId;
          message.Request.chatReq.chatMessage.msg = msg;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /** 
         * 聊天响应
         */


        OnChat(param) {
          let response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnChat:{0}", response.result, response.errormsg);

          if (response.result == Result.Success) {
            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.AddMessages(ChatChannel.Comp, response.compMessages);
            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.AddMessages(ChatChannel.Private, response.privateMessages);
            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.AddMessages(ChatChannel.RoomChat, response.roomMessages);
          } else {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
          }
        }

      });

      _defineProperty(ChatService, "Instance", new ChatService());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ChatService.js.map