System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, systemEvent, SystemEvent, Vec2, UITransform, MeshRenderer, Color, LoadResUtil, TargetType, BattleManager, OptType, MathUtil, BattleGlobal, SkillTipsType, TeamType2, CreatureManager, LogicRenderConvert, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, UISkillSlot;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "../Models/Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTargetType(extras) {
    _reporterNs.report("TargetType", "../enums/TargetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleManager(extras) {
    _reporterNs.report("BattleManager", "../Managers/BattleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOptType(extras) {
    _reporterNs.report("OptType", "../enums/OptType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../../Utils/MathUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleGlobal(extras) {
    _reporterNs.report("BattleGlobal", "../Utils/BattleGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTipsType(extras) {
    _reporterNs.report("SkillTipsType", "../enums/SkillTipsType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType2", "../enums/TeamType2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreatureManager(extras) {
    _reporterNs.report("CreatureManager", "../Managers/CreatureManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicRenderConvert(extras) {
    _reporterNs.report("LogicRenderConvert", "../Utils/LogicRenderConvert", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Vec2 = _cc.Vec2;
      UITransform = _cc.UITransform;
      MeshRenderer = _cc.MeshRenderer;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      LoadResUtil = _unresolved_2.LoadResUtil;
    }, function (_unresolved_3) {
      TargetType = _unresolved_3.TargetType;
    }, function (_unresolved_4) {
      BattleManager = _unresolved_4.BattleManager;
    }, function (_unresolved_5) {
      OptType = _unresolved_5.OptType;
    }, function (_unresolved_6) {
      MathUtil = _unresolved_6.MathUtil;
    }, function (_unresolved_7) {
      BattleGlobal = _unresolved_7.BattleGlobal;
    }, function (_unresolved_8) {
      SkillTipsType = _unresolved_8.SkillTipsType;
    }, function (_unresolved_9) {
      TeamType2 = _unresolved_9.TeamType2;
    }, function (_unresolved_10) {
      CreatureManager = _unresolved_10.CreatureManager;
    }, function (_unresolved_11) {
      LogicRenderConvert = _unresolved_11.LogicRenderConvert;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5efd7TtTfZL6Z4HbK4kTSID", "UISkillSlot", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UISkillSlot", UISkillSlot = (_dec = ccclass('UISkillSlot'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(String), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec(_class = (_class2 = (_temp = class UISkillSlot extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "icon", _descriptor, this);

          _initializerDefineProperty(this, "overlay", _descriptor2, this);

          _initializerDefineProperty(this, "cdText", _descriptor3, this);

          _initializerDefineProperty(this, "type", _descriptor4, this);

          _initializerDefineProperty(this, "skillStartBg", _descriptor5, this);

          _initializerDefineProperty(this, "skillMoveFont", _descriptor6, this);

          _initializerDefineProperty(this, "cancelCasting", _descriptor7, this);

          _defineProperty(this, "skill", null);

          _defineProperty(this, "overlaySpeed", 0);

          _defineProperty(this, "cdRemain", 0);

          _defineProperty(this, "startMoveVec2", new Vec2());

          _defineProperty(this, "currentMoveVec2", new Vec2());

          _defineProperty(this, "moveInFlag", false);

          _defineProperty(this, "radius", void 0);

          _defineProperty(this, "cancelCastingRadius", void 0);

          _defineProperty(this, "skillStartBgRadius", void 0);

          _defineProperty(this, "isTouchStart", false);

          _defineProperty(this, "isControlSkill", false);

          _defineProperty(this, "selectedRangeNode", void 0);

          _defineProperty(this, "straightLineNode", void 0);

          _defineProperty(this, "dirNode", void 0);

          _defineProperty(this, "sectorNode", void 0);

          _defineProperty(this, "dirDegree", 0);

          _defineProperty(this, "normalColor", new Color(255, 255, 255));

          _defineProperty(this, "redColor", new Color(255, 0, 0, 90));
        }

        //?????????????????????
        // Use this for initialization
        start() {
          this.overlay.enabled = false;
          this.cdText.enabled = false; //????????????

          var nodeRect = this.getComponent(UITransform).getBoundingBox();
          this.radius = nodeRect.width / 2; //??????????????????

          var cancelCastingNodeRect = this.cancelCasting.node.getComponent(UITransform).getBoundingBox();
          this.cancelCastingRadius = cancelCastingNodeRect.width / 2;
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.OnTouchStart, this);
          this.skillStartBgRadius = this.skillStartBg.getComponent(UITransform).getBoundingBox().width / 2;
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.OnTouchEnd, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.OnTouchMove, this);
        }

        //??????

        /**
         * ??????????????????
         * @param pointX 
         * @param pointY 
         */
        updateMaterialColor(pointX, pointY) {
          //???????????????????????????????????????
          var isCollideFlag = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).CollidePointAndCircle2(pointX, pointY, this.cancelCasting.node.worldPosition.x, this.cancelCasting.node.worldPosition.y, this.cancelCastingRadius); //??????????????????

          var childrenArr = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.MyBattleItemNode.children;

          for (var i = 0; i < childrenArr.length; i++) {
            var node = childrenArr[i];

            if (node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).RangeBg] || node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).SelectedRange] || node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).StraightLine] || node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).Dir] || node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).Sector]) {
              node.getComponent(MeshRenderer).getMaterial(0).setProperty('mainColor', isCollideFlag ? this.redColor : this.normalColor);
            }
          }

          this.cancelCasting.color = isCollideFlag ? this.redColor : this.normalColor;
        }
        /**
         * ????????????????????????????????????
         * @param e 
         */


        OnTouchMove(e) {
          // console.log('OnTouchMove='+this.moveInFlag)
          if (!this.moveInFlag) {
            return;
          }

          if (!this.isControlSkill) {
            return;
          }

          e.getLocation(this.currentMoveVec2); //???????????????
          //????????????????????????

          var len = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetDistance(this.startMoveVec2.x, this.startMoveVec2.y, this.currentMoveVec2.x, this.currentMoveVec2.y); // console.log(len+'==='+this.skillStartBgRadius)

          if (len <= this.skillStartBgRadius) {
            //????????????
            this.skillMoveFont.node.setWorldPosition(this.currentMoveVec2.x, this.currentMoveVec2.y, 0);
          } else {
            //?????????????????????????????????
            var xLen = this.currentMoveVec2.x - this.startMoveVec2.x;
            var yLen = this.currentMoveVec2.y - this.startMoveVec2.y;
            var yuanX = xLen / len * this.skillStartBgRadius; //??????x???

            var yuanY = yLen / len * this.skillStartBgRadius; //??????y???
            // console.log(this.currentMoveVec2, this.startMoveVec2)

            this.skillMoveFont.node.setPosition(yuanX, yuanY, 0);
          }

          var degree = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetAngle(this.currentMoveVec2.y - this.startMoveVec2.y, this.currentMoveVec2.x - this.startMoveVec2.x);

          if ((_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.currentCharacter.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType2) : TeamType2).Blue) {
            //??????
            degree = -degree;
          } else {
            degree = 180 - degree;
          }

          this.dirDegree = degree; //??????????????????

          if (this.selectedRangeNode) {
            //????????????
            var smallPos = this.skillMoveFont.node.position;
            var yuanScaleX = smallPos.x / (this.skillStartBgRadius * 2);
            var yuanScaleY = smallPos.y / (this.skillStartBgRadius * 2);
            var castRange = this.skill.Define.CastRange * 2; //????????????

            if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType).SelectedRange]) {
              //????????????
              castRange -= this.skill.Define.AOERange * 2;
            }

            this.selectedRangeNode.setPosition(((_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.currentCharacter.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
              error: Error()
            }), TeamType2) : TeamType2).Blue ? 1 : -1) * castRange * yuanScaleX, this.selectedRangeNode.position.y, ((_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.currentCharacter.teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
              error: Error()
            }), TeamType2) : TeamType2).Blue ? -1 : 1) * castRange * yuanScaleY); // console.log((castRange*yuanScaleX) +'==='+ (castRange*yuanScaleY))
          } else if (this.straightLineNode) {
            //??????
            this.straightLineNode.setRotationFromEuler(-90, degree, 0);
          } else if (this.dirNode) {
            //??????
            this.dirNode.setRotationFromEuler(-90, degree, 0);
          } else if (this.sectorNode) {
            //??????
            this.sectorNode.setRotationFromEuler(-90, degree, 0);
          }

          this.updateMaterialColor(this.currentMoveVec2.x, this.currentMoveVec2.y);
        }
        /**
         * ????????????????????????
         */


        OnTouchEnd(e) {
          //???????????????????????????
          this.skillStartBg.node.active = false;
          this.cancelCasting.node.active = false; //????????????????????????

          var childrenArr = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.MyBattleItemNode.children;

          for (var i = 0; i < childrenArr.length; i++) {
            var node = childrenArr[i];

            if (node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).RangeBg] || node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).SelectedRange] || node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).StraightLine] || node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).Dir] || node.name == (_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).Sector]) {
              (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                error: Error()
              }), BattleManager) : BattleManager).Instance.MyBattleItemNode.removeChild(node);
            }
          }

          if (!this.moveInFlag) {
            return;
          }

          this.moveInFlag = false;
          var isCastSkill = false; //??????????????????
          //????????????

          if (this.isTouchStart) {
            this.isTouchStart = false; //????????????????????????

            var isCollideFlag = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).CollidePointAndCircle2(e.getLocation().x, e.getLocation().y, this.node.worldPosition.x, this.node.worldPosition.y, this.radius);

            if (isCollideFlag) {
              console.log('????????????-------------');
              isCastSkill = true;
            }
          } //???????????????????????????????????????


          if (this.isControlSkill) {
            var _isCollideFlag = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).CollidePointAndCircle2(e.getLocation().x, e.getLocation().y, this.cancelCasting.node.worldPosition.x, this.cancelCasting.node.worldPosition.y, this.cancelCastingRadius);

            if (_isCollideFlag) {
              console.log('??????????????????');
              isCastSkill = false;
            } else {
              isCastSkill = true;
            }
          }

          if (isCastSkill) {
            console.log('????????????');
            this.CastSkill();
          }

          this.selectedRangeNode = null;
          this.straightLineNode = null;
          this.dirNode = null;
          this.sectorNode = null;
        }
        /**
         * ????????????????????????
         */


        OnTouchStart(e) {
          if (!this.skill) {
            return;
          }

          if (this.skill.cd > 0) {
            return;
          }

          e.getStartLocation(this.startMoveVec2); //???????????????
          // console.log(this.startMoveVec2)
          //?????????????????????????????????
          // console.log(this.startMoveVec2, this.node.worldPosition, this.radius)

          var isCollideFlag = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).CollidePointAndCircle2(this.startMoveVec2.x, this.startMoveVec2.y, this.node.worldPosition.x, this.node.worldPosition.y, this.radius);

          if (!isCollideFlag) {
            // console.log("??????????????????")
            return;
          }

          this.isTouchStart = true;
          var isShowControlBtn = true; //????????????????????????

          var isShowSkillTipsRange = true; //??????????????????????????????

          if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).RangeTarget]) {
            //????????????
            isShowControlBtn = false;
          }

          if (isShowControlBtn) {
            //??????????????????
            this.skillStartBg.node.setWorldPosition(this.startMoveVec2.x, this.startMoveVec2.y, 0);
            this.skillMoveFont.node.setWorldPosition(this.startMoveVec2.x, this.startMoveVec2.y, 0);
            this.skillStartBg.node.active = true;
            this.isControlSkill = true;
          } else {
            this.skillStartBg.node.active = false;
            this.isControlSkill = false;
          }

          this.moveInFlag = true;

          if (isShowSkillTipsRange) {
            //????????????????????????
            //????????????????????????
            var castRange = this.skill.Define.CastRange * 2; //????????????

            if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType).SelectedRange]) {
              //????????????
              castRange -= this.skill.Define.AOERange * 2;
            }

            var rangeBgNode = (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
              error: Error()
            }), BattleGlobal) : BattleGlobal).skillTipsMap.get((_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
              error: Error()
            }), SkillTipsType) : SkillTipsType).RangeBg]);
            rangeBgNode.setPosition(0, 0, 0);
            rangeBgNode.scale.set(castRange, castRange, castRange);
            (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.MyBattleItemNode.addChild(rangeBgNode);

            if (isShowControlBtn) {
              //??????????????????
              var teamType2 = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                error: Error()
              }), BattleManager) : BattleManager).Instance.currentCharacter.teamType2; //????????????????????????

              if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType).SelectedRange]) {
                //????????????
                console.log('????????????');
                this.selectedRangeNode = (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                  error: Error()
                }), BattleGlobal) : BattleGlobal).skillTipsMap.get((_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
                  error: Error()
                }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
                  error: Error()
                }), SkillTipsType) : SkillTipsType).SelectedRange]);
                this.selectedRangeNode.setPosition(0, 0, 0);
                var AOERange = this.skill.Define.AOERange * 2; //????????????

                this.selectedRangeNode.scale.set(AOERange, AOERange, this.selectedRangeNode.scale.z);
                (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                  error: Error()
                }), BattleManager) : BattleManager).Instance.MyBattleItemNode.addChild(this.selectedRangeNode);
              } else if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType).StraightLine]) {
                //??????
                console.log('??????');
                this.straightLineNode = (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                  error: Error()
                }), BattleGlobal) : BattleGlobal).skillTipsMap.get((_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
                  error: Error()
                }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
                  error: Error()
                }), SkillTipsType) : SkillTipsType).StraightLine]);
                this.straightLineNode.setPosition(0, 0, 0);
                this.straightLineNode.setRotationFromEuler(-90, teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                  error: Error()
                }), TeamType2) : TeamType2).Blue ? 0 : 180, 0);
                this.straightLineNode.scale.set(this.skill.Define.BulletRadius, castRange, this.straightLineNode.scale.z);
                (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                  error: Error()
                }), BattleManager) : BattleManager).Instance.MyBattleItemNode.addChild(this.straightLineNode);
              } else if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType).Dir]) {
                //??????
                console.log('??????');
                this.dirNode = (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                  error: Error()
                }), BattleGlobal) : BattleGlobal).skillTipsMap.get((_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
                  error: Error()
                }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
                  error: Error()
                }), SkillTipsType) : SkillTipsType).Dir]);
                this.dirNode.setPosition(0, 0, 0);
                this.dirNode.setRotationFromEuler(-90, teamType2 == (_crd && TeamType2 === void 0 ? (_reportPossibleCrUseOfTeamType({
                  error: Error()
                }), TeamType2) : TeamType2).Blue ? 0 : 180, 0);
                this.dirNode.scale.set(this.dirNode.scale.x, castRange, this.dirNode.scale.z);
                (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                  error: Error()
                }), BattleManager) : BattleManager).Instance.MyBattleItemNode.addChild(this.dirNode);
              }
              /* else if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.Sector]){  //??????
                 console.log('??????')
               this.sectorNode = BattleGlobal.skillTipsMap.get(SkillTipsType[SkillTipsType.Sector]) as Node;
               this.sectorNode.setPosition(0, 0, 0);
               this.sectorNode.setRotationFromEuler(-90 ,0 , 0);
               this.sectorNode.scale.set(5, castRange , this.sectorNode.scale.z);
               BattleManager.Instance.MyBattleItemNode.addChild(this.sectorNode);
              } */
              //????????????????????????


              this.cancelCasting.node.active = true;
            }

            this.updateMaterialColor(this.startMoveVec2.x, this.startMoveVec2.y);
          }
        } // Update is called once per frame


        update() {
          if (!this.skill) return;

          if (this.skill.cd > 0) {
            if (!this.overlay.enabled) this.overlay.enabled = true;
            if (!this.cdText.enabled) this.cdText.enabled = true;
            this.overlay.fillRange = this.skill.cd / this.skill.Define.CD;
            this.cdText.string = Math.floor(this.skill.cd / 1000) + '';
          } else {
            if (this.overlay.enabled) this.overlay.enabled = false;
            if (this.cdText.enabled) this.cdText.enabled = false;
          }
        }
        /**
         * ????????????
         */


        CastSkill() {
          console.log('CastSkill');

          if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).RangeTarget]) {
            //????????????
            //????????????????????????
            var currentCharacter = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.currentCharacter;
            var positionX = currentCharacter.logicPosition.x;
            var positionZ = currentCharacter.logicPosition.z;
            var radius = this.skill.Define.CastRange;
            var blowsNum = this.skill.Define.BlowsNum || -1;
            var creatureArr = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
              error: Error()
            }), CreatureManager) : CreatureManager).Instance.FindUnitsInRange(positionX, positionZ, (_crd && LogicRenderConvert === void 0 ? (_reportPossibleCrUseOfLogicRenderConvert({
              error: Error()
            }), LogicRenderConvert) : LogicRenderConvert).RenderToLogic_Value(radius), blowsNum, currentCharacter.teamType2, true);
            console.log('RangeTarget count=' + creatureArr.length);

            if (creatureArr.length < 1) {
              return;
            }
          } else if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).SelectedRange]) {
            //????????????
            // console.log()
            (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.frameHandle.optValue2 = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.MyBattleItemNode.worldPosition.x + this.selectedRangeNode.position.x;
            (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.frameHandle.optValue3 = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.MyBattleItemNode.worldPosition.z + this.selectedRangeNode.position.z;
            (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.frameHandle.optValue4 = this.dirDegree;
          } else if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).StraightLine] || this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).Dir] || this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).Sector]) {
            //????????????????????????
            (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.frameHandle.optValue4 = this.dirDegree;
          }

          (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.frameHandle.opt = (_crd && OptType === void 0 ? (_reportPossibleCrUseOfOptType({
            error: Error()
          }), OptType) : OptType).Skill;
          (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.frameHandle.optValue1 = this.skill.skillId;
        }

        SetSkill(value) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.skill = value;

            if (_this.icon != null) {
              _this.icon.spriteFrame = yield (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
                error: Error()
              }), LoadResUtil) : LoadResUtil).load_local_sprite(_this.skill.Define.Icon + '/spriteFrame');
            }
          })();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "overlay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cdText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "skillStartBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skillMoveFont", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cancelCasting", [_dec8], {
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
//# sourceMappingURL=UISkillSlot.js.map