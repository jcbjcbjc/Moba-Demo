System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, systemEvent, SystemEvent, Vec2, Label, SpriteFrame, Sprite, SystemEventType, RichText, Prefab, view, director, UITransform, EventManager, proto, proto2, BattleService, EventType, DataManager, TeamType2, MathUtil, BattleManager, RoomService, LocalStorageUtil, BattleGlobal, BattleMode, ChatManager, UILiveMsg, RandomUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp, _crd, ccclass, property, FrameHandle, FrameHandleResponse, RepairFrameResponse, TeamType, HeartBeatResponse, ChatChannel, UIBattle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/Battle/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto2(extras) {
    _reporterNs.report("proto2", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleService(extras) {
    _reporterNs.report("BattleService", "../../Services/BattleService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "./enums/TeamType2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "./Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomService(extras) {
    _reporterNs.report("RoomService", "../../Services/RoomService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorageUtil(extras) {
    _reporterNs.report("LocalStorageUtil", "../../Utils/LocalStorageUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "./Utils/BattleGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMode(extras) {
    _reporterNs.report("BattleMode", "./enums/BattleMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatManager(extras) {
    _reporterNs.report("ChatManager", "../../Managers/ChatManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILiveMsg(extras) {
    _reporterNs.report("UILiveMsg", "./UILiveMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandomUtil(extras) {
    _reporterNs.report("RandomUtil", "./Utils/RandomUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Vec2 = _cc.Vec2;
      Label = _cc.Label;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      SystemEventType = _cc.SystemEventType;
      RichText = _cc.RichText;
      Prefab = _cc.Prefab;
      view = _cc.view;
      director = _cc.director;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      proto2 = _unresolved_4.default;
    }, function (_unresolved_5) {
      BattleService = _unresolved_5.BattleService;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }, function (_unresolved_7) {
      DataManager = _unresolved_7.DataManager;
    }, function (_unresolved_8) {
      TeamType2 = _unresolved_8.TeamType2;
    }, function (_unresolved_9) {
      MathUtil = _unresolved_9.MathUtil;
    }, function (_unresolved_10) {
      BattleManager = _unresolved_10.BattleManager;
    }, function (_unresolved_11) {
      RoomService = _unresolved_11.RoomService;
    }, function (_unresolved_12) {
      LocalStorageUtil = _unresolved_12.LocalStorageUtil;
    }, function (_unresolved_13) {
      BattleGlobal = _unresolved_13.BattleGlobal;
    }, function (_unresolved_14) {
      BattleMode = _unresolved_14.BattleMode;
    }, function (_unresolved_15) {
      ChatManager = _unresolved_15.ChatManager;
    }, function (_unresolved_16) {
      UILiveMsg = _unresolved_16.UILiveMsg;
    }, function (_unresolved_17) {
      RandomUtil = _unresolved_17.RandomUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a140dbZNx5EN5Hq6acizT1K", "UIBattle", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        FrameHandle,
        FrameHandleResponse,
        RepairFrameResponse
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      ({
        TeamType,
        HeartBeatResponse,
        ChatChannel
      } = _crd && proto2 === void 0 ? (_reportPossibleCrUseOfproto2({
        error: Error()
      }), proto2) : proto2);

      _export("UIBattle", UIBattle = (_dec = ccclass('UIBattle'), _dec2 = property(Node), _dec3 = property([Node]), _dec4 = property(Label), _dec5 = property([SpriteFrame]), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Sprite), _dec12 = property(RichText), _dec13 = property(Prefab), _dec14 = property(Label), _dec(_class = (_class2 = (_temp = class UIBattle extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GameOverNode", _descriptor, this);

          _initializerDefineProperty(this, "controlActiveNodeArr", _descriptor2, this);

          _initializerDefineProperty(this, "FenSiCountLabel", _descriptor3, this);

          _initializerDefineProperty(this, "networkSpriteFrameArr", _descriptor4, this);

          _initializerDefineProperty(this, "networkSprite", _descriptor5, this);

          _initializerDefineProperty(this, "networkLabel", _descriptor6, this);

          _initializerDefineProperty(this, "fpsLabel", _descriptor7, this);

          _initializerDefineProperty(this, "ChatUI", _descriptor8, this);

          _initializerDefineProperty(this, "LiveChatUI", _descriptor9, this);

          _initializerDefineProperty(this, "chatBtnSprite", _descriptor10, this);

          _initializerDefineProperty(this, "myChatLastRichText", _descriptor11, this);

          _initializerDefineProperty(this, "uiLiveMsg", _descriptor12, this);

          _initializerDefineProperty(this, "handleFrameLabel", _descriptor13, this);

          _defineProperty(this, "startMoveVec2", new Vec2());

          _defineProperty(this, "currentMoveVec2", new Vec2());

          _defineProperty(this, "isMoveFlag", false);

          _defineProperty(this, "moveTime", 0);

          _defineProperty(this, "isEndFlag", false);

          _defineProperty(this, "lastUpdateTime", 0);

          _defineProperty(this, "frameJgMs", 0);

          _defineProperty(this, "liveMsgPoolList", []);

          _defineProperty(this, "windowSize", null);

          _defineProperty(this, "moveLiveMsgList", []);
        }

        //移动直播消息集合
        start() {
          this.windowSize = view.getCanvasSize();
          this.GameOverNode.active = false;

          if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Battle) {
            //对局模式
            this.FenSiCountLabel.node.active = true;
            this.networkSprite.node.active = true;
            this.networkLabel.node.active = true;
            this.fpsLabel.node.active = true;
          } else if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Live) {
            //观看直播模式
            this.FenSiCountLabel.node.active = false;
            this.networkSprite.node.active = false;
            this.networkLabel.node.active = false;
            this.fpsLabel.node.active = false;
          }

          for (let i = 0; i < this.controlActiveNodeArr.length; i++) {
            let node = this.controlActiveNodeArr[i];

            if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
              error: Error()
            }), BattleMode) : BattleMode).Battle) {
              //对局模式
              node.active = true;
            } else if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
              error: Error()
            }), BattleMode) : BattleMode).Live) {
              //观看直播模式
              node.active = false;
            }
          }

          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.OnTouchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.OnTouchMove, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.OnTouchEnd, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnHeartBeat_UI, this.OnHeartBeatUI, this); //我方消息与粉丝消息

          this.ChatUI.active = false;
          this.LiveChatUI.active = false;
          this.chatBtnSprite.node.on(SystemEventType.TOUCH_END, this.OnChatClick, this); //更新我方最后一次消息

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OnChat_UI, this.OnChat_UI, this);
          this.updateMyChatLastRichText();
        }
        /**
         * 收到消息更新
         * @param param 
         */


        OnChat_UI(param) {
          let channel = param[0];

          if (channel == ChatChannel.RoomChat) {
            //房间
            this.updateMyChatLastRichText();
            this.updateLiveChatLastMsg();
          }
        }
        /**
         * 更新我方最后一次消息
         */


        updateMyChatLastRichText() {
          let len = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.gameMessages.length;

          if (len > 0) {
            let chatMessage = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.gameMessages[len - 1];
            this.myChatLastRichText.string = (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).getBattleMsgContent(chatMessage, 50, 0);
          }
        }
        /**
         * 更新直播最后一次消息
         */


        updateLiveChatLastMsg() {
          let len = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
            error: Error()
          }), ChatManager) : ChatManager).Instance.liveMessages.length;

          if (len > 0) {
            var _director$getScene;

            let chatMessage = (_crd && ChatManager === void 0 ? (_reportPossibleCrUseOfChatManager({
              error: Error()
            }), ChatManager) : ChatManager).Instance.liveMessages[len - 1];
            let liveMsgStr = (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).getBattleMsgContent(chatMessage, 50, 1);
            let node = null;

            if (this.liveMsgPoolList.length > 0) {
              node = this.liveMsgPoolList.shift();
              console.log('缓存取，剩余len=' + this.liveMsgPoolList.length);
            } else {
              node = instantiate(this.uiLiveMsg);
            } //设置内容


            let uiLiveMsg = node.getComponent(_crd && UILiveMsg === void 0 ? (_reportPossibleCrUseOfUILiveMsg({
              error: Error()
            }), UILiveMsg) : UILiveMsg);
            uiLiveMsg.Text = liveMsgStr;
            let heightRange = this.windowSize.height / 2 - 30; //高度正负范围随机

            uiLiveMsg.richText.node.setPosition(this.windowSize.width / 2, (_crd && RandomUtil === void 0 ? (_reportPossibleCrUseOfRandomUtil({
              error: Error()
            }), RandomUtil) : RandomUtil).limit2(0, heightRange), 0);
            console.log('直播消息 pos=' + uiLiveMsg.richText.node.position);
            (_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.addChild(node);
            this.moveLiveMsgList.push(node);
          }
        }
        /**
         * 点击聊天
         */


        OnChatClick() {
          if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Battle) {
            //对局模式
            this.ChatUI.active = !this.ChatUI.active;
          } else if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Live) {
            //观看直播模式
            this.LiveChatUI.active = !this.LiveChatUI.active;
          }
        }
        /**
         * 更新间隔帧时间
         * @param frameTime 间隔帧时间
         */


        updateFrameTime(frameTime) {
          this.networkLabel.string = frameTime + 'ms'; //设置图标

          let index = 0;

          if (frameTime < 80) {
            index = 5;
          } else if (frameTime >= 80 && frameTime < 90) {
            index = 4;
          } else if (frameTime >= 90 && frameTime < 100) {
            index = 3;
          } else if (frameTime >= 100 && frameTime < 110) {
            index = 2;
          } else if (frameTime >= 110 && frameTime < 120) {
            index = 1;
          } else if (frameTime >= 120) {
            index = 0;
          }

          this.networkSprite.spriteFrame = this.networkSpriteFrameArr[index];
          this.fpsLabel.string = 'FPS：' + Math.floor(1000 / this.frameJgMs);
          console.log('frameJgMs=' + this.frameJgMs);
        }
        /**
         * 心跳响应
         */


        OnHeartBeatUI(param) {
          let response = param[0];
          this.FenSiCountLabel.string = '粉丝数：' + response.liveFenSiCount;
        }
        /**
         * 触摸开始
         */


        OnTouchStart(e) {
          e.getStartLocation(this.startMoveVec2); //开始移动点
        }
        /**
         * 触摸移动
         */


        OnTouchMove(e) {
          if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
            error: Error()
          }), BattleGlobal) : BattleGlobal).battleMode != (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Live) {
            //非观看直播模式
            return;
          }

          e.getLocation(this.currentMoveVec2); //当前移动点

          this.isMoveFlag = true; //移动了

          (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.isLookAtCharacterFlag = false;
          this.moveTime = new Date().getTime(); //控制按钮移动位置
          //    let len=MathUtil.GetDistance(this.startMoveVec2.x, this.startMoveVec2.y, this.currentMoveVec2.x, this.currentMoveVec2.y);

          let angle = Math.round((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetAngle(this.currentMoveVec2.y - this.startMoveVec2.y, this.currentMoveVec2.x - this.startMoveVec2.x));
          let teamType2 = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.currentCharacter.teamType2;

          if (teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Red) {
            //红队
            angle = 180 - angle;
          } else {
            angle = -angle;
          }

          let rockerSpeedVo = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.rockerSpeeds[teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue ? angle + 180 : Math.abs(angle)];

          if (!rockerSpeedVo) {
            console.log('rockerSpeedVo不存在!' + '===' + angle + '==' + (teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
              error: Error()
            }), TeamType2) : TeamType2).Blue ? angle + 180 : Math.abs(angle)));
            return;
          }

          let cameraPos = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.camera.worldPosition;
          let speed = 2.5;
          let vx = cameraPos.x + (teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue ? -1 : 1) * (rockerSpeedVo.x * 0.001) * speed;
          let vz = cameraPos.z + (teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue ? -1 : 1) * (rockerSpeedVo.y * 0.001) * speed;
          (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.camera.setWorldPosition(vx, cameraPos.y, vz);
          this.startMoveVec2.set(this.currentMoveVec2.x, this.currentMoveVec2.y);
        }
        /**
         * 触摸结束
         */


        OnTouchEnd(e) {
          this.isEndFlag = true;
        }

        update() {
          this.handleFrameLabel.string = '当前逻辑帧数：' + (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.handleFrameId; //计算两帧间隔毫秒数

          let currentTime = new Date().getTime();

          if (this.lastUpdateTime != 0) {
            this.frameJgMs = currentTime - this.lastUpdateTime;
          }

          this.lastUpdateTime = currentTime; //摄像机结束移动后5秒跟随主角

          if (this.isEndFlag && this.isMoveFlag) {
            let jgTime = (new Date().getTime() - this.moveTime) / 1000; //距离最后一次移动间隔时间(s)

            if (jgTime >= 5) {
              //滑动到角色
              this.isEndFlag = false;
              this.isMoveFlag = false;
              (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                error: Error()
              }), BattleManager) : BattleManager).Instance.isLookAtCharacterFlag = true;
            }
          } //移动直播消息


          if (this.moveLiveMsgList.length > 0) {
            for (let i = 0; i < this.moveLiveMsgList.length; i++) {
              let node = this.moveLiveMsgList[i];
              let richTextNode = node.getComponent(_crd && UILiveMsg === void 0 ? (_reportPossibleCrUseOfUILiveMsg({
                error: Error()
              }), UILiveMsg) : UILiveMsg).richText.node;
              let richTextWidth = richTextNode.getComponent(UITransform).contentSize.width; //文字宽

              let pos = richTextNode.position;
              let x = pos.x - 1;
              richTextNode.setPosition(x, pos.y, pos.z);

              if (x < -(this.windowSize.width / 2) - richTextWidth) {
                var _director$getScene2;

                //超出屏幕
                console.log('超出屏幕移除');
                (_director$getScene2 = director.getScene()) === null || _director$getScene2 === void 0 ? void 0 : _director$getScene2.removeChild(node);
                this.liveMsgPoolList.push(node); //回收对象池

                this.moveLiveMsgList.splice(i, 1);
              }
            }
          }
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.removeAll(this);
        }
        /**
         * 点击游戏结束
         */


        OnClickGameOver() {
          (_crd && BattleService === void 0 ? (_reportPossibleCrUseOfBattleService({
            error: Error()
          }), BattleService) : BattleService).Instance.SendGameOver();
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendGameOver2();
          this.GameOverNode.active = true;
        }
        /**
         * 打印结果
         */


        OnClickPrintResult() {
          let allFrameHandlesStr = (_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
            error: Error()
          }), LocalStorageUtil) : LocalStorageUtil).GetItem((_crd && LocalStorageUtil === void 0 ? (_reportPossibleCrUseOfLocalStorageUtil({
            error: Error()
          }), LocalStorageUtil) : LocalStorageUtil).allFrameHandlesKey);
          console.log(allFrameHandlesStr);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameOverNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "controlActiveNodeArr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "FenSiCountLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "networkSpriteFrameArr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "networkSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "networkLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "fpsLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ChatUI", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "LiveChatUI", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "chatBtnSprite", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "myChatLastRichText", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "uiLiveMsg", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "handleFrameLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIBattle.js.map