System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Skill, DataManager, SkillType, SkillManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "../Models/Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillType(extras) {
    _reporterNs.report("SkillType", "../enums/SkillType", _context.meta, extras);
  }

  _export("SkillManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Skill = _unresolved_2.Skill;
    }, function (_unresolved_3) {
      DataManager = _unresolved_3.DataManager;
    }, function (_unresolved_4) {
      SkillType = _unresolved_4.SkillType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "31921fH5XpFqoKcGw0/lnLG", "SkillManager", undefined);

      _export("SkillManager", SkillManager = class SkillManager {
        constructor(owner) {
          _defineProperty(this, "Owner", void 0);

          _defineProperty(this, "NormalSkill", void 0);

          _defineProperty(this, "Skills", []);

          _defineProperty(this, "Infos", []);

          this.Owner = owner;
          this.InitSkills();
        }

        InitSkills() {
          this.Skills = [];
          this.Infos = [];
          let skillMap = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.skills[this.Owner.characterDefine.ID];

          for (var skillId in skillMap) {
            let define = skillMap[skillId]; // console.log(JSON.stringify(define))

            this.Infos.push(define.ID);
            let skill = new (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill)(define.ID, this.Owner);

            if (define.Type == (_crd && SkillType === void 0 ? (_reportPossibleCrUseOfSkillType({
              error: Error()
            }), SkillType) : SkillType).Normal) {
              this.NormalSkill = skill;
            }

            this.AddSkill(skill);
          }
        }

        AddSkill(skill) {
          this.Skills.push(skill);
        }

        GetSkill(skillId) {
          for (let i = 0; i < this.Skills.length; i++) {
            if (this.Skills[i].Define.ID == skillId) return this.Skills[i];
          }

          return null;
        }

        LogicUpdate(frameId) {
          for (let i = 0; i < this.Skills.length; i++) {
            this.Skills[i].LogicUpdate(frameId);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillManager.js.map