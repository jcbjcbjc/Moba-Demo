System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BuffAction;

  _export("BuffAction", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffc26nPvdZA4Z8LN43YaSpL", "BuffAction", undefined);

      (function (BuffAction) {
        BuffAction[BuffAction["None"] = 0] = "None";
        BuffAction[BuffAction["Add"] = 1] = "Add";
        BuffAction[BuffAction["Remove"] = 2] = "Remove";
        BuffAction[BuffAction["Hit"] = 3] = "Hit";
      })(BuffAction || _export("BuffAction", BuffAction = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BuffAction.js.map