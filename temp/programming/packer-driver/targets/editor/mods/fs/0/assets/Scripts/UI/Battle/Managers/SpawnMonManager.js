System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleManager, DataManager, LoadResUtil, instantiate, Node, Vec3, CreatureManager, TeamType2, DataUtil, proto, Creature, CreatureType, MathUtil, PositionVo, HashMap, BattleGlobal, SpawnMonManager, _crd, CharacterClass;

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
       * ???????????????
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

        //????????????

        /**
         * ?????????????????????????????????????????????
         */
        async Init() {
          this.noticeSpawnRuleId = 0;
          this.soldierCreateCount = 0;
          this.soldierCreateFrameId = 0;
          this.blueSoldierPosList = [];
          this.redSoldierPosList = [];
          this.soldierCreateIndex = 0;
          this.soldierCardDir = 0;
          this.soldierCreateWaveCount = 0;
          this.monMap.clear(); // this.blueSoldierMap.clear();
          // this.redSoldierMap.clear();

          this.blueCartNode = null;
          this.redCartNode = null;
          this.soldierCharacterDefineList = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
            error: Error()
          }), DataUtil) : DataUtil).queryCharactersByClass(CharacterClass.Soldier); //??????????????????

          let cartCharacterDefine = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
            error: Error()
          }), DataUtil) : DataUtil).queryCharactersByClass(CharacterClass.Cart)[0];

          if (!this.blueCartNode) {
            let prefab = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).loadPrefab(cartCharacterDefine.Resource);
            this.blueCartNode = instantiate(prefab);
          }

          if (!this.redCartNode) {
            let prefab = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).loadPrefab(cartCharacterDefine.RedResource);
            this.redCartNode = instantiate(prefab);
          }

          this.noticeMonList = []; //????????????????????????????????????????????????

          let noticeMonsterCharacterDefineList = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
            error: Error()
          }), DataUtil) : DataUtil).queryCharactersByClass(CharacterClass.NoticeMonsters);

          for (let noticeMonsterCharacterDefine of noticeMonsterCharacterDefineList) {
            let prefab = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).loadPrefab(noticeMonsterCharacterDefine.Resource);
            let node = instantiate(prefab);
            this.noticeMonList.push(node);
          } //?????????????????????????????????????????????


          let monstersCharacterDefineList = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
            error: Error()
          }), DataUtil) : DataUtil).queryCharactersByClass(CharacterClass.Monsters);

          for (let monstersCharacterDefine of monstersCharacterDefineList) {
            let nodeList = this.monMap.get(monstersCharacterDefine.ID);

            if (!nodeList) {
              nodeList = [];
            }

            let prefab = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).loadPrefab(monstersCharacterDefine.Resource);
            let node = instantiate(prefab);
            let node2 = instantiate(prefab);
            nodeList.push(node);
            nodeList.push(node2);
            this.monMap.put(monstersCharacterDefine.ID, nodeList);
          } //????????????
          //    await this.CreateSoldier(TeamType2.Blue, 10);
          //    await this.CreateSoldier(TeamType2.Red, 10);


          let nodeParentMap = {};
          let childrenNodeArr = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.spawnMonsterNode.children;

          for (let i = 0; i < childrenNodeArr.length; i++) {
            let characterParentNode = childrenNodeArr[i]; // console.log('characterParentNode len='+characterParentNode.children.length+'???name='+characterParentNode.name)

            characterParentNode.removeAllChildren();
            let spawnID = parseInt(characterParentNode.name.replace('_', '')); //?????????id

            let spawnRuleDefineList = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
              error: Error()
            }), DataUtil) : DataUtil).queryListBySpawnID(spawnID);

            if (!spawnRuleDefineList || spawnRuleDefineList.length < 1) {
              continue;
            } //???????????????????????????


            let spawnRuleDefine = spawnRuleDefineList[0];
            let characterDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.characters[spawnRuleDefine.SpawnMonID];
            let blueTeamType2 = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
              error: Error()
            }), TeamType2) : TeamType2).Neutral; //????????????

            let redTeamType2 = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
              error: Error()
            }), TeamType2) : TeamType2).Neutral; //????????????

            if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier] || characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
              blueTeamType2 = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Blue;
              redTeamType2 = (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Red;
            } // console.log(characterDefine.Class.toString() +'====='+ CharacterClass[CharacterClass.NoticeMonsters])


            if (characterParentNode.name.indexOf('_') != -1) {
              //????????????????????????????????????
              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                continue;
              }

              let oldParentNode = nodeParentMap[characterParentNode.name.replace('_', '')];
              characterParentNode.setPosition(oldParentNode.position.x, oldParentNode.position.y, -oldParentNode.position.z);

              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier]) {
                //????????????
                let rotation = new Vec3();
                characterParentNode.getRotation().getEulerAngles(rotation);
                this.redSoldierPosList.push(new (_crd && PositionVo === void 0 ? (_reportPossibleCrUseOfPositionVo({
                  error: Error()
                }), PositionVo) : PositionVo)(characterParentNode.getWorldPosition(), rotation));
                continue;
              }

              let node = null;

              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Monsters]) {
                //???????????????
                node = this.monMap.get(characterDefine.ID)[1];
              } else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                //???????????????
                node = this.redCartNode;
              }

              let monster = await this.CreateMonster(characterDefine, redTeamType2, node, characterParentNode, spawnRuleDefine);

              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                  error: Error()
                }), BattleGlobal) : BattleGlobal).redCart = monster;
              }
            } else {
              nodeParentMap[characterParentNode.name] = characterParentNode;

              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier]) {
                //????????????
                let rotation = new Vec3();
                characterParentNode.getRotation().getEulerAngles(rotation);
                this.blueSoldierPosList.push(new (_crd && PositionVo === void 0 ? (_reportPossibleCrUseOfPositionVo({
                  error: Error()
                }), PositionVo) : PositionVo)(characterParentNode.getWorldPosition(), rotation));
                continue;
              } //???????????????????????????


              let node = null;

              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                //?????????????????????
                if (this.noticeMonList.length > 0) {
                  node = this.noticeMonList.shift(); //?????????????????????
                }
              } else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Monsters]) {
                //???????????????
                node = this.monMap.get(characterDefine.ID)[0];
              } else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                //???????????????
                node = this.blueCartNode;
                console.log('???????????? node id=' + node.uuid + '???characterParentNode=' + characterParentNode);
              }

              let monster = await this.CreateMonster(characterDefine, blueTeamType2, node, characterParentNode, spawnRuleDefine);

              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                  error: Error()
                }), BattleGlobal) : BattleGlobal).blueCart = monster;
              }

              if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                //????????????
                this.noticeSpawnRuleId = spawnRuleDefine.ID; // //???????????????????????????20?????????
                // setTimeout(function(){
                //     console.log(monster.characterDefine.Class+'?????????')
                //     monster.DoDeath();
                // },12000);
              } else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Monsters]) {//??????
                //???????????????????????????20?????????
                // setTimeout(function(){
                //     console.log(monster.characterDefine.Class+'?????????')
                //     monster.DoDeath();
                // },1200);                
              }
            }
          }
        }
        /**
         * ????????????
         */


        async CreateSoldier(teamType2, count = 5) {
          let soldierMap = teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue ? this.blueSoldierMap : this.redSoldierMap;

          for (let soldierCharacterDefine of this.soldierCharacterDefineList) {
            let nodeList = soldierMap.get(soldierCharacterDefine.ID);

            if (!nodeList) {
              nodeList = [];
            }

            for (let i = nodeList.length; i < count; i++) {
              //??????5???
              let prefab = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).loadPrefab(teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Blue ? soldierCharacterDefine.Resource : soldierCharacterDefine.RedResource);
              let node = instantiate(prefab);
              nodeList.push(node);
            } // console.log('count='+count+'???soldier id='+soldierCharacterDefine.ID+'???nodeList len='+nodeList.length)


            soldierMap.put(soldierCharacterDefine.ID, nodeList);
          }
        }
        /**
         * ????????????
         * @param characterDefine 
         * @param teamType2 
         */


        async CreateMonster(characterDefine, teamType2, node, parentNode, spawnRuleDefine, idx = undefined, birthPosition = null, birthRotation = null) {
          if (!node) {
            let resource = '';

            if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier] || characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
              resource = teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Red ? characterDefine.RedResource : characterDefine.Resource;
            } else {
              resource = characterDefine.Resource;
            }

            let prefab = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).loadPrefab(resource);
            node = instantiate(prefab);
          }

          console.log('???????????????' + characterDefine.ID + '???node???' + node + "???parentNode???" + parentNode);
          parentNode.addChild(node);
          let monster = new (_crd && Creature === void 0 ? (_reportPossibleCrUseOfCreature({
            error: Error()
          }), Creature) : Creature)(teamType2, node, characterDefine, undefined, (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
            error: Error()
          }), CreatureType) : CreatureType).Monster, birthPosition, birthRotation);
          monster.spawnRuleDefine = spawnRuleDefine;
          (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
            error: Error()
          }), CreatureManager) : CreatureManager).Instance.AddCreature(monster.node, monster, idx);
          return monster;
        }
        /**
         * ????????????
         * @param frameId 
         */


        async LogicUpdate(frameId) {
          //??????????????????
          let creatureMap = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
            error: Error()
          }), CreatureManager) : CreatureManager).Instance.creatureMap;
          let creatureData = creatureMap.data;

          for (let entityId in creatureData) {
            // console.log('entityId='+entityId)
            let creature = creatureMap.get(entityId);

            if (creature.creatureType == (_crd && CreatureType === void 0 ? (_reportPossibleCrUseOfCreatureType({
              error: Error()
            }), CreatureType) : CreatureType).Monster) {
              //????????????
              let creatureClass = creature.characterDefine.Class.toString(); //??????????????????

              if (creatureClass == CharacterClass[CharacterClass.NoticeMonsters]) {
                let frameCount = creature.deathFrameId + (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                  error: Error()
                }), MathUtil) : MathUtil).secondToFrame(creature.spawnRuleDefine.SpawnPeriod); //????????????

                if (creature.IsDeath && frameId == frameCount) {
                  //????????????id??????
                  this.noticeSpawnRuleId++; //??????id+1

                  let spawnRuleDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                    error: Error()
                  }), DataManager) : DataManager).Instance.spawnRules[this.noticeSpawnRuleId]; //??????????????????

                  let characterDefine = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                    error: Error()
                  }), DataManager) : DataManager).Instance.characters[spawnRuleDefine.SpawnMonID]; //????????????????????????
                  //??????????????????????????????

                  if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                    //???????????????????????????
                    let characterParentNode = creature.node.parent;
                    characterParentNode.removeAllChildren();
                    let node = null;

                    if (this.noticeMonList.length > 0) {
                      node = this.noticeMonList.shift(); //?????????????????????
                    }

                    let monster = await this.CreateMonster(characterDefine, (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                      error: Error()
                    }), TeamType2) : TeamType2).Neutral, node, characterParentNode, spawnRuleDefine, parseInt(entityId), creature.birthPosition, creature.birthRotation);
                  }
                }

                continue;
              } //?????????????????????????????????????????????


              if (creatureClass == CharacterClass[CharacterClass.Monsters]) {
                let frameCount = creature.deathFrameId + (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
                  error: Error()
                }), MathUtil) : MathUtil).secondToFrame(creature.spawnRuleDefine.SpawnPeriod); //????????????

                if (creature.IsDeath && frameId == frameCount) {
                  let spawnRuleDefine = creature.spawnRuleDefine; //??????????????????

                  let characterDefine = creature.characterDefine; //????????????????????????

                  if (!spawnRuleDefine.IsSpawnPeriod) {
                    //??????????????????
                    continue;
                  } //???????????????????????????


                  let characterParentNode = creature.node.parent;
                  characterParentNode.removeAllChildren();
                  let node = null;

                  if (characterParentNode.name.indexOf('_') != -1) {
                    //??????
                    node = this.monMap.get(characterDefine.ID)[1];
                  } else {
                    //??????
                    node = this.monMap.get(characterDefine.ID)[0];
                  }

                  let monster = await this.CreateMonster(characterDefine, (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                    error: Error()
                  }), TeamType2) : TeamType2).Neutral, node, characterParentNode, spawnRuleDefine, parseInt(entityId), creature.birthPosition, creature.birthRotation);
                }

                continue;
              }
            }
          } //?????????????????????????????????????????????


          let soldierWaveCreateCount = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.gameConfig.SoldierWaveCreateCount; //??????????????????
          //???????????????????????????????????????????????????????????????

          if (this.soldierCreateCount >= soldierWaveCreateCount) {
            let frameCount = this.soldierCreateFrameId + (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).secondToFrame((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.gameConfig.SoldierWaveWaitTime); //??????????????????

            if (frameId == frameCount) {
              //????????????????????????
              this.soldierCreateCount = 0;
              this.soldierCreateFrameId = frameId;
              this.soldierCreateWaveCount++;
            }
          } //???????????????????????????????????????????????????


          if (this.soldierCreateCount < soldierWaveCreateCount) {
            //??????????????????????????????????????????
            if (this.soldierCreateIndex >= this.soldierCharacterDefineList.length) {
              this.soldierCreateIndex = 0;
            }

            let characterDefine = this.soldierCharacterDefineList[this.soldierCreateIndex];
            let spawnRuleDefine = (_crd && DataUtil === void 0 ? (_reportPossibleCrUseOfDataUtil({
              error: Error()
            }), DataUtil) : DataUtil).querySpawnRulesByMonID(characterDefine.ID)[0];
            let frameCount = this.soldierCreateFrameId + (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).secondToFrame(spawnRuleDefine.SpawnPeriod); //????????????????????????
            //    console.log('????????????????????????:'+frameId +'???'+ frameCount)

            if (frameId != frameCount) {
              //????????????????????????
              return;
            }

            this.soldierCreateFrameId = frameId; //????????????????????????

            let soldierCount = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
              error: Error()
            }), CreatureManager) : CreatureManager).Instance.GetCountByClass(CharacterClass.Soldier); //????????????????????????

            if (soldierCount >= (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.gameConfig.SoldierMaxCount) {
              console.log('???????????????????????????' + soldierCount);
              return;
            }

            let isGuardCart = this.soldierCreateWaveCount == 0 ? true : false; //??????????????????

            this.soldierCreateIndex++; //????????????????????????

            let blueSoldierCardDir = this.soldierCardDir;

            for (let positionVo of this.blueSoldierPosList) {
              let parentNode = new Node();
              (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                error: Error()
              }), BattleManager) : BattleManager).Instance.spawnMonsterNode.addChild(parentNode); // let nodeList=this.blueSoldierMap.get(characterDefine.ID) as Array<Node>;
              // console.log('blue nodeList len='+nodeList.length)
              // let node=nodeList.shift();

              let monster = await this.CreateMonster(characterDefine, (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Blue, null, parentNode, spawnRuleDefine, null, positionVo.position, positionVo.rotation);
              monster.isGuardCart = isGuardCart;

              if (isGuardCart) {
                monster.soldierCardDir = blueSoldierCardDir;
                blueSoldierCardDir++;
              }

              this.soldierCreateCount++;
            }

            let redSoldierCardDir = this.soldierCardDir;

            for (let positionVo of this.redSoldierPosList) {
              let parentNode = new Node();
              (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                error: Error()
              }), BattleManager) : BattleManager).Instance.spawnMonsterNode.addChild(parentNode); // let nodeList=this.redSoldierMap.get(characterDefine.ID) as Array<Node>;
              // console.log('red nodeList len='+nodeList.length)
              // let node=nodeList.shift();

              let monster = await this.CreateMonster(characterDefine, (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                error: Error()
              }), TeamType2) : TeamType2).Red, null, parentNode, spawnRuleDefine, null, positionVo.position, positionVo.rotation);
              monster.isGuardCart = isGuardCart;

              if (isGuardCart) {
                monster.soldierCardDir = redSoldierCardDir;
                redSoldierCardDir++;
              }
            }

            if (isGuardCart) {
              //??????????????????????????????
              this.soldierCardDir += 2;
            }

            console.log('???????????????' + this.soldierCreateCount + '???isGuardCart???' + isGuardCart + '???soldierCardDir???' + this.soldierCardDir);
          }
        } // private timerTemp:number=0;


        update(dt) {// this.timerTemp += dt;
          // if(this.timerTemp >= 3){ //???3???????????????
          //     this.timerTemp=0;
          //     //????????????
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