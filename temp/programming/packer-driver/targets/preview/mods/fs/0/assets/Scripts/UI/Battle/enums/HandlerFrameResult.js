System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, HandlerFrameResult;

  _export("HandlerFrameResult", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98dd2aW1LRMmZd3krT7QWtT", "HandlerFrameResult", undefined);

      (function (HandlerFrameResult) {
        HandlerFrameResult[HandlerFrameResult["NoFrameData"] = 0] = "NoFrameData";
        HandlerFrameResult[HandlerFrameResult["NotRepeatFrame"] = 1] = "NotRepeatFrame";
        HandlerFrameResult[HandlerFrameResult["Success"] = 2] = "Success";
      })(HandlerFrameResult || _export("HandlerFrameResult", HandlerFrameResult = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HandlerFrameResult.js.map