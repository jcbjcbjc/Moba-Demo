System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIWindow, _decorator, Node, Label, Sprite, Button, UIManager, User, LoadResUtil, DataManager, EventManager, EventType, proto, UserService, FollowManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _temp, _crd, CharacterClass, NUser, AttrPromoteType, AttrPromoteInfoResponse, CharacterDetailResponse, Result, FollowResponse, ccclass, property, UICharacterDetail;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "../Common/UIWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserService(extras) {
    _reporterNs.report("UserService", "../../Services/UserService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPromote(extras) {
    _reporterNs.report("UIPromote", "./UIPromote", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBag(extras) {
    _reporterNs.report("UIBag", "../Bag/UIBag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUITran(extras) {
    _reporterNs.report("UITran", "../Tran/UITran", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFollowManager(extras) {
    _reporterNs.report("FollowManager", "../../Managers/FollowManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIChat(extras) {
    _reporterNs.report("UIChat", "../Chat/UIChat", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      UIWindow = _unresolved_2.UIWindow;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
    }, function (_unresolved_4) {
      User = _unresolved_4.User;
    }, function (_unresolved_5) {
      LoadResUtil = _unresolved_5.LoadResUtil;
    }, function (_unresolved_6) {
      DataManager = _unresolved_6.DataManager;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      EventType = _unresolved_8.EventType;
    }, function (_unresolved_9) {
      proto = _unresolved_9.default;
    }, function (_unresolved_10) {
      UserService = _unresolved_10.UserService;
    }, function (_unresolved_11) {
      FollowManager = _unresolved_11.FollowManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa827rVns1PM5eBrmdTN88q", "UICharacterDetail", undefined);

      ({
        CharacterClass,
        NUser,
        AttrPromoteType,
        AttrPromoteInfoResponse,
        CharacterDetailResponse,
        Result,
        FollowResponse
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      ({
        ccclass,
        property
      } = _decorator);

      _export("UICharacterDetail", UICharacterDetail = (_dec = ccclass('UICharacterDetail'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property([Sprite]), _dec21 = property(Button), _dec22 = property(Button), _dec23 = property(Button), _dec24 = property(Button), _dec25 = property(Button), _dec26 = property(Button), _dec27 = property(Button), _dec28 = property(Button), _dec29 = property(Button), _dec30 = property(Button), _dec31 = property(Button), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec(_class = (_class2 = (_temp = class UICharacterDetail extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nicknameLabel", _descriptor, this);

          _initializerDefineProperty(this, "characterSprite", _descriptor2, this);

          _initializerDefineProperty(this, "levelLabel", _descriptor3, this);

          _initializerDefineProperty(this, "expLabel", _descriptor4, this);

          _initializerDefineProperty(this, "attLabel", _descriptor5, this);

          _initializerDefineProperty(this, "attSpotLabel", _descriptor6, this);

          _initializerDefineProperty(this, "defLabel", _descriptor7, this);

          _initializerDefineProperty(this, "defSpotLabel", _descriptor8, this);

          _initializerDefineProperty(this, "hpLabel", _descriptor9, this);

          _initializerDefineProperty(this, "hpSpotLabel", _descriptor10, this);

          _initializerDefineProperty(this, "criLabel", _descriptor11, this);

          _initializerDefineProperty(this, "criSpotLabel", _descriptor12, this);

          _initializerDefineProperty(this, "resuLabel", _descriptor13, this);

          _initializerDefineProperty(this, "resuSpotLabel", _descriptor14, this);

          _initializerDefineProperty(this, "speedLabel", _descriptor15, this);

          _initializerDefineProperty(this, "speedSpotLabel", _descriptor16, this);

          _initializerDefineProperty(this, "cdLabel", _descriptor17, this);

          _initializerDefineProperty(this, "cdSpotLabel", _descriptor18, this);

          _initializerDefineProperty(this, "skillSpriteArr", _descriptor19, this);

          _initializerDefineProperty(this, "attPromoteButton", _descriptor20, this);

          _initializerDefineProperty(this, "defPromoteButton", _descriptor21, this);

          _initializerDefineProperty(this, "hpPromoteButton", _descriptor22, this);

          _initializerDefineProperty(this, "criPromoteButton", _descriptor23, this);

          _initializerDefineProperty(this, "resuPromoteButton", _descriptor24, this);

          _initializerDefineProperty(this, "speedPromoteButton", _descriptor25, this);

          _initializerDefineProperty(this, "cdPromoteButton", _descriptor26, this);

          _initializerDefineProperty(this, "switchButton", _descriptor27, this);

          _initializerDefineProperty(this, "bagButton", _descriptor28, this);

          _initializerDefineProperty(this, "transButton", _descriptor29, this);

          _initializerDefineProperty(this, "privChatButton", _descriptor30, this);

          _initializerDefineProperty(this, "myGroup", _descriptor31, this);

          _initializerDefineProperty(this, "otherGroup", _descriptor32, this);

          _initializerDefineProperty(this, "cancelFollowButton", _descriptor33, this);

          _initializerDefineProperty(this, "followButton", _descriptor34, this);

          _defineProperty(this, "userId", 0);

          _defineProperty(this, "tCharacterId", 0);

          _defineProperty(this, "user", null);
        }

        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnSwitchCharacter_UI, this.OnSwitchCharacter_UI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnFollowRes_UI, this.OnFollowRes_UI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnCharacterDetail_UI, this.OnCharacterDetail_UI, this);
        }
        /**
         * 查看英雄详情
         * @param userId  用户id 
         * @param tCharacterId  角色数据库id
         * @param openMode  打开方式 1、英雄详细打开 2、其它点击
         */


        SendCharacterDetail(userId, tCharacterId, openMode) {
          if (openMode === void 0) {
            openMode = 1;
          }

          console.log('SendCharacterDetail userId=' + userId + '，tCharacterId=' + tCharacterId);
          this.userId = userId;
          this.tCharacterId = tCharacterId;
          (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
            error: Error()
          }), UserService) : UserService).Instance.SendCharacterDetail(this.userId, this.tCharacterId);

          if (this.userId == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id) {
            this.myGroup.active = openMode == 1 ? true : false;
            this.otherGroup.active = false;
          } else {
            this.myGroup.active = false;
            this.otherGroup.active = true;
          }

          if (this.userId == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id && this.tCharacterId == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.character.tid) {
            this.switchButton.node.active = false;
          } else {
            this.switchButton.node.active = true;
          }
        }

        OnCharacterDetail_UI(param) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _user$character, _user$character2, _user$character3, _user$character4, _user$character5, _user$character6, _user$character7, _user$character8, _user$character9, _user$character10, _user$character11, _user$character12, _user$character13, _user$character14, _user$character15, _user$character16, _user$character17, _user$character18;

            console.log('OnCharacterDetail_UI');
            var response = param[0];
            var user = response.user;
            _this.user = user;

            if (response.result == Result.Failed) {
              _this.Close();

              return;
            }

            _this.nicknameLabel.string = '昵称：' + user.nickname;
            _this.characterSprite.spriteFrame = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_sprite((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.characters[(_user$character = user.character) === null || _user$character === void 0 ? void 0 : _user$character.cid].Avatar + '/spriteFrame');
            _this.levelLabel.string = '等级：' + ((_user$character2 = user.character) === null || _user$character2 === void 0 ? void 0 : _user$character2.level);
            _this.expLabel.string = '经验：' + ((_user$character3 = user.character) === null || _user$character3 === void 0 ? void 0 : _user$character3.exp);
            _this.attLabel.string = '攻击力：' + ((_user$character4 = user.character) === null || _user$character4 === void 0 ? void 0 : _user$character4.att);
            _this.attSpotLabel.string = '+' + ((_user$character5 = user.character) === null || _user$character5 === void 0 ? void 0 : _user$character5.attSpot);
            _this.defLabel.string = '防御力：' + ((_user$character6 = user.character) === null || _user$character6 === void 0 ? void 0 : _user$character6.def);
            _this.defSpotLabel.string = '+' + ((_user$character7 = user.character) === null || _user$character7 === void 0 ? void 0 : _user$character7.defSpot);
            _this.hpLabel.string = '血量：' + ((_user$character8 = user.character) === null || _user$character8 === void 0 ? void 0 : _user$character8.hp);
            _this.hpSpotLabel.string = '+' + ((_user$character9 = user.character) === null || _user$character9 === void 0 ? void 0 : _user$character9.hpSpot);
            _this.criLabel.string = '暴击率：' + ((_user$character10 = user.character) === null || _user$character10 === void 0 ? void 0 : _user$character10.cri);
            _this.criSpotLabel.string = '+' + ((_user$character11 = user.character) === null || _user$character11 === void 0 ? void 0 : _user$character11.criSpot);
            _this.resuLabel.string = '复活率：' + ((_user$character12 = user.character) === null || _user$character12 === void 0 ? void 0 : _user$character12.resu);
            _this.resuSpotLabel.string = '+' + ((_user$character13 = user.character) === null || _user$character13 === void 0 ? void 0 : _user$character13.resuSpot);
            _this.speedLabel.string = '速度：提升' + ((_user$character14 = user.character) === null || _user$character14 === void 0 ? void 0 : _user$character14.speed) + "%";
            _this.speedSpotLabel.string = '+' + ((_user$character15 = user.character) === null || _user$character15 === void 0 ? void 0 : _user$character15.speedSpot);
            _this.cdLabel.string = 'cd：降低' + ((_user$character16 = user.character) === null || _user$character16 === void 0 ? void 0 : _user$character16.cd) + "%";
            _this.cdSpotLabel.string = '+' + ((_user$character17 = user.character) === null || _user$character17 === void 0 ? void 0 : _user$character17.cdSpot);
            _this.cancelFollowButton.active = user.isFollow;
            _this.followButton.active = !user.isFollow;
            var skillMap = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.skills[(_user$character18 = user.character) === null || _user$character18 === void 0 ? void 0 : _user$character18.cid];
            var index = 0;

            for (var skillId in skillMap) {
              var define = skillMap[skillId];
              _this.skillSpriteArr[index].spriteFrame = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).load_local_sprite(define.Icon + '/spriteFrame');
              index++;
            }
          })();
        }
        /**
         * 切换英雄
         */


        SwitchCharacter() {
          (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
            error: Error()
          }), UserService) : UserService).Instance.SendSwitchCharacter(this.tCharacterId);
        }
        /**
         * 切换英雄成功响应
         */


        OnSwitchCharacter_UI() {
          this.Close();
        }
        /**
         * 打开提升界面
         */


        OpenUIPromote(param, customEventData) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            console.log(customEventData);
            var uiPromote = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UIPromote");
            var spot = 0;

            if (customEventData == AttrPromoteType.Att) {
              var _this2$user$character;

              spot = (_this2$user$character = _this2.user.character) === null || _this2$user$character === void 0 ? void 0 : _this2$user$character.attSpot;
            } else if (customEventData == AttrPromoteType.Def) {
              var _this2$user$character2;

              spot = (_this2$user$character2 = _this2.user.character) === null || _this2$user$character2 === void 0 ? void 0 : _this2$user$character2.defSpot;
            } else if (customEventData == AttrPromoteType.Hp) {
              var _this2$user$character3;

              spot = (_this2$user$character3 = _this2.user.character) === null || _this2$user$character3 === void 0 ? void 0 : _this2$user$character3.hpSpot;
            } else if (customEventData == AttrPromoteType.Cri) {
              var _this2$user$character4;

              spot = (_this2$user$character4 = _this2.user.character) === null || _this2$user$character4 === void 0 ? void 0 : _this2$user$character4.criSpot;
            } else if (customEventData == AttrPromoteType.Resu) {
              var _this2$user$character5;

              spot = (_this2$user$character5 = _this2.user.character) === null || _this2$user$character5 === void 0 ? void 0 : _this2$user$character5.resuSpot;
            } else if (customEventData == AttrPromoteType.Speed) {
              var _this2$user$character6;

              spot = (_this2$user$character6 = _this2.user.character) === null || _this2$user$character6 === void 0 ? void 0 : _this2$user$character6.speedSpot;
            } else if (customEventData == AttrPromoteType.Cd) {
              var _this2$user$character7;

              spot = (_this2$user$character7 = _this2.user.character) === null || _this2$user$character7 === void 0 ? void 0 : _this2$user$character7.cdSpot;
            }

            uiPromote.SetPromoteDetail(_this2.tCharacterId, customEventData, spot, _this2);
          })();
        }
        /**
         * 更新属性提升
         */


        UpdateAttrPromote(attrPromoteType, attrPromoteInfoResponse) {
          if (attrPromoteType == AttrPromoteType.Att) {
            this.attLabel.string = '攻击力：' + attrPromoteInfoResponse.attrValue;
            this.attSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.att = attrPromoteInfoResponse.attrValue;
            this.user.character.attSpot = attrPromoteInfoResponse.spot;
          } else if (attrPromoteType == AttrPromoteType.Def) {
            this.defLabel.string = '防御力：' + attrPromoteInfoResponse.attrValue;
            this.defSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.def = attrPromoteInfoResponse.attrValue;
            this.user.character.defSpot = attrPromoteInfoResponse.spot;
          } else if (attrPromoteType == AttrPromoteType.Hp) {
            this.hpLabel.string = '血量：' + attrPromoteInfoResponse.attrValue;
            this.hpSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.hp = attrPromoteInfoResponse.attrValue;
            this.user.character.hpSpot = attrPromoteInfoResponse.spot;
          } else if (attrPromoteType == AttrPromoteType.Cri) {
            this.criLabel.string = '暴击率：' + attrPromoteInfoResponse.attrValue;
            this.criSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.cri = attrPromoteInfoResponse.attrValue;
            this.user.character.criSpot = attrPromoteInfoResponse.spot;
          } else if (attrPromoteType == AttrPromoteType.Resu) {
            this.resuLabel.string = '复活率：' + attrPromoteInfoResponse.attrValue;
            this.resuSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.resu = attrPromoteInfoResponse.attrValue;
            this.user.character.resuSpot = attrPromoteInfoResponse.spot;
          } else if (attrPromoteType == AttrPromoteType.Speed) {
            this.speedLabel.string = '速度：提升' + attrPromoteInfoResponse.attrValue + '%';
            this.speedSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.speed = attrPromoteInfoResponse.attrValue;
            this.user.character.speedSpot = attrPromoteInfoResponse.spot;
          } else if (attrPromoteType == AttrPromoteType.Cd) {
            this.cdLabel.string = 'cd：降低' + attrPromoteInfoResponse.attrValue + '%';
            this.cdSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.cd = attrPromoteInfoResponse.attrValue;
            this.user.character.cdSpot = attrPromoteInfoResponse.spot;
          }
        }

        OnClickBag() {
          return _asyncToGenerator(function* () {
            var uiBag = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UIBag");
            uiBag.SetUpOpenMode(1);
          })();
        }

        OnClickTran() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var uiTran = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UITran");
            uiTran.SetUserLoadList(_this3.userId);
          })();
        }
        /**
         * 点击关注
         */


        OnClickFollow() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            (_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
              error: Error()
            }), FollowManager) : FollowManager).Instance.SendFollow(_this4.user.id, true);
          })();
        }
        /**
         * 点击取消关注
         */


        OnClickCancelFollow() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            (_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
              error: Error()
            }), FollowManager) : FollowManager).Instance.SendFollow(_this5.user.id, false);
          })();
        }
        /**
         * 关注/取消关注响应
         */


        OnFollowRes_UI(param) {
          var response = param[0];
          this.cancelFollowButton.active = (_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
            error: Error()
          }), FollowManager) : FollowManager).Instance.isFollow;
          this.followButton.active = !(_crd && FollowManager === void 0 ? (_reportPossibleCrUseOfFollowManager({
            error: Error()
          }), FollowManager) : FollowManager).Instance.isFollow;
        }
        /**
         * 点击私聊
         */


        OnClickPrivateChat() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var uiChat = yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UIChat");
            uiChat.ChangeChatChannel(1, _this6.user);
          })();
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nicknameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "characterSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "expLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "attLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "attSpotLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "defLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "defSpotLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "hpLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "hpSpotLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "criLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "criSpotLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "resuLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "resuSpotLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "speedLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "speedSpotLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "cdLabel", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "cdSpotLabel", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "skillSpriteArr", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "attPromoteButton", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "defPromoteButton", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "hpPromoteButton", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "criPromoteButton", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "resuPromoteButton", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "speedPromoteButton", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "cdPromoteButton", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "switchButton", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "bagButton", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "transButton", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "privChatButton", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "myGroup", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "otherGroup", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "cancelFollowButton", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "followButton", [_dec35], {
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
//# sourceMappingURL=UICharacterDetail.js.map