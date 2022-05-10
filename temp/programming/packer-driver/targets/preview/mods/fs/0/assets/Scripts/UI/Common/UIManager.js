System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HashMap, instantiate, js, director, SoundManager, SoundDefine, LoadResUtil, UIElement, UIManager, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHashMap(extras) {
    _reporterNs.report("HashMap", "../../Utils/HashMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../../Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundDefine(extras) {
    _reporterNs.report("SoundDefine", "../../../Sound/SoundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  _export({
    UIElement: void 0,
    UIManager: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      js = _cc.js;
      director = _cc.director;
    }, function (_unresolved_2) {
      HashMap = _unresolved_2.HashMap;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      SoundDefine = _unresolved_4.SoundDefine;
    }, function (_unresolved_5) {
      LoadResUtil = _unresolved_5.LoadResUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38748WMN35JWbBB6UOW0jX4", "UIManager", undefined);

      _export("UIElement", UIElement = class UIElement {
        constructor(resource, cache) {
          _defineProperty(this, "Resource", null);

          _defineProperty(this, "Cache", null);

          _defineProperty(this, "Instance", null);

          this.Resource = resource;
          this.Cache = cache;
        }

      });

      _export("UIManager", UIManager = class UIManager {
        constructor() {
          _defineProperty(this, "UIResource", new (_crd && HashMap === void 0 ? (_reportPossibleCrUseOfHashMap({
            error: Error()
          }), HashMap) : HashMap)());
        }

        Init() {
          this.UIResource.put("UISystemConfig", new UIElement("UI/UISystemConfig", false));
          this.UIResource.put("UICharacterDetail", new UIElement("UI/UICharacterDetail", false));
          this.UIResource.put("UIPromote", new UIElement("UI/UIPromote", false));
          this.UIResource.put("UIBag", new UIElement("UI/UIBag", false));
          this.UIResource.put("UIShop", new UIElement("UI/UIShop", false));
          this.UIResource.put("UIPowerRanking", new UIElement("UI/UIPowerRanking", false));
          this.UIResource.put("UITran", new UIElement("UI/UITran", false));
          this.UIResource.put("UIAuction", new UIElement("UI/UIAuction", false));
          this.UIResource.put("UIInvite", new UIElement("UI/UIInvite", false));
          this.UIResource.put("UIFollow", new UIElement("UI/UIFollow", false));
          this.UIResource.put("UIChat", new UIElement("UI/UIChat", false));
          this.UIResource.put("UIMatchWait", new UIElement("UI/UIMatchWait", false));
        } /// <summary>
        /// Show UI
        /// </summary>


        show(UIName) {
          var _this = this;

          return _asyncToGenerator(function* () {
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
              error: Error()
            }), SoundDefine) : SoundDefine).SFX_UI_Win_Open);
            var classInstance = js.getClassByName(UIName);

            if (_this.UIResource.contains(UIName)) {
              var info = _this.UIResource.get(UIName);

              if (info.Instance) {
                var _director$getScene;

                (_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.addChild(info.Instance);
              } else {
                var prefab = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                  error: Error()
                }), LoadResUtil) : LoadResUtil).loadPrefab(info.Resource);

                if (!prefab) {
                  return classInstance;
                } else {
                  var _director$getScene2;

                  info.Instance = instantiate(prefab);
                  (_director$getScene2 = director.getScene()) === null || _director$getScene2 === void 0 ? void 0 : _director$getScene2.addChild(info.Instance);
                }
              }

              return info.Instance.getComponent(UIName);
            }

            return classInstance;
          })();
        }

        Close(UIName) {
          //SoundManager.Instance.PlaySound("ui_close");
          if (this.UIResource.contains(UIName)) {
            var info = this.UIResource.get(UIName);

            if (info.Cache) {
              var _director$getScene3;

              (_director$getScene3 = director.getScene()) === null || _director$getScene3 === void 0 ? void 0 : _director$getScene3.removeChild(info.Instance);
            } else {
              info.Instance.destroy();
              info.Instance = null;
            }
          }
        }

      });

      _defineProperty(UIManager, "Instance", new UIManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIManager.js.map