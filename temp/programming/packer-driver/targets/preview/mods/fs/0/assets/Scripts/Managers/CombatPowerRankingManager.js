System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UserService, EventManager, EventType, FollowManager, CombatPowerRankingManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfUserService(extras) {
    _reporterNs.report("UserService", "../Services/UserService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../UI/Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../UI/Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombatPowerRankingResponse(extras) {
    _reporterNs.report("CombatPowerRankingResponse", "../../Proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFollowResponse(extras) {
    _reporterNs.report("FollowResponse", "../../Proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNUser(extras) {
    _reporterNs.report("NUser", "../../Proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserStatusChangeResponse(extras) {
    _reporterNs.report("UserStatusChangeResponse", "../../Proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFollowManager(extras) {
    _reporterNs.report("FollowManager", "./FollowManager", _context.meta, extras);
  }

  _export("CombatPowerRankingManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UserService = _unresolved_2.UserService;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      FollowManager = _unresolved_5.FollowManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d08biY0AJNIKygua1dTI+u", "CombatPowerRankingManager", undefined);

      _export("CombatPowerRankingManager", CombatPowerRankingManager = class CombatPowerRankingManager {
        constructor() {
          _defineProperty(this, "combatPowerRankingResponse", null);
        }

        Init() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnCombatPowerRanking, this.OnCombatPowerRanking, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnFollowRes_UI, this.OnFollowRes_UI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserStatusChange_UI, this.OnUserStatusChange_UI, this);
        }
        /**
        * 请求战力排行
        */


        SendCombatPowerRanking() {
          (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
            error: Error()
          }), UserService) : UserService).Instance.SendCombatPowerRanking();
        }
        /**
         * 排行榜响应
         */


        OnCombatPowerRanking(param) {
          var response = param[0];
          this.combatPowerRankingResponse = response;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CombatPowerRankingRefieshUI);
        }
        /**
         * 关注/取消关注响应
         */


        OnFollowRes_UI(param) {
          var response = param[0]; //关注/取消关注成功更新数据

          if (!this.combatPowerRankingResponse) {
            return;
          }

          var users = this.combatPowerRankingResponse.users;

          for (var i = 0; i < users.length; i++) {
            var user = users[i];

            if (user.id == (_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
              error: Error()
            }), FollowManager) : FollowManager).Instance.followUserId) {
              user.isFollow = (_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
                error: Error()
              }), FollowManager) : FollowManager).Instance.isFollow;
              break;
            }
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CombatPowerRankingRefieshUI);
        }
        /**
         * 用户状态变更响应
         */


        OnUserStatusChange_UI(param) {
          var response = param[0]; //更新数据

          if (!this.combatPowerRankingResponse) {
            return;
          }

          var users = this.combatPowerRankingResponse.users;

          for (var i = 0; i < users.length; i++) {
            var user = users[i];

            for (var j = 0; j < response.userStatusChanges.length; j++) {
              var userStatusChange = response.userStatusChanges[j];

              if (user.id == userStatusChange.userId) {
                user.status = userStatusChange.status;
              }
            }
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CombatPowerRankingRefieshUI);
        }

      });

      _defineProperty(CombatPowerRankingManager, "Instance", new CombatPowerRankingManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CombatPowerRankingManager.js.map