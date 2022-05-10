System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, EventManager, EventType, LocalStorageUtil, HashMap, User, MathUtil, ChatUserVo, UserService, ChatManager, _crd, ChatMessage, ChatChannel, UserStatusChangeResponse, ChatRoomType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../UI/Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../UI/Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorageUtil(extras) {
    _reporterNs.report("LocalStorageUtil", "../Utils/LocalStorageUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../Utils/HashMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatUserVo(extras) {
    _reporterNs.report("ChatUserVo", "../Vo/ChatUserVo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserService(extras) {
    _reporterNs.report("UserService", "../Services/UserService", _context.meta, extras);
  }

  _export("ChatManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      LocalStorageUtil = _unresolved_5.LocalStorageUtil;
    }, function (_unresolved_6) {
      HashMap = _unresolved_6.HashMap;
    }, function (_unresolved_7) {
      User = _unresolved_7.User;
    }, function (_unresolved_8) {
      MathUtil = _unresolved_8.MathUtil;
    }, function (_unresolved_9) {
      ChatUserVo = _unresolved_9.ChatUserVo;
    }, function (_unresolved_10) {
      UserService = _unresolved_10.UserService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2cbd7uMi7VGUKXFsOtBOM+8", "ChatManager", undefined);

      ({
        ChatMessage,
        ChatChannel,
        UserStatusChangeResponse,
        ChatRoomType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("ChatManager", ChatManager = class ChatManager {
        constructor() {
          _defineProperty(this, "compMessages", new Array());

          _defineProperty(this, "roomMessages", new Array());

          _defineProperty(this, "gameMessages", new Array());

          _defineProperty(this, "liveMessages", new Array());

          _defineProperty(this, "privateMessages", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());

          _defineProperty(this, "chatUserVoList", []);

          _defineProperty(this, "userIds", new Array());

          _defineProperty(this, "compNum", 0);

          _defineProperty(this, "privateUserNum", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());

          _defineProperty(this, "roomNum", 0);

          _defineProperty(this, "currentChatChannel", -1);

          _defineProperty(this, "currentSelectIdUserId", 0);

          _defineProperty(this, "isOpenChatUI", false);

          _defineProperty(this, "baoLiuNum", 30);
        }

        //保留消息条数
        Init() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserStatusQuery_UI, this.OnPrivateUserStatusQuery_UI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserStatusChange_UI, this.OnUserStatusChange_UI, this); //清空聊天列表

          this.compMessages = [];
          this.roomMessages = [];
          this.gameMessages = [];
          this.liveMessages = []; //获取缓存私聊信息
          // LocalStorageUtil.SetItem(LocalStorageUtil.privateMessagesKey,'');

          var privateMessagesValue = (_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
            error: Error()
          }), LocalStorageUtil) : LocalStorageUtil).GetItem((_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
            error: Error()
          }), LocalStorageUtil) : LocalStorageUtil).privateMessagesKey + (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id); // console.log('privateMessagesValue='+privateMessagesValue)

          this.privateMessages.clear();

          if (privateMessagesValue) {
            this.privateMessages.data = JSON.parse(privateMessagesValue).map || {};
            this.DeletePrivateMsg();
          }
        }
        /**
         * 保留私聊用户消息到指定条数
         */


        DeletePrivateMsg() {
          var privateMessages = this.privateMessages.data;

          for (var userId in privateMessages) {
            var chatMessageList = this.privateMessages.get(userId);

            if (chatMessageList && chatMessageList.length > this.baoLiuNum) {
              chatMessageList = chatMessageList.slice(chatMessageList.length - this.baoLiuNum);
              this.privateMessages.put(userId, chatMessageList);
            }
          }
        }
        /**
         * 添加消息
         * @param channel  频道 
         * @param messages 消息体
         */


        AddMessages(channel, messages) {
          if (!messages || messages.length == 0) {
            return;
          }

          console.log('AddMessages channel=' + channel + ',messages=' + JSON.stringify(messages));
          var redNumChangeFlag = false;

          for (var i = 0; i < messages.length; i++) {
            var chatMessage = messages[i];
            var redNumChangeFlag_ = this.updateChatRedNum(channel, chatMessage); //更新显示红点数量

            if (redNumChangeFlag_) {
              redNumChangeFlag = true;
            }

            if (channel == ChatChannel.Comp) {
              //综合
              this.compMessages.push(chatMessage);
              continue;
            }

            if (channel == ChatChannel.RoomChat) {
              //房间
              console.log('AddMessages RoomChat type=' + chatMessage.chatRoomType);

              if (chatMessage.chatRoomType == ChatRoomType.Room_) {
                this.roomMessages.push(chatMessage);
              } else if (chatMessage.chatRoomType == ChatRoomType.Game_) {
                this.gameMessages.push(chatMessage);
              } else if (chatMessage.chatRoomType == ChatRoomType.Live_) {
                this.liveMessages.push(chatMessage);
              }

              continue;
            }

            if (channel == ChatChannel.Private) {
              //私聊
              var userId = chatMessage.fromId != (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
                error: Error()
              }), User) : User).Instance.user.id ? chatMessage.fromId : chatMessage.toId;
              console.log('AddMessages privateMessages fromId=' + chatMessage.fromId + '，toId=' + chatMessage.toId + '，currrent userId=' + (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
                error: Error()
              }), User) : User).Instance.user.id + ',userId=' + userId); //加入私聊用户消息集合

              var chatMessageList = this.privateMessages.get(userId);

              if (!chatMessageList) {
                chatMessageList = new Array();
                this.privateMessages.put(userId, chatMessageList);
              }

              chatMessageList.push(chatMessage); //更新私聊用户列表

              var chatUserVo = null;

              if (chatMessage.fromId != (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
                error: Error()
              }), User) : User).Instance.user.id) {
                chatUserVo = new (_crd && ChatUserVo === void 0 ? (_reportPossibleCrUseOfChatUserVo({
                  error: Error()
                }), ChatUserVo) : ChatUserVo)(chatMessage.fromId, chatMessage.fromName, chatMessage.fromLevel, chatMessage.fromCCharacterId, true, chatMessage.time);
              } else {
                chatUserVo = new (_crd && ChatUserVo === void 0 ? (_reportPossibleCrUseOfChatUserVo({
                  error: Error()
                }), ChatUserVo) : ChatUserVo)(chatMessage.toId, chatMessage.toName, chatMessage.toLevel, chatMessage.toCCharacterId, true, chatMessage.time);
              }

              this.UpdatePrivateUserListOrder(chatUserVo);
              continue;
            }
          }

          if (channel == ChatChannel.Private) {
            //私聊，存储本地数据
            (_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
              error: Error()
            }), LocalStorageUtil) : LocalStorageUtil).SetItem((_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
              error: Error()
            }), LocalStorageUtil) : LocalStorageUtil).privateMessagesKey + (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.id, JSON.stringify(this.privateMessages));
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnChat_UI, channel, messages);
          console.log('AddMessages redNumChangeFlag=' + redNumChangeFlag);

          if (redNumChangeFlag) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnChangeRedNum);
          }
        }
        /**
         * 更新显示红点数量
         */


        updateChatRedNum(channel, chatMessage) {
          if (chatMessage.fromId == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id) {
            //用户自己发送的消息
            return false;
          }

          console.log('updateChatRedNum currentChatChannel=' + this.currentChatChannel + '，channel=' + channel); //需要考虑当前选择的，不需要更新红点数量

          if (channel == ChatChannel.Comp) {
            //综合
            if (this.currentChatChannel == channel && this.isOpenChatUI) {
              //当前选择的频道
              return false;
            }

            this.compNum++;
          } else if (channel == ChatChannel.RoomChat) {
            //房间
            if (this.currentChatChannel == channel && this.isOpenChatUI) {
              //当前选择的频道
              return false;
            }

            this.roomNum++;
          } else if (channel == ChatChannel.Private) {
            //私聊
            if (this.currentChatChannel == channel && this.isOpenChatUI && this.currentSelectIdUserId == chatMessage.fromId) {
              //当前选择的频道
              return false;
            }

            var privateNum = this.privateUserNum.get(chatMessage.fromId);

            if (!privateNum) {
              privateNum = 0;
            }

            privateNum++;
            this.privateUserNum.put(chatMessage.fromId, privateNum);
          }

          return true;
        }
        /**
         * 切换频道
         * @param channel  频道 
         * @param currentSelectIdUserId  当前选择用户id 
         */


        SelectedChannel(channel, currentSelectIdUserId) {
          console.log('SelectedChannel channel=' + channel + '，currentSelectIdUserId=' + currentSelectIdUserId);

          if (channel == ChatChannel.Comp) {
            //综合
            this.compNum = 0;
          } else if (channel == ChatChannel.RoomChat) {
            //房间
            this.roomNum = 0;
          } else if (currentSelectIdUserId) {
            //私聊
            this.currentSelectIdUserId = currentSelectIdUserId;
            this.privateUserNum.put(currentSelectIdUserId, 0);
          }

          if (channel || channel == ChatChannel.Comp) {
            this.currentChatChannel = channel;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnChangeRedNum);
        }
        /**
         * 获取频道未读消息数量
         * @param type  1、主页面  2、房间
         */


        GetChannelChatRedNum(type) {
          console.log('GetChannelChatRedNum currentChatChannel=' + this.currentChatChannel + ', type=' + type);

          if (type == 1) {
            //主界面
            if (this.currentChatChannel == ChatChannel.Comp) {
              return [ChatChannel.Comp, this.compNum];
            }

            if (this.currentChatChannel == ChatChannel.Private) {
              var privateNum = this.GetPrivateChatMsgNum();
              return [ChatChannel.Private, privateNum];
            }
          } else {
            //房间
            if (this.currentChatChannel == ChatChannel.RoomChat) {
              return [ChatChannel.RoomChat, this.roomNum];
            }
          }

          return [ChatChannel.Comp, this.compNum];
        }
        /**
         * 获取私聊聊天数量
         */


        GetPrivateChatMsgNum() {
          var privateUserMap = this.privateUserNum.data;
          var privateNum = 0;

          for (var key in privateUserMap) {
            privateNum += privateUserMap[key];
          }

          return privateNum;
        }
        /**
         * 查询私聊用户状态
         */


        InitPrivateUserList() {
          this.userIds = [];
          var privateMessages = ChatManager.Instance.privateMessages.data;

          for (var userId in privateMessages) {
            console.log('userId=' + userId);

            if (userId) {
              this.userIds.push(parseInt(userId));
            }
          }

          if (this.userIds && this.userIds.length > 0) {
            console.log('SendUserStatusQuery userIds=' + this.userIds);
            (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
              error: Error()
            }), UserService) : UserService).Instance.SendUserStatusQuery(this.userIds);
          }
        }
        /**
        * 查询私聊用户状态响应
        */


        OnPrivateUserStatusQuery_UI(param) {
          var statusList = param[0];
          var chatUserVoList = new Array();

          for (var i = 0; i < this.userIds.length; i++) {
            var userId = this.userIds[i];
            var status = statusList && statusList.length > 0 ? statusList[i] : null;
            var chatMessageList = ChatManager.Instance.privateMessages.get(userId);

            if (chatMessageList && chatMessageList.length > 0) {
              var chatMessage = chatMessageList[chatMessageList.length - 1];
              var chatUserVo = null;

              if (chatMessage.fromId != (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
                error: Error()
              }), User) : User).Instance.user.id) {
                chatUserVo = new (_crd && ChatUserVo === void 0 ? (_reportPossibleCrUseOfChatUserVo({
                  error: Error()
                }), ChatUserVo) : ChatUserVo)(chatMessage.fromId, chatMessage.fromName, chatMessage.fromLevel, chatMessage.fromCCharacterId, status, chatMessage.time);
              } else {
                chatUserVo = new (_crd && ChatUserVo === void 0 ? (_reportPossibleCrUseOfChatUserVo({
                  error: Error()
                }), ChatUserVo) : ChatUserVo)(chatMessage.toId, chatMessage.toName, chatMessage.toLevel, chatMessage.toCCharacterId, status, chatMessage.time);
              }

              chatUserVoList.push(chatUserVo);
            }
          }

          console.log('OnPrivateUserStatusQuery_UI=' + JSON.stringify(chatUserVoList)); //初始化用户列表

          this.chatUserVoList = chatUserVoList.sort((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).sortBy('time', false)); //发送日期倒序 
        }
        /**
         * 更新私聊用户列表
         */


        UpdatePrivateUserListOrder(cuv) {
          var isCzFlag = false;

          for (var i = 0; i < this.chatUserVoList.length; i++) {
            var chatUserVo = this.chatUserVoList[i];

            if (chatUserVo.userId == cuv.userId) {
              //已存在，和第一交换位置
              isCzFlag = true;
              var oneObj = this.chatUserVoList[0];
              this.chatUserVoList[0] = chatUserVo;
              this.chatUserVoList[i] = oneObj;
              break;
            }
          }

          if (!isCzFlag) {
            //不存在，加入第一个
            this.chatUserVoList.unshift(cuv);
          }

          console.log('UpdatePrivateUserListOrder isCzFlag=' + isCzFlag + '，chatUserVoList length=' + this.chatUserVoList.length);
        }
        /**
         * 用户状态变更响应
         */


        OnUserStatusChange_UI(param) {
          var response = param[0];
          var privateUserStatusChangeFlag = false; //用户状态变更标识

          for (var i = 0; i < this.chatUserVoList.length; i++) {
            var chatUserVo = this.chatUserVoList[i];

            for (var j = 0; j < response.userStatusChanges.length; j++) {
              var userStatusChange = response.userStatusChanges[j];

              if (chatUserVo.userId == userStatusChange.userId) {
                if (chatUserVo.status != userStatusChange.status) {
                  privateUserStatusChangeFlag = true;
                }

                chatUserVo.status = userStatusChange.status;
              }
            }
          }

          if (privateUserStatusChangeFlag) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnPrivateUserStatusChange);
          }
        }

      });

      _defineProperty(ChatManager, "Instance", new ChatManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ChatManager.js.map