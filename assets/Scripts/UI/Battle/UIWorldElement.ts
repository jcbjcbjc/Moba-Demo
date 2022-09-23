
import { _decorator, Component, Node, Camera, v3, Vec3, CameraComponent } from 'cc';
import { BattleManager } from './Managers/BattleManager';
import { UIPopupText } from './UIPopupText';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import { MathUtil } from '../../Utils/MathUtil';
import { NetConfig } from '../../Network/NetConfig';
const { ccclass, property } = _decorator;
/**
 * 世界元素
 */
@ccclass('UIWorldElement')
export class UIWorldElement extends Component {

    public owner:Node=null;
    public height:number=2.3;
    @property(Node)
    public camera:Node=null;
    public uiVec3:Vec3=new Vec3();  //ui坐标
    private worldVec3:Vec3=new Vec3();  //世界坐标
    private prevWorldVec3:Vec3=new Vec3();  //上一次世界坐标

    private cameraComponent:CameraComponent=null;
    public isExecuteOnce:boolean = false; //是否只执行一次
    private isExecute:boolean = false; //是否已经执行

    start () {
        this.cameraComponent=this.camera.getComponent(CameraComponent);
        
    }
    
    update (dt:number) {
        if(this.owner && this.camera){ 
           if(this.isExecuteOnce && this.isExecute){  //只执行一次，并且已经执行
             return;
           }
            this.isExecute = true;
            this.owner.parent.getWorldPosition(this.worldVec3);
            //插值
            // MathUtil.lerp(this.prevWorldVec3, this.worldVec3, dt * 1000, NetConfig.frameTime, 2);
            // this.prevWorldVec3.set(this.worldVec3.x, this.worldVec3.y, this.worldVec3.z);

           let pos = this.worldVec3.add3f(0, this.height, 0);
           this.cameraComponent.convertToUINode(pos, this.node.parent, this.uiVec3);
           this.node.position=this.uiVec3;

          if(this.isExecuteOnce){  //只执行一次   
            //抛出事件
            EventManager.Instance.dispatchObj(EventType.OnWorldElementExecuteOnceSuccess, this);
          }
           //计算元素大小
           let len = Vec3.distance(pos, this.camera.worldPosition);
           let scale=BattleManager.Instance.camCharDis / len ;
           scale=scale > 0.9 ? 0.9 : scale;
        //    console.log('len='+len+'，scale='+scale+'，camCharDis='+BattleManager.Instance.camCharDis)
           this.node.setScale(scale, scale, scale);
          
        }
    }
}

