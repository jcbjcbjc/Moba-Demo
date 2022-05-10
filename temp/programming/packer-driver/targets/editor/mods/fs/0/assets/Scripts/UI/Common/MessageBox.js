System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIMessageBox, LoadResUtil, instantiate, LogUtil, MessageBox, _crd, MessageBoxType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfUIMessageBox(extras) {
    _reporterNs.report("UIMessageBox", "./UIMessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../../Log/LogUtil", _context.meta, extras);
  }

  _export({
    MessageBox: void 0,
    MessageBoxType: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      UIMessageBox = _unresolved_2.UIMessageBox;
    }, function (_unresolved_3) {
      LoadResUtil = _unresolved_3.LoadResUtil;
    }, function (_unresolved_4) {
      LogUtil = _unresolved_4.LogUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dee0aQxdvZBI7zfGn6s398i", "MessageBox", undefined);

      _export("MessageBox", MessageBox = class MessageBox {
        static async Show(message, title = "", type = MessageBoxType.Information, btnOK = "", btnCancel = "") {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log('MessageBox:Show');

          if (!this.cacheObject) {
            this.cacheObject = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).loadPrefab("UI/Common/UIMessageBox");
          }

          let node = instantiate(this.cacheObject);
          let msgbox = node.getComponent(_crd && UIMessageBox === void 0 ? (_reportPossibleCrUseOfUIMessageBox({
            error: Error()
          }), UIMessageBox) : UIMessageBox);
          msgbox.Init(title, message, type, btnOK, btnCancel);
          return msgbox;
        }

      });

      _defineProperty(MessageBox, "cacheObject", null);

      (function (MessageBoxType) {
        MessageBoxType[MessageBoxType["Information"] = 1] = "Information";
        MessageBoxType[MessageBoxType["Confirm"] = 2] = "Confirm";
        MessageBoxType[MessageBoxType["Error"] = 3] = "Error";
      })(MessageBoxType || _export("MessageBoxType", MessageBoxType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MessageBox.js.map