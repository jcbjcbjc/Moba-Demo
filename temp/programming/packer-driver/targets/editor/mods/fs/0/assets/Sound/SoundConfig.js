System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SoundManager, sys, SoundConfig, _crd;

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "./SoundManager", _context.meta, extras);
  }

  _export("SoundConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      SoundManager = _unresolved_2.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dafbanVmaZGdpi7D72l7Lf5", "SoundConfig", undefined);

      _export("SoundConfig", SoundConfig = class SoundConfig {
        //音乐开关
        static get MusicOn() {
          let value = sys.localStorage.getItem("Music");

          if (!value && value != 0) {
            value = 1;
          }

          return value == 1;
        }

        static set MusicOn(value) {
          sys.localStorage.setItem("Music", value ? 1 : 0);
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.MusicOn = value;
        } //音效开关


        static get SoundOn() {
          let value = sys.localStorage.getItem("Sound");

          if (!value && value != 0) {
            value = 1;
          }

          return value == 1;
        }

        static set SoundOn(value) {
          sys.localStorage.setItem("Sound", value ? 1 : 0);
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.SoundOn = value;
        } //音乐大小设置


        static get MusicVolume() {
          let value = sys.localStorage.getItem("MusicVolume");

          if (!value && value != 0) {
            value = 1;
          }

          return value;
        }

        static set MusicVolume(value) {
          sys.localStorage.setItem("MusicVolume", value);
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.MusicVolume = value;
        } //音量大小设置


        static get SoundVolume() {
          let value = sys.localStorage.getItem("SoundVolume");

          if (!value && value != 0) {
            value = 1;
          }

          return value;
        }

        static set SoundVolume(value) {
          sys.localStorage.setItem("SoundVolume", value);
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.SoundVolume = value;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SoundConfig.js.map