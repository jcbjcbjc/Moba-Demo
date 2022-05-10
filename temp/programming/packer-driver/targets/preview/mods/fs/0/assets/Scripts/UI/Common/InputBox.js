System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LoadResUtil, instantiate, LogUtil, UIInputBox, InputBox, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../../Log/LogUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIInputBox(extras) {
    _reporterNs.report("UIInputBox", "./UIInputBox", _context.meta, extras);
  }

  _export("InputBox", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      LoadResUtil = _unresolved_2.LoadResUtil;
    }, function (_unresolved_3) {
      LogUtil = _unresolved_3.LogUtil;
    }, function (_unresolved_4) {
      UIInputBox = _unresolved_4.UIInputBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0dec7pChRBLBZc+atmXm4ko", "InputBox", undefined);

      _export("InputBox", InputBox = class InputBox {
        static Show(message, title, btnOK, btnCancel, emptyTips) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (title === void 0) {
              title = "";
            }

            if (btnOK === void 0) {
              btnOK = "";
            }

            if (btnCancel === void 0) {
              btnCancel = "";
            }

            if (emptyTips === void 0) {
              emptyTips = "内容不能为空";
            }

            (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
              error: Error()
            }), LogUtil) : LogUtil).log('InputBox:Show');

            if (!_this.cacheObject) {
              _this.cacheObject = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).loadPrefab("UI/Common/UIInputBox");
            }

            var node = instantiate(_this.cacheObject);
            var msgbox = node.getComponent(_crd && UIInputBox === void 0 ? (_reportPossibleCrUseOfUIInputBox({
              error: Error()
            }), UIInputBox) : UIInputBox);
            msgbox.Init(title, message, btnOK, btnCancel, emptyTips);
            return msgbox;
          })();
        }

      });

      _defineProperty(InputBox, "cacheObject", null);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=InputBox.js.map