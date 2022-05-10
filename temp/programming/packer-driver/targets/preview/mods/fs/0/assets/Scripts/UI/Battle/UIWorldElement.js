System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, CameraComponent, BattleManager, EventManager, EventType, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, UIWorldElement;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "./Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      CameraComponent = _cc.CameraComponent;
    }, function (_unresolved_2) {
      BattleManager = _unresolved_2.BattleManager;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f75arTVetJnYo/Iddj4gHl", "UIWorldElement", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 世界元素
       */

      _export("UIWorldElement", UIWorldElement = (_dec = ccclass('UIWorldElement'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class UIWorldElement extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "owner", null);

          _defineProperty(this, "height", 2.3);

          _initializerDefineProperty(this, "camera", _descriptor, this);

          _defineProperty(this, "uiVec3", new Vec3());

          _defineProperty(this, "worldVec3", new Vec3());

          _defineProperty(this, "prevWorldVec3", new Vec3());

          _defineProperty(this, "cameraComponent", null);

          _defineProperty(this, "isExecuteOnce", false);

          _defineProperty(this, "isExecute", false);
        }

        //是否已经执行
        start() {
          this.cameraComponent = this.camera.getComponent(CameraComponent);
        }

        update(dt) {
          if (this.owner && this.camera) {
            if (this.isExecuteOnce && this.isExecute) {
              //只执行一次，并且已经执行
              return;
            }

            this.isExecute = true;
            this.owner.parent.getWorldPosition(this.worldVec3); //插值
            // MathUtil.lerp(this.prevWorldVec3, this.worldVec3, dt * 1000, NetConfig.frameTime, 2);
            // this.prevWorldVec3.set(this.worldVec3.x, this.worldVec3.y, this.worldVec3.z);

            var pos = this.worldVec3.add3f(0, this.height, 0);
            this.cameraComponent.convertToUINode(pos, this.node.parent, this.uiVec3);
            this.node.position = this.uiVec3;

            if (this.isExecuteOnce) {
              //只执行一次   
              //抛出事件
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.dispatchObj((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).OnWorldElementExecuteOnceSuccess, this);
            } //计算元素大小


            var len = Vec3.distance(pos, this.camera.worldPosition);
            var scale = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.camCharDis / len;
            scale = scale > 0.9 ? 0.9 : scale; //    console.log('len='+len+'，scale='+scale+'，camCharDis='+BattleManager.Instance.camCharDis)

            this.node.setScale(scale, scale, scale);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
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
//# sourceMappingURL=UIWorldElement.js.map