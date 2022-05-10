System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, EffectType, MathUtil, NetConfig, LogicRenderConvert, GlobalPool, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EffectController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "./EffectType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Models/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConfig(extras) {
    _reporterNs.report("NetConfig", "../../../Network/NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicRenderConvert(extras) {
    _reporterNs.report("LogicRenderConvert", "../Utils/LogicRenderConvert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalPool(extras) {
    _reporterNs.report("GlobalPool", "../../../Utils/GlobalPool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EffectType = _unresolved_2.EffectType;
    }, function (_unresolved_3) {
      MathUtil = _unresolved_3.MathUtil;
    }, function (_unresolved_4) {
      NetConfig = _unresolved_4.NetConfig;
    }, function (_unresolved_5) {
      LogicRenderConvert = _unresolved_5.LogicRenderConvert;
    }, function (_unresolved_6) {
      GlobalPool = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af1379/1DlNFL3vmn1TMutg", "EffectController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EffectController", EffectController = (_dec = ccclass('EffectController'), _dec2 = property(Number), _dec(_class = (_class2 = (_temp = class EffectController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lifeTime", _descriptor, this);

          _defineProperty(this, "time", 0);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "target", void 0);

          _defineProperty(this, "targetPos", new Vec3());

          _defineProperty(this, "startPos", void 0);

          _defineProperty(this, "offset", void 0);

          _defineProperty(this, "bullet", void 0);

          _defineProperty(this, "tempVec3", new Vec3());
        }

        onEnable() {
          if (this.type != (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).Bullet && this.type != (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).BulletRealCheck) {
            let this_ = this;
            setTimeout(function () {
              if (this_.node) {
                this_.node.active = false;
              }
            }, this.lifeTime * 1000);
          }
        }

        Init(type, source, target, offset, duration) {
          this.type = type;
          this.target = target;
          if (duration > 0) this.lifeTime = duration;
          this.time = 0;

          if (type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).Bullet) {
            this.startPos = this.node.worldPosition;
            this.offset = offset;
            this.targetPos.set(target.worldPosition.x + offset.x, target.worldPosition.y + offset.y, target.worldPosition.z + offset.z);
            console.log('EffectController Init targetPos=' + this.targetPos);
          } else if (type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).Hit) {
            this.node.worldPosition = new Vec3(target.worldPosition.x + offset.x, target.worldPosition.y + offset.y, target.worldPosition.z + offset.z);
          }
        }

        InitBulletRealCheck(type, bullet) {
          this.type = type;
          this.bullet = bullet;
        }

        update(dt) {
          let dtms = dt * 1000;

          if (this.type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).Bullet) {
            this.time += dtms;

            if (this.target) {
              this.targetPos.set(this.target.worldPosition.x + this.offset.x, this.target.worldPosition.y + this.offset.y, this.target.worldPosition.z + this.offset.z);
            } // this.node.lookAt(this.targetPos);
            // if(Vec3.distance(this.targetPos,this.node.worldPosition) < 0.5)


            if ((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).GetDistance(this.targetPos.x, this.targetPos.z, this.node.worldPosition.x, this.node.worldPosition.z) < 0.5) {
              console.log('回收子弹');
              this.recoveryThisNode();
              return;
            }

            if (this.lifeTime > 0 && this.time >= this.lifeTime) {
              console.log('回收子弹');
              this.recoveryThisNode();
              return;
            }

            this.node.setWorldPosition(Vec3.lerp(this.node.worldPosition, this.node.worldPosition, this.targetPos, dtms / (this.lifeTime - this.time))); // this.node.setWorldPosition(MathUtil.lerp(this.node.worldPosition, this.targetPos, dtms, dtms / (this.lifeTime - this.time)));
          } else if (this.type == (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).BulletRealCheck) {
            //子弹实时检测
            this.tempVec3.set((_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).LogicToRender_Value(this.bullet.positionX), this.node.worldPosition.y, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).LogicToRender_Value(this.bullet.positionZ));
            this.node.setWorldPosition((_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).lerp(this.node.worldPosition, this.tempVec3, dtms, (_crd && NetConfig === void 0 ? (_reportPossibleCrUseOfNetConfig({
              error: Error()
            }), NetConfig) : NetConfig).frameTime));

            if (this.bullet.Stoped) {
              this.recoveryThisNode();
              console.log('EffectController BulletRealCheck Stoped destroy');
              return;
            }
          }
        }
        /**
         * 回收当前节点
         */


        recoveryThisNode() {
          this.node.removeFromParent(); // 将节点从父亲节点移除

          (_crd && GlobalPool === void 0 ? (_reportPossibleCrUseOfGlobalPool({
            error: Error()
          }), GlobalPool) : GlobalPool).put(this.node); //回收到对象池
        }

        onDestroy() {
          console.log('EffectController onDestroy');
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lifeTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EffectController.js.map