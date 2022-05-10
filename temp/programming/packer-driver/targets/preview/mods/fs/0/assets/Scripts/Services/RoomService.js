System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtil, proto, NetClient, MessageBox, MessageBoxType, EventManager, EventType, User, director, TipsManager, RandomUtil, LocalStorageUtil, BattleMode, BattleGlobal, RoomService, _crd, NetMessage, NetMessageRequest, Result, MyRoomRequest, MyRoomResponse, InviteRequest, TeamType, InviteResponse, KickOutRequest, KickOutResponse, RoomStartGameRequest, RoomStartGameResponse, NickNameSearchRequest, NickNameSearchResponse, AddRoomRequest, AddRoomResponse, OutRoomRequest, OutRoomResponse, GameOver2Request, UploadBiFenRequest, AddLiveRequest, AddLiveResponse, ValidateOpenRoomRequest, ValidateOpenRoomResponse;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfTipsManager(extras) {
    _reporterNs.report("TipsManager", "../UI/TipsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandomUtil(extras) {
    _reporterNs.report("RandomUtil", "../UI/Battle/Utils/RandomUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorageUtil(extras) {
    _reporterNs.report("LocalStorageUtil", "../Utils/LocalStorageUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMode(extras) {
    _reporterNs.report("BattleMode", "../UI/Battle/enums/BattleMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "../UI/Battle/Utils/BattleGlobal", _context.meta, extras);
  }

  _export("RoomService", void 0);

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
      TipsManager = _unresolved_9.TipsManager;
    }, function (_unresolved_10) {
      RandomUtil = _unresolved_10.RandomUtil;
    }, function (_unresolved_11) {
      LocalStorageUtil = _unresolved_11.LocalStorageUtil;
    }, function (_unresolved_12) {
      BattleMode = _unresolved_12.BattleMode;
    }, function (_unresolved_13) {
      BattleGlobal = _unresolved_13.BattleGlobal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f002RQqNdN1oUF574K8jr5", "RoomService", undefined);

      ({
        NetMessage,
        NetMessageRequest,
        Result,
        MyRoomRequest,
        MyRoomResponse,
        InviteRequest,
        TeamType,
        InviteResponse,
        KickOutRequest,
        KickOutResponse,
        RoomStartGameRequest,
        RoomStartGameResponse,
        NickNameSearchRequest,
        NickNameSearchResponse,
        AddRoomRequest,
        AddRoomResponse,
        OutRoomRequest,
        OutRoomResponse,
        GameOver2Request,
        UploadBiFenRequest,
        AddLiveRequest,
        AddLiveResponse,
        ValidateOpenRoomRequest,
        ValidateOpenRoomResponse
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("RoomService", RoomService = class RoomService {
        Init() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnMyRoom, this.OnMyRoom, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnInviteResponse, this.OnInviteResponse, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnInviteRequest, this.OnInviteRequest, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnKickOut, this.OnKickOut, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnRoomStartGame, this.OnRoomStartGame, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnNickNameSearch, this.OnNickNameSearch, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnAddRoomRequest, this.OnAddRoomRequest, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnAddRoomResponse, this.OnAddRoomResponse, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnOutRoom, this.OnOutRoom, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnAddLiveResponse, this.OnAddLiveResponse, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnValidateOpenRoom, this.OnValidateOpenRoom, this);
        }
        /**
         * 请求我的房间
         */


        SendMyRoom() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendMyRoom");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.myRoomReq = new MyRoomRequest();
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 我的房间响应
         */


        OnMyRoom(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnMyRoom:{0}", response.room);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnMyRoom_UI, response.room);
        }
        /**
         * 发送邀请请求
         */


        SendInviteRequest(toUserId, toNickName, teamType) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendInviteRequest");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.inviteReq = new InviteRequest();
          message.Request.inviteReq.fromUserId = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          message.Request.inviteReq.fromNickName = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.nickname;
          message.Request.inviteReq.toUserId = toUserId;
          message.Request.inviteReq.toNickName = toNickName;
          message.Request.inviteReq.teamType = teamType;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 发送邀请响应
         */


        SendInviteResponse(accept, inviteRequest) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendInviteResponse");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.inviteRes = new InviteResponse();
          message.Request.inviteRes.result = accept ? Result.Success : Result.Failed;
          message.Request.inviteRes.errormsg = '';
          message.Request.inviteRes.inviteRequest = inviteRequest;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 收到邀请请求
         */


        OnInviteRequest(param) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var request = param[0];
            (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
              error: Error()
            }), LogUtil) : LogUtil).log("OnInviteRequest", request);
            var confirmObj = yield (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show(request.fromNickName + "邀请你加入房间？", "邀请请求", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Confirm, "接受", "拒绝");
            var this_ = _this;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIMessageBox_OnClickYes, function () {
              this_.SendInviteResponse(true, request);
            }, confirmObj);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIMessageBox_OnClickNo, function () {
              this_.SendInviteResponse(false, request);
            }, confirmObj);
          })();
        }
        /**
         * 收到邀请响应
         */


        OnInviteResponse(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnInviteResponse:{0}{1}", response.result, response.errormsg);
          (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
            error: Error()
          }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);

          if (response.result == Result.Success) {
            //被邀请者是当前用户
            if (response.inviteRequest.toUserId == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.id) {
              director.loadScene('Room');
            } else {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).OnMyRoom_RefieshUI);
            }
          }
        }
        /**
         * 踢出请求
         */


        SendKickOut(userId) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendKickOut");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.kickOutReq = new KickOutRequest();
          message.Request.kickOutReq.userId = userId;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 踢出响应
         */


        OnKickOut(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnKickOut:{0}{1}", response.result, response.errormsg); // EventManager.Instance.dispatch(EventType.OnKickOut_UI,response); 

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnMyRoom_RefieshUI);
          (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
            error: Error()
          }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
        }
        /**
         * 开始游戏请求
         */


        SendRoomStartGame() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendRoomStartGame");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.roomStartGameReq = new RoomStartGameRequest();
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 开始游戏响应
         */


        OnRoomStartGame(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnRoomStartGame{0}{1}：", response.result, response.errormsg);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnRoomStartGame_UI, response);
          (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
            error: Error()
          }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
        }
        /**
         * 昵称搜索请求
         */


        SendNickNameSearch(nickName) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendNickNameSearch");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.nickNameSearchReq = new NickNameSearchRequest();
          message.Request.nickNameSearchReq.nickName = nickName;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
        * 昵称搜索响应
        */


        OnNickNameSearch(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnNickNameSearch");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnNickNameSearch_UI, response.roomUser);
        }
        /**
         * 发送加入房间请求
         */


        SendAddRoomRequest(roomId) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendAddRoomRequest");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.addRoomReq = new AddRoomRequest();
          message.Request.addRoomReq.roomId = roomId;
          message.Request.addRoomReq.fromUserId = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          message.Request.addRoomReq.fromNickName = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.nickname;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 发送加入房间响应
         */


        SendAddRoomResponse(accept, teamType, addRoomRequest) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendAddRoomResponse");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.addRoomRes = new AddRoomResponse();
          message.Request.addRoomRes.result = accept ? Result.Success : Result.Failed;
          message.Request.addRoomRes.errormsg = '';
          message.Request.addRoomRes.teamType = teamType;
          message.Request.addRoomRes.addRoomRequest = addRoomRequest;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 收到加入房间请求
         */


        OnAddRoomRequest(param) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var request = param[0];
            (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
              error: Error()
            }), LogUtil) : LogUtil).log("OnAddRoomRequest", request);
            var confirmObj = yield (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show(request.fromNickName + "加入房间？", "加入房间", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Confirm, "接受", "拒绝");
            var this_ = _this2;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIMessageBox_OnClickYes, /*#__PURE__*/_asyncToGenerator(function* () {
              var teamConfirmObj = yield (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
                error: Error()
              }), MessageBox) : MessageBox).Show("请选择" + request.fromNickName + "加入队伍！", "选择队伍", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
                error: Error()
              }), MessageBoxType) : MessageBoxType).Confirm, "友队", "敌队");
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).UIMessageBox_OnClickYes, () => {
                this_.SendAddRoomResponse(true, TeamType.My, request);
              }, teamConfirmObj);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).UIMessageBox_OnClickNo, () => {
                this_.SendAddRoomResponse(true, TeamType.Enemy, request);
              }, teamConfirmObj);
            }), confirmObj);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIMessageBox_OnClickNo, /*#__PURE__*/_asyncToGenerator(function* () {
              this_.SendAddRoomResponse(false, TeamType.My, request);
            }), confirmObj);
          })();
        }
        /**
         * 收到加入房间响应
         */


        OnAddRoomResponse(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnAddRoomResponse:{0}{1}", response.result, response.errormsg);
          (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
            error: Error()
          }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);

          if (response.result == Result.Success) {
            //加入者是当前用户
            if (response.addRoomRequest.fromUserId == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.id) {
              director.loadScene('Room');
            } else {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).OnMyRoom_RefieshUI);
            }
          }
        }
        /**
         * 退出房间请求
         */


        SendOutRoom() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendOutRoom");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.outRoomReq = new OutRoomRequest();
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 退出房间响应
         */


        OnOutRoom(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnOutRoom{0}{1}：", response.result, response.errormsg);
          (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
            error: Error()
          }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
        }
        /**
         * 请求游戏结束
         */


        SendGameOver2() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendGameOver2");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.gameOver2Req = new GameOver2Request();
          message.Request.gameOver2Req.ipPortStr = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.room.ipPortStr;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 上传比分请求
         */


        SendUploadBiFen(biFen) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendUploadBiFen");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.uploadBiFenReq = new UploadBiFenRequest();
          message.Request.uploadBiFenReq.biFen = biFen;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 进入直播请求
         */


        SendAddLive(targetUserId) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendAddLive");
          (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).targetLiveUserId = targetUserId;
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.addLiveReq = new AddLiveRequest();
          message.Request.addLiveReq.userId = targetUserId;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 收到进入直播响应
         */


        OnAddLiveResponse(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnAddLiveResponse:{0}{1}", response.result, response.errormsg);
          (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
            error: Error()
          }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);

          if (response.result == Result.Success) {
            //进入直播房间
            (_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
              error: Error()
            }), LocalStorageUtil) : LocalStorageUtil).RemoveItem((_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
              error: Error()
            }), LocalStorageUtil) : LocalStorageUtil).allFrameHandlesKey);
            (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).battleMode = (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
              error: Error()
            }), BattleMode) : BattleMode).Live;
            (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.room = response.room;
            (_crd && RandomUtil === void 0 ? (_reportPossibleCrUseOfRandomUtil({
              error: Error()
            }), RandomUtil) : RandomUtil).seed = response.room.randomSeed; //设置战斗随机数种子

            director.loadScene('EnterGameLoad');
          }
        }
        /**
         * 请求效验是否可以开房间
         */


        SendValidateOpenRoom() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendValidateOpenRoom");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.validateOpenRoomReq = new ValidateOpenRoomRequest();
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 效验是否可以开房间响应
         */


        OnValidateOpenRoom(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnValidateOpenRoom:{0}", response);

          if (response.result == Result.Success) {
            director.loadScene('Room');
          } else {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
          }
        }

      });

      _defineProperty(RoomService, "Instance", new RoomService());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RoomService.js.map