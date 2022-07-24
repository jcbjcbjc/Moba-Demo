System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtil, proto2, User, NetClientBattle, BattleService, _crd, NetMessageRequest2, FrameHandleResponse, PercentForwardResponse, FrameHandle, PercentForward, GameOverRequest, RepairFrameResponse, RepairFrameRequest;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../Log/LogUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto2", "../../Proto/Battle/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetClientBattle(extras) {
    _reporterNs.report("NetClientBattle", "../Network/Battle/NetClientBattle", _context.meta, extras);
  }

  _export("BattleService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LogUtil = _unresolved_2.LogUtil;
    }, function (_unresolved_3) {
      proto2 = _unresolved_3.default;
    }, function (_unresolved_4) {
      User = _unresolved_4.User;
    }, function (_unresolved_5) {
      NetClientBattle = _unresolved_5.NetClientBattle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "897d6v30e1MHZNtRbEhgBz7", "BattleService", undefined);

      ({
        NetMessageRequest2,
        FrameHandleResponse,
        PercentForwardResponse,
        FrameHandle,
        PercentForward,
        GameOverRequest,
        RepairFrameResponse,
        RepairFrameRequest
      } = _crd && proto2 === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto2) : proto2);

      _export("BattleService", BattleService = class BattleService {
        Init() {}
        /**
         * 发送帧操作
         */


        SendFrameHandle(frameHandle) {
          //LogUtil.log("SendFrameHandle",frameHandle);
          var userId = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          var request = new NetMessageRequest2();
          request.frameHandle = frameHandle;
          request.frameHandle.userId = userId;
          request.userId = userId;
          (_crd && NetClientBattle === void 0 ? (_reportPossibleCrUseOfNetClientBattle({
            error: Error()
          }), NetClientBattle) : NetClientBattle).Instance.SendMessage(request);
        }
        /**
         * 发送进度转发
         */


        SendPercentForward(percent) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendPercentForward");
          var userId = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          var request = new NetMessageRequest2();
          request.percentForward = new PercentForward();
          request.percentForward.userId = userId;
          request.percentForward.percent = percent;
          request.userId = userId; // console.log('request='+JSON.stringify(request))

          (_crd && NetClientBattle === void 0 ? (_reportPossibleCrUseOfNetClientBattle({
            error: Error()
          }), NetClientBattle) : NetClientBattle).Instance.SendMessage(request);
        }
        /**
        * 发送游戏结束
        */


        SendGameOver() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("SendGameOver");
          var userId = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          var request = new NetMessageRequest2();
          request.gameOverReq = new GameOverRequest();
          request.userId = userId;
          (_crd && NetClientBattle === void 0 ? (_reportPossibleCrUseOfNetClientBattle({
            error: Error()
          }), NetClientBattle) : NetClientBattle).Instance.SendMessage(request);
        }
        /**
         * 发送补帧请求
         */


        SendRepairFrame(startFrame, endFrame) {
          // LogUtil.log("SendRepairFrame");
          var userId = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          var request = new NetMessageRequest2();
          request.repairFrameReq = new RepairFrameRequest();
          request.repairFrameReq.startFrame = startFrame;
          request.repairFrameReq.endFrame = endFrame;
          request.userId = userId;
          (_crd && NetClientBattle === void 0 ? (_reportPossibleCrUseOfNetClientBattle({
            error: Error()
          }), NetClientBattle) : NetClientBattle).Instance.SendMessage(request);
        }
        /**
         * 记录用户请求
         */


        SendRecordUser() {
          console.log('SendRecordUser');
          var request = new NetMessageRequest2();
          request.userId = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id;
          (_crd && NetClientBattle === void 0 ? (_reportPossibleCrUseOfNetClientBattle({
            error: Error()
          }), NetClientBattle) : NetClientBattle).Instance.SendMessage(request);
        }

      });

      _defineProperty(BattleService, "Instance", new BattleService());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleService.js.map