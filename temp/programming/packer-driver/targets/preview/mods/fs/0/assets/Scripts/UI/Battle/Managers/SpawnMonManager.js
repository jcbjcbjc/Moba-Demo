System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleManager, DataManager, LoadResUtil, instantiate, Node, Vec3, CreatureManager, TeamType2, DataUtil, proto, Creature, CreatureType, MathUtil, PositionVo, HashMap, BattleGlobal, SpawnMonManager, _crd, CharacterClass;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "./BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpawnRuleDefine(extras) {
    _reporterNs.report("SpawnRuleDefine", "../../../Data/SpawnRuleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureManager(extras) {
    _reporterNs.report("CreatureManager", "./CreatureManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "../enums/TeamType2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataUtil(extras) {
    _reporterNs.report("DataUtil", "../../../Utils/DataUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterDefine(extras) {
    _reporterNs.report("CharacterDefine", "../../../Data/CharacterDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureType(extras) {
    _reporterNs.report("CreatureType", "../enums/CreatureType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPositionVo(extras) {
    _reporterNs.report("PositionVo", "../Vo/PositionVo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../../../Utils/HashMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "../Utils/BattleGlobal", _context.meta, extras);
  }

  _export("SpawnMonManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BattleManager = _unresolved_2.BattleManager;
    }, function (_unresolved_3) {
      DataManager = _unresolved_3.DataManager;
    }, function (_unresolved_4) {
      LoadResUtil = _unresolved_4.LoadResUtil;
    }, function (_unresolved_5) {
      CreatureManager = _unresolved_5.CreatureManager;
    }, function (_unresolved_6) {
      TeamType2 = _unresolved_6.TeamType2;
    }, function (_unresolved_7) {
      DataUtil = _unresolved_7.DataUtil;
    }, function (_unresolved_8) {
      proto = _unresolved_8.default;
    }, function (_unresolved_9) {
      Creature = _unresolved_9.Creature;
    }, function (_unresolved_10) {
      CreatureType = _unresolved_10.CreatureType;
    }, function (_unresolved_11) {
      MathUtil = _unresolved_11.MathUtil;
    }, function (_unresolved_12) {
      PositionVo = _unresolved_12.PositionVo;
    }, function (_unresolved_13) {
      HashMap = _unresolved_13.HashMap;
    }, function (_unresolved_14) {
      BattleGlobal = _unresolved_14.BattleGlobal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "baecbLUlP9NRrhmjObKG9c0", "SpawnMonManager", undefined);

      ({
        CharacterClass
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      /**
       * 刷怪管理器
       */

      _export("SpawnMonManager", SpawnMonManager = class SpawnMonManager {
        constructor() {
          _defineProperty(this, "noticeSpawnRuleId", 0);

          _defineProperty(this, "soldierCreateCount", 0);

          _defineProperty(this, "soldierCreateFrameId", 0);

          _defineProperty(this, "blueSoldierPosList", []);

          _defineProperty(this, "redSoldierPosList", []);

          _defineProperty(this, "soldierCreateIndex", 0);

          _defineProperty(this, "soldierCharacterDefineList", []);

          _defineProperty(this, "blueCartNode", void 0);

          _defineProperty(this, "redCartNode", void 0);

          _defineProperty(this, "noticeMonList", []);

          _defineProperty(this, "monMap", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());

          _defineProperty(this, "blueSoldierMap", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());

          _defineProperty(this, "redSoldierMap", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());

          _defineProperty(this, "soldierCardDir", 0);

          _defineProperty(this, "soldierCreateWaveCount", 0);
        }

        //创建波数

        /**
         * 初始化，在各个刷怪点，创建怪物
         */
        Init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.noticeSpawnRuleId = 0;
            _this.soldierCreateCount = 0;
            _this.soldierCreateFrameId = 0;
            _this.blueSoldierPosList = [];
            _this.redSoldierPosList = [];
            _this.soldierCreateIndex = 0;
            _this.soldierCardDir = 0;
            _this.soldierCreateWaveCount = 0;

            _this.monMap.clear(); // this.blueSoldierMap.clear();
            // this.redSoldierMap.clear();


            _this.blueCartNode = null;
            _this.redCartNode = null;
            _this.soldierCharacterDefineList = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
              error: Error()
            }), DataUtil) : DataUtil).queryCharactersByClass(CharacterClass.Soldier); //镖车提前创建

            var cartCharacterDefine = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
              error: Error()
            }), DataUtil) : DataUtil).queryCharactersByClass(CharacterClass.Cart)[0];

            if (!_this.blueCartNode) {
              var prefab = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).loadPrefab(cartCharacterDefine.Resource);
              _this.blueCartNode = instantiate(prefab);
            }

            if (!_this.redCartNode) {
              var _prefab = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).loadPrefab(cartCharacterDefine.RedResource);

              _this.redCartNode = instantiate(_prefab);
            }

            _this.noticeMonList = []; //公告怪物提前创建，用一个移除一个

            var noticeMonsterCharacterDefineList = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
              error: Error()
            }), DataUtil) : DataUtil).queryCharactersByClass(CharacterClass.NoticeMonsters);

            for (var noticeMonsterCharacterDefine of noticeMonsterCharacterDefineList) {
              var _prefab2 = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).loadPrefab(noticeMonsterCharacterDefine.Resource);

              var node = instantiate(_prefab2);

              _this.noticeMonList.push(node);
            } //怪物提前创建，创建一个存储起来


            var monstersCharacterDefineList = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
              error: Error()
            }), DataUtil) : DataUtil).queryCharactersByClass(CharacterClass.Monsters);

            for (var monstersCharacterDefine of monstersCharacterDefineList) {
              var nodeList = _this.monMap.get(monstersCharacterDefine.ID);

              if (!nodeList) {
                nodeList = [];
              }

              var _prefab3 = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).loadPrefab(monstersCharacterDefine.Resource);

              var _node = instantiate(_prefab3);

              var node2 = instantiate(_prefab3);
              nodeList.push(_node);
              nodeList.push(node2);

              _this.monMap.put(monstersCharacterDefine.ID, nodeList);
            } //创建小兵
            //    await this.CreateSoldier(TeamType2.Blue, 10);
            //    await this.CreateSoldier(TeamType2.Red, 10);


            var nodeParentMap = {};
            var childrenNodeArr = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.spawnMonsterNode.children;

            for (var i = 0; i < childrenNodeArr.length; i++) {
              var characterParentNode = childrenNodeArr[i]; // console.log('characterParentNode len='+characterParentNode.children.length+'，name='+characterParentNode.name)

              characterParentNode.removeAllChildren();
              var spawnID = parseInt(characterParentNode.name.replace('_', '')); //刷怪点id

              var spawnRuleDefineList = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
                error: Error()
              }), DataUtil) : DataUtil).queryListBySpawnID(spawnID);

              if (!spawnRuleDefineList || spawnRuleDefineList.length < 1) {
                continue;
              } //获取第一个刷怪规则


              var spawnRuleDefine = spawnRuleDefineList[0];
              var characterDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.characters[spawnRuleDefine.SpawnMonID];
              var blueTeamType2 = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Neutral; //蓝队类型

              var redTeamType2 = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Neutral; //红队类型

              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier] || characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                blueTeamType2 = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                  error: Error()
                }), TeamType2) : TeamType2).Blue;
                redTeamType2 = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                  error: Error()
                }), TeamType2) : TeamType2).Red;
              } // console.log(characterDefine.Class.toString() +'====='+ CharacterClass[CharacterClass.NoticeMonsters])


              if (characterParentNode.name.indexOf('_') != -1) {
                //不是公告，创建红方、中立
                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                  continue;
                }

                var oldParentNode = nodeParentMap[characterParentNode.name.replace('_', '')];
                characterParentNode.setPosition(oldParentNode.position.x, oldParentNode.position.y, -oldParentNode.position.z);

                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier]) {
                  //红队小兵
                  var rotation = new Vec3();
                  characterParentNode.getRotation().getEulerAngles(rotation);

                  _this.redSoldierPosList.push(new (_crd && PositionVo === void 0 ? (_reportPossibleCrUseOfPositionVo({
                    error: Error()
                  }), PositionVo) : PositionVo)(characterParentNode.getWorldPosition(), rotation));

                  continue;
                }

                var _node2 = null;

                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Monsters]) {
                  //怪物缓存取
                  _node2 = _this.monMap.get(characterDefine.ID)[1];
                } else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                  //镖车缓存取
                  _node2 = _this.redCartNode;
                }

                var monster = yield _this.CreateMonster(characterDefine, redTeamType2, _node2, characterParentNode, spawnRuleDefine);

                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                  (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                    error: Error()
                  }), BattleGlobal) : BattleGlobal).redCart = monster;
                }
              } else {
                nodeParentMap[characterParentNode.name] = characterParentNode;

                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier]) {
                  //蓝队小兵
                  var _rotation = new Vec3();

                  characterParentNode.getRotation().getEulerAngles(_rotation);

                  _this.blueSoldierPosList.push(new (_crd && PositionVo === void 0 ? (_reportPossibleCrUseOfPositionVo({
                    error: Error()
                  }), PositionVo) : PositionVo)(characterParentNode.getWorldPosition(), _rotation));

                  continue;
                } //创建怪物蓝方、中立


                var _node3 = null;

                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                  //公告怪物缓存取
                  if (_this.noticeMonList.length > 0) {
                    _node3 = _this.noticeMonList.shift(); //删除第一个元素
                  }
                } else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Monsters]) {
                  //怪物缓存取
                  _node3 = _this.monMap.get(characterDefine.ID)[0];
                } else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                  //镖车缓存取
                  _node3 = _this.blueCartNode;
                  console.log('创建镖车 node id=' + _node3.uuid + '，characterParentNode=' + characterParentNode);
                }

                var _monster = yield _this.CreateMonster(characterDefine, blueTeamType2, _node3, characterParentNode, spawnRuleDefine);

                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                  (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                    error: Error()
                  }), BattleGlobal) : BattleGlobal).blueCart = _monster;
                }

                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                  //公告怪物
                  _this.noticeSpawnRuleId = spawnRuleDefine.ID; // //测试代码，测试怪物20秒死亡
                  // setTimeout(function(){
                  //     console.log(monster.characterDefine.Class+'，死亡')
                  //     monster.DoDeath();
                  // },12000);
                } else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Monsters]) {//怪物
                  //测试代码，测试怪物20秒死亡
                  // setTimeout(function(){
                  //     console.log(monster.characterDefine.Class+'，死亡')
                  //     monster.DoDeath();
                  // },1200);                
                }
              }
            }
          })();
        }
        /**
         * 创建小兵
         */


        CreateSoldier(teamType2, count) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (count === void 0) {
              count = 5;
            }

            var soldierMap = teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
              error: Error()
            }), TeamType2) : TeamType2).Blue ? _this2.blueSoldierMap : _this2.redSoldierMap;

            for (var soldierCharacterDefine of _this2.soldierCharacterDefineList) {
              var nodeList = soldierMap.get(soldierCharacterDefine.ID);

              if (!nodeList) {
                nodeList = [];
              }

              for (var i = nodeList.length; i < count; i++) {
                //创建5个
                var prefab = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                  error: Error()
                }), LoadResUtil) : LoadResUtil).loadPrefab(teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                  error: Error()
                }), TeamType2) : TeamType2).Blue ? soldierCharacterDefine.Resource : soldierCharacterDefine.RedResource);
                var node = instantiate(prefab);
                nodeList.push(node);
              } // console.log('count='+count+'，soldier id='+soldierCharacterDefine.ID+'，nodeList len='+nodeList.length)


              soldierMap.put(soldierCharacterDefine.ID, nodeList);
            }
          })();
        }
        /**
         * 创建怪物
         * @param characterDefine 
         * @param teamType2 
         */


        CreateMonster(characterDefine, teamType2, node, parentNode, spawnRuleDefine, idx, birthPosition, birthRotation) {
          return _asyncToGenerator(function* () {
            if (idx === void 0) {
              idx = undefined;
            }

            if (birthPosition === void 0) {
              birthPosition = null;
            }

            if (birthRotation === void 0) {
              birthRotation = null;
            }

            if (!node) {
              var resource = '';

              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier] || characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                resource = teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                  error: Error()
                }), TeamType2) : TeamType2).Red ? characterDefine.RedResource : characterDefine.Resource;
              } else {
                resource = characterDefine.Resource;
              }

              var prefab = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).loadPrefab(resource);
              node = instantiate(prefab);
            }

            console.log('创建怪物：' + characterDefine.ID + '，node：' + node + "，parentNode：" + parentNode);
            parentNode.addChild(node);
            var monster = new (_crd && Creature === void 0 ? (_reportPossibleCrUseOfCreature({
              error: Error()
            }), Creature) : Creature)(teamType2, node, characterDefine, undefined, (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
              error: Error()
            }), CreatureType) : CreatureType).Monster, birthPosition, birthRotation);
            monster.spawnRuleDefine = spawnRuleDefine;
            (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
              error: Error()
            }), CreatureManager) : CreatureManager).Instance.AddCreature(monster.node, monster, idx);
            return monster;
          })();
        }
        /**
         * 逻辑更新
         * @param frameId 
         */


        LogicUpdate(frameId) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            //遍历所有生物
            var creatureMap = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
              error: Error()
            }), CreatureManager) : CreatureManager).Instance.creatureMap;
            var creatureData = creatureMap.data;

            for (var entityId in creatureData) {
              // console.log('entityId='+entityId)
              var creature = creatureMap.get(entityId);

              if (creature.creatureType == (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
                error: Error()
              }), CreatureType) : CreatureType).Monster) {
                //怪物类型
                var creatureClass = creature.characterDefine.Class.toString(); //创建公告怪物

                if (creatureClass == CharacterClass[CharacterClass.NoticeMonsters]) {
                  var frameCount = creature.deathFrameId + (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                    error: Error()
                  }), MathUtil) : MathUtil).secondToFrame(creature.spawnRuleDefine.SpawnPeriod); //创建帧数

                  if (creature.IsDeath && frameId == frameCount) {
                    //根据刷怪id查询
                    _this3.noticeSpawnRuleId++; //刷怪id+1

                    var spawnRuleDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                      error: Error()
                    }), DataManager) : DataManager).Instance.spawnRules[_this3.noticeSpawnRuleId]; //获取刷怪规则

                    var characterDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                      error: Error()
                    }), DataManager) : DataManager).Instance.characters[spawnRuleDefine.SpawnMonID]; //获取怪物角色定义
                    //还存在公告怪物，创建

                    if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                      //清空父节点下的模型
                      var characterParentNode = creature.node.parent;
                      characterParentNode.removeAllChildren();
                      var node = null;

                      if (_this3.noticeMonList.length > 0) {
                        node = _this3.noticeMonList.shift(); //删除第一个元素
                      }

                      var monster = yield _this3.CreateMonster(characterDefine, (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                        error: Error()
                      }), TeamType2) : TeamType2).Neutral, node, characterParentNode, spawnRuleDefine, parseInt(entityId), creature.birthPosition, creature.birthRotation);
                    }
                  }

                  continue;
                } //创建怪物，配置周期刷怪时间创建


                if (creatureClass == CharacterClass[CharacterClass.Monsters]) {
                  var _frameCount = creature.deathFrameId + (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                    error: Error()
                  }), MathUtil) : MathUtil).secondToFrame(creature.spawnRuleDefine.SpawnPeriod); //创建帧数


                  if (creature.IsDeath && frameId == _frameCount) {
                    var _spawnRuleDefine = creature.spawnRuleDefine; //获取刷怪规则

                    var _characterDefine = creature.characterDefine; //获取怪物角色定义

                    if (!_spawnRuleDefine.IsSpawnPeriod) {
                      //不是周期刷怪
                      continue;
                    } //清空父节点下的模型


                    var _characterParentNode = creature.node.parent;

                    _characterParentNode.removeAllChildren();

                    var _node4 = null;

                    if (_characterParentNode.name.indexOf('_') != -1) {
                      //红队
                      _node4 = _this3.monMap.get(_characterDefine.ID)[1];
                    } else {
                      //蓝队
                      _node4 = _this3.monMap.get(_characterDefine.ID)[0];
                    }

                    var _monster2 = yield _this3.CreateMonster(_characterDefine, (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                      error: Error()
                    }), TeamType2) : TeamType2).Neutral, _node4, _characterParentNode, _spawnRuleDefine, parseInt(entityId), creature.birthPosition, creature.birthRotation);
                  }

                  continue;
                }
              }
            } //创建小兵，配置周期刷怪时间创建


            var soldierWaveCreateCount = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.gameConfig.SoldierWaveCreateCount; //每波创建数量
            //创建数量超过每波数量，判断下波帧数是否到达

            if (_this3.soldierCreateCount >= soldierWaveCreateCount) {
              var _frameCount2 = _this3.soldierCreateFrameId + (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                error: Error()
              }), MathUtil) : MathUtil).secondToFrame((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.gameConfig.SoldierWaveWaitTime); //下波创建帧数


              if (frameId == _frameCount2) {
                //到了可以创建的帧
                _this3.soldierCreateCount = 0;
                _this3.soldierCreateFrameId = frameId;
                _this3.soldierCreateWaveCount++;
              }
            } //创建数量小于每波创建数量，开始创建


            if (_this3.soldierCreateCount < soldierWaveCreateCount) {
              //根据当前最新创建的小兵索引取
              if (_this3.soldierCreateIndex >= _this3.soldierCharacterDefineList.length) {
                _this3.soldierCreateIndex = 0;
              }

              var _characterDefine2 = _this3.soldierCharacterDefineList[_this3.soldierCreateIndex];
              var _spawnRuleDefine2 = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
                error: Error()
              }), DataUtil) : DataUtil).querySpawnRulesByMonID(_characterDefine2.ID)[0];

              var _frameCount3 = _this3.soldierCreateFrameId + (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                error: Error()
              }), MathUtil) : MathUtil).secondToFrame(_spawnRuleDefine2.SpawnPeriod); //每波中的创建帧数
              //    console.log('每波中的创建帧数:'+frameId +'，'+ frameCount)


              if (frameId != _frameCount3) {
                //未到可以创建的帧
                return;
              }

              _this3.soldierCreateFrameId = frameId; //更新创建小兵帧数

              var soldierCount = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
                error: Error()
              }), CreatureManager) : CreatureManager).Instance.GetCountByClass(CharacterClass.Soldier); //当前战场小兵数量

              if (soldierCount >= (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.gameConfig.SoldierMaxCount) {
                console.log('小兵数量达到上限：' + soldierCount);
                return;
              }

              var isGuardCart = _this3.soldierCreateWaveCount == 0 ? true : false; //是否守护镖车

              _this3.soldierCreateIndex++; //更新创建小兵索引

              var blueSoldierCardDir = _this3.soldierCardDir;

              for (var positionVo of _this3.blueSoldierPosList) {
                var parentNode = new Node();
                (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                  error: Error()
                }), BattleManager) : BattleManager).Instance.spawnMonsterNode.addChild(parentNode); // let nodeList=this.blueSoldierMap.get(characterDefine.ID) as Array<Node>;
                // console.log('blue nodeList len='+nodeList.length)
                // let node=nodeList.shift();

                var _monster3 = yield _this3.CreateMonster(_characterDefine2, (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                  error: Error()
                }), TeamType2) : TeamType2).Blue, null, parentNode, _spawnRuleDefine2, null, positionVo.position, positionVo.rotation);

                _monster3.isGuardCart = isGuardCart;

                if (isGuardCart) {
                  _monster3.soldierCardDir = blueSoldierCardDir;
                  blueSoldierCardDir++;
                }

                _this3.soldierCreateCount++;
              }

              var redSoldierCardDir = _this3.soldierCardDir;

              for (var _positionVo of _this3.redSoldierPosList) {
                var _parentNode = new Node();

                (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                  error: Error()
                }), BattleManager) : BattleManager).Instance.spawnMonsterNode.addChild(_parentNode); // let nodeList=this.redSoldierMap.get(characterDefine.ID) as Array<Node>;
                // console.log('red nodeList len='+nodeList.length)
                // let node=nodeList.shift();

                var _monster4 = yield _this3.CreateMonster(_characterDefine2, (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                  error: Error()
                }), TeamType2) : TeamType2).Red, null, _parentNode, _spawnRuleDefine2, null, _positionVo.position, _positionVo.rotation);

                _monster4.isGuardCart = isGuardCart;

                if (isGuardCart) {
                  _monster4.soldierCardDir = redSoldierCardDir;
                  redSoldierCardDir++;
                }
              }

              if (isGuardCart) {
                //更新小兵在镖车的方向
                _this3.soldierCardDir += 2;
              }

              console.log('创建小兵：' + _this3.soldierCreateCount + '，isGuardCart：' + isGuardCart + '，soldierCardDir：' + _this3.soldierCardDir);
            }
          })();
        } // private timerTemp:number=0;


        update(dt) {// this.timerTemp += dt;
          // if(this.timerTemp >= 3){ //每3秒创建一次
          //     this.timerTemp=0;
          //     //创建小兵
          //     this.CreateSoldier(TeamType2.Blue);
          //     this.CreateSoldier(TeamType2.Red);
          // }
        }

      });

      _defineProperty(SpawnMonManager, "Instance", new SpawnMonManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpawnMonManager.js.map