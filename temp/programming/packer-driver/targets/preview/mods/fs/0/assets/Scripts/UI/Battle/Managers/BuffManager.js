System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Buff, BuffManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuff(extras) {
    _reporterNs.report("Buff", "../Models/Buff", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleContext(extras) {
    _reporterNs.report("BattleContext", "../Models/BattleContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffDefine(extras) {
    _reporterNs.report("BuffDefine", "../../../Data/BuffDefine", _context.meta, extras);
  }

  _export("BuffManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Buff = _unresolved_2.Buff;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e05e7RW8mFKFZ/sSpsQRr4Z", "BuffManager", undefined);

      _export("BuffManager", BuffManager = class BuffManager {
        get BuffID() {
          return this.idx++;
        }

        constructor(creature) {
          _defineProperty(this, "Owner", void 0);

          _defineProperty(this, "Buffs", new Array());

          _defineProperty(this, "idx", 1);

          this.Owner = creature;
        }

        AddBuf(context, define) {
          var buff = new (_crd && Buff === void 0 ? (_reportPossibleCrUseOfBuff({
            error: Error()
          }), Buff) : Buff)(this.BuffID, this.Owner, define, context);
          this.Buffs.push(buff);
        }

        LogicUpdate() {
          for (var i = 0; i < this.Buffs.length; i++) {
            if (!this.Buffs[i].Stoped) //未停止
              {
                this.Buffs[i].LogicUpdate();
              } else {
              //停止删除
              this.Buffs.splice(i, 1);
              i--;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BuffManager.js.map