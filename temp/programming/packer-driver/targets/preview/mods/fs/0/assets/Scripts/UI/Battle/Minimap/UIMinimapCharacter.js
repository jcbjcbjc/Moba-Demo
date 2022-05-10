System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Color, LoadResUtil, DataManager, User, BattleManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, UIMinimapCharacter;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../../../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "../Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMinimapBoxVo(extras) {
    _reporterNs.report("MinimapBoxVo", "../../../Vo/MinimapBoxVo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreature(extras) {
    _reporterNs.report("Creature", "../Enities/Creature", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      LoadResUtil = _unresolved_2.LoadResUtil;
    }, function (_unresolved_3) {
      DataManager = _unresolved_3.DataManager;
    }, function (_unresolved_4) {
      User = _unresolved_4.User;
    }, function (_unresolved_5) {
      BattleManager = _unresolved_5.BattleManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5f35QvaClNf7CDL6Ff21VI", "UIMinimapCharacter", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIMinimapCharacter", UIMinimapCharacter = (_dec = ccclass('UIMinimapCharacter'), _dec2 = property(Sprite), _dec(_class = (_class2 = (_temp = class UIMinimapCharacter extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "avatarImgSprite", _descriptor, this);

          _defineProperty(this, "avatarBgSprite", null);

          _defineProperty(this, "character", null);

          _defineProperty(this, "minimapBoxVo", null);
        }

        onLoad() {
          this.avatarBgSprite = this.node.getComponent(Sprite);
        }
        /**
         * 设置信息
         * @param character 
         * @param minimapBoxVo 
         */


        SetItemInfo(character, minimapBoxVo) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.character = character;
            _this.minimapBoxVo = minimapBoxVo; //更换背景颜色

            if (character.user.id == (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.id) {
              //自己
              // this.avatarBgSprite.color.fromHEX('#00FF00');
              _this.avatarBgSprite.color = new Color().fromHEX('#00FF00');
            } else if (character.teamType2 == (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.currentCharacter.teamType2) {
              //友队
              // this.avatarBgSprite.color.fromHEX('#0085FF');
              _this.avatarBgSprite.color = new Color().fromHEX('#0085FF');
            } else {
              //敌对
              // this.avatarBgSprite.color.fromHEX('#FF0000');
              _this.avatarBgSprite.color = new Color().fromHEX('#FF0000');
            } //加载头像


            _this.avatarImgSprite.spriteFrame = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_sprite((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.characters[character.user.character.cid].Avatar + '/spriteFrame');
          })();
        } // private isPrintResult:boolean=true;


        update() {
          if (this.character && this.minimapBoxVo
          /*&& this.isPrintResult*/
          ) {
              //获取角色在包围盒的x、y位置
              var relaX = -(this.character.renderPosition.x - this.minimapBoxVo.x) + this.minimapBoxVo.width / 2;
              var relaY = -(this.character.renderPosition.z - this.minimapBoxVo.z) + this.minimapBoxVo.height / 2; //获取角色在包围盒的x、y比例

              var pivoX = relaX / this.minimapBoxVo.width;
              var pivoY = relaY / this.minimapBoxVo.height;
              this.node.setPosition(this.minimapBoxVo.minimapWidth * pivoY - this.minimapBoxVo.minimapWidth / 2, this.minimapBoxVo.minimapHeight * pivoX - this.minimapBoxVo.minimapHeight / 2, this.node.position.z);
              this.node.setRotationFromEuler(0, 0, this.character.logicRotation.y + 90); // console.log('characterId='+this.character.user.id+'，character.renderPosition='+this.character.renderPosition
              // +'，minimapBoxVo='+JSON.stringify(this.minimapBoxVo)+'，pivoX='+pivoX+'，pivoY='+pivoY)
              // console.log('characterId='+this.character.user.id+'==='+(this.minimapBoxVo.minimapWidth*pivoY - this.minimapBoxVo.minimapWidth/2)+'===='+
              //     (this.minimapBoxVo.minimapHeight*pivoX - this.minimapBoxVo.minimapHeight/2))
              // this.isPrintResult=false;
            }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "avatarImgSprite", [_dec2], {
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
//# sourceMappingURL=UIMinimapCharacter.js.map