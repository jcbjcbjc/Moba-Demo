System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtil, proto, NetClient, EventManager, EventType, User, director, SoundManager, SoundDefine, TipsManager, UIManager, LocalStorageUtil, RandomUtil, BattleGlobal, BattleMode, MatchService, _crd, NetMessage, NetMessageRequest, Result, ChatRequest, ChatMessage, ChatChannel, ChatResponse, StartMatchRequest, StartMatchResponse, MatchResponse;

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

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../UI/Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMatchWait(extras) {
    _reporterNs.report("UIMatchWait", "../UI/Match/UIMatchWait", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorageUtil(extras) {
    _reporterNs.report("LocalStorageUtil", "../Utils/LocalStorageUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandomUtil(extras) {
    _reporterNs.report("RandomUtil", "../UI/Battle/Utils/RandomUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "../UI/Battle/Utils/BattleGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMode(extras) {
    _reporterNs.report("BattleMode", "../UI/Battle/enums/BattleMode", _context.meta, extras);
  }

  _export("MatchService", void 0);

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
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }, function (_unresolved_7) {
      User = _unresolved_7.User;
    }, function (_unresolved_8) {
      SoundManager = _unresolved_8.SoundManager;
    }, function (_unresolved_9) {
      SoundDefine = _unresolved_9.SoundDefine;
    }, function (_unresolved_10) {
      TipsManager = _unresolved_10.TipsManager;
    }, function (_unresolved_11) {
      UIManager = _unresolved_11.UIManager;
    }, function (_unresolved_12) {
      LocalStorageUtil = _unresolved_12.LocalStorageUtil;
    }, function (_unresolved_13) {
      RandomUtil = _unresolved_13.RandomUtil;
    }, function (_unresolved_14) {
      BattleGlobal = _unresolved_14.BattleGlobal;
    }, function (_unresolved_15) {
      BattleMode = _unresolved_15.BattleMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00ee5S6aDlPFrxTVNtfb7If", "MatchService", undefined);

      ({
        NetMessage,
        NetMessageRequest,
        Result,
        ChatRequest,
        ChatMessage,
        ChatChannel,
        ChatResponse,
        StartMatchRequest,
        StartMatchResponse,
        MatchResponse
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("MatchService", MatchService = class MatchService {
        constructor() {
          _defineProperty(this, "uiMatchWait", null);
        }

        Init() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnStartMatch, this.OnStartMatch, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnMatchResponse, this.OnMatchResponse, this);
        }
        /**
         * 开始匹配请求
         */


        SendStartMatch() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendStartMatch");
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.startMatchReq = new StartMatchRequest();
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /** 
         * 开始匹配响应
         */


        OnStartMatch(param) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var response = param[0];
            (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
              error: Error()
            }), LogUtil) : LogUtil).log("OnStartMatch:{0}", response.result, response.errormsg);

            if (response.result == Result.Success) {
              _this.uiMatchWait = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instance.show("UIMatchWait"); //打开匹配弹窗
            } else {
              (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
                error: Error()
              }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
            }
          })();
        }
        /**
         * 匹配响应
         */


        OnMatchResponse(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnMatchResponse:{0}", response.result, response.errormsg);
          (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
            error: Error()
          }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);

          if (this.uiMatchWait) {
            //关闭匹配弹窗 
            this.uiMatchWait.Close();
            this.uiMatchWait = null;
          }

          if (response.result == Result.Success) {
            //匹配成功
            (_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
              error: Error()
            }), LocalStorageUtil) : LocalStorageUtil).RemoveItem((_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
              error: Error()
            }), LocalStorageUtil) : LocalStorageUtil).allFrameHandlesKey); //清除上一次的帧操作

            (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).battleMode = (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
              error: Error()
            }), BattleMode) : BattleMode).Battle; //设置为对局模式

            (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.room = response.room;
            (_crd && RandomUtil === void 0 ? (_reportPossibleCrUseOfRandomUtil({
              error: Error()
            }), RandomUtil) : RandomUtil).seed = response.room.randomSeed; //设置战斗随机数种子

            director.loadScene('EnterGameLoad');
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).Instance.PlayMusic((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
              error: Error()
            }), SoundDefine) : SoundDefine).Music_Select);
          }
        }

      });

      _defineProperty(MatchService, "Instance", new MatchService());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MatchService.js.map