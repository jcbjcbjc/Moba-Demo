import { _decorator, instantiate, Node, Component, Vec3, AnimationComponent, Prefab, UITransform, Vec2, isValid, NodePool } from 'cc';
import { EffectType } from './EffectType';
import { HashMap } from '../../../Utils/HashMap';
import { Bullet } from '../Models/Bullet';
import { MathUtil } from '../../../Utils/MathUtil';
import { NetConfig } from '../../../Network/NetConfig';
import { LogicRenderConvert } from "../Utils/LogicRenderConvert";
import GlobalPool from '../../../Utils/GlobalPool';
const { ccclass, property } = _decorator;

@ccclass('EffectController')
export class EffectController extends Component{

    @property(Number)
    public lifeTime:number = 1;
    private time:number = 0;

    private type:EffectType;
    private target:Node;

    private targetPos:Vec3=new Vec3();
    private startPos:Vec3;
    private offset:Vec3;
    private bullet:Bullet;

    onEnable()
    {
        if(this.type != EffectType.Bullet && this.type != EffectType.BulletRealCheck)
        {
            let this_ = this;
            setTimeout(function(){
                if(this_.node){
                    this_.node.active = false;
                }
            }, this.lifeTime * 1000)
        }
    }

    public Init(type:EffectType, source:Node, target:Node, offset:Vec3, duration:number)
    {
        this.type = type;
        this.target = target;
        if(duration > 0)
          this.lifeTime = duration;
        this.time = 0;
        if (type == EffectType.Bullet)
        {
            this.startPos = this.node.worldPosition;
            this.offset = offset;
            this.targetPos.set(target.worldPosition.x + offset.x, target.worldPosition.y + offset.y, target.worldPosition.z + offset.z);
            console.log('EffectController Init targetPos='+this.targetPos)
        }
        else if(type==EffectType.Hit)
        {
            this.node.worldPosition = new Vec3(target.worldPosition.x + offset.x, target.worldPosition.y + offset.y, target.worldPosition.z + offset.z);
        }
    }

    public InitBulletRealCheck(type:EffectType, bullet:Bullet){
        this.type = type;
        this.bullet = bullet;
       
    }

    private tempVec3 = new Vec3();
    update(dt:number)
    {
        let dtms = dt * 1000;
        if (this.type == EffectType.Bullet) {
            this.time += dtms;
            if(this.target)
            {
                this.targetPos.set(this.target.worldPosition.x + this.offset.x, this.target.worldPosition.y + this.offset.y, this.target.worldPosition.z + this.offset.z); 
            }
            // this.node.lookAt(this.targetPos);
            // if(Vec3.distance(this.targetPos,this.node.worldPosition) < 0.5)
            if(MathUtil.GetDistance(this.targetPos.x, this.targetPos.z, this.node.worldPosition.x, this.node.worldPosition.z) < 0.5)
            {
                console.log('回收子弹')
                this.recoveryThisNode();
                return;
            }
            if(this.lifeTime >0 && this.time >= this.lifeTime)
            {
                console.log('回收子弹')
                this.recoveryThisNode();
                return;
            }
            this.node.setWorldPosition(Vec3.lerp(this.node.worldPosition, this.node.worldPosition, this.targetPos, dtms / (this.lifeTime - this.time)));
            // this.node.setWorldPosition(MathUtil.lerp(this.node.worldPosition, this.targetPos, dtms, dtms / (this.lifeTime - this.time)));
        } else if (this.type == EffectType.BulletRealCheck) {  //子弹实时检测
            this.tempVec3.set(LogicRenderConvert.LogicToRender_Value(this.bullet.positionX), this.node.worldPosition.y, LogicRenderConvert.LogicToRender_Value(this.bullet.positionZ));
            this.node.setWorldPosition(MathUtil.lerp(this.node.worldPosition, this.tempVec3, dtms, NetConfig.frameTime));
            if(this.bullet.Stoped){
              this.recoveryThisNode();  
              console.log('EffectController BulletRealCheck Stoped destroy')
              return;
            }
        }
    }

    /**
     * 回收当前节点
     */
    private recoveryThisNode(){
        this.node.removeFromParent();  // 将节点从父亲节点移除
        GlobalPool.put(this.node);  //回收到对象池
    } 

    onDestroy(){
        console.log('EffectController onDestroy')
    }


}