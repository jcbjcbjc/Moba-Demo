System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AudioSource, Component, game, LoadResUtil, LogUtil, SoundConfig, _dec, _class, _class2, _temp, _crd, ccclass, property, SoundManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../Scripts/Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogUtil(extras) {
    _reporterNs.report("LogUtil", "../Scripts/Log/LogUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundConfig(extras) {
    _reporterNs.report("SoundConfig", "./SoundConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      game = _cc.game;
    }, function (_unresolved_2) {
      LoadResUtil = _unresolved_2.LoadResUtil;
    }, function (_unresolved_3) {
      LogUtil = _unresolved_3.LogUtil;
    }, function (_unresolved_4) {
      SoundConfig = _unresolved_4.SoundConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a685BhU99EAKWsk8sVPfrL", "SoundManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundManager", SoundManager = (_dec = ccclass('SoundManager'), _dec(_class = (_temp = _class2 = class SoundManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "audioSource", null);

          _defineProperty(this, "MusicPath", "Music/");

          _defineProperty(this, "SoundPath", "Sound/");

          _defineProperty(this, "musicOn", null);

          _defineProperty(this, "soundOn", null);

          _defineProperty(this, "musicVolume", null);

          _defineProperty(this, "soundVolume", null);
        }

        onLoad() {
          (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
            error: Error()
          }), LogUtil) : LogUtil).log('SoundManager onLoad');

          if (!SoundManager.Instance) {
            SoundManager.Instance = this;
            game.addPersistRootNode(this.node);
          }

          this.audioSource = this.getComponent(AudioSource); // console.log(this.audioSource)

          this.MusicVolume = (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).MusicVolume;
          this.SoundVolume = (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).SoundVolume;
          this.MusicOn = (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).MusicOn;
          this.SoundOn = (_crd && SoundConfig === void 0 ? (_reportPossibleCrUseOfSoundConfig({
            error: Error()
          }), SoundConfig) : SoundConfig).SoundOn;
        } //音乐开关


        get MusicOn() {
          return this.musicOn;
        }

        set MusicOn(value) {
          this.musicOn = value;
          this.MusicMute(!this.musicOn);
        } //音效开关


        get SoundOn() {
          return this.soundOn;
        }

        set SoundOn(value) {
          this.soundOn = value;
          this.SoundMute(!this.soundOn);
        } //音乐声音控制


        get MusicVolume() {
          return this.musicVolume;
        }

        set MusicVolume(value) {
          if (this.musicVolume != value) {
            this.musicVolume = value;
            if (this.musicOn) this.SetVolume(this.musicVolume);
          }
        } //音效声音控制


        get SoundVolume() {
          return this.soundVolume;
        }

        set SoundVolume(value) {
          if (this.soundVolume != value) {
            this.soundVolume = value; // if (this.soundOn) this.SetVolume(this.soundVolume);
          }
        }

        PlayMusic(name) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var clip = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_AudioClip(_this.MusicPath + name);

            if (clip == null) {
              (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
                error: Error()
              }), LogUtil) : LogUtil).error("PlayMusic not existed name:", name);
              return;
            }

            if (_this.audioSource.playing) {
              _this.audioSource.stop();
            }

            _this.audioSource.clip = clip;

            _this.audioSource.play();
          })();
        }

        PlaySound(name) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var clip = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_AudioClip(_this2.SoundPath + name);

            if (clip == null) {
              (_crd && LogUtil === void 0 ? (_reportPossibleCrUseOfLogUtil({
                error: Error()
              }), LogUtil) : LogUtil).error("PlaySound not existed name:", name);
              return;
            }

            if (_this2.soundOn) {
              _this2.audioSource.playOneShot(clip, _this2.soundVolume);
            }
          })();
        }

        SetVolume(value) {
          this.audioSource.volume = value;
        }

        MusicMute(mute) {
          this.SetVolume(mute ? 0 : this.musicVolume);
        }

        SoundMute(mute) {// this.SetVolume(mute ? 0 : this.soundVolume);
        }

      }, _defineProperty(_class2, "Instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SoundManager.js.map