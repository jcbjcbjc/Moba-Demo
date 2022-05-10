System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EditBox, Button, proto, MessageBox, SoundManager, SoundDefine, UserService, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, Result, UserLoginResponse, NUser, ccclass, property, UILogin;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "./Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundDefine(extras) {
    _reporterNs.report("SoundDefine", "../../Sound/SoundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserService(extras) {
    _reporterNs.report("UserService", "../Services/UserService", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      MessageBox = _unresolved_3.MessageBox;
    }, function (_unresolved_4) {
      SoundManager = _unresolved_4.SoundManager;
    }, function (_unresolved_5) {
      SoundDefine = _unresolved_5.SoundDefine;
    }, function (_unresolved_6) {
      UserService = _unresolved_6.UserService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bd30hhgkpHbrFSzZxQVSbR", "UILogin", undefined);

      ({
        Result,
        UserLoginResponse,
        NUser
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      ({
        ccclass,
        property
      } = _decorator);

      _export("UILogin", UILogin = (_dec = ccclass('UILogin'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = (_class2 = (_temp = class UILogin extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "username", _descriptor, this);

          _initializerDefineProperty(this, "password", _descriptor2, this);

          _initializerDefineProperty(this, "buttonLogin", _descriptor3, this);

          _initializerDefineProperty(this, "buttonRegister", _descriptor4, this);
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.username["_impl"]._edTxt.autocomplete = "off";
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).Instance.PlayMusic((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
              error: Error()
            }), SoundDefine) : SoundDefine).Music_Login); // this.username.string="123";
            // this.password.string="123";
            //随机数测试
            // RandomUtil.seed=6;
            // console.log('随机数1：'+RandomUtil.limit(0, 1))
            // console.log('随机数2：'+RandomUtil.limit(0, 1))
            // console.log('随机数3：'+RandomUtil.limit(0, 1))
            // RandomUtil.seed=6;
            // console.log('随机数1：'+RandomUtil.limit(0, 1))
            // console.log('随机数2：'+RandomUtil.limit(0, 1))
            // console.log('随机数3：'+RandomUtil.limit(0, 1))
          })();
        }
        /**
         * 登录点击
         */


        OnClickLogin() {
          console.log('OnClickLogin');

          if (!this.username.string) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("请输入账号");
            return;
          }

          if (!this.password.string) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("请输入密码");
            return;
          }

          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_UI_Click); // Enter Game

          (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
            error: Error()
          }), UserService) : UserService).Instance.SendLogin(this.username.string, this.password.string);
        }
        /**
         * 点击注册
         */


        OnClickRegister() {
          if (!this.username.string) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("请输入账号");
            return;
          }

          if (!this.password.string) {
            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("请输入密码");
            return;
          }

          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound((_crd && SoundDefine === void 0 ? (_reportPossibleCrUseOfSoundDefine({
            error: Error()
          }), SoundDefine) : SoundDefine).SFX_UI_Click);
          (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
            error: Error()
          }), UserService) : UserService).Instance.SendRegister(this.username.string, this.password.string);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "username", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "password", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buttonLogin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonRegister", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UILogin.js.map