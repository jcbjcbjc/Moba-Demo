System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TeamType2, instantiate, LoadResUtil, DataManager, CreatureManager, User, BattleManager, Creature, CreatureType, BattleGlobal, BattleMode, CharacterManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "../enums/TeamType2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureManager(extras) {
    _reporterNs.report("CreatureManager", "./CreatureManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../../../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "./BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureType(extras) {
    _reporterNs.report("CreatureType", "../enums/CreatureType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "../Utils/BattleGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMode(extras) {
    _reporterNs.report("BattleMode", "../enums/BattleMode", _context.meta, extras);
  }

  _export("CharacterManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      TeamType2 = _unresolved_2.TeamType2;
    }, function (_unresolved_3) {
      LoadResUtil = _unresolved_3.LoadResUtil;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      CreatureManager = _unresolved_5.CreatureManager;
    }, function (_unresolved_6) {
      User = _unresolved_6.User;
    }, function (_unresolved_7) {
      BattleManager = _unresolved_7.BattleManager;
    }, function (_unresolved_8) {
      Creature = _unresolved_8.Creature;
    }, function (_unresolved_9) {
      CreatureType = _unresolved_9.CreatureType;
    }, function (_unresolved_10) {
      BattleGlobal = _unresolved_10.BattleGlobal;
    }, function (_unresolved_11) {
      BattleMode = _unresolved_11.BattleMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8802b+mHy5AiKgLLkXtksDA", "CharacterManager", undefined);

      /**
       * 角色管理器
       */
      _export("CharacterManager", CharacterManager = class CharacterManager {
        constructor() {
          _defineProperty(this, "characterList", []);
        }

        /**
        * 添加角色
        * @param Creature
        */
        AddCharacter(character) {
          this.characterList.push(character);
        }
        /**
         * 清空
         */


        Clear() {
          this.characterList = [];
        }
        /**
         * 创建角色
         */


        async CreateCharacter(teamType2) {
          let teamArr = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue == teamType2 ? (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.MyTeam : (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.EnemyTeam;
          let roomUsers = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue == teamType2 ? (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.room.my : (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.room.enemy;

          for (let i = 0; i < teamArr.length; i++) {
            let characterNode = teamArr[i];

            if (!roomUsers[i]) {
              return;
            }

            let cId = roomUsers[i].cCharacterId;
            let characterDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.characters[cId];
            let resource = characterDefine.Resource;
            console.log('cId=' + cId + ',resource=' + resource);
            let prefab = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).loadPrefab(resource);
            let node = instantiate(prefab);
            characterNode.addChild(node); //创建角色

            let character = new (_crd && Creature === void 0 ? (_reportPossibleCrUseOfCreature({
              error: Error()
            }), Creature) : Creature)(teamType2, node, characterDefine, roomUsers[i].user, (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
              error: Error()
            }), CreatureType) : CreatureType).Character);
            (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
              error: Error()
            }), CreatureManager) : CreatureManager).Instance.AddCreature(node, character);
            CharacterManager.Instance.AddCharacter(character); //当前角色

            if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
              error: Error()
            }), BattleMode) : BattleMode).Battle) {
              //对局模式
              if ((_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
                error: Error()
              }), User) : User).Instance.user.id == character.user.id) {
                (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                  error: Error()
                }), BattleManager) : BattleManager).Instance.currentCharacter = character;
              }
            } else if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).battleMode == (_crd && BattleMode === void 0 ? (_reportPossibleCrUseOfBattleMode({
              error: Error()
            }), BattleMode) : BattleMode).Live) {
              //观看直播模式
              if ((_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                error: Error()
              }), BattleGlobal) : BattleGlobal).targetLiveUserId == character.user.id) {
                (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                  error: Error()
                }), BattleManager) : BattleManager).Instance.currentCharacter = character;
              }
            }
          }
        }

      });

      _defineProperty(CharacterManager, "Instance", new CharacterManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CharacterManager.js.map