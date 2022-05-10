System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtil, proto, NetClient, MessageBox, MessageBoxType, EventManager, EventType, User, director, SoundManager, SoundDefine, TipsManager, ChatManager, UserService, _crd, NetMessage, NetMessageRequest, UserLoginRequest, Result, UserLoginResponse, UserRegisterRequest, UserRegisterResponse, UnLockRequest, UnLockResponse, CharacterDetailRequest, CharacterDetailResponse, SwitchCharacterRequest, SwitchCharacterResponse, AttrPromoteRequest, AttrPromoteType, AttrPromoteInfoResponse, CombatPowerRankingRequest, CombatPowerRankingResponse, FollowResponse, FollowRequest, UserStatusChangeResponse, HeartBeatRequest, HeartBeatResponse, UserStatusQueryRequest, UserStatusQueryResponse;

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

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../UI/Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBoxType(extras) {
    _reporterNs.report("MessageBoxType", "../UI/Common/MessageBox", _context.meta, extras);
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

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundDefine(extras) {
    _reporterNs.report("SoundDefine", "../../Sound/SoundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsManager(extras) {
    _reporterNs.report("TipsManager", "../UI/TipsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatManager(extras) {
    _reporterNs.report("ChatManager", "../Managers/ChatManager", _context.meta, extras);
  }

  _export("UserService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
    }, function (_unresolved_2) {
      LogUtil = _unresolved_2.LogUtil;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      NetClient = _unresolved_4.NetClient;
    }, function (_unresolved_5) {
      MessageBox = _unresolved_5.MessageBox;
      MessageBoxType = _unresolved_5.MessageBoxType;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      EventType = _unresolved_7.EventType;
    }, function (_unresolved_8) {
      User = _unresolved_8.User;
    }, function (_unresolved_9) {
      SoundManager = _unresolved_9.SoundManager;
    }, function (_unresolved_10) {
      SoundDefine = _unresolved_10.SoundDefine;
    }, function (_unresolved_11) {
      TipsManager = _unresolved_11.TipsManager;
    }, function (_unresolved_12) {
      ChatManager = _unresolved_12.ChatManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c1f5QAXHhJ05fsv4Ci6jcW", "UserService", undefined);

      ({
        NetMessage,
        NetMessageRequest,
        UserLoginRequest,
        Result,
        UserLoginResponse,
        UserRegisterRequest,
        UserRegisterResponse,
        UnLockRequest,
        UnLockResponse,
        CharacterDetailRequest,
        CharacterDetailResponse,
        SwitchCharacterRequest,
        SwitchCharacterResponse,
        AttrPromoteRequest,
        AttrPromoteType,
        AttrPromoteInfoResponse,
        CombatPowerRankingRequest,
        CombatPowerRankingResponse,
        FollowResponse,
        FollowRequest,
        UserStatusChangeResponse,
        HeartBeatRequest,
        HeartBeatResponse,
        UserStatusQueryRequest,
        UserStatusQueryResponse
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UserService", UserService = class UserService {
        // private pendingMessage: NetMessage = null as unknown as NetMessage;
        Init() {
          var this_ = this; //socket连接失败
          // EventManager.Instance.addListener(SocketConst.SOCKET_NOCONNECT, this.SOCKET_NOCONNECT, this)
          // //Socket已经连接上
          // EventManager.Instance.addListener(SocketConst.SOCKET_CONNECT, this.SOCKET_CONNECT, this)
          // //Socket重新连接上
          // EventManager.Instance.addListener(SocketConst.SOCKET_RECONNECT, this.SOCKET_RECONNECT, this)
          // //Socket已关闭
          // EventManager.Instance.addListener(SocketConst.SOCKET_CLOSE, this.SOCKET_CLOSE, this)

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserLogin, this.OnUserLogin, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserRegister, this.OnUserRegister, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUnLock, this.OnUnLock, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnCharacterDetail, this.OnCharacterDetail, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnSwitchCharacter, this.OnSwitchCharacter, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnAttrPromoteInfo, this.OnAttrPromoteInfo, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnCombatPowerRanking, this.OnCombatPowerRanking, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnFollowRes, this.OnFollowRes, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserStatusChange, this.OnUserStatusChange, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnHeartBeat, this.OnHeartBeat, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserStatusQuery, this.OnUserStatusQuery, this);
        } // private SOCKET_NOCONNECT(){
        //     this.OnGameServerDisconnect('SOCKET_NOCONNECT');
        // }
        // private SOCKET_CONNECT(){
        //     LogUtil.log('Socket已经连接上')
        //     this.OnGameServerConnect('SOCKET_CONNECT');
        // }
        // private SOCKET_RECONNECT(){
        //     LogUtil.log('Socket重新连接上')
        //     this.OnGameServerConnect('SOCKET_RECONNECT');
        // }
        // private SOCKET_CLOSE(){
        //     LogUtil.log('Socket已关闭')
        //     this.OnGameServerConnect('SOCKET_CLOSE');
        // }


        ConnectToServer() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("ConnectToServer() Start ");
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.Connect();
        } // public OnGameServerConnect(reason: string) {
        //     LogUtil.log("LoadingMesager::OnGameServerConnect : reason:" + reason, NetClient.Instance.Connected);
        //     if (NetClient.Instance.Connected) {
        //         this.connected = true;
        //         if (this.pendingMessage) {
        //             LogUtil.log('OnGameServerConnect SendMessage：' + this.pendingMessage)
        //             NetClient.Instance.SendMessage(this.pendingMessage);
        //             this.pendingMessage = null as unknown as NetMessage;
        //         }
        //     } else {
        //         if (!this.DisconnectNotify(reason)) {
        //             let errorMsg="网络错误，无法连接到服务器！\n" + reason;
        //             MessageBox.Show(errorMsg, "错误", MessageBoxType.Error);
        //         }
        //     }
        // }
        // public OnGameServerDisconnect(reason: string): void {
        //     LogUtil.log('OnGameServerDisconnect')
        //     this.DisconnectNotify(reason);
        //     return;
        // }
        // public DisconnectNotify(reason: string): boolean {
        //     if (this.pendingMessage) {
        //         let errorMsg = "服务器断开！\n ERROR:" + reason;
        //         MessageBox.Show(errorMsg , "错误", MessageBoxType.Error);
        //         return true;
        //     }
        //     return false;
        // }

        /**
         * 请求登录
         * @param user 
         * @param psw 
         */


        SendLogin(user, psw) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("UserLoginRequest::user :" + user + " psw:" + psw);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.userLogin = new UserLoginRequest();
          message.Request.userLogin.userName = user;
          message.Request.userLogin.passward = psw;

          if (!(_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.connected) {
            this.ConnectToServer();
          }

          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message); // if (NetClient.Instance.connected) {
          //     // this.pendingMessage = null as unknown as NetMessage;
          //     NetClient.Instance.SendMessage(message);
          // }
          // else {
          //     // this.pendingMessage = message;
          //     this.ConnectToServer();
          // }
        }
        /**
         * 登录响应
         * @param param 
         */


        OnUserLogin(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnLogin:{0} [{1}]", response.result, response.errormsg);

          if (response.result == Result.Success) {
            //登陆成功逻辑
            console.log('登陆成功逻辑');
            (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.isLogin = true;
            (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user = response.user;
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).Instance.PlayMusic((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
              error: Error()
            }), SoundDefine) : SoundDefine).Music_Login);
            director.loadScene('UIMain'); // director.loadScene('Room');

            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.Init();
            (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.InitPrivateUserList();
          } else (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
            error: Error()
          }), MessageBox) : MessageBox).Show(response.errormsg, "错误", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Error);
        }
        /**
         * 请求注册
         * @param user 
         * @param psw 
         */


        SendRegister(user, psw) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("UserRegisterRequest::user :" + user + " psw:" + psw);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.userRegister = new UserRegisterRequest();
          message.Request.userRegister.userName = user;
          message.Request.userRegister.password = psw;

          if (!(_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.connected) {
            this.ConnectToServer();
          }

          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message); // if (NetClient.Instance.connected) {
          //     // this.pendingMessage = null as unknown as NetMessage;
          //     NetClient.Instance.SendMessage(message);
          // }
          // else {
          //     // this.pendingMessage = message;
          //     this.ConnectToServer();
          // }
        }
        /**
         * 注册响应
         * @param param 
         */


        OnUserRegister(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnUserRegister:{0} [{1}]", response.result, response.errormsg);

          if (response.result == Result.Success) {
            //登录成功，进入角色选择
            console.log('注册成功');
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show(response.errormsg, "注册成功", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Information);
          } else (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
            error: Error()
          }), MessageBox) : MessageBox).Show(response.errormsg, "错误", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
            error: Error()
          }), MessageBoxType) : MessageBoxType).Error);
        }
        /**
         * 请求解锁
         */


        SendUnLock(cCharacterId) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("UnLockRequest::cCharacterId :" + cCharacterId);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.unLockReq = new UnLockRequest();
          message.Request.unLockReq.cCharacterId = cCharacterId;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 解锁响应
         */


        OnUnLock(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnUnLock:{0} [{1}]", response.result, response.errormsg);

          if (response.result == Result.Success) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show(response.errormsg, "提示", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Information); //更新客户端解锁角色

            if (response.unLockCharacter) {
              (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
                error: Error()
              }), User) : User).Instance.user.unLockCharacters.push(response.unLockCharacter);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).UICharacterSelect_list); //刷新列表
            }
          } else {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show(response.errormsg, "提示", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Error);
          }
        }
        /**
         * 请求英雄详情
         */


        SendCharacterDetail(userId, tCharacterId) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("CharacterDetailRequest::userId：" + userId + "，tCharacterId :" + tCharacterId);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.characterDetail = new CharacterDetailRequest();
          message.Request.characterDetail.userId = userId;
          message.Request.characterDetail.tCharacterId = tCharacterId;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 英雄详响应
         */


        OnCharacterDetail(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnCharacterDetail:{0} [{1}]", response.result, response.errormsg);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnCharacterDetail_UI, response);

          if (response.result == Result.Failed) {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
          }
        }
        /**
        * 请求切换英雄
        */


        SendSwitchCharacter(tCharacterId) {
          var _Instance$user$charac;

          if (((_Instance$user$charac = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.character) === null || _Instance$user$charac === void 0 ? void 0 : _Instance$user$charac.tid) == tCharacterId) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("已选角色不能切换", "提示", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Information);
            return;
          }

          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SwitchCharacterRequest::tCharacterId :" + tCharacterId);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.switchCharacterReq = new SwitchCharacterRequest();
          message.Request.switchCharacterReq.tCharacterId = tCharacterId;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
        * 切换英雄响应
        */


        OnSwitchCharacter(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnSwitchCharacter:{0} [{1}]", response.result, response.errormsg);

          if (response.result == Result.Success) {
            //切换成功
            (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
              error: Error()
            }), LogUtil) : LogUtil).log("切换成功");
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show(response.errormsg, "提示", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Information);
            (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.character = response.character;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UICharacterSelect_list);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnSwitchCharacter_UI);
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
              error: Error()
            }), SoundDefine) : SoundDefine).SFX_Success);
          } else {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show(response.errormsg, "提示", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Information);
          }
        }
        /**
        * 请求提升属性
        */


        SendAttrPromote(tCharacterId, attrPromoteType) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("AttrPromoteRequest::tCharacterId :" + tCharacterId + "，attrPromoteType=" + attrPromoteType);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.attrPromote = new AttrPromoteRequest();
          message.Request.attrPromote.tCharacterId = tCharacterId;
          message.Request.attrPromote.attrPromoteType = attrPromoteType;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 提升属性响应
         */


        OnAttrPromoteInfo(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnAttrPromoteInfo:{0} [{1}]", response.result, response.errormsg);

          if (response.result == Result.Success) {
            //成功
            (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
              error: Error()
            }), LogUtil) : LogUtil).log("成功");
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnAttrPromoteInfo_UI, response);
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
              error: Error()
            }), SoundDefine) : SoundDefine).SFX_Success);
          } else {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
          }
        }
        /**
        * 请求战力排行
        */


        SendCombatPowerRanking() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("CombatPowerRankingRequest");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.combatPowerRanking = new CombatPowerRankingRequest();
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 战力排行响应
         */


        OnCombatPowerRanking(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("CombatPowerRankingResponse");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnCombatPowerRanking_UI, response);
        }
        /**
        * 请求关注/取消关注
        */


        SendFollow(userId, isFollow) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("FollowRequest");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.followReq = new FollowRequest();
          message.Request.followReq.userId = userId;
          message.Request.followReq.isFollow = isFollow;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 关注/取消关注响应
         */


        OnFollowRes(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("FollowResponse");

          if (response.result == Result.Success) {
            //成功
            (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
              error: Error()
            }), LogUtil) : LogUtil).log("成功");
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnFollowRes_UI, response);
          } else {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
          }
        }
        /**
         * 用户状态变更响应
         */


        OnUserStatusChange(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("UserStatusChangeResponse");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserStatusChange_UI, response);
        }
        /**
        * 请求心跳
        */


        SendHeartBeat() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("HeartBeatRequest");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.heartBeatReq = new HeartBeatRequest();
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 心跳响应
         */


        OnHeartBeat(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("HeartBeatResponse");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnHeartBeat_UI, response);
        }
        /**
         * 请求用户在线、离线状态查询 
         */


        SendUserStatusQuery(userIds) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendUserStatusQuery");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.userStatusQueryReq = new UserStatusQueryRequest();
          message.Request.userStatusQueryReq.userIds = userIds;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 用户在线、离线状态响应
         */


        OnUserStatusQuery(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnUserStatusQuery");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserStatusQuery_UI, response.status);
        }

      });

      _defineProperty(UserService, "Instance", new UserService());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UserService.js.map