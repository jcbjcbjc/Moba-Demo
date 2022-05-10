System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, UIManager, UserService, DataManager, StatusService, ItemService, NetClient, User, AuctionService, TipsService, RoomService, FollowManager, ChatService, DateUtil, MatchService, BattleService, NetClientBattle, FollowService, CombatPowerRankingManager, _dec, _class, _crd, ccclass, property, LoadingManager;

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UI/Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserService(extras) {
    _reporterNs.report("UserService", "./Services/UserService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "./Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStatusService(extras) {
    _reporterNs.report("StatusService", "./Services/StatusService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemService(extras) {
    _reporterNs.report("ItemService", "./Services/ItemService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetClient(extras) {
    _reporterNs.report("NetClient", "./Network/NetClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAuctionService(extras) {
    _reporterNs.report("AuctionService", "./Services/AuctionService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsService(extras) {
    _reporterNs.report("TipsService", "./Services/TipsService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomService(extras) {
    _reporterNs.report("RoomService", "./Services/RoomService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFollowManager(extras) {
    _reporterNs.report("FollowManager", "./Managers/FollowManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatService(extras) {
    _reporterNs.report("ChatService", "./Services/ChatService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "./Utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchService(extras) {
    _reporterNs.report("MatchService", "./Services/MatchService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleService(extras) {
    _reporterNs.report("BattleService", "./Services/BattleService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetClientBattle(extras) {
    _reporterNs.report("NetClientBattle", "./Network/Battle/NetClientBattle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFollowService(extras) {
    _reporterNs.report("FollowService", "./Services/FollowService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombatPowerRankingManager(extras) {
    _reporterNs.report("CombatPowerRankingManager", "./Managers/CombatPowerRankingManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      UIManager = _unresolved_2.UIManager;
    }, function (_unresolved_3) {
      UserService = _unresolved_3.UserService;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      StatusService = _unresolved_5.StatusService;
    }, function (_unresolved_6) {
      ItemService = _unresolved_6.ItemService;
    }, function (_unresolved_7) {
      NetClient = _unresolved_7.NetClient;
    }, function (_unresolved_8) {
      User = _unresolved_8.User;
    }, function (_unresolved_9) {
      AuctionService = _unresolved_9.AuctionService;
    }, function (_unresolved_10) {
      TipsService = _unresolved_10.TipsService;
    }, function (_unresolved_11) {
      RoomService = _unresolved_11.RoomService;
    }, function (_unresolved_12) {
      FollowManager = _unresolved_12.FollowManager;
    }, function (_unresolved_13) {
      ChatService = _unresolved_13.ChatService;
    }, function (_unresolved_14) {
      DateUtil = _unresolved_14.DateUtil;
    }, function (_unresolved_15) {
      MatchService = _unresolved_15.MatchService;
    }, function (_unresolved_16) {
      BattleService = _unresolved_16.BattleService;
    }, function (_unresolved_17) {
      NetClientBattle = _unresolved_17.NetClientBattle;
    }, function (_unresolved_18) {
      FollowService = _unresolved_18.FollowService;
    }, function (_unresolved_19) {
      CombatPowerRankingManager = _unresolved_19.CombatPowerRankingManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36079cTGhRAV4oQKW4OVOaK", "LoadingManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingManager", LoadingManager = (_dec = ccclass('LoadingManager'), _dec(_class = class LoadingManager extends Component {
        onLoad() {
          (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).InitExtend();
          (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.isLogin = false;
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.Init();
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.Load();
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.Init();
          (_crd && NetClientBattle === void 0 ? (_reportPossibleCrUseOfNetClientBattle({
            error: Error()
          }), NetClientBattle) : NetClientBattle).Instance.Init();
        }

        start() {
          (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
            error: Error()
          }), UserService) : UserService).Instance.Init();
          (_crd && StatusService === void 0 ? (_reportPossibleCrUseOfStatusService({
            error: Error()
          }), StatusService) : StatusService).Instance.Init();
          (_crd && ItemService === void 0 ? (_reportPossibleCrUseOfItemService({
            error: Error()
          }), ItemService) : ItemService).Instance.Init();
          (_crd && AuctionService === void 0 ? (_reportPossibleCrUseOfAuctionService({
            error: Error()
          }), AuctionService) : AuctionService).Instance.Init();
          (_crd && TipsService === void 0 ? (_reportPossibleCrUseOfTipsService({
            error: Error()
          }), TipsService) : TipsService).Instance.Init();
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.Init();
          (_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
            error: Error()
          }), FollowManager) : FollowManager).Instance.Init();
          (_crd && ChatService === void 0 ? (_reportPossibleCrUseOfChatService({
            error: Error()
          }), ChatService) : ChatService).Instance.Init();
          (_crd && MatchService === void 0 ? (_reportPossibleCrUseOfMatchService({
            error: Error()
          }), MatchService) : MatchService).Instance.Init();
          (_crd && BattleService === void 0 ? (_reportPossibleCrUseOfBattleService({
            error: Error()
          }), BattleService) : BattleService).Instance.Init();
          (_crd && FollowService === void 0 ? (_reportPossibleCrUseOfFollowService({
            error: Error()
          }), FollowService) : FollowService).Instance.Init();
          (_crd && CombatPowerRankingManager === void 0 ? (_reportPossibleCrUseOfCombatPowerRankingManager({
            error: Error()
          }), CombatPowerRankingManager) : CombatPowerRankingManager).Instance.Init();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LoadingManager.js.map