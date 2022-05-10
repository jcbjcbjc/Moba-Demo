System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, systemEvent, SystemEvent, Vec2, UITransform, MeshRenderer, Color, LoadResUtil, TargetType, BattleManager, OptType, MathUtil, BattleGlobal, SkillTipsType, TeamType2, CreatureManager, LogicRenderConvert, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, UISkillSlot;

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
        constructor(...args) {
          super(...args);

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

        //方向性技能角度
        // Use this for initialization
        start() {
          this.overlay.enabled = false;
          this.cdText.enabled = false; //按钮半径

          let nodeRect = this.getComponent(UITransform).getBoundingBox();
          this.radius = nodeRect.width / 2; //取消按钮半径

          let cancelCastingNodeRect = this.cancelCasting.node.getComponent(UITransform).getBoundingBox();
          this.cancelCastingRadius = cancelCastingNodeRect.width / 2;
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.OnTouchStart, this);
          this.skillStartBgRadius = this.skillStartBg.getComponent(UITransform).getBoundingBox().width / 2;
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.OnTouchEnd, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.OnTouchMove, this);
        }

        //红色

        /**
         * 修改材质颜色
         * @param pointX 
         * @param pointY 
         */
        updateMaterialColor(pointX, pointY) {
          //判断移动到技能取消按钮位置
          let isCollideFlag = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).CollidePointAndCircle2(pointX, pointY, this.cancelCasting.node.worldPosition.x, this.cancelCasting.node.worldPosition.y, this.cancelCastingRadius); //修改颜色变红

          let childrenArr = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.MyBattleItemNode.children;

          for (let i = 0; i < childrenArr.length; i++) {
            let node = childrenArr[i];

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
         * 技能控制按钮背景触摸移动
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

          e.getLocation(this.currentMoveVec2); //当前移动点
          //控制按钮移动位置

          let len = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).GetDistance(this.startMoveVec2.x, this.startMoveVec2.y, this.currentMoveVec2.x, this.currentMoveVec2.y); // console.log(len+'==='+this.skillStartBgRadius)

          if (len <= this.skillStartBgRadius) {
            //圆范围内
            this.skillMoveFont.node.setWorldPosition(this.currentMoveVec2.x, this.currentMoveVec2.y, 0);
          } else {
            //圆范围外，求圆上点位置
            let xLen = this.currentMoveVec2.x - this.startMoveVec2.x;
            let yLen = this.currentMoveVec2.y - this.startMoveVec2.y;
            let yuanX = xLen / len * this.skillStartBgRadius; //圆上x轴

            let yuanY = yLen / len * this.skillStartBgRadius; //圆上y轴
            // console.log(this.currentMoveVec2, this.startMoveVec2)

            this.skillMoveFont.node.setPosition(yuanX, yuanY, 0);
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
            degree = -degree;
          } else {
            degree = 180 - degree;
          }

          this.dirDegree = degree; //更新攻击范围

          if (this.selectedRangeNode) {
            //选择范围
            let smallPos = this.skillMoveFont.node.position;
            let yuanScaleX = smallPos.x / (this.skillStartBgRadius * 2);
            let yuanScaleY = smallPos.y / (this.skillStartBgRadius * 2);
            let castRange = this.skill.Define.CastRange * 2; //释放范围

            if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType).SelectedRange]) {
              //选择范围
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
            //直线
            this.straightLineNode.setRotationFromEuler(-90, degree, 0);
          } else if (this.dirNode) {
            //方向
            this.dirNode.setRotationFromEuler(-90, degree, 0);
          } else if (this.sectorNode) {
            //扇形
            this.sectorNode.setRotationFromEuler(-90, degree, 0);
          }

          this.updateMaterialColor(this.currentMoveVec2.x, this.currentMoveVec2.y);
        }
        /**
         * 技能按钮触摸结束
         */


        OnTouchEnd(e) {
          //移除控制按钮及背景
          this.skillStartBg.node.active = false;
          this.cancelCasting.node.active = false; //移除技能提示范围

          let childrenArr = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
            error: Error()
          }), BattleManager) : BattleManager).Instance.MyBattleItemNode.children;

          for (let i = 0; i < childrenArr.length; i++) {
            let node = childrenArr[i];

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
          let isCastSkill = false; //是否释放技能
          //点击结束

          if (this.isTouchStart) {
            this.isTouchStart = false; //判断是否点击结束

            let isCollideFlag = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).CollidePointAndCircle2(e.getLocation().x, e.getLocation().y, this.node.worldPosition.x, this.node.worldPosition.y, this.radius);

            if (isCollideFlag) {
              console.log('点击结束-------------');
              isCastSkill = true;
            }
          } //判断移动到技能取消按钮位置


          if (this.isControlSkill) {
            let isCollideFlag = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
              error: Error()
            }), MathUtil) : MathUtil).CollidePointAndCircle2(e.getLocation().x, e.getLocation().y, this.cancelCasting.node.worldPosition.x, this.cancelCasting.node.worldPosition.y, this.cancelCastingRadius);

            if (isCollideFlag) {
              console.log('取消释放技能');
              isCastSkill = false;
            } else {
              isCastSkill = true;
            }
          }

          if (isCastSkill) {
            console.log('释放技能');
            this.CastSkill();
          }

          this.selectedRangeNode = null;
          this.straightLineNode = null;
          this.dirNode = null;
          this.sectorNode = null;
        }
        /**
         * 技能按钮触摸开始
         */


        OnTouchStart(e) {
          if (!this.skill) {
            return;
          }

          if (this.skill.cd > 0) {
            return;
          }

          e.getStartLocation(this.startMoveVec2); //开始移动点
          // console.log(this.startMoveVec2)
          //检测是否点击到技能图标
          // console.log(this.startMoveVec2, this.node.worldPosition, this.radius)

          let isCollideFlag = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).CollidePointAndCircle2(this.startMoveVec2.x, this.startMoveVec2.y, this.node.worldPosition.x, this.node.worldPosition.y, this.radius);

          if (!isCollideFlag) {
            // console.log("未点击到图标")
            return;
          }

          this.isTouchStart = true;
          let isShowControlBtn = true; //是否显示控制按钮

          let isShowSkillTipsRange = true; //是否显示技能提示范围

          if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).RangeTarget]) {
            //范围目标
            isShowControlBtn = false;
          }

          if (isShowControlBtn) {
            //显示控制按钮
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
            //显示技能提示范围
            //显示技能提示范围
            let castRange = this.skill.Define.CastRange * 2; //释放范围

            if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
              error: Error()
            }), TargetType) : TargetType).SelectedRange]) {
              //选择范围
              castRange -= this.skill.Define.AOERange * 2;
            }

            let rangeBgNode = (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
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
              //显示控制按钮
              let teamType2 = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                error: Error()
              }), BattleManager) : BattleManager).Instance.currentCharacter.teamType2; //显示技能攻击范围

              if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType).SelectedRange]) {
                //选择范围
                console.log('选择范围');
                this.selectedRangeNode = (_crd && BattleGlobal === void 0 ? (_reportPossibleCrUseOfBattleGlobal({
                  error: Error()
                }), BattleGlobal) : BattleGlobal).skillTipsMap.get((_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
                  error: Error()
                }), SkillTipsType) : SkillTipsType)[(_crd && SkillTipsType === void 0 ? (_reportPossibleCrUseOfSkillTipsType({
                  error: Error()
                }), SkillTipsType) : SkillTipsType).SelectedRange]);
                this.selectedRangeNode.setPosition(0, 0, 0);
                let AOERange = this.skill.Define.AOERange * 2; //攻击范围

                this.selectedRangeNode.scale.set(AOERange, AOERange, this.selectedRangeNode.scale.z);
                (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
                  error: Error()
                }), BattleManager) : BattleManager).Instance.MyBattleItemNode.addChild(this.selectedRangeNode);
              } else if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType).StraightLine]) {
                //直线
                console.log('直线');
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
                //方向
                console.log('方向');
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
              /* else if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.Sector]){  //扇形
                 console.log('扇形')
               this.sectorNode = BattleGlobal.skillTipsMap.get(SkillTipsType[SkillTipsType.Sector]) as Node;
               this.sectorNode.setPosition(0, 0, 0);
               this.sectorNode.setRotationFromEuler(-90 ,0 , 0);
               this.sectorNode.scale.set(5, castRange , this.sectorNode.scale.z);
               BattleManager.Instance.MyBattleItemNode.addChild(this.sectorNode);
              } */
              //显示取消技能按钮


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
         * 释放技能
         */


        CastSkill() {
          console.log('CastSkill');

          if (this.skill.Define.CastTarget.toString() == (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType)[(_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
            error: Error()
          }), TargetType) : TargetType).RangeTarget]) {
            //范围目标
            //查找范围中的目标
            let currentCharacter = (_crd && BattleManager === void 0 ? (_reportPossibleCrUseOfBattleManager({
              error: Error()
            }), BattleManager) : BattleManager).Instance.currentCharacter;
            let positionX = currentCharacter.logicPosition.x;
            let positionZ = currentCharacter.logicPosition.z;
            let radius = this.skill.Define.CastRange;
            let blowsNum = this.skill.Define.BlowsNum || -1;
            let creatureArr = (_crd && CreatureManager === void 0 ? (_reportPossibleCrUseOfCreatureManager({
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
            //选择范围
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
            //直线、方向、扇形
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

        async SetSkill(value) {
          this.skill = value;

          if (this.icon != null) {
            this.icon.spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_sprite(this.skill.Define.Icon + '/spriteFrame');
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "overlay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cdText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "skillStartBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skillMoveFont", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cancelCasting", [_dec8], {
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
//# sourceMappingURL=UISkillSlot.js.map