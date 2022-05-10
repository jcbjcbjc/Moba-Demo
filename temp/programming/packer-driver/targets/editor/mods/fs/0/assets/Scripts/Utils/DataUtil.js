System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, DataManager, DataUtil, _crd, NUser, AddAttrType, CharacterClass;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAddAttrDefine(extras) {
    _reporterNs.report("AddAttrDefine", "../Data/AddAttrDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpawnRuleDefine(extras) {
    _reporterNs.report("SpawnRuleDefine", "../Data/SpawnRuleDefine.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterDefine(extras) {
    _reporterNs.report("CharacterDefine", "../Data/CharacterDefine.js", _context.meta, extras);
  }

  _export("DataUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      DataManager = _unresolved_3.DataManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06cabSiMzND0oqi+nq6UiyN", "DataUtil", undefined);

      ({
        NUser,
        AddAttrType,
        CharacterClass
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      /**
       * data工具类
       */
      _export("DataUtil", DataUtil = class DataUtil {
        /**
         * 根据类型查询加属性列表
         * @param addAttrType 
         */
        static queryListAddAttrByType(addAttrType) {
          let addAttrs = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.addAttrs;
          let addAttrArr = [];

          for (let key in addAttrs) {
            let addAttr = addAttrs[key];

            if (addAttr.Type == addAttrType) {
              //判断类型
              addAttrArr.push(addAttr);
            }
          }

          return addAttrArr;
        }
        /**
         * 根据类型查询加属性类型
         * @param addAttrType 
         */


        static queryObjAddAttrByType(addAttrType, spot) {
          // console.log(AddAttrType[addAttrType])
          let addAttrs = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.addAttrs;

          for (let key in addAttrs) {
            let addAttr = addAttrs[key];

            if (addAttr.Type.toString() == AddAttrType[addAttrType] && addAttr.Range[0] <= spot && spot <= addAttr.Range[1]) {
              //判断类型点数范围
              return addAttr;
            }
          }

          return null;
        }
        /**
         * 根据刷怪id查询
         * @param spawnID 刷怪id
         */


        static queryListBySpawnID(spawnID) {
          let spawnRules = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.spawnRules;
          let spawnList = [];

          for (let key in spawnRules) {
            let spawnRuleDefine = spawnRules[key];

            if (spawnRuleDefine.SpawnID == spawnID) {
              spawnList.push(spawnRuleDefine);
            }
          }

          return spawnList;
        }
        /**
         * 更加角色类型查询角色配置
         * @param characterClass 角色类型
         */


        static queryCharactersByClass(characterClass) {
          let charactersList = new Array();
          let charactersMap = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.characters;

          for (let id in charactersMap) {
            let define = charactersMap[id];

            if (define.Class.toString() == CharacterClass[characterClass]) {
              charactersList.push(define);
            }
          }

          return charactersList;
        }
        /**
         * 根据怪物id查询怪物配置
         * @param monID 怪物id
         */


        static querySpawnRulesByMonID(monID) {
          let spawnRules = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.spawnRules;
          let spawnList = [];

          for (let key in spawnRules) {
            let spawnRuleDefine = spawnRules[key];

            if (spawnRuleDefine.SpawnMonID == monID) {
              spawnList.push(spawnRuleDefine);
            }
          }

          return spawnList;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataUtil.js.map