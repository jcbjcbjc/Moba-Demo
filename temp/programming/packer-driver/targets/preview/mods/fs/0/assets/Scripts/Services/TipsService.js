System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtil, proto, MessageBox, MessageBoxType, EventManager, EventType, director, TipsManager, TipsService, _crd, NetMessage, NetMessageRequest, Result, OfferPriceRequest, OfferPriceResponse, AuctionRequest, AuctionResponse, GetAuctionListRequest, GetAuctionListResponse, TipsResponse, TipsType, TipsWorkType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../Log/LogUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../Proto/proto.js", _context.meta, extras);
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

  function _reportPossibleCrUseOfTipsManager(extras) {
    _reporterNs.report("TipsManager", "../UI/TipsManager", _context.meta, extras);
  }

  _export("TipsService", void 0);

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
      MessageBox = _unresolved_4.MessageBox;
      MessageBoxType = _unresolved_4.MessageBoxType;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }, function (_unresolved_7) {
      TipsManager = _unresolved_7.TipsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1cfbbhCvhNP4LnHUn+cd/NJ", "TipsService", undefined);

      ({
        NetMessage,
        NetMessageRequest,
        Result,
        OfferPriceRequest,
        OfferPriceResponse,
        AuctionRequest,
        AuctionResponse,
        GetAuctionListRequest,
        GetAuctionListResponse,
        TipsResponse,
        TipsType,
        TipsWorkType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("TipsService", TipsService = class TipsService {
        Init() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnTips, this.OnTips, this);
        }
        /**
         * ????????????
         */


        OnTips(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnTips:{0} [{1}]", response.content, response.tipsType);

          if (response.tipsType == TipsType.Tips) {
            //????????????
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.content);
          } else if (response.tipsType == TipsType.Popup) {
            //????????????
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show(response.content, "??????", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Information);
          } //????????????


          if (!response.tipsWorkType) {
            return;
          }

          console.log('isOutRoom???' + (response.tipsWorkType == TipsWorkType.OutRoom));

          if (response.tipsWorkType == TipsWorkType.AuctionResult) {
            //????????????
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).AuctionRefreshUI);
          } else if (response.tipsWorkType == TipsWorkType.DismissRoom) {
            //????????????
            director.loadScene('UIMain');
          } else if (response.tipsWorkType == TipsWorkType.KickOutRoom) {
            //????????????
            director.loadScene('UIMain');
          } else if (response.tipsWorkType == TipsWorkType.OutRoom) {
            //????????????
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnMyRoom_RefieshUI);
          }
        }

      });

      _defineProperty(TipsService, "Instance", new TipsService());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TipsService.js.map