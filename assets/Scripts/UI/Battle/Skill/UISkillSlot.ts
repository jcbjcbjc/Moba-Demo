import { _decorator, Component, Node, Rect, Sprite, Vec3, Label, systemEvent, SystemEvent, Vec2, UITransform, MeshRenderer, Color } from 'cc';
import { LoadResUtil } from "../../../Utils/LoadResUtil";
import { DataManager } from "../../../Managers/DataManager";
import { Skill } from '../Models/Skill';
import { TargetType } from '../enums/TargetType';
import { BattleManager } from '../Managers/BattleManager';
import { OptType } from '../enums/OptType';
import { SkillType } from '../enums/SkillType';
import { EventType } from '../../Common/Event/EventType';
import { MathUtil } from '../../../Utils/MathUtil';
import { BattleGlobal } from '../Utils/BattleGlobal';
import { SkillTipsType } from '../enums/SkillTipsType';
import { TeamType2 } from '../enums/TeamType2';
import { CreatureManager } from '../Managers/CreatureManager';
import { LogicRenderConvert } from '../Utils/LogicRenderConvert';
const { ccclass, property } = _decorator;

@ccclass('UISkillSlot')
export class UISkillSlot extends Component {

    @property(Sprite)
    public icon:Sprite=null;
    @property(Sprite)
    public overlay:Sprite=null;
    @property(Label)
    public cdText:Label=null;
    @property(String)
    public type:String='';
    @property(Sprite)
    public skillStartBg:Sprite=null;  //技能控制按钮背景
    @property(Sprite)
    public skillMoveFont:Sprite=null;  //技能控制按钮
    @property(Sprite)
    public cancelCasting:Sprite=null;  //取消技能按钮

    private skill:Skill=null;

    private overlaySpeed:number = 0;
    private cdRemain:number = 0;

    private startMoveVec2 = new Vec2();   //开始移动点位置
    private currentMoveVec2 = new Vec2();   //当前移动点位置
    private moveInFlag:boolean = false; //是否移动中
    private radius:number;  //技能按钮半径
    private cancelCastingRadius:number;  //取消技能按钮半径
    
    private skillStartBgRadius:number;  //技能点击按钮半径
    private isTouchStart:boolean = false; //是否触发开始了
    private isControlSkill:boolean = false;  //是否控制型技能

    private selectedRangeNode:Node;  //选择范围技能
    private straightLineNode:Node;  //直线
    private dirNode:Node;  //方向
    private sectorNode:Node;  //扇形
    private dirDegree:number = 0;  //方向性技能角度

    // Use this for initialization
    start () {
        this.overlay.enabled = false;
        this.cdText.enabled = false;
        
        //按钮半径
        let nodeRect=this.getComponent(UITransform).getBoundingBox();
        this.radius = nodeRect.width / 2;

        //取消按钮半径
        let cancelCastingNodeRect=this.cancelCasting.node.getComponent(UITransform).getBoundingBox();
        this.cancelCastingRadius = cancelCastingNodeRect.width / 2;


        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.OnTouchStart, this);
        this.skillStartBgRadius = this.skillStartBg.getComponent(UITransform).getBoundingBox().width / 2;
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.OnTouchEnd, this)
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.OnTouchMove, this)
    }

    private normalColor:Color=new Color(255, 255, 255);  //正常颜色
    private redColor:Color=new Color(255, 0, 0, 90);  //红色

    /**
     * 修改材质颜色
     * @param pointX 
     * @param pointY 
     */
    private updateMaterialColor(pointX:number, pointY:number){
        //判断移动到技能取消按钮位置
        let isCollideFlag= MathUtil.CollidePointAndCircle2(pointX, pointY, this.cancelCasting.node.worldPosition.x, this.cancelCasting.node.worldPosition.y, this.cancelCastingRadius);
           //修改颜色变红
            let childrenArr = BattleManager.Instance.MyBattleItemNode.children;
            for(let i=0; i < childrenArr.length; i++){
                let node = childrenArr[i];
                if(node.name == SkillTipsType[SkillTipsType.RangeBg] || node.name == SkillTipsType[SkillTipsType.SelectedRange]
                    || node.name == SkillTipsType[SkillTipsType.StraightLine] || node.name == SkillTipsType[SkillTipsType.Dir]
                    || node.name == SkillTipsType[SkillTipsType.Sector]){
                    node.getComponent(MeshRenderer).getMaterial(0).setProperty('mainColor',isCollideFlag ? this.redColor : this.normalColor);
                }
            }
            this.cancelCasting.color = (isCollideFlag ? this.redColor : this.normalColor);
        }

    /**
     * 技能控制按钮背景触摸移动
     * @param e 
     */
    private OnTouchMove(e){
        // console.log('OnTouchMove='+this.moveInFlag)
        if(!this.moveInFlag){
            return;
        }
        if(!this.isControlSkill){
            return;
        }
        e.getLocation(this.currentMoveVec2);   //当前移动点
        //控制按钮移动位置
        let len=MathUtil.GetDistance(this.startMoveVec2.x, this.startMoveVec2.y, this.currentMoveVec2.x, this.currentMoveVec2.y);
        // console.log(len+'==='+this.skillStartBgRadius)
        if(len <= this.skillStartBgRadius){  //圆范围内
            this.skillMoveFont.node.setWorldPosition(this.currentMoveVec2.x, this.currentMoveVec2.y , 0);
        }else{  //圆范围外，求圆上点位置
            let xLen=this.currentMoveVec2.x-this.startMoveVec2.x;
            let yLen=this.currentMoveVec2.y-this.startMoveVec2.y;
            let yuanX= xLen / len * this.skillStartBgRadius;  //圆上x轴
            let yuanY= yLen / len *this.skillStartBgRadius;  //圆上y轴

            // console.log(this.currentMoveVec2, this.startMoveVec2)
            this.skillMoveFont.node.setPosition(yuanX, yuanY , 0);
        }
        let degree = MathUtil.GetAngle(this.currentMoveVec2.y-this.startMoveVec2.y, this.currentMoveVec2.x-this.startMoveVec2.x);
        if(BattleManager.Instance.currentCharacter.teamType2 == TeamType2.Blue){  //蓝队
           degree = -degree;
        }else {
           degree = 180 - degree;
        }
        this.dirDegree = degree;

        //更新攻击范围
        if(this.selectedRangeNode){   //选择范围
            let smallPos = this.skillMoveFont.node.position;
            let yuanScaleX = smallPos.x / (this.skillStartBgRadius * 2);
            let yuanScaleY = smallPos.y / (this.skillStartBgRadius * 2);
            let castRange = this.skill.Define.CastRange*2;  //释放范围
            if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.SelectedRange]){  //选择范围
                castRange -= this.skill.Define.AOERange*2;
            }
            this.selectedRangeNode.setPosition((BattleManager.Instance.currentCharacter.teamType2==TeamType2.Blue ? 1 : -1)*castRange*yuanScaleX, this.selectedRangeNode.position.y, (BattleManager.Instance.currentCharacter.teamType2==TeamType2.Blue ? -1 : 1)*castRange*yuanScaleY);
            // console.log((castRange*yuanScaleX) +'==='+ (castRange*yuanScaleY))
        }else if(this.straightLineNode){  //直线
            this.straightLineNode.setRotationFromEuler(-90 ,degree , 0);
        }else if(this.dirNode){  //方向
            this.dirNode.setRotationFromEuler(-90 ,degree , 0);
        }else if(this.sectorNode){  //扇形
            this.sectorNode.setRotationFromEuler(-90 ,degree , 0);
        }    
        this.updateMaterialColor(this.currentMoveVec2.x, this.currentMoveVec2.y);
    }

    /**
     * 技能按钮触摸结束
     */
    private OnTouchEnd(e){
        //移除控制按钮及背景
        this.skillStartBg.node.active=false;
        this.cancelCasting.node.active=false;
        //移除技能提示范围
        let childrenArr = BattleManager.Instance.MyBattleItemNode.children;
        for(let i=0; i < childrenArr.length; i++){
            let node = childrenArr[i];
            if(node.name == SkillTipsType[SkillTipsType.RangeBg] || node.name == SkillTipsType[SkillTipsType.SelectedRange]
                || node.name == SkillTipsType[SkillTipsType.StraightLine] || node.name == SkillTipsType[SkillTipsType.Dir]
                || node.name == SkillTipsType[SkillTipsType.Sector]){
                BattleManager.Instance.MyBattleItemNode.removeChild(node);
            }
        }

       if(!this.moveInFlag){
            return;
        }
        this.moveInFlag=false;

        let isCastSkill=false; //是否释放技能
        //点击结束
        if(this.isTouchStart){
            this.isTouchStart=false;
            //判断是否点击结束
            let isCollideFlag= MathUtil.CollidePointAndCircle2(e.getLocation().x, e.getLocation().y, this.node.worldPosition.x, this.node.worldPosition.y, this.radius);
            if(isCollideFlag){
                console.log('点击结束-------------')
                isCastSkill=true;
            }
        }

        //判断移动到技能取消按钮位置
      if(this.isControlSkill){ 
        let isCollideFlag= MathUtil.CollidePointAndCircle2(e.getLocation().x, e.getLocation().y, this.cancelCasting.node.worldPosition.x, this.cancelCasting.node.worldPosition.y, this.cancelCastingRadius);
        if(isCollideFlag){
            console.log('取消释放技能')
            isCastSkill=false;
        }else{
            isCastSkill=true;
        }
      }
        if(isCastSkill){
            console.log('释放技能')
            this.CastSkill();
        }

        this.selectedRangeNode=null;
        this.straightLineNode=null;
        this.dirNode=null;
        this.sectorNode=null;
    }

    /**
     * 技能按钮触摸开始
     */
    private OnTouchStart(e){
        if(!this.skill){
            return;
        }
        if(this.skill.cd > 0){
            return;
        }
        e.getStartLocation(this.startMoveVec2);  //开始移动点
        // console.log(this.startMoveVec2)
        //检测是否点击到技能图标
        // console.log(this.startMoveVec2, this.node.worldPosition, this.radius)
        let isCollideFlag= MathUtil.CollidePointAndCircle2(this.startMoveVec2.x, this.startMoveVec2.y, this.node.worldPosition.x, this.node.worldPosition.y, this.radius);
        if(!isCollideFlag){
            // console.log("未点击到图标")
            return;
        }
        this.isTouchStart = true;

        let isShowControlBtn:boolean=true;  //是否显示控制按钮
        let isShowSkillTipsRange:boolean=true;  //是否显示技能提示范围
        if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.RangeTarget]){  //范围目标
            isShowControlBtn = false;
        }
           if(isShowControlBtn){  //显示控制按钮
               this.skillStartBg.node.setWorldPosition(this.startMoveVec2.x, this.startMoveVec2.y, 0);
               this.skillMoveFont.node.setWorldPosition(this.startMoveVec2.x, this.startMoveVec2.y, 0);

               this.skillStartBg.node.active=true;
               this.isControlSkill=true;
           }else{
               this.skillStartBg.node.active=false;
               this.isControlSkill=false;
            }
            this.moveInFlag=true; 

           if(isShowSkillTipsRange){  //显示技能提示范围
                //显示技能提示范围
                let castRange = this.skill.Define.CastRange*2;  //释放范围
                if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.SelectedRange]){  //选择范围
                    castRange -= this.skill.Define.AOERange*2;
                }
                let rangeBgNode = BattleGlobal.skillTipsMap.get(SkillTipsType[SkillTipsType.RangeBg]) as Node;
                rangeBgNode.setPosition(0, 0, 0);
                rangeBgNode.scale.set(castRange, castRange, castRange);
                BattleManager.Instance.MyBattleItemNode.addChild(rangeBgNode);
              if(isShowControlBtn){  //显示控制按钮
                let teamType2 = BattleManager.Instance.currentCharacter.teamType2;
                    //显示技能攻击范围
                if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.SelectedRange]){  //选择范围
                    console.log('选择范围')
                  this.selectedRangeNode = BattleGlobal.skillTipsMap.get(SkillTipsType[SkillTipsType.SelectedRange]) as Node;
                  this.selectedRangeNode.setPosition(0, 0, 0);
                  let AOERange = this.skill.Define.AOERange*2;  //攻击范围
                  this.selectedRangeNode.scale.set(AOERange, AOERange, this.selectedRangeNode.scale.z);
                  BattleManager.Instance.MyBattleItemNode.addChild(this.selectedRangeNode);
                }else if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.StraightLine]){  //直线
                    console.log('直线')
                  this.straightLineNode = BattleGlobal.skillTipsMap.get(SkillTipsType[SkillTipsType.StraightLine]) as Node;
                  this.straightLineNode.setPosition(0, 0, 0);
                  this.straightLineNode.setRotationFromEuler(-90 ,teamType2==TeamType2.Blue ? 0 : 180 , 0);
                  this.straightLineNode.scale.set(this.skill.Define.BulletRadius, castRange , this.straightLineNode.scale.z);
                  BattleManager.Instance.MyBattleItemNode.addChild(this.straightLineNode);
                }else if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.Dir]){  //方向
                    console.log('方向')
                  this.dirNode = BattleGlobal.skillTipsMap.get(SkillTipsType[SkillTipsType.Dir]) as Node;
                  this.dirNode.setPosition(0, 0, 0);
                  this.dirNode.setRotationFromEuler(-90 ,teamType2==TeamType2.Blue ? 0 : 180 , 0);
                  this.dirNode.scale.set(this.dirNode.scale.x, castRange , this.dirNode.scale.z);
                  BattleManager.Instance.MyBattleItemNode.addChild(this.dirNode);
                }/* else if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.Sector]){  //扇形
                    console.log('扇形')
                  this.sectorNode = BattleGlobal.skillTipsMap.get(SkillTipsType[SkillTipsType.Sector]) as Node;
                  this.sectorNode.setPosition(0, 0, 0);
                  this.sectorNode.setRotationFromEuler(-90 ,0 , 0);
                  this.sectorNode.scale.set(5, castRange , this.sectorNode.scale.z);
                  BattleManager.Instance.MyBattleItemNode.addChild(this.sectorNode);
                } */
                //显示取消技能按钮
                this.cancelCasting.node.active=true;
              }
                this.updateMaterialColor(this.startMoveVec2.x, this.startMoveVec2.y);
           }
    }

    // Update is called once per frame
   update () {
        if (!this.skill) return;
		if(this.skill.cd > 0)
        {
            if (!this.overlay.enabled) this.overlay.enabled = true;
            if (!this.cdText.enabled) this.cdText.enabled = true;

            this.overlay.fillRange = this.skill.cd / this.skill.Define.CD;
            this.cdText.string = Math.floor(this.skill.cd / 1000)+'';
        }
        else
        {
            if (this.overlay.enabled) this.overlay.enabled = false;
            if (this.cdText.enabled) this.cdText.enabled = false;
        }
    }
    
    /**
     * 释放技能
     */
    private CastSkill() { 
        console.log('CastSkill')
        if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.RangeTarget]){  //范围目标
           //查找范围中的目标
           let currentCharacter = BattleManager.Instance.currentCharacter;
           let positionX = currentCharacter.logicPosition.x;
           let positionZ = currentCharacter.logicPosition.z;
           let radius = this.skill.Define.CastRange;
           let blowsNum = this.skill.Define.BlowsNum || -1;
           let creatureArr = CreatureManager.Instance.FindUnitsInRange(positionX, positionZ, LogicRenderConvert.RenderToLogic_Value(radius), blowsNum, currentCharacter.teamType2, true);
           console.log('RangeTarget count='+creatureArr.length)
           if(creatureArr.length < 1) {
             return;
           }
        }else if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.SelectedRange]){  //选择范围
            // console.log()
            BattleManager.Instance.frameHandle.optValue2 = BattleManager.Instance.MyBattleItemNode.worldPosition.x + this.selectedRangeNode.position.x;
            BattleManager.Instance.frameHandle.optValue3 = BattleManager.Instance.MyBattleItemNode.worldPosition.z + this.selectedRangeNode.position.z;
            BattleManager.Instance.frameHandle.optValue4 = this.dirDegree;
        }else if(this.skill.Define.CastTarget.toString() == TargetType[TargetType.StraightLine] || 
                 this.skill.Define.CastTarget.toString() == TargetType[TargetType.Dir] || 
                 this.skill.Define.CastTarget.toString() == TargetType[TargetType.Sector]){ //直线、方向、扇形
            BattleManager.Instance.frameHandle.optValue4 = this.dirDegree;        
        }
        BattleManager.Instance.frameHandle.opt = OptType.Skill;
        BattleManager.Instance.frameHandle.optValue1 = this.skill.skillId;
    }


    public async SetSkill(value:Skill)
    {
        this.skill = value;
        if (this.icon != null)
        {
            this.icon.spriteFrame = await LoadResUtil.load_local_sprite(this.skill.Define.Icon+'/spriteFrame');
        }
    }
}