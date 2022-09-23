
import { _decorator, Component, Node, Label, tween, Tween, tweenUtil, Vec3 } from 'cc';
import { PopupType } from './enums/PopupType';
import { RandomUtil } from './Utils/RandomUtil';
import { UIWorldElement } from './UIWorldElement';
const { ccclass, property } = _decorator;

 
@ccclass('UIPopupText')
export class UIPopupText extends Component {
    
    @property(Label)
    public normalDamageText:Label=null;
    @property(Label)
    public critDamageText:Label=null;
    @property(Label)
    public healText:Label=null;
    @property(Label)
    public buffDamageText:Label=null;
    @property(Number)
    public floatTime:number = 0.5;

    start(){
    }

    public InitPopup(type:PopupType, number:number, isCrit:boolean, isBuff:boolean):void
    {
        let text:string = Math.floor(number)+'';
        this.normalDamageText.string = text;
        this.critDamageText.string = text;
        this.healText.string = text;

        this.buffDamageText.enabled = isBuff && number < 0;
        this.normalDamageText.enabled = !isBuff && !isCrit && number < 0;
        this.critDamageText.enabled = !isBuff && isCrit && number < 0;
        this.healText.enabled = number > 0;

        let time = RandomUtil.limit2(0, 0.5) + this.floatTime;

        let height= RandomUtil.limit2(25, 50);
        let disperse = RandomUtil.limit2(-0.5, 0.5);
        disperse += Math.sign(disperse) * 15;

        console.log('UIPopupText InitPopup='+this.node.position)
        let this_ = this;
        tween(this.node).to(time, {position : new Vec3(this.node.position.x + disperse, this.node.position.y + height, this.node.position.z + disperse)}, {easing: 'elasticOut', onComplete:function(){
            console.log('tween UIPopupText InitPopup='+this_.node.position)
            this_.node.destroy();
        }})
        .union()
        .repeat(1) // 执行 1 次
        .start();
        

        // LeanTween.moveX(this.gameObject, this.transform.position.x + disperse, time);
        // LeanTween.moveZ(this.gameObject, this.transform.position.z + disperse, time);
        // LeanTween.moveY(this.gameObject, this.transform.position.y + height, time).setEaseOutBack().setDestroyOnComplete(true);
    
    }
}

