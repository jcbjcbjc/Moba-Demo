System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Node, Component, Enum, Sprite, SpriteFrame, tween, _decorator, EventHandler, Tween, Button, UITransform, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, disallowMultiple, menu, executionOrder, SelectedType, ListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "./List", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Node = _cc.Node;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      _decorator = _cc._decorator;
      EventHandler = _cc.EventHandler;
      Tween = _cc.Tween;
      Button = _cc.Button;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fa70CpEkBGkYi0OTOMhlGl", "ListItem", undefined);

      /******************************************
       * @author kL <klk0@qq.com>
       * @date 2019/12/9
       * @doc ??????Item??????.
       * ?????????
       *      1?????????????????????List????????????????????????????????????..???
       * @end
       ******************************************/
      ({
        ccclass,
        property,
        disallowMultiple,
        menu,
        executionOrder
      } = _decorator);

      (function (SelectedType) {
        SelectedType[SelectedType["NONE"] = 0] = "NONE";
        SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
        SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
      })(SelectedType || (SelectedType = {}));

      _export("default", //??????List
      ListItem = (_dec = disallowMultiple(), _dec2 = menu('List Item'), _dec3 = executionOrder(-5001), _dec4 = property({
        type: Enum(SelectedType),
        tooltip: '????????????'
      }), _dec5 = property({
        type: Node,
        tooltip: '????????????',

        visible() {
          return this.selectedMode > SelectedType.NONE;
        }

      }), _dec6 = property({
        type: SpriteFrame,
        tooltip: '????????????SpriteFrame',

        visible() {
          return this.selectedMode == SelectedType.SWITCH;
        }

      }), _dec7 = property({
        tooltip: '??????????????????????????????'
      }), ccclass(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = class ListItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "selectedMode", _descriptor, this);

          _initializerDefineProperty(this, "selectedFlag", _descriptor2, this);

          _initializerDefineProperty(this, "selectedSpriteFrame", _descriptor3, this);

          _defineProperty(this, "_unselectedSpriteFrame", null);

          _initializerDefineProperty(this, "adaptiveSize", _descriptor4, this);

          _defineProperty(this, "_selected", false);

          _defineProperty(this, "_btnCom", void 0);

          _defineProperty(this, "list", void 0);

          _defineProperty(this, "_eventReg", false);

          _defineProperty(this, "listId", void 0);
        }

        set selected(val) {
          this._selected = val;
          Tween;
          if (!this.selectedFlag) return;

          switch (this.selectedMode) {
            case SelectedType.TOGGLE:
              this.selectedFlag.active = val;
              break;

            case SelectedType.SWITCH:
              let sp = this.selectedFlag.getComponent(Sprite);

              if (sp) {
                sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
              }

              break;
          }
        }

        get selected() {
          return this._selected;
        } //????????????


        get btnCom() {
          if (!this._btnCom) this._btnCom = this.node.getComponent(Button);
          return this._btnCom;
        } //?????????List??????


        onLoad() {
          // //???????????????????????????selectedFlag??????
          // if (!this.btnCom)
          //     this.selectedMode == SelectedType.NONE;
          //??????????????????????????????????????????
          if (this.selectedMode == SelectedType.SWITCH) {
            let com = this.selectedFlag.getComponent(Sprite);
            this._unselectedSpriteFrame = com.spriteFrame;
          }
        }

        onDestroy() {
          this.node.off(Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
        }

        _registerEvent() {
          if (!this._eventReg) {
            if (this.btnCom && this.list.selectedMode > 0) {
              this.btnCom.clickEvents.unshift(this.createEvt(this, 'onClickThis'));
            }

            if (this.adaptiveSize) {
              this.node.on(Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
            }

            this._eventReg = true;
          }
        }

        _onSizeChange() {
          this.list._onItemAdaptive(this.node);
        }
        /**
         * ????????????
         * @param {cc.Component} component ????????????
         * @param {string} handlerName ??????????????????
         * @param {cc.Node} node ????????????node????????????????????????component.node???
         * @returns cc.Component.EventHandler
         */


        createEvt(component, handlerName, node = null) {
          if (!component.isValid) return; //????????????????????????????????????????????????

          component['comName'] = component['comName'] || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, '');
          let evt = new EventHandler();
          evt.target = node || component.node;
          evt.component = component['comName'];
          evt.handler = handlerName;
          return evt;
        }

        showAni(aniType, callFunc, del) {
          let t = this;
          let twe;
          let ut = t.node.getComponent(UITransform);

          switch (aniType) {
            case 0:
              //????????????
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(0, ut.height * 2)
              });
              break;

            case 1:
              //????????????
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(ut.width * 2, 0)
              });
              break;

            case 2:
              //????????????
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(0, ut.height * -2)
              });
              break;

            case 3:
              //????????????
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(ut.width * -2, 0)
              });
              break;

            default:
              //?????????????????????
              twe = tween(t.node).to(.3, {
                scale: new Vec3(.1, .1)
              });
              break;
          }

          if (callFunc || del) {
            twe.call(() => {
              if (del) {
                t.list._delSingleItem(t.node);

                for (let n = t.list.displayData.length - 1; n >= 0; n--) {
                  if (t.list.displayData[n].id == t.listId) {
                    t.list.displayData.splice(n, 1);
                    break;
                  }
                }
              }

              callFunc();
            });
          }

          twe.start();
        }

        onClickThis() {
          this.list.selectedId = this.listId;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectedMode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return SelectedType.NONE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectedFlag", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectedSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "adaptiveSize", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ListItem.js.map