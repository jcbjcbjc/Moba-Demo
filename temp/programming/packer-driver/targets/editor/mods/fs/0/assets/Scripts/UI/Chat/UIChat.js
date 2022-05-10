System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Prefab, instantiate, EditBox, SystemEventType, Sprite, UIWindow, proto, EventManager, ListView, UIChatItem, EventType, TabView, MessageBox, ChatManager, ChatUserVo, UIChatUserItem, ChatService, TipsManager, List, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _temp, _crd, ccclass, property, NItem, ChatMessage, ChatChannel, NUser, ChatRoomType, UIChat;

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

  function _reportPossibleCrUseOfUIChatItem(extras) {
    _reporterNs.report("UIChatItem", "./UIChatItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTabView(extras) {
    _reporterNs.report("TabView", "../Common/TabView/TabView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatManager(extras) {
    _reporterNs.report("ChatManager", "../../Managers/ChatManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatUserVo(extras) {
    _reporterNs.report("ChatUserVo", "../../Vo/ChatUserVo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIChatUserItem(extras) {
    _reporterNs.report("UIChatUserItem", "./UIChatUserItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatService(extras) {
    _reporterNs.report("ChatService", "../../Services/ChatService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsManager(extras) {
    _reporterNs.report("TipsManager", "../TipsManager", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      EditBox = _cc.EditBox;
      SystemEventType = _cc.SystemEventType;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      UIWindow = _unresolved_2.UIWindow;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      ListView = _unresolved_5.ListView;
    }, function (_unresolved_6) {
      UIChatItem = _unresolved_6.UIChatItem;
    }, function (_unresolved_7) {
      EventType = _unresolved_7.EventType;
    }, function (_unresolved_8) {
      TabView = _unresolved_8.TabView;
    }, function (_unresolved_9) {
      MessageBox = _unresolved_9.MessageBox;
    }, function (_unresolved_10) {
      ChatManager = _unresolved_10.ChatManager;
    }, function (_unresolved_11) {
      ChatUserVo = _unresolved_11.ChatUserVo;
    }, function (_unresolved_12) {
      UIChatUserItem = _unresolved_12.UIChatUserItem;
    }, function (_unresolved_13) {
      ChatService = _unresolved_13.ChatService;
    }, function (_unresolved_14) {
      TipsManager = _unresolved_14.TipsManager;
    }, function (_unresolved_15) {
      List = _unresolved_15.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "925d3JsIhxId7jYf3WtMWAA", "UIChat", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        ChatMessage,
        ChatChannel,
        NUser,
        ChatRoomType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIChat", UIChat = (_dec = ccclass('UIChat'), _dec2 = property(_crd && TabView === void 0 ? (_reportPossibleCrUseOfTabView({
        error: Error()
      }), TabView) : TabView), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(EditBox), _dec6 = property(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
        error: Error()
      }), ListView) : ListView), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec12 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec13 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec14 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec15 = property(Node), _dec16 = property(Sprite), _dec17 = property(Sprite), _dec18 = property(Sprite), _dec(_class = (_class2 = (_temp = class UIChat extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tab", _descriptor, this);

          _initializerDefineProperty(this, "chatItemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "chatUserItemPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "contentEditBox", _descriptor4, this);

          _initializerDefineProperty(this, "privateUserListMain", _descriptor5, this);

          _initializerDefineProperty(this, "compChatContent", _descriptor6, this);

          _initializerDefineProperty(this, "privateChatContent", _descriptor7, this);

          _initializerDefineProperty(this, "roomChatContent", _descriptor8, this);

          _initializerDefineProperty(this, "chatIconBg", _descriptor9, this);

          _initializerDefineProperty(this, "compList", _descriptor10, this);

          _initializerDefineProperty(this, "userList", _descriptor11, this);

          _initializerDefineProperty(this, "privateList", _descriptor12, this);

          _initializerDefineProperty(this, "roomList", _descriptor13, this);

          _initializerDefineProperty(this, "roomButton", _descriptor14, this);

          _initializerDefineProperty(this, "compMsgRedSprite", _descriptor15, this);

          _initializerDefineProperty(this, "privateMsgRedSprite", _descriptor16, this);

          _initializerDefineProperty(this, "roomMsgRedSprite", _descriptor17, this);

          _defineProperty(this, "index", -1);

          _defineProperty(this, "uiChatUserItem", null);

          _defineProperty(this, "privateUserSelectedIndex", -1);

          _defineProperty(this, "selectedPrivateUserId", 0);
        }

        //私聊选择的用户id
        onLoad() {
          //初始化综合列表
          let compMessages = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.compMessages;
          console.log('compMessages.length=' + compMessages.length);
          this.compList.numItems = compMessages.length;
          this.compList.scrollTo(compMessages.length); //红点隐藏

          this.compMsgRedSprite.node.active = false;
          this.privateMsgRedSprite.node.active = false;
          this.roomMsgRedSprite.node.active = false; //初始化用户列表
          // let privateMessages=ChatManager.Instance.privateMessages;
          // this.userList.numItems = privateMessages.length;
          // this.userList.scrollTo(privateMessages.length );
          //初始化房间列表

          let roomMessages = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.roomMessages;
          this.roomList.numItems = roomMessages.length;
          this.roomList.scrollTo(roomMessages.length);
        }

        start() {
          console.log('UIChat start');
          this.tab.owner = this;
          this.privateUserListMain.owner = this;
          this.privateUserListMain.isAddScene = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).TabView_OnTabSelect, this.OnChangeChannel, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).ListView_OnItemSelected, this.OnPrivateUserSelected, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnChat_UI, this.OnChat_UI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnPrivateUserStatusChange, this.OnPrivateUserStatusChange, this); //初始化所有表情

          let chatIconArr = this.chatIconBg.children;
          let tempChatIcon = null;

          for (let i = 0; i < 63; i++) {
            let newChatIcon = null;

            if (i < chatIconArr.length) {
              newChatIcon = chatIconArr[i];

              if (!tempChatIcon) {
                tempChatIcon = newChatIcon;
              }
            } else {
              newChatIcon = instantiate(tempChatIcon);
            }

            let iconName = i + 1 < 10 ? '0' + (i + 1) : i + 1;
            newChatIcon.name = iconName + '';
            let sprite = newChatIcon.getComponent(Sprite);
            sprite.spriteFrame = sprite.spriteAtlas.getSpriteFrame(iconName + '');
            this.chatIconBg.addChild(newChatIcon);
            newChatIcon.on(SystemEventType.TOUCH_END, this.OnChatIconClick, this);
          }

          (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.isOpenChatUI = true;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnChangeRedNum, this.OnChangeRedNum, this);
          this.OnChangeRedNum();
        }
        /**
         * 切换聊天频道 0、综合  1、私聊  2、房间
         */


        ChangeChatChannel(index, user) {
          console.log('ChangeChatChannel index=' + index + ',user=' + user);
          this.tab.defaultIndex = index;

          if (index == 1 && user) {
            //私聊列表更新用户
            let chatUserVo = new (_crd && ChatUserVo === void 0 ? (_reportPossibleCrUseOfChatUserVo({
              error: Error()
            }), ChatUserVo) : ChatUserVo)(user.id, user.nickname, user.character.level, user.character.cid, true, new Date().getTime());
            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.UpdatePrivateUserListOrder(chatUserVo);
            this.PrivateUserSelected(chatUserVo, 0);
          } //房间


          this.roomButton.active = index == 2;
        }
        /**
         * 表情点击
         * @param param 
         */


        OnChatIconClick(param) {
          let name = param.currentTarget._name;
          console.log(name);
          this.contentEditBox.string = this.contentEditBox.string + '[' + name + ']';
          this.chatIconBg.active = false;
        }
        /**
         * 用户选择
         * @param param 
         */


        OnPrivateUserSelected(param) {
          this.uiChatUserItem = param[0];
          console.log('OnPrivateUserSelected selectedPrivateUserId=' + this.selectedPrivateUserId);
          this.PrivateUserSelected(this.uiChatUserItem.chatUserVo, this.uiChatUserItem.index);
        }
        /**
         * 用户选择
         * @param chatUserVo 
         * @param index 
         */


        PrivateUserSelected(chatUserVo, index) {
          // this.privateUserSelectedIndex=index;
          this.selectedPrivateUserId = chatUserVo.userId; //私聊用户信息列表

          this.updatePrivateList();
          (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.SelectedChannel(null, this.selectedPrivateUserId);
        }
        /**
         * 点击发送
         */


        async OnClickSend() {
          if (!this.contentEditBox.string) {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips('请输入发送的内容');
            return;
          }

          if (this.index == 0) {
            //综合
            (_crd && ChatService === void 0 ? (_reportPossibleCrUseOfChatService({
              error: Error()
            }), ChatService) : ChatService).Instance.SendChat(ChatChannel.Comp, this.contentEditBox.string, undefined);
          } else if (this.index == 1) {
            //私聊
            if (!this.uiChatUserItem) {
              (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
                error: Error()
              }), MessageBox) : MessageBox).Show("请选择要发送的用户", "发送提示");
              return;
            }

            let chatUserVo = this.uiChatUserItem.chatUserVo;
            (_crd && ChatService === void 0 ? (_reportPossibleCrUseOfChatService({
              error: Error()
            }), ChatService) : ChatService).Instance.SendChat(ChatChannel.Private, this.contentEditBox.string, undefined, chatUserVo.userId, chatUserVo.nickName, chatUserVo.level, chatUserVo.cCharacterId);
          } else if (this.index == 2) {
            //房间
            console.log('room SendChat=' + JSON.stringify((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.roomMessages) + ',index=' + this.index);
            (_crd && ChatService === void 0 ? (_reportPossibleCrUseOfChatService({
              error: Error()
            }), ChatService) : ChatService).Instance.SendChat(ChatChannel.RoomChat, this.contentEditBox.string, ChatRoomType.Room_);
          }

          this.contentEditBox.string = '';
        }
        /**
        * 打开表情框
        */


        async OnClickChatIcon() {
          if (this.chatIconBg.active) {
            this.chatIconBg.active = false;
          } else {
            this.chatIconBg.active = true;
          }
        }
        /**
        * 切换选择频道
        * @param param 索引
        */


        OnChangeChannel(param) {
          let index = param[0];

          if (this.index == index) {
            return;
          }

          this.index = index;
          console.log('OnChangeChannel index=' + this.index); //切换频道显示聊天

          this.compChatContent.active = index == 0;
          this.privateChatContent.active = index == 1;
          this.roomChatContent.active = index == 2;

          if (index == 0) {
            //综合
            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.SelectedChannel(ChatChannel.Comp);
            this.compList.numItems = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.compMessages.length;
            this.compList.scrollTo((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.compMessages.length);
          } else if (index == 1) {
            //私聊
            //私聊用户列表
            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.SelectedChannel(ChatChannel.Private, this.selectedPrivateUserId);
            this.userList.numItems = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.chatUserVoList.length;
            this.userList.scrollTo((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.chatUserVoList.length);
            console.log('userList length=' + this.userList.numItems); //私聊用户信息列表

            this.updatePrivateList();
          } else if (index == 2) {
            //房间
            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.SelectedChannel(ChatChannel.RoomChat);
            this.roomList.numItems = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.roomMessages.length;
            this.roomList.scrollTo((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.roomMessages.length);
          }
        }
        /**
         * 更新私聊列表
         */


        updatePrivateList() {
          let userId = this.selectedPrivateUserId;

          if (!userId) {
            //取第一个用户
            if ((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.chatUserVoList.length > 0) {
              let chatUserVo = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
                error: Error()
              }), ChatManager) : ChatManager).Instance.chatUserVoList[0];
              userId = chatUserVo.userId;
            }
          }

          if (userId) {
            let chatMessageList = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.privateMessages.get(userId) || [];
            console.log('updatePrivateList userId=' + userId + ',chatMessageList leng=' + chatMessageList.length);
            this.privateList.numItems = chatMessageList.length;
            this.privateList.scrollTo(chatMessageList.length);
          }
        }
        /**
         * 综合列表渲染
         * @param item 
         * @param index 
         */


        OnCompListRender(item, index) {
          // console.log('OnCompListRender index='+index)
          let uiChatItem = item.getComponent(_crd && UIChatItem === void 0 ? (_reportPossibleCrUseOfUIChatItem({
            error: Error()
          }), UIChatItem) : UIChatItem);
          uiChatItem === null || uiChatItem === void 0 ? void 0 : uiChatItem.SetItemInfo((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.compMessages[index], 25, index, this.index);
        }
        /**
         * 用户列表渲染
         * @param item 
         * @param index 
         */


        OnUserListRender(item, index) {
          let uiChatUserItem = item.getComponent(_crd && UIChatUserItem === void 0 ? (_reportPossibleCrUseOfUIChatUserItem({
            error: Error()
          }), UIChatUserItem) : UIChatUserItem);
          let selected = false;

          if (this.privateUserSelectedIndex == -1 && index == 0) {
            this.privateUserSelectedIndex = index;
            selected = true;
          }

          this.privateUserListMain.AddItem(item, uiChatUserItem);
          uiChatUserItem === null || uiChatUserItem === void 0 ? void 0 : uiChatUserItem.SetItemInfo((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.chatUserVoList[index], selected, index);
          console.log('OnUserListRender index=' + index + ',userId=' + uiChatUserItem.chatUserVo.userId + ',selected=' + selected);
        }
        /**
         * 用户私聊列表渲染
         * @param item 
         * @param index 
         */


        OnPrivateListRender(item, index) {
          // console.log('OnPrivateListRender index='+index)
          if (this.privateUserSelectedIndex == -1) {
            return;
          }

          let uiChatItem = item.getComponent(_crd && UIChatItem === void 0 ? (_reportPossibleCrUseOfUIChatItem({
            error: Error()
          }), UIChatItem) : UIChatItem);
          let chatMessageList = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.privateMessages.get(this.selectedPrivateUserId);

          if (chatMessageList && chatMessageList.length > 0) {
            uiChatItem === null || uiChatItem === void 0 ? void 0 : uiChatItem.SetItemInfo(chatMessageList[index], 15, index, this.index, chatMessageList);
          }
        }
        /**
         * 房间列表渲染
         * @param item 
         * @param index 
         */


        OnRoomListRender(item, index) {
          // console.log('OnRoomListRender index='+index)
          let uiChatItem = item.getComponent(_crd && UIChatItem === void 0 ? (_reportPossibleCrUseOfUIChatItem({
            error: Error()
          }), UIChatItem) : UIChatItem);
          uiChatItem === null || uiChatItem === void 0 ? void 0 : uiChatItem.SetItemInfo((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.roomMessages[index], 25, index, this.index);
        }
        /**
         * 收到消息更新
         * @param param 
         */


        OnChat_UI(param) {
          let channel = param[0];
          let messages = param[1];

          if (channel == ChatChannel.Comp) {
            //综合
            this.compList.numItems = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.compMessages.length;
            this.compList.scrollTo((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.compMessages.length);
          } else if (channel == ChatChannel.Private) {
            //私聊
            let privateMessages = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.privateMessages; //更新私聊用户列表

            if (this.userList.numItems != privateMessages.length) {
              this.userList.numItems = privateMessages.length;
              this.userList.scrollTo(privateMessages.length);
            } //私聊用户信息列表


            this.updatePrivateList();
          } else if (channel == ChatChannel.RoomChat) {
            //房间
            this.roomList.numItems = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.roomMessages.length;
            this.roomList.scrollTo((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.roomMessages.length);
          }
        }
        /**
         * 私聊列表用户状态变更
         */


        OnPrivateUserStatusChange() {
          let chatUserVoList = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.chatUserVoList;
          this.userList.numItems = chatUserVoList.length;
          this.userList.scrollTo(chatUserVoList.length);
        }
        /**
         * 消息数量改变
         */


        OnChangeRedNum() {
          let privateNum = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.GetPrivateChatMsgNum();
          console.log('UIChat OnChangeRedNum:privateNum=' + privateNum); // this.compMsgNumLabel.string = (ChatManager.Instance.compNum > 99 ? '99+' : ChatManager.Instance.compNum + '');
          // this.privateMsgNumLabel.string = (privateNum > 99 ? '99+' : privateNum + '');
          // this.roomMsgNumLabel.string = (ChatManager.Instance.roomNum > 99 ? '99+' : ChatManager.Instance.roomNum + '');

          if ((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.compNum > 0) {
            this.compMsgRedSprite.node.active = true;
          } else {
            this.compMsgRedSprite.node.active = false;
          }

          if (privateNum > 0) {
            this.privateMsgRedSprite.node.active = true;
          } else {
            this.privateMsgRedSprite.node.active = false;
          }

          if ((_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.roomNum > 0) {
            this.roomMsgRedSprite.node.active = true;
          } else {
            this.roomMsgRedSprite.node.active = false;
          }
        }

        onDestroy() {
          console.log('onDestroy'); // this.chatListMain.removeListener();
          // ChatManager.Instance.currentChatChannel=-1;

          (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.isOpenChatUI = false;
          this.privateUserListMain.removeListener();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chatItemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "chatUserItemPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "contentEditBox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "privateUserListMain", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "compChatContent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "privateChatContent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "roomChatContent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "chatIconBg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "compList", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "userList", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "privateList", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "roomList", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "roomButton", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "compMsgRedSprite", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "privateMsgRedSprite", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "roomMsgRedSprite", [_dec18], {
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
//# sourceMappingURL=UIChat.js.map