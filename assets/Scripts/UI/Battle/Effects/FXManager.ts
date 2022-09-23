import { _decorator, instantiate, Node, Component, Vec3, AnimationComponent, Prefab, UITransform, Vec2 } from 'cc';
import { HashMap } from '../../../Utils/HashMap';
import { EffectController } from './EffectController';
import { EffectType } from './EffectType';
import { BattleManager } from '../Managers/BattleManager';
import GlobalPool from '../../../Utils/GlobalPool';
import { BattleGlobal } from '../Utils/BattleGlobal';
const { ccclass, property } = _decorator;

@ccclass('FXManager')
export class FXManager extends Component{

    @property([Prefab])
    public prefabs=new Array<Prefab>();
    //key=>name  value=>node
    private Effects = new HashMap();

    public static Instance:FXManager=null;

    onLoad () {
        FXManager.Instance=this;
    }

    public start()
    {
        this.Effects.clear();
        for(let i = 0; i < this.prefabs.length; i++)
        {
            let rootNode = this.prefabs[i].data;
            rootNode.active=false;
            this.Effects.put(rootNode.name, rootNode);

            //创建对象池
            GlobalPool.createPool(rootNode.name, rootNode);
        }

    }

    public CreateEffect(name:string, pos:Vec3):EffectController
    {
        // console.log('CreateEffect Effects='+this.Effects.keys().join('，'))
        let prefab = this.Effects.get(name);
        if(prefab)
        {
            console.log('FXManager CreateEffect：'+name)
            //获取对象实例
            let go = GlobalPool.get(name);
            // let go = instantiate(prefab) as Node;
            BattleManager.Instance.AllBattleEffectsNode.addChild(go);
            go.worldPosition = pos;
            return go.getComponent(EffectController);
        }
        return null;
    }
 
    public PlayEffect(type:EffectType,  name:string, target:Node, pos:Vec3, duration:number)
    {
        let effect = this.CreateEffect(name, pos);
        if (!effect)
        {
            console.log("Effect:{0} not found.", name);
            return;
        }
        effect.Init(type, this.node, target, pos, duration);
        // effect.node.active=true;
        BattleGlobal.playParticleEffect(effect.node);
    }

	
}