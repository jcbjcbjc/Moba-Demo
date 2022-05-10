System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, director, User, LoadResUtil, DataManager, proto, BattleService, EventManager, EventType, proto2, NetConfig, NetClientBattle, BattleGlobal, BattleMode, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _temp, _crd, ccclass, property, TeamType, PercentForwardResponse, UIEnterGameLoad;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleService(extras) {
    _reporterNs.report("BattleService", "../../Services/BattleService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto2(extras) {
    _reporterNs.report("proto2", "../../../Proto/Battle/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConfig(extras) {
    _reporterNs.report("NetConfig", "../../Network/NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetClientBattle(extras) {
    _reporterNs.report("NetClientBattle", "../../Network/Battle/NetClientBattle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "../Battle/Utils/BattleGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMode(extras) {
    _reporterNs.report("BattleMode", "../Battle/enums/BattleMode", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      director = _cc.director;
    }, function (_unresolved_2) {
      User = _unresolved_2.User;
    }, function (_unresolved_3) {
      LoadResUtil = _unresolved_3.LoadResUtil;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      proto = _unresolved_5.default;
    }, function (_unresolved_6) {
      BattleService = _unresolved_6.BattleService;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      EventType = _unresolved_8.EventType;
    }, function (_unresolved_9) {
      proto2 = _unresolved_9.default;
    }, function (_unresolved_10) {
      NetConfig = _unresolved_10.NetConfig;
    }, function (_unresolved_11) {
      NetClientBattle = _unresolved_11.NetClientBattle;
    }, function (_unresolved_12) {
      BattleGlobal = _unresolved_12.BattleGlobal;
    }, function (_unresolved_13) {
      BattleMode = _unresolved_13.BattleMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e2dfiEpCxIr5mXb7pw1fLv", "UIEnterGameLoad", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        TeamType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      ({
        PercentForwardResponse
      } = _crd && proto2 === void 0 ? (_reportPossibleCrUseOfproto2({
        error: Error()
      }), proto2) : proto2);

      _export("UIEnterGameLoad", UIEnterGameLoad = (_dec = ccclass('UIEnterGameLoad'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Sprite), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Sprite), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Sprite), _dec18 = property(Label), _dec19 = property(Label), _dec(_class = (_class2 = (_temp = class UIEnterGameLoad extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "myAvatar1", _descriptor, this);

          _initializerDefineProperty(this, "myNickname1", _descriptor2, this);

          _initializerDefineProperty(this, "myPercent1", _descriptor3, this);

          _initializerDefineProperty(this, "myAvatar2", _descriptor4, this);

          _initializerDefineProperty(this, "myNickname2", _descriptor5, this);

          _initializerDefineProperty(this, "myPercent2", _descriptor6, this);

          _initializerDefineProperty(this, "myAvatar3", _descriptor7, this);

          _initializerDefineProperty(this, "myNickname3", _descriptor8, this);

          _initializerDefineProperty(this, "myPercent3", _descriptor9, this);

          _initializerDefineProperty(this, "enemyAvatar1", _descriptor10, this);

          _initializerDefineProperty(this, "enemyNickname1", _descriptor11, this);

          _initializerDefineProperty(this, "enemyPercent1", _descriptor12, this);

          _initializerDefineProperty(this, "enemyAvatar2", _descriptor13, this);

          _initializerDefineProperty(this, "enemyNickname2", _descriptor14, this);

          _initializerDefineProperty(this, "enemyPercent2", _descriptor15, this);

          _initializerDefineProperty(this, "enemyAvatar3", _descriptor16, this);

          _initializerDefineProperty(this, "enemyNickname3", _descriptor17, this);

          _initializerDefineProperty(this, "enemyPercent3", _descriptor18, this);

          _defineProperty(this, "timer", null);

          _defineProperty(this, "percent_", 0);

          _defineProperty(this, "isGoToBattleScene", false);
        }

        //是否已跳转战斗场景
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            for (var i = 0; i < 3; i++) {
              _this['myAvatar' + (i + 1)].node.active = false;
              _this['enemyAvatar' + (i + 1)].node.active = false;
              _this['myPercent' + (i + 1)].node.active = false;
              _this['enemyPercent' + (i + 1)].node.active = false;
            }

            yield _this.InitTeamUser((_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.room.my, TeamType.My);
            yield _this.InitTeamUser((_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.room.enemy, TeamType.Enemy); //连接到战斗服务器

            var ipPortArr = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.room.ipPortStr.split(":");
            (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
              error: Error()
            }), NetConfig) : NetConfig).websocketBattleUrl = 'ws://' + ipPortArr[0] + ':' + ipPortArr[2] + '/ws';
            console.log('战斗服务器地址：' + (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
              error: Error()
            }), NetConfig) : NetConfig).websocketBattleUrl);
            (_crd && NetClientBattle === void 0 ? (_reportPossibleCrUseOfNetClientBattle({
              error: Error()
            }), NetClientBattle) : NetClientBattle).Instance.Connect();
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnPercentForward, _this.OnPercentForward, _this);

            if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
              error: Error()
            }), BattleMode) : BattleMode).Battle) {
              //对局模式
              //上传加载进度，需要等所有用户资源都加载完成
              var this_ = _this;
              _this.timer = setInterval(function () {
                console.log('uploadProgress percent_=' + this_.percent_);
                (_crd && BattleService === void 0 ? (_reportPossibleCrUseOfBattleService({
                  error: Error()
                }), BattleService) : BattleService).Instance.SendPercentForward(this_.percent_);

                if (this_.percent_ < 100) {
                  this_.percent_ += 100;
                }
              }, 500);
            } else if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
              error: Error()
            }), BattleMode) : BattleMode).Live) {
              //观看直播模式
              //加载资源，只需要当前用户的资源加载完成即可
              //跳转战斗场景
              director.loadScene('Map01');
            }
          })();
        }
        /**
         * 初始化队伍信息
         * @param roomUserList 
         * @param teamType 
         */


        InitTeamUser(roomUserList, teamType) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var avatar = teamType == TeamType.My ? 'myAvatar' : 'enemyAvatar';
            var nickname = teamType == TeamType.My ? 'myNickname' : 'enemyNickname';

            for (var i = 0; i < roomUserList.length; i++) {
              var roomUser = roomUserList[i];
              console.log('roomUser.userId=' + roomUser.userId);
              _this2[avatar + (i + 1)].node.active = true;
              _this2[avatar + (i + 1)].spriteFrame = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).load_local_sprite((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.characters[roomUser.cCharacterId].UpperBodyImg + '/spriteFrame');
              _this2[nickname + (i + 1)].string = roomUser.nickName;
            }
          })();
        }
        /**
        * 进度转发响应
        */


        OnPercentForward(param) {
          var response = param[0];
          console.log("OnPercentForward: percentForward=" + response.percentForward + '，allUserLoadSucess=' + response.allUserLoadSucess + '，isGoToBattleScene=' + this.isGoToBattleScene);
          var userId = response.percentForward.userId;
          var percent = response.percentForward.percent;
          this.UpdateTeamUserPercent(userId, percent, TeamType.My);
          this.UpdateTeamUserPercent(userId, percent, TeamType.Enemy); //全部用户资源加载成功

          if (response.allUserLoadSucess && !this.isGoToBattleScene) {
            this.isGoToBattleScene = true;
            director.loadScene('Map01'); //跳转战斗场景
          }
        }
        /**
         * 更新队伍用户加载进度
         * @param userId 
         * @param percent 
         * @param teamType 
         */


        UpdateTeamUserPercent(userId, percent, teamType) {
          var roomUserList = teamType == TeamType.My ? (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.room.my : (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.room.enemy;
          var percentName = teamType == TeamType.My ? 'myPercent' : 'enemyPercent';

          for (var i = 0; i < roomUserList.length; i++) {
            var roomUser = roomUserList[i]; // console.log(roomUser.userId +'=='+ userId +'==='+ (percentName+(i+1)))

            if (roomUser.userId == userId) {
              this[percentName + (i + 1)].string = percent + '%';
            }
          }
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
          clearInterval(this.timer);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "myAvatar1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myNickname1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "myPercent1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "myAvatar2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "myNickname2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "myPercent2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "myAvatar3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "myNickname3", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "myPercent3", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "enemyAvatar1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "enemyNickname1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "enemyPercent1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "enemyAvatar2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "enemyNickname2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "enemyPercent2", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "enemyAvatar3", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "enemyNickname3", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "enemyPercent3", [_dec19], {
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
//# sourceMappingURL=UIEnterGameLoad.js.map