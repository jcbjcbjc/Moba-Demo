System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventManager, proto, OptType, BattleService, NetConfig, EventType, HashMap, DataManager, CreatureManager, TeamType2, _decorator, instantiate, Node, Component, Vec3, Prefab, game, GameStatus, CharacterManager, LocalStorageUtil, UIMinimapManager, BattleContext, SpawnMonManager, CollisionCheckManager, BattleGlobal, TargetType, AniState, BattleMode, HandlerFrameResult, UIBattle, UIGameLoadIn, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3, _temp, _crd, ccclass, property, FrameHandle, FrameHandleResponse, RepairFrameResponse, LiveFrameResponse, BattleManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../Proto/Battle/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOptType(extras) {
    _reporterNs.report("OptType", "./../enums/OptType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleService(extras) {
    _reporterNs.report("BattleService", "../../../Services/BattleService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConfig(extras) {
    _reporterNs.report("NetConfig", "../../../Network/NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../../../Utils/HashMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureManager(extras) {
    _reporterNs.report("CreatureManager", "./../Managers/CreatureManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "./../enums/TeamType2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../enums/GameStatus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterManager(extras) {
    _reporterNs.report("CharacterManager", "./CharacterManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorageUtil(extras) {
    _reporterNs.report("LocalStorageUtil", "../../../Utils/LocalStorageUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMinimapManager(extras) {
    _reporterNs.report("UIMinimapManager", "../Minimap/UIMinimapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleContext(extras) {
    _reporterNs.report("BattleContext", "../Models/BattleContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpawnMonManager(extras) {
    _reporterNs.report("SpawnMonManager", "./SpawnMonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionCheckManager(extras) {
    _reporterNs.report("CollisionCheckManager", "./CollisionCheckManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "../Utils/BattleGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTargetType(extras) {
    _reporterNs.report("TargetType", "../enums/TargetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniState(extras) {
    _reporterNs.report("AniState", "../enums/AniState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMode(extras) {
    _reporterNs.report("BattleMode", "../enums/BattleMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHandlerFrameResult(extras) {
    _reporterNs.report("HandlerFrameResult", "../enums/HandlerFrameResult", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBattle(extras) {
    _reporterNs.report("UIBattle", "../UIBattle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIGameLoadIn(extras) {
    _reporterNs.report("UIGameLoadIn", "../UIGameLoadIn", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      game = _cc.game;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      OptType = _unresolved_4.OptType;
    }, function (_unresolved_5) {
      BattleService = _unresolved_5.BattleService;
    }, function (_unresolved_6) {
      NetConfig = _unresolved_6.NetConfig;
    }, function (_unresolved_7) {
      EventType = _unresolved_7.EventType;
    }, function (_unresolved_8) {
      HashMap = _unresolved_8.HashMap;
    }, function (_unresolved_9) {
      DataManager = _unresolved_9.DataManager;
    }, function (_unresolved_10) {
      CreatureManager = _unresolved_10.CreatureManager;
    }, function (_unresolved_11) {
      TeamType2 = _unresolved_11.TeamType2;
    }, function (_unresolved_12) {
      GameStatus = _unresolved_12.GameStatus;
    }, function (_unresolved_13) {
      CharacterManager = _unresolved_13.CharacterManager;
    }, function (_unresolved_14) {
      LocalStorageUtil = _unresolved_14.LocalStorageUtil;
    }, function (_unresolved_15) {
      UIMinimapManager = _unresolved_15.UIMinimapManager;
    }, function (_unresolved_16) {
      BattleContext = _unresolved_16.BattleContext;
    }, function (_unresolved_17) {
      SpawnMonManager = _unresolved_17.SpawnMonManager;
    }, function (_unresolved_18) {
      CollisionCheckManager = _unresolved_18.CollisionCheckManager;
    }, function (_unresolved_19) {
      BattleGlobal = _unresolved_19.BattleGlobal;
    }, function (_unresolved_20) {
      TargetType = _unresolved_20.TargetType;
    }, function (_unresolved_21) {
      AniState = _unresolved_21.AniState;
    }, function (_unresolved_22) {
      BattleMode = _unresolved_22.BattleMode;
    }, function (_unresolved_23) {
      HandlerFrameResult = _unresolved_23.HandlerFrameResult;
    }, function (_unresolved_24) {
      UIBattle = _unresolved_24.UIBattle;
    }, function (_unresolved_25) {
      UIGameLoadIn = _unresolved_25.UIGameLoadIn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "470af+Z7UNDKbOD6FNHf4wT", "BattleManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        FrameHandle,
        FrameHandleResponse,
        RepairFrameResponse,
        LiveFrameResponse
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("BattleManager", BattleManager = (_dec = ccclass('BattleManager'), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property([Prefab]), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(_crd && UIBattle === void 0 ? (_reportPossibleCrUseOfUIBattle({
        error: Error()
      }), UIBattle) : UIBattle), _dec11 = property(_crd && UIGameLoadIn === void 0 ? (_reportPossibleCrUseOfUIGameLoadIn({
        error: Error()
      }), UIGameLoadIn) : UIGameLoadIn), _dec(_class = (_class2 = (_temp = _class3 = class BattleManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "frameHandle", new FrameHandle());

          _defineProperty(this, "handleFrameId", -1);

          _defineProperty(this, "executeFrameId", -1);

          _defineProperty(this, "allFrameHandles", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());

          _defineProperty(this, "timer", null);

          _defineProperty(this, "recProTimer", null);

          _defineProperty(this, "handleFrameTimer", null);

          _defineProperty(this, "gameStatus", (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).None);

          _defineProperty(this, "repairWaitFrameCount", 5 * 4);

          _defineProperty(this, "currentRepairFrame", 0);

          _initializerDefineProperty(this, "MyTeam", _descriptor, this);

          _initializerDefineProperty(this, "EnemyTeam", _descriptor2, this);

          _initializerDefineProperty(this, "camera", _descriptor3, this);

          _initializerDefineProperty(this, "spawnMonsterNode", _descriptor4, this);

          _initializerDefineProperty(this, "npcMoveWayNode", _descriptor5, this);

          _initializerDefineProperty(this, "skillTipsPrefabs", _descriptor6, this);

          _initializerDefineProperty(this, "MyBattleItemNode", _descriptor7, this);

          _initializerDefineProperty(this, "AllBattleEffectsNode", _descriptor8, this);

          _initializerDefineProperty(this, "uiBattle", _descriptor9, this);

          _initializerDefineProperty(this, "uiGameLoadIn", _descriptor10, this);

          _defineProperty(this, "currentCharacter", null);

          _defineProperty(this, "camCharDis", 0);

          _defineProperty(this, "newFrameId", -1);

          _defineProperty(this, "recordUserTimer", null);

          _defineProperty(this, "liveNotExecuteFrameCount", 0);

          _defineProperty(this, "isLookAtCharacterFlag", true);

          _defineProperty(this, "lastReceiveFrameTime", 0);

          _defineProperty(this, "lastCheckFrameTime", 0);

          _defineProperty(this, "isAddListener", false);

          _defineProperty(this, "characterWorldPosition", new Vec3());
        }

        //是否开始监听事件
        Clear() {
          game.setFrameRate(60);
          (_crd && CharacterManager === void 0 ? (_reportPossibleCrUseOfCharacterManager({
            error: Error()
          }), CharacterManager) : CharacterManager).Instance.Clear();
          (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
            error: Error()
          }), CreatureManager) : CreatureManager).Instance.Clear();
          (_crd && CollisionCheckManager === void 0 ? (_reportPossibleCrUseOfCollisionCheckManager({
            error: Error()
          }), CollisionCheckManager) : CollisionCheckManager).Instance.Clear();
          (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).clear(); //清空对战数据

          console.log('BattleManager Clear');
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.uiGameLoadIn.setMsg('游戏拼命加载中...');

            _this.uiGameLoadIn.show();

            BattleManager.Instance = _this;
            _this.isAddListener = false;

            _this.Clear();

            console.log('BattleManager start creatureMap len：' + (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
              error: Error()
            }), CreatureManager) : CreatureManager).Instance.creatureMap.values().length); //创建角色

            yield (_crd && CharacterManager === void 0 ? (_reportPossibleCrUseOfCharacterManager({
              error: Error()
            }), CharacterManager) : CharacterManager).Instance.CreateCharacter((_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
              error: Error()
            }), TeamType2) : TeamType2).Blue); //蓝队

            yield (_crd && CharacterManager === void 0 ? (_reportPossibleCrUseOfCharacterManager({
              error: Error()
            }), CharacterManager) : CharacterManager).Instance.CreateCharacter((_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
              error: Error()
            }), TeamType2) : TeamType2).Red); //红队
            //创建怪物

            yield (_crd && SpawnMonManager === void 0 ? (_reportPossibleCrUseOfSpawnMonManager({
              error: Error()
            }), SpawnMonManager) : SpawnMonManager).Instance.Init(); //小地图初始化

            (_crd && UIMinimapManager === void 0 ? (_reportPossibleCrUseOfUIMinimapManager({
              error: Error()
            }), UIMinimapManager) : UIMinimapManager).Instance.Init(); //初始化技能提示模型

            for (var i = 0; i < _this.skillTipsPrefabs.length; i++) {
              var node = instantiate(_this.skillTipsPrefabs[i]);
              (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                error: Error()
              }), BattleGlobal) : BattleGlobal).skillTipsMap.put(node.name, node);
            }

            _this.gameStatus = (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).GameIn;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.dispatch((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).OnBattleGameIn);
            var allFrameHandlesStr = (_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
              error: Error()
            }), LocalStorageUtil) : LocalStorageUtil).GetItem((_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
              error: Error()
            }), LocalStorageUtil) : LocalStorageUtil).allFrameHandlesKey);

            if (allFrameHandlesStr) {
              //恢复进度
              console.log('恢复进度');
              _this.allFrameHandles.data = JSON.parse(allFrameHandlesStr).map || {}; //    let this_=this;
              //    this.recProTimer=setInterval(async function(){
              //     await this_.IntervalProgressRecovery(this_);
              //   }, 0);  //2
            }

            var this_ = _this;
            _this.handleFrameTimer = setInterval( /*#__PURE__*/_asyncToGenerator(function* () {
              //处理帧操作
              var handlerFrameResult = yield this_.OnHandlerFrame(); //补帧效验

              this_.RepairFrameRequest(handlerFrameResult);
            }), 0);

            _this.StartMonitorFrame();
          })();
        }
        /**
         * 进度恢复
         */
        // private async IntervalProgressRecovery(this_:this){ 
        //     let handlerFrameResult = await this_.OnHandlerFrame(); 
        //     if(handlerFrameResult == HandlerFrameResult.NoFrameData){  //处理帧操作，处理结束
        //         console.log('进度恢复完成，handleFrameId='+this_.handleFrameId)
        //         clearInterval(this_.recProTimer);
        //        await this_.StartMonitorFrame();
        //     } 
        // }

        /**
         * 开始监听帧事件
         */


        StartMonitorFrame() {
          console.log('StartMonitorFrame');
          this.isAddListener = true;
          var this_ = this;

          if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Battle) {
            //对局模式
            this.timer = setInterval(function () {
              this_.CapturePlayerOpts();
            }, (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
              error: Error()
            }), NetConfig) : NetConfig).frameTime);
          } else if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Live) {//观看直播模式
          } //记录用户请求


          this.recordUserTimer = setInterval(function () {
            if (this_.handleFrameId >= 0) {
              clearInterval(this_.recordUserTimer); // this_.isRecProFlag = false;
            }

            (_crd && BattleService === void 0 ? (_reportPossibleCrUseOfBattleService({
              error: Error()
            }), BattleService) : BattleService).Instance.SendRecordUser();
          }, 1000);
          this.uiGameLoadIn.hide();
        }
        /**
         * 直播帧响应
         * @param param 
         */


        OnLiveFrame(param) {
          // let response = param[0] as LiveFrameResponse;
          var response = param;
          var liveFrames = response.liveFrames;

          for (var i = 0; i < liveFrames.length; i++) {
            var liveFrame = liveFrames[i];
            this.allFrameHandles.put(liveFrame.frame, liveFrame.frameHandles || []);
          } // this.liveNotExecuteFrameCount += liveFrames.length;

        }
        /**
         * 帧操作响应
         */


        OnFrameHandle(param) {
          //计算接收两帧之间的时间间隔
          var currentFrameTime = new Date().getTime();

          if (this.lastReceiveFrameTime != 0 && currentFrameTime - this.lastCheckFrameTime > 3000) {
            //每3秒抽查下
            var ms = currentFrameTime - this.lastReceiveFrameTime;
            this.uiBattle.updateFrameTime(ms);
            this.lastCheckFrameTime = currentFrameTime;
          }

          this.lastReceiveFrameTime = currentFrameTime;
          var response = param;
          var frameId = response.frame;
          this.newFrameId = frameId;

          if (this.newFrameId - 50 > this.handleFrameId) {
            this.uiGameLoadIn.setMsg('游戏进度恢复中...');
            this.uiGameLoadIn.show();
          } else {
            this.uiGameLoadIn.hide();
          } //已经处理的帧


          if (frameId <= this.handleFrameId) {
            return;
          }

          this.allFrameHandles.put(frameId, response.frameHandles || []); //收到帧保存起来
        }
        /**
         * 补帧效验
         * @param handlerFrameResult 
         * @return  是否补帧了
         */


        RepairFrameRequest(handlerFrameResult) {
          if (handlerFrameResult == (_crd && HandlerFrameResult === void 0 ? (_reportPossibleCrUseOfHandlerFrameResult({
            error: Error()
          }), HandlerFrameResult) : HandlerFrameResult).NoFrameData) {
            if (this.currentRepairFrame <= 0) {
              //补帧请求
              var start = this.handleFrameId + 1;
              var end = this.GetEndFrameId(start);

              if (start >= end) {
                return;
              }

              console.log('补帧请求 start=' + start + '，' + end + '，handleFrameId=' + this.handleFrameId);
              (_crd && BattleService === void 0 ? (_reportPossibleCrUseOfBattleService({
                error: Error()
              }), BattleService) : BattleService).Instance.SendRepairFrame(start, end);
              this.currentRepairFrame = this.repairWaitFrameCount;
            } else {
              this.currentRepairFrame--;
            }

            return true;
          }

          this.currentRepairFrame = 0;
          return false;
        }
        /**
         * 获取补帧结束帧
         * @param startFrameId 起始帧
         */


        GetEndFrameId(startFrameId) {
          var frameIds = this.allFrameHandles.keys();
          var minFrameId = undefined; //最小帧

          for (var i = 0; i < frameIds.length; i++) {
            var frameId = parseInt(frameIds[i]) - 1;

            if (frameId > startFrameId && (!minFrameId || minFrameId > frameId)) {
              minFrameId = frameId;
            }
          }

          return minFrameId || startFrameId;
        }
        /**
         * 补帧响应
         */


        OnRepairFrame(param) {
          // let response = param[0] as RepairFrameResponse;
          var response = param; // console.log("OnRepairFrame:{0}", JSON.stringify(response.repairFrames));

          var len = response.repairFrames.length;

          for (var i = 0; i < len; i++) {
            var repairFrame = response.repairFrames[i];
            this.allFrameHandles.put(repairFrame.frame, repairFrame.frameHandles || []);
          }
        }
        /**
         * 处理帧操作
         */


        OnHandlerFrame() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var frameId = _this2.handleFrameId + 1; //获取帧操作集合

            var frameHandles = _this2.allFrameHandles.get(frameId); // console.log(this.allFrameHandles.length+'==='+frameId)
            // console.log('OnHandlerFrame='+frameId+'，'+frameHandles)


            if (!frameHandles) {
              //无帧数据
              return (_crd && HandlerFrameResult === void 0 ? (_reportPossibleCrUseOfHandlerFrameResult({
                error: Error()
              }), HandlerFrameResult) : HandlerFrameResult).NoFrameData;
            }

            if (_this2.executeFrameId >= frameId) {
              console.log('不能重复执行，已经执行的帧：' + _this2.executeFrameId);
              return (_crd && HandlerFrameResult === void 0 ? (_reportPossibleCrUseOfHandlerFrameResult({
                error: Error()
              }), HandlerFrameResult) : HandlerFrameResult).NotRepeatFrame;
            }

            _this2.executeFrameId = frameId; // console.log('frameId='+frameId);
            // console.log('同步英雄')
            //同步英雄

            var characterList = (_crd && CharacterManager === void 0 ? (_reportPossibleCrUseOfCharacterManager({
              error: Error()
            }), CharacterManager) : CharacterManager).Instance.characterList;

            for (var i = 0; i < characterList.length; i++) {
              //遍历所有英雄
              var character = characterList[i];
              var frameHandle = null;

              for (var j = 0; j < frameHandles.length; j++) {
                //遍历所有操作
                var fh = frameHandles[j];

                if (fh.userId == character.user.id) {
                  frameHandle = fh;
                  break;
                }
              }

              var isMove = character.aniState == (_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
                error: Error()
              }), AniState) : AniState).Move; //character.GetAnim(AniState.Move);
              //    console.log('isMove='+isMove)
              // let animationState = character.animationComponent.getState(AniState[AniState.Move]);

              if (!frameHandle) {
                //用户无操作
                if (character.notHandleFrameCount > 3) {
                  // if(animationState.isPlaying){
                  //     console.log('用户id：'+character.user.id+'，停止动画')
                  //     animationState.stop();
                  //     character.animationComponent.play(AniState[AniState.Idle]);
                  // }
                  if (isMove) {
                    console.log('用户id：' + character.user.id + '，停止动画');
                    character.SetAnim((_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
                      error: Error()
                    }), AniState) : AniState).Idle, true);
                  }

                  character.notHandleFrameCount = 0;
                } else {
                  character.notHandleFrameCount++;
                }
              } else {
                character.notHandleFrameCount = 0; //摇杆操作

                if (frameHandle.opt == (_crd && OptType === void 0 ? (_reportPossibleCrUseOfOptType({
                  error: Error()
                }), OptType) : OptType).Rocker) {
                  //   console.log('摇杆操作')
                  var angle = frameHandle.optValue1 || 0;
                  character.RotateHandle(angle);
                  var logicPosition = character.logicPosition;
                  var rockerSpeedVo = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                    error: Error()
                  }), DataManager) : DataManager).Instance.rockerSpeeds[character.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                    error: Error()
                  }), TeamType2) : TeamType2).Red ? angle + 180 : Math.abs(angle)];

                  if (!rockerSpeedVo) {
                    console.log('rockerSpeedVo不存在!' + frameHandle.opt + '===' + angle + '==' + (character.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                      error: Error()
                    }), TeamType2) : TeamType2).Red ? angle + 180 : Math.abs(angle)));
                    continue;
                  } // console.log('Speed='+character.attributes.Speed)


                  var vx = logicPosition.x + (character.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                    error: Error()
                  }), TeamType2) : TeamType2).Red ? -1 : 1) * rockerSpeedVo.x * character.attributes.Speed;
                  var vz = logicPosition.z + (character.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                    error: Error()
                  }), TeamType2) : TeamType2).Red ? -1 : 1) * rockerSpeedVo.y * character.attributes.Speed; // console.log('forward x:'+forward.x+'，z:'+forward.z+'，speed:'+character.user.character.speedValue)

                  character.LogicToRenderPosition(vx, logicPosition.y, vz); //    if(!animationState.isPlaying){  //非播放状态
                  //       animationState.play();
                  //    }

                  if (!isMove) {
                    //非播放状态
                    console.log('Move 执行=' + (_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
                      error: Error()
                    }), AniState) : AniState)[(_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
                      error: Error()
                    }), AniState) : AniState).Move]);
                    character.SetAnim((_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
                      error: Error()
                    }), AniState) : AniState).Move, true);
                  }
                } else if (frameHandle.opt == (_crd && OptType === void 0 ? (_reportPossibleCrUseOfOptType({
                  error: Error()
                }), OptType) : OptType).Skill) {
                  //攻击
                  console.log('攻击服务器确认');
                  var skillId = frameHandle.optValue1;
                  var _angle = frameHandle.optValue4;
                  var skill = character.SkillMgr.GetSkill(skillId);
                  var context = new (_crd && BattleContext === void 0 ? (_reportPossibleCrUseOfBattleContext({
                    error: Error()
                  }), BattleContext) : BattleContext)(skillId, character);

                  if (skill.Define.CastTarget.toString() != (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                    error: Error()
                  }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                    error: Error()
                  }), TargetType) : TargetType).RangeTarget]) {
                    //非范围目标
                    context.dirDegree = character.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                      error: Error()
                    }), TeamType2) : TeamType2).Blue ? _angle + 180 : _angle - 180 < 0 ? _angle - 180 + 360 : _angle - 180;
                    console.log('dirDegree=' + context.dirDegree + '，character angle=' + character.logicRotation.y); //角色旋转

                    character.RotateHandle(context.dirDegree);
                  }

                  if (skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                    error: Error()
                  }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                    error: Error()
                  }), TargetType) : TargetType).SelectedRange]) {
                    //选择范围
                    context.positionX = frameHandle.optValue2;
                    context.positionZ = frameHandle.optValue3;
                  } // else if(skill.Define.CastTarget.toString() == TargetType[TargetType.StraightLine] || 
                  //          skill.Define.CastTarget.toString() == TargetType[TargetType.Dir] || 
                  //          skill.Define.CastTarget.toString() == TargetType[TargetType.Sector]){ //直线、方向、扇形
                  // }


                  character.CastSkill(context, skill);
                } else {
                  // if(animationState.isPlaying){
                  //     animationState.stop();
                  //     character.animationComponent.play(AniState[AniState.Idle]);
                  // }
                  if (isMove) {
                    console.log('用户id：' + character.user.id + '，停止动画');
                    character.SetAnim((_crd && AniState === void 0 ? (_reportPossibleCrUseOfAniState({
                      error: Error()
                    }), AniState) : AniState).Idle, true);
                  }
                }
              }
            } // console.log(frameId)
            // 同步生物逻辑


            var creatureList = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
              error: Error()
            }), CreatureManager) : CreatureManager).Instance.creatureMap.values();

            for (var _i = 0; _i < creatureList.length; _i++) {
              var creature = creatureList[_i];
              creature.LogicUpdate(frameId);
            } //同步刷怪管理器


            yield (_crd && SpawnMonManager === void 0 ? (_reportPossibleCrUseOfSpawnMonManager({
              error: Error()
            }), SpawnMonManager) : SpawnMonManager).Instance.LogicUpdate(frameId);
            _this2.handleFrameId = frameId; //更新已经同步的帧
            //缓存帧数据

            if (frameId % 15 == 0) {
              (_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
                error: Error()
              }), LocalStorageUtil) : LocalStorageUtil).SetItem((_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
                error: Error()
              }), LocalStorageUtil) : LocalStorageUtil).allFrameHandlesKey, JSON.stringify(_this2.allFrameHandles));
            }

            return (_crd && HandlerFrameResult === void 0 ? (_reportPossibleCrUseOfHandlerFrameResult({
              error: Error()
            }), HandlerFrameResult) : HandlerFrameResult).Success;
          })();
        }

        /**
         * 相机跟随主角
         */
        CameraLookAtCharacter(dt) {
          //摄像机跟随自己
          if (this.currentCharacter) {
            var yValue = 8;
            var zValue = 10;
            var yAngle = 0;
            var xAngle = -35;
            var zAngle = 0;

            if (this.currentCharacter.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
              error: Error()
            }), TeamType2) : TeamType2).Red) {
              //红队
              zValue = -zValue;
              yAngle = 180; // zAngle = 180;
            } //y轴旋转


            this.camera.setRotationFromEuler(xAngle, yAngle, zAngle);
            this.currentCharacter.node.parent.getWorldPosition(this.characterWorldPosition);
            this.characterWorldPosition.set(this.characterWorldPosition.x, this.characterWorldPosition.y + yValue, this.characterWorldPosition.z + zValue); //相机位置=》插值
            // this.camera.setWorldPosition(MathUtil.lerp(this.camera.worldPosition, this.characterWorldPosition, dt * 1000, NetConfig.frameTime));

            this.camera.setWorldPosition(this.characterWorldPosition); // console.log('scale='+this.camera.scale)
            //相机和主角的距离

            this.camCharDis = Vec3.distance(this.currentCharacter.node.worldPosition, this.camera.worldPosition); // console.log('cameraPos='+this.camera.worldPosition+'，cameraRotation='+this.camera.rotation.x+','+this.camera.rotation.y+','
            // +this.camera.rotation.z+','+this.camera.rotation.w)
          }
        }
        /**
         * 采集玩家操作
         */


        CapturePlayerOpts() {
          //无操作
          if (this.frameHandle.opt == (_crd && OptType === void 0 ? (_reportPossibleCrUseOfOptType({
            error: Error()
          }), OptType) : OptType).None) {
            return;
          } // LogUtil.log(this.frameHandle);
          //发送操作


          (_crd && BattleService === void 0 ? (_reportPossibleCrUseOfBattleService({
            error: Error()
          }), BattleService) : BattleService).Instance.SendFrameHandle(this.frameHandle);
          this.frameHandle.opt = (_crd && OptType === void 0 ? (_reportPossibleCrUseOfOptType({
            error: Error()
          }), OptType) : OptType).None;
          this.frameHandle.optValue1 = 0;
          this.frameHandle.optValue2 = 0;
          this.frameHandle.optValue3 = 0;
        }

        update(dt) {
          //更新战斗存放道具节点
          if (this.currentCharacter) {
            this.MyBattleItemNode.setWorldPosition(this.currentCharacter.renderPosition);
          }

          (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
            error: Error()
          }), CreatureManager) : CreatureManager).Instance.update(dt);

          if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Battle || this.isLookAtCharacterFlag) {
            //对局模式
            this.CameraLookAtCharacter();
          }

          (_crd && SpawnMonManager === void 0 ? (_reportPossibleCrUseOfSpawnMonManager({
            error: Error()
          }), SpawnMonManager) : SpawnMonManager).Instance.update(dt);
        }

        onDestroy() {
          console.log('BattleManager onDestroy');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
          clearInterval(this.timer);
          clearInterval(this.recProTimer);
          clearInterval(this.recordUserTimer);
          clearInterval(this.handleFrameTimer);
          BattleManager.Instance = null;
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MyTeam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "EnemyTeam", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spawnMonsterNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "npcMoveWayNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skillTipsPrefabs", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "MyBattleItemNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "AllBattleEffectsNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "uiBattle", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "uiGameLoadIn", [_dec11], {
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
//# sourceMappingURL=BattleManager.js.map