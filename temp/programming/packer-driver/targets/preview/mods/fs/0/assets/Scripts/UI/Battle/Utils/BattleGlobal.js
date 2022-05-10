System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HashMap, RoomService, BattleMode, DataManager, User, proto, ParticleSystem, BattleGlobal, _crd, ChatMessage, ChatChannel;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../../../Utils/HashMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomService(extras) {
    _reporterNs.report("RoomService", "../../../Services/RoomService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMode(extras) {
    _reporterNs.report("BattleMode", "../enums/BattleMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../../../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../Proto/proto.js", _context.meta, extras);
  }

  _export("BattleGlobal", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      ParticleSystem = _cc.ParticleSystem;
    }, function (_unresolved_2) {
      HashMap = _unresolved_2.HashMap;
    }, function (_unresolved_3) {
      RoomService = _unresolved_3.RoomService;
    }, function (_unresolved_4) {
      BattleMode = _unresolved_4.BattleMode;
    }, function (_unresolved_5) {
      DataManager = _unresolved_5.DataManager;
    }, function (_unresolved_6) {
      User = _unresolved_6.User;
    }, function (_unresolved_7) {
      proto = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54e50JwQ5ZPxogsSO0zkOQk", "BattleGlobal", undefined);

      ({
        ChatMessage,
        ChatChannel
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      /**
       * 对战变量
       */

      _export("BattleGlobal", BattleGlobal = class BattleGlobal {
        //蓝队镖车
        //红队镖车
        //技能提示模型 key：技能提示类型名称字符串   value：技能模型
        //对局模式
        //目标直播用户id

        /** 蓝队成绩 */
        static get BlueScore() {
          return this.blueScore;
        }
        /**
         * 更新蓝队比分
         */


        static UpdateBlueScore() {
          this.blueScore++;
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendUploadBiFen(this.blueScore + ':' + this.redScore); //上传比分
        }
        /** 红队成绩 */


        static get RedScore() {
          return this.redScore;
        }
        /**
         * 更新红队比分
         */


        static UpdateRedScore() {
          this.redScore++;
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendUploadBiFen(this.blueScore + ':' + this.redScore); //上传比分
        }

        static clear() {
          this.blueScore = 0;
          this.redScore = 0;
          this.blueCart = null;
          this.redCart = null;
          this.skillTipsMap.clear();
        }
        /**
        * 获取对战消息文本内容
        * @param chatMessage 消息对象
        * @param enterFontCount 换行字数  -1代表不手动换行
        * @param index 0、我方  1、观看直播粉丝
        */


        static getBattleMsgContent(chatMessage, enterFontCount, index) {
          var characterDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.characters[chatMessage.fromCCharacterId];
          var name = '';
          var nameStr = '';

          if (BattleGlobal.battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Battle && (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.id == chatMessage.fromId || BattleGlobal.battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Live && chatMessage.fromId == chatMessage.enterLiveUserId) {
            //自己玩家或被关注者
            name = chatMessage.fromName + '(' + characterDefine.Name + '):';
            nameStr = '<color=#FF1493>' + name + '</color>';
          } else if (index == 0) {
            //我方玩家
            name = chatMessage.fromName + '(' + characterDefine.Name + '):';
            nameStr = '<color=#4169E1>' + name + '</color>';
          } else if (index == 1 && BattleGlobal.battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Battle) {
            //粉丝
            name = '(粉丝)' + chatMessage.fromName + ':';
            nameStr = '<color=#4169E1>' + name + '</color>';
          } else if (index == 1 && BattleGlobal.battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
            error: Error()
          }), BattleMode) : BattleMode).Live) {
            //游客
            name = '(游客)' + chatMessage.fromName + ':';
            nameStr = '<color=#4169E1>' + name + '</color>';
          }

          var contentStr = '';

          if (enterFontCount < 0) {
            contentStr = chatMessage.msg;
          } else {
            var i = name.length;

            for (var char of chatMessage.msg) {
              i++;

              if (i % enterFontCount == 0) {
                //换行
                char += '\n';
              }

              contentStr += char;
            }
          } // console.log('contentStr='+contentStr)


          return nameStr + '<color=#ffffff>' + contentStr + '</color>';
        }
        /**
         * 播放粒子特效
         */


        static playParticleEffect(node) {
          node.active = true;
          var particleSystem = node.getComponent(ParticleSystem);

          if (particleSystem) {
            particleSystem.stop();
            particleSystem.clear();
            particleSystem.play(); // particleSystem.pause();
            // particleSystem.play();
          }

          var childrenList = node.children;

          for (var i = 0; i < childrenList.length; i++) {
            this.playParticleEffect(childrenList[i]);
          }
        }

      });

      _defineProperty(BattleGlobal, "blueCart", void 0);

      _defineProperty(BattleGlobal, "redCart", void 0);

      _defineProperty(BattleGlobal, "skillTipsMap", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
        error: Error()
      }), HashMap) : HashMap)());

      _defineProperty(BattleGlobal, "battleMode", void 0);

      _defineProperty(BattleGlobal, "targetLiveUserId", void 0);

      _defineProperty(BattleGlobal, "blueScore", 0);

      _defineProperty(BattleGlobal, "redScore", 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleGlobal.js.map