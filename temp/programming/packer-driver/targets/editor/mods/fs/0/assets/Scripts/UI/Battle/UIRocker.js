System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, systemEvent, SystemEvent, Vec2, Vec3, game, UITransform, MathUtil, BattleManager, OptType, TeamType2, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, UIRocker;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "./Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOptType(extras) {
    _reporterNs.report("OptType", "./enums/OptType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "./enums/TeamType2", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      game = _cc.game;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      MathUtil = _unresolved_2.MathUtil;
    }, function (_unresolved_3) {
      BattleManager = _unresolved_3.BattleManager;
    }, function (_unresolved_4) {
      OptType = _unresolved_4.OptType;
    }, function (_unresolved_5) {
      TeamType2 = _unresolved_5.TeamType2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d133SFk9dCwYsbe8cYgUQu", "UIRocker", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 摇杆操作
       */

      _export("UIRocker", UIRocker = (_dec = ccclass('UIRocker'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class UIRocker extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "MoveFront", _descriptor, this);

          _defineProperty(this, "startMoveVec2", new Vec2());

          _defineProperty(this, "currentMoveVec2", new Vec2());

          _defineProperty(this, "moveVec3", new Vec3());

          _defineProperty(this, "bgRadius", 0);

          _defineProperty(this, "isTouchDown", false);

          _defineProperty(this, "startBgX", 0);

          _defineProperty(this, "startBgY", 0);

          _defineProperty(this, "startFrontX", 0);

          _defineProperty(this, "startFrontY", 0);
        }

        start() {
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.OnTouchMove, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.OnTouchEnd, this);
          this.startBgX = this.startMoveVec2.x = this.node.worldPosition.x;
          this.startBgY = this.startMoveVec2.y = this.node.worldPosition.y;
          this.startFrontX = this.MoveFront.position.x;
          this.startFrontY = this.MoveFront.position.y;
          let bgRect = this.node.getComponent(UITransform).getBoundingBox(); //背景矩形

          this.bgRadius = bgRect.w / 2; //背景半径
        }
        /**
         * 摇杆开始移动
         */


        OnTouchMove(e) {
          e.getStartLocation(this.startMoveVec2); //开始移动点

          if (this.startMoveVec2.x < game.canvas.width * 0.4) {
            //屏幕左边40%滑动有效
            e.getLocation(this.currentMoveVec2); //当前移动点

            this.isTouchDown = true;
          } else {
            //不是有效区则恢复位置
            this.startMoveVec2.x = this.node.worldPosition.x;
            this.startMoveVec2.y = this.node.worldPosition.y;
            this.isTouchDown = false;
          }
        }
        /**
         * 摇杆按下
         */


        TouchDown() {
          //计算圆心到移动点位置
          let len = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetDistance(this.node.worldPosition.x, this.node.worldPosition.y, this.currentMoveVec2.x, this.currentMoveVec2.y); // console.log(len+'==='+this.bgRadius)

          if (len <= this.bgRadius) {
            //圆范围内
            this.moveVec3.x = this.currentMoveVec2.x;
            this.moveVec3.y = this.currentMoveVec2.y;
            this.moveVec3.z = 0;
            this.MoveFront.setWorldPosition(this.moveVec3);
          } else {
            //圆范围外，求圆上点位置
            let xLen = this.currentMoveVec2.x - this.startMoveVec2.x;
            let yLen = this.currentMoveVec2.y - this.startMoveVec2.y;
            let yuanX = xLen / len * this.bgRadius; //圆上x轴

            let yuanY = yLen / len * this.bgRadius; //圆上y轴

            this.moveVec3.x = yuanX;
            this.moveVec3.y = yuanY;
            this.moveVec3.z = 0;
            this.MoveFront.setPosition(this.moveVec3);
          }

          let degree = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetAngle(this.currentMoveVec2.y - this.startMoveVec2.y, this.currentMoveVec2.x - this.startMoveVec2.x);

          if ((_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.currentCharacter.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue) {
            //蓝队
            degree = 180 - degree;
          } else {
            degree = -degree;
          } // console.log('degree='+degree)
          //封装操作


          if (!(_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.frameHandle.opt || (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.frameHandle.opt == (_crd && OptType === void 0 ? (_reportPossibleCrUseOfOptType({
            error: Error()
          }), OptType) : OptType).Rocker) {
            (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.frameHandle.opt = (_crd && OptType === void 0 ? (_reportPossibleCrUseOfOptType({
              error: Error()
            }), OptType) : OptType).Rocker;
            (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.frameHandle.optValue1 = Math.round(degree); //角度
            // BattleManager.Instance.frameHandle.optValue2= len > 0 ? 1 : 0;  //移动
          }
        }
        /**
         * 摇杆结束移动
         */


        OnTouchEnd(e) {
          this.isTouchDown = false;
          this.startMoveVec2.x = this.startBgX;
          this.startMoveVec2.y = this.startBgY;
          this.moveVec3.x = this.startFrontX;
          this.moveVec3.y = this.startFrontY;
          this.moveVec3.z = 0;
          this.MoveFront.setPosition(this.moveVec3);
        }

        update() {
          if (this.isTouchDown) {
            this.TouchDown();
          } //更新摇杆点击位置


          this.node.setWorldPosition(this.startMoveVec2.x, this.startMoveVec2.y, 0);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MoveFront", [_dec2], {
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
//# sourceMappingURL=UIRocker.js.map