System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, SoundManager, SoundDefine, _dec, _class, _crd, ccclass, property, UIGameOver;

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../../Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundDefine(extras) {
    _reporterNs.report("SoundDefine", "../../../Sound/SoundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }, function (_unresolved_2) {
      SoundManager = _unresolved_2.SoundManager;
    }, function (_unresolved_3) {
      SoundDefine = _unresolved_3.SoundDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f766pA5btG3Lc+Q5rqM97H", "UIGameOver", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIGameOver", UIGameOver = (_dec = ccclass('UIGameOver'), _dec(_class = class UIGameOver extends Component {
        start() {}
        /**
        * 返回大厅
        */


        OnClickBackHall() {
          director.loadScene('UIMain');
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlayMusic((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).Music_Login);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIGameOver.js.map