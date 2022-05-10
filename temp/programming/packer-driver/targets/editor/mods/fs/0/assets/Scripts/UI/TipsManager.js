System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, Prefab, instantiate, director, view, UITips, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, TipsManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUITips(extras) {
    _reporterNs.report("UITips", "./Common/UITips", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      director = _cc.director;
      view = _cc.view;
    }, function (_unresolved_2) {
      UITips = _unresolved_2.UITips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "105c3nBS2JHILB3KsDlUq0I", "TipsManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TipsManager", TipsManager = (_dec = ccclass('TipsManager'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = _class3 = class TipsManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelPfb", _descriptor, this);

          _defineProperty(this, "tipsList", []);

          _defineProperty(this, "windowSize", null);

          _defineProperty(this, "moveTipsList", []);
        }

        start() {
          game.addPersistRootNode(this.node);

          if (!TipsManager.Instance) {
            TipsManager.Instance = this;
          }

          this.windowSize = view.getCanvasSize();
          console.log('windowSize=' + this.windowSize);
        }
        /**
         * 创建显示节点
         * @param content 
         */


        createShowNode(content) {
          try {
            var _director$getScene;

            let labelNode = null;

            if (this.tipsList.length > 3) {
              labelNode = this.tipsList.shift();
              console.log('缓存取节点 size=' + this.tipsList.length);
            } else {
              labelNode = instantiate(this.labelPfb); // this.tipsList.push(labelNode)
            } //设置内容


            let uiTips = labelNode.getComponent(_crd && UITips === void 0 ? (_reportPossibleCrUseOfUITips({
              error: Error()
            }), UITips) : UITips);
            uiTips.LabelText = content; //设置位置

            uiTips.labelNode.setPosition(0, 0, 0);
            labelNode.setPosition(this.windowSize.width / 2, this.windowSize.height / 2, 0);
            let newNode = (_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.getChildByUuid(labelNode.uuid);

            if (!newNode) {
              var _director$getScene2;

              //未找到
              console.log('添加到场景' + labelNode.uuid);
              (_director$getScene2 = director.getScene()) === null || _director$getScene2 === void 0 ? void 0 : _director$getScene2.addChild(labelNode);
            }

            return labelNode;
          } catch (err) {
            console.log(err);
          }

          return null;
        }

        update() {
          if (this.moveTipsList.length > 0) {
            try {
              for (let i = 0; i < this.moveTipsList.length; i++) {
                let labelNode = this.moveTipsList[i];
                let uiTips = labelNode.getComponent(_crd && UITips === void 0 ? (_reportPossibleCrUseOfUITips({
                  error: Error()
                }), UITips) : UITips);
                let pos = uiTips.labelNode.position; // console.log('pos='+pos)

                let y = pos.y + 0.8;
                uiTips.labelNode.setPosition(pos.x, y, pos.z);

                if (y > 25) {
                  var _director$getScene3;

                  //移除
                  console.log('移除id=' + labelNode.uuid);
                  (_director$getScene3 = director.getScene()) === null || _director$getScene3 === void 0 ? void 0 : _director$getScene3.removeChild(labelNode);
                  this.tipsList.push(labelNode);
                  this.moveTipsList.splice(i, 1);
                }
              }
            } catch (err) {
              console.log(err);
              this.moveTipsList = [];
            }
          }
        }
        /**
         * 显示提示
         * @param str 
         */


        showTips(str) {
          let labelNode = this.createShowNode(str);

          if (labelNode) {
            this.moveTipsList.push(labelNode);
          }
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelPfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TipsManager.js.map