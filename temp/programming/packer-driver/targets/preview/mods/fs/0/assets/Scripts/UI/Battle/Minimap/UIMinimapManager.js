System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, UITransform, instantiate, Vec3, UIMinimapCharacter, CharacterManager, MinimapBoxVo, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, _crd, ccclass, property, UIMinimapManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIMinimapCharacter(extras) {
    _reporterNs.report("UIMinimapCharacter", "./UIMinimapCharacter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterManager(extras) {
    _reporterNs.report("CharacterManager", "../Managers/CharacterManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMinimapBoxVo(extras) {
    _reporterNs.report("MinimapBoxVo", "../../../Vo/MinimapBoxVo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      UIMinimapCharacter = _unresolved_2.UIMinimapCharacter;
    }, function (_unresolved_3) {
      CharacterManager = _unresolved_3.CharacterManager;
    }, function (_unresolved_4) {
      MinimapBoxVo = _unresolved_4.MinimapBoxVo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa9cdf2DDBIO7Ornq4HhwQ+", "UIMinimapManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIMinimapManager", UIMinimapManager = (_dec = ccclass('UIMinimapManager'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = class UIMinimapManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "minimapBoundingBox", _descriptor, this);

          _initializerDefineProperty(this, "minimapCharacterPrfab", _descriptor2, this);

          _defineProperty(this, "minimapBoxVo", null);
        }

        onLoad() {
          UIMinimapManager.Instance = this;
        } //BoxCollider 编辑器可用查看地图大小，在运行状态下不可用，因为是3D物理的库


        Init() {
          var boxBgVec3 = new Vec3(32, 1, 72); //this.minimapBoundingBox.getComponent(BoxCollider).size;

          var minimapSize = this.node.getComponent(UITransform).contentSize;
          this.minimapBoxVo = new (_crd && MinimapBoxVo === void 0 ? (_reportPossibleCrUseOfMinimapBoxVo({
            error: Error()
          }), MinimapBoxVo) : MinimapBoxVo)(boxBgVec3.x, boxBgVec3.z, this.minimapBoundingBox.worldPosition.x, this.minimapBoundingBox.worldPosition.z, minimapSize.width, minimapSize.height);
          this.CreateMinimapCharacter();
        }
        /**
         * 创建小地图角色
         */


        CreateMinimapCharacter() {
          var characterList = (_crd && CharacterManager === void 0 ? (_reportPossibleCrUseOfCharacterManager({
            error: Error()
          }), CharacterManager) : CharacterManager).Instance.characterList;
          this.minimapCharacterPrfab.active = true;

          for (var i = 0; i < characterList.length; i++) {
            var character = characterList[i];
            var minimapCharacterNode = instantiate(this.minimapCharacterPrfab);
            var uiMinimapCharacter = minimapCharacterNode.getComponent(_crd && UIMinimapCharacter === void 0 ? (_reportPossibleCrUseOfUIMinimapCharacter({
              error: Error()
            }), UIMinimapCharacter) : UIMinimapCharacter);
            this.node.addChild(minimapCharacterNode);
            uiMinimapCharacter.SetItemInfo(character, this.minimapBoxVo);
          }

          this.minimapCharacterPrfab.active = false;
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "minimapBoundingBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "minimapCharacterPrfab", [_dec3], {
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
//# sourceMappingURL=UIMinimapManager.js.map