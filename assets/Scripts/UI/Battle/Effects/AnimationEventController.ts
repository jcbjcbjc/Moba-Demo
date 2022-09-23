import { _decorator, instantiate, Node, Component, Vec3, AnimationComponent, Prefab, UITransform } from 'cc';
import { EntityEffectManager } from './EntityEffectManager';
const { ccclass, property } = _decorator;

@ccclass('AnimationEventController')
export class AnimationEventController extends Component{
    
    @property(EntityEffectManager)
    public EffectMgr:EntityEffectManager;

    public PlayEffect(name:string)
    {
        console.log("AnimationEventController:PlayEffect:{0}:{1}", this.name, name);
        this.EffectMgr.PlayEffect3(name);

    }

    public PlaySound(name:string)
    {
        console.log("AnimationEventController:PlaySound:{0}:{1}", this.name, name);

    }
}