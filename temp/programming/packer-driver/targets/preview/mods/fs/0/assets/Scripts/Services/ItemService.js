System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtil, proto, NetClient, EventManager, EventType, TipsManager, ItemService, _crd, NetMessage, NetMessageRequest, UserLoginRequest, Result, UserLoginResponse, UserRegisterRequest, UserRegisterResponse, UnLockRequest, UnLockResponse, CharacterDetailRequest, CharacterDetailResponse, SwitchCharacterRequest, SwitchCharacterResponse, AttrPromoteRequest, AttrPromoteType, AttrPromoteInfoResponse, BagHandleRequest, BagHandleType, BagHandleResponse, ItemBuyRequest, ItemBuyResponse, QueryTranRequest, QueryTranResponse, BuyTranResponse, BuyTranRequest;

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

  function _reportPossibleCrUseOfTipsManager(extras) {
    _reporterNs.report("TipsManager", "../UI/TipsManager", _context.meta, extras);
  }

  _export("ItemService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
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
      TipsManager = _unresolved_7.TipsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53c65CrHL1ObpSjadMh91gF", "ItemService", undefined);

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
        BagHandleRequest,
        BagHandleType,
        BagHandleResponse,
        ItemBuyRequest,
        ItemBuyResponse,
        QueryTranRequest,
        QueryTranResponse,
        BuyTranResponse,
        BuyTranRequest
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("ItemService", ItemService = class ItemService {
        Init() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnBagHandle, this.OnBagHandle, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnItemBuy, this.OnItemBuy, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnQueryTran, this.OnQueryTran, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnBuyTran, this.OnBuyTran, this);
        }
        /**
         * 请求背包操作
         */


        SendBagHandle(itemId, bagHandleType, money) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("BagHandleRequest::itemId :" + itemId + "，bagHandleType=" + bagHandleType + "，money=" + money);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.bagHandleReq = new BagHandleRequest();
          message.Request.bagHandleReq.itemId = itemId;
          message.Request.bagHandleReq.bagHandleType = bagHandleType;
          message.Request.bagHandleReq.money = money;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 背包操作响应
         */


        OnBagHandle(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnBagHandle:{0} [{1}]", response.result, response.errormsg);

          if (response.result == Result.Success) {
            //成功
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnBagHandle_UI, response);
          } else {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
          }
        }
        /**
         * 请求购买操作
         */


        SendItemBuy(shopId, itemId, count) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("ItemBuyRequest::shopId：" + shopId + "，itemId :" + itemId + "，count=" + count);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.itemBuy = new ItemBuyRequest();
          message.Request.itemBuy.shopId = shopId;
          message.Request.itemBuy.itemId = itemId;
          message.Request.itemBuy.count = count;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 购买操作响应
         */


        OnItemBuy(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnItemBuy:{0} [{1}]", response.result, response.errormsg);

          if (response.result == Result.Success) {
            //成功
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnItemBuy_UI, response);
          } else {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
          }
        }
        /**
         * 请求查询用户交易
         */


        SendQueryTran(userId) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("QueryTranRequest::userId：" + userId);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.queryTranReq = new QueryTranRequest();
          message.Request.queryTranReq.userId = userId;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 查询用户交易响应
         */


        OnQueryTran(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnQueryTran:{0} [{1}]", response.result, response.errormsg);

          if (response.result == Result.Success) {
            //成功
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnQueryTran_UI, response.items);
          } else {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
          }
        }
        /**
         * 请求购买用户交易
         */


        SendBuyTran(userId, itemId) {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("BuyTranRequest::userId：" + userId + '，itemId=' + itemId);
          var message = new NetMessage();
          message.Request = new NetMessageRequest();
          message.Request.buyTranReq = new BuyTranRequest();
          message.Request.buyTranReq.userId = userId;
          message.Request.buyTranReq.itemId = itemId;
          (_crd && NetClient === void 0 ? (_reportPossibleCrUseOfNetClient({
            error: Error()
          }), NetClient) : NetClient).Instance.SendMessage(message);
        }
        /**
         * 购买用户交易响应
         */


        OnBuyTran(param) {
          var response = param[0];
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log("OnBuyTran:{0} [{1}]", response.result, response.errormsg);

          if (response.result == Result.Success) {
            //成功
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnBuyTran_UI);
          } else {
            (_crd && TipsManager === void 0 ? (_reportPossibleCrUseOfTipsManager({
              error: Error()
            }), TipsManager) : TipsManager).Instance.showTips(response.errormsg);
          }
        }

      });

      _defineProperty(ItemService, "Instance", new ItemService());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemService.js.map