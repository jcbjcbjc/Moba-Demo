System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventManager, EventType, proto, LogUtil, UserService, FollowManager, _crd, FollowListResponse, NUser, UserStatusChangeResponse;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../UI/Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../UI/Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../Log/LogUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserService(extras) {
    _reporterNs.report("UserService", "../Services/UserService", _context.meta, extras);
  }

  _export("FollowManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }, function (_unresolved_4) {
      proto = _unresolved_4.default;
    }, function (_unresolved_5) {
      LogUtil = _unresolved_5.LogUtil;
    }, function (_unresolved_6) {
      UserService = _unresolved_6.UserService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0019zu9rpIhpcM/BXo9HY3", "FollowManager", undefined);

      ({
        FollowListResponse,
        NUser,
        UserStatusChangeResponse
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("FollowManager", FollowManager = class FollowManager {
        constructor() {
          _defineProperty(this, "follows", null);

          _defineProperty(this, "followUserId", 0);

          _defineProperty(this, "isFollow", false);
        }

        //是否关注
        Init() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnFollowList, this.OnFollowList, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnUserStatusChange_UI, this.OnUserStatusChange_UI, this);
        }
        /**
         * 我的关注列表响应
         */


        OnFollowList(param) {
          let response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnFollowList:{0}", response.follows);
          this.follows = response.follows;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).FollowListRefieshUI);
        }
        /**
         * 请求关注
         * @param userId 
         * @param isFollow 
         */


        SendFollow(userId, isFollow) {
          this.followUserId = userId;
          this.isFollow = isFollow;
          (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
            error: Error()
          }), UserService) : UserService).Instance.SendFollow(userId, isFollow);
        }
        /**
         * 用户状态变更响应
         */


        OnUserStatusChange_UI(param) {
          let response = param[0]; //更新数据

          if (!this.follows) {
            return;
          }

          for (let i = 0; i < this.follows.length; i++) {
            let user = this.follows[i];

            for (let j = 0; j < response.userStatusChanges.length; j++) {
              let userStatusChange = response.userStatusChanges[j];

              if (user.id == userStatusChange.userId) {
                user.status = userStatusChange.status;
              }
            }
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).FollowListRefieshUI);
        }

      });

      _defineProperty(FollowManager, "Instance", new FollowManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FollowManager.js.map