System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LoadResUtil, RockerSpeedVo, DataManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterDefine(extras) {
    _reporterNs.report("CharacterDefine", "../Data/CharacterDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemDefine(extras) {
    _reporterNs.report("ItemDefine", "../Data/ItemDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopDefine(extras) {
    _reporterNs.report("ShopDefine", "../Data/ShopDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopItemDefine(extras) {
    _reporterNs.report("ShopItemDefine", "../Data/ShopItemDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../Data/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAddAttrDefine(extras) {
    _reporterNs.report("AddAttrDefine", "../Data/AddAttrDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRockerSpeedVo(extras) {
    _reporterNs.report("RockerSpeedVo", "../Vo/RockerSpeedVo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillDefine(extras) {
    _reporterNs.report("SkillDefine", "../Data/SkillDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpawnRuleDefine(extras) {
    _reporterNs.report("SpawnRuleDefine", "../Data/SpawnRuleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffDefine(extras) {
    _reporterNs.report("BuffDefine", "../Data/BuffDefine", _context.meta, extras);
  }

  _export("DataManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LoadResUtil = _unresolved_2.LoadResUtil;
    }, function (_unresolved_3) {
      RockerSpeedVo = _unresolved_3.RockerSpeedVo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09b5eJLeeZCJriUyc/HnXOx", "DataManager", undefined);

      _export("DataManager", DataManager = class DataManager {
        constructor() {
          _defineProperty(this, "DataPath", 'Data/');

          _defineProperty(this, "characters", null);

          _defineProperty(this, "items", null);

          _defineProperty(this, "shops", null);

          _defineProperty(this, "shopItems", null);

          _defineProperty(this, "gameConfig", null);

          _defineProperty(this, "addAttrs", null);

          _defineProperty(this, "rockerSpeeds", new Array());

          _defineProperty(this, "skills", null);

          _defineProperty(this, "spawnRules", null);

          _defineProperty(this, "buffs", null);
        }

        async Load() {
          console.log('Load json');
          this.characters = JSON.parse(await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "CharacterDefine.txt"));
          this.items = JSON.parse(await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "ItemDefine.txt"));
          this.shops = JSON.parse(await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "ShopDefine.txt"));
          this.shopItems = JSON.parse(await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "ShopItemDefine.txt"));
          this.gameConfig = JSON.parse(await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "GameConfig.txt"));
          this.addAttrs = JSON.parse(await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "AddAttrDefine.txt"));
          this.skills = JSON.parse(await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "SkillDefine.txt"));
          this.spawnRules = JSON.parse(await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "SpawnRuleDefine.txt"));
          this.buffs = JSON.parse(await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "BuffDefine.txt")); //解析摇杆数据
          //  this.rockerSpeeds={};
          // let rockerSpeedStr= await LoadResUtil.loadConfig(this.DataPath+"RockerSpeed.txt");
          // let rockerSpeedArr=rockerSpeedStr.split('\n');
          // for(let i=0;i<rockerSpeedArr.length;i++){
          //   let str=rockerSpeedArr[i];
          //   if(!str){
          //     continue;
          //   }
          //    let arr = str.split(',');
          //    let rockerSpeedVo = new RockerSpeedVo(Number(arr[1]), Number(arr[2]));
          //    this.rockerSpeeds[arr[0]] = rockerSpeedVo;
          // }

          this.rockerSpeeds = [];
          let rockerSpeedStr = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).loadConfig(this.DataPath + "RockerSpeed.txt");
          let rockerSpeedArr = rockerSpeedStr.split('\n');

          for (let i = 0; i < rockerSpeedArr.length; i++) {
            let str = rockerSpeedArr[i];

            if (!str) {
              continue;
            }

            let arr = str.split(',');
            let rockerSpeedVo = new (_crd && RockerSpeedVo === void 0 ? (_reportPossibleCrUseOfRockerSpeedVo({
              error: Error()
            }), RockerSpeedVo) : RockerSpeedVo)(Number(arr[1]), Number(arr[2]));
            this.rockerSpeeds.push(rockerSpeedVo);
          }
        }

      });

      _defineProperty(DataManager, "Instance", new DataManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataManager.js.map