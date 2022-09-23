import { _decorator, Component, Node, instantiate, systemEvent, SystemEvent, Vec2, Vec3, game, v3, UITransform, math } from 'cc';
import { MathUtil } from '../../Utils/MathUtil';
import { BattleManager } from './Managers/BattleManager';
import { OptType } from './enums/OptType';
import { TeamType2 } from './enums/TeamType2';
const { ccclass, property } = _decorator;

/**
 * 摇杆操作
 */
@ccclass('UIRocker')
export class UIRocker extends Component {

    @property(Node)
    public MoveFront:Node=null;

    private startMoveVec2 = new Vec2();   //开始移动点位置
    private currentMoveVec2 = new Vec2();   //当前移动点位置
    private moveVec3=new Vec3();  //移动位置
    private bgRadius:number=0;  //背景半径
    private isTouchDown:boolean=false;  //是否按下
    private startBgX:number=0;
    private startBgY:number=0;
    private startFrontX:number=0;
    private startFrontY:number=0;


    start(){
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.OnTouchMove, this)
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.OnTouchEnd, this)
        this.startBgX=this.startMoveVec2.x=this.node.worldPosition.x;
        this.startBgY=this.startMoveVec2.y=this.node.worldPosition.y;

        this.startFrontX=this.MoveFront.position.x;
        this.startFrontY=this.MoveFront.position.y;

        let bgRect=this.node.getComponent(UITransform).getBoundingBox();   //背景矩形
        this.bgRadius=bgRect.w/2;  //背景半径
    }

    /**
     * 摇杆开始移动
     */
    OnTouchMove(e) {
        e.getStartLocation(this.startMoveVec2);  //开始移动点
        if (this.startMoveVec2.x < game.canvas.width * 0.4) {  //屏幕左边40%滑动有效
            e.getLocation(this.currentMoveVec2);   //当前移动点
            this.isTouchDown=true;
        }else{ //不是有效区则恢复位置
            this.startMoveVec2.x=this.node.worldPosition.x;
            this.startMoveVec2.y=this.node.worldPosition.y;
            this.isTouchDown=false;
        }
    }
    
    /**
     * 摇杆按下
     */
    TouchDown(){
            //计算圆心到移动点位置
            let len=MathUtil.GetDistance(this.node.worldPosition.x, this.node.worldPosition.y, this.currentMoveVec2.x, this.currentMoveVec2.y);
            // console.log(len+'==='+this.bgRadius)
            if(len <= this.bgRadius){  //圆范围内
                this.moveVec3.x=this.currentMoveVec2.x;
                this.moveVec3.y=this.currentMoveVec2.y;
                this.moveVec3.z=0;
                this.MoveFront.setWorldPosition(this.moveVec3);
            }else{  //圆范围外，求圆上点位置
                let xLen=this.currentMoveVec2.x-this.startMoveVec2.x;
                let yLen=this.currentMoveVec2.y-this.startMoveVec2.y;
                let yuanX= xLen / len * this.bgRadius;  //圆上x轴
                let yuanY= yLen / len *this.bgRadius;  //圆上y轴

                this.moveVec3.x=yuanX;
                this.moveVec3.y=yuanY;
                this.moveVec3.z=0;
                this.MoveFront.setPosition(this.moveVec3);
            }

            let degree = MathUtil.GetAngle(this.currentMoveVec2.y-this.startMoveVec2.y, this.currentMoveVec2.x-this.startMoveVec2.x);
            if(BattleManager.Instance.currentCharacter.teamType2 == TeamType2.Blue){  //蓝队
                degree = 180 - degree;
            }else{
                degree = -degree;
            }
            // console.log('degree='+degree)
            //封装操作
            if(!BattleManager.Instance.frameHandle.opt || BattleManager.Instance.frameHandle.opt==OptType.Rocker){
               BattleManager.Instance.frameHandle.opt=OptType.Rocker;
               BattleManager.Instance.frameHandle.optValue1=Math.round(degree);  //角度
               // BattleManager.Instance.frameHandle.optValue2= len > 0 ? 1 : 0;  //移动
            }
    }

    /**
     * 摇杆结束移动
     */
    OnTouchEnd(e){
        this.isTouchDown=false;
        this.startMoveVec2.x = this.startBgX;
        this.startMoveVec2.y = this.startBgY;
        this.moveVec3.x=this.startFrontX;
        this.moveVec3.y=this.startFrontY;
        this.moveVec3.z=0;
        this.MoveFront.setPosition(this.moveVec3);
    }

    update(){
        if(this.isTouchDown){
            this.TouchDown();
        }
        //更新摇杆点击位置
        this.node.setWorldPosition(this.startMoveVec2.x, this.startMoveVec2.y, 0);
    }

}