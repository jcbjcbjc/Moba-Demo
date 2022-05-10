System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Sprite, SystemEventType, proto, EventManager, LoadResUtil, UIManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, NItem, Result, NAuctionItem, UIAuctionDetailItem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemDefine(extras) {
    _reporterNs.report("ItemDefine", "../../Data/ItemDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIAuction(extras) {
    _reporterNs.report("UIAuction", "./UIAuction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICharacterDetail(extras) {
    _reporterNs.report("UICharacterDetail", "../UICharacterDetail/UICharacterDetail", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SystemEventType = _cc.SystemEventType;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      LoadResUtil = _unresolved_4.LoadResUtil;
    }, function (_unresolved_5) {
      UIManager = _unresolved_5.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21f1drUbT1D3ZQavr6bjbkE", "UIAuctionDetailItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NItem,
        Result,
        NAuctionItem
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIAuctionDetailItem", UIAuctionDetailItem = (_dec = ccclass('UIAuctionDetailItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(Node), _dec(_class = (_class2 = (_temp = class UIAuctionDetailItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "countLabel", _descriptor2, this);

          _initializerDefineProperty(this, "biddingPriceLabel", _descriptor3, this);

          _initializerDefineProperty(this, "currentPriceLabel", _descriptor4, this);

          _initializerDefineProperty(this, "bidderNickNameLabel", _descriptor5, this);

          _initializerDefineProperty(this, "descLabel", _descriptor6, this);

          _initializerDefineProperty(this, "imgSprite", _descriptor7, this);

          _initializerDefineProperty(this, "remainingTimeNode", _descriptor8, this);

          _defineProperty(this, "index", 0);

          _defineProperty(this, "itemDefine", null);

          _defineProperty(this, "uiAuction", null);

          _defineProperty(this, "item", null);
        }

        // private descPos=null as unknown as Vec3;  //描述位置
        start() {
          // this.descPos = this.descLabel.node.getPosition();
          // this.descPos.y -= 20;
          this.bidderNickNameLabel.node.on(SystemEventType.TOUCH_END, this.OnBidderNickNameClick, this);
        }
        /**
         * 竞拍者昵称点击
         */


        OnBidderNickNameClick() {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log('OnBidderNickNameClick');
            var uiCharacterDetail = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UICharacterDetail");
            uiCharacterDetail.SendCharacterDetail(_this.item.bidderUserId, 0, 2);
          })();
        }

        SetItemInfo(item, itemDefine, index, uiAuction) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (index === void 0) {
              index = -1;
            }

            _this2.item = item;

            if (index != -1) {
              _this2.index = index;
            }

            _this2.uiAuction = uiAuction;
            _this2.itemDefine = itemDefine;
            _this2.imgSprite.spriteFrame = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_sprite(_this2.itemDefine.Icon + '/spriteFrame');
            _this2.nameLabel.string = _this2.itemDefine.Name;
            _this2.countLabel.string = '数量：' + item.count;
            _this2.biddingPriceLabel.string = '竞拍价：' + item.biddingPrice;
            _this2.currentPriceLabel.string = '现价：' + item.currentPrice;
            _this2.bidderNickNameLabel.string = '出价者：' + item.bidderNickName;
            _this2.currentPriceLabel.node.active = item.bidderUserId ? true : false;
            _this2.bidderNickNameLabel.node.active = item.bidderUserId ? true : false;
            _this2.descLabel.string = '描述：' + _this2.itemDefine.Description; // this.descLabel.node.setPosition(this.descPos);

            _this2.remainingTimeNode.active = item.remainingTime <= 60000;
          })();
        }

        onDestroy() {
          console.log('onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "countLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "biddingPriceLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentPriceLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bidderNickNameLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "descLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "imgSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "remainingTimeNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIAuctionDetailItem.js.map