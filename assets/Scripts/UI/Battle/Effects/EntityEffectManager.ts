import { _decorator, instantiate, Node, Component, Vec3, AnimationComponent, Prefab, UITransform, Vec2 } from 'cc';
import { EffectType } from './EffectType';
import { HashMap } from '../../../Utils/HashMap';
import { EffectController } from './EffectController';
import { BattleManager } from '../Managers/BattleManager';
import { Bullet } from '../Models/Bullet';
import GlobalPool from '../../../Utils/GlobalPool';
import { BattleGlobal } from '../Utils/BattleGlobal';
const { ccclass, property } = _decorator;

@ccclass('EntityEffectManager')
export class EntityEffectManager extends Component{

    @property(Node)
    public Root:Node;
    @property([Node])
    public Props=new Array<Node>();
    
    //key=>name  value=>node
    private Effects = new HashMap();

    public start()
    {
        this.Effects.clear();

        let children = this.Root.children;
        if(this.Root !=null && children.length > 0)
        {
            for(let i = 0; i < children.length; i++)
            {
                let node = children[i];
                this.Effects.put(node.name, node);
            }
        }
        if(this.Props != null)
        {
            for (let i = 0; i < this.Props.length; i++)
            {
                let node = this.Props[i];
                this.Effects.put(node.name, node)
            }
        }
    }

    public PlayEffect3(name:string)
    {
        console.log("PlayEffect3:{0}:{1}", this.name, name);
        let node=this.Effects.get(name) as Node;
        if (node)
        {
            // node.active=true;
            BattleGlobal.playParticleEffect(node);
        }
    }


    /**
     * 子弹类型特效
     */
    public PlayEffect2(type:EffectType,  name:string, target:Node, pos:Vec3, duration:number)
    {
        if (type == EffectType.Bullet)
        {
            let effect = this.InstantiateEffect(name);
            if(!effect){
                console.log('not find prefab')
                return;
            }
            effect.Init(type, this.node, target, pos, duration);
            // effect.node.active = true;
            BattleGlobal.playParticleEffect(effect.node);
        }
        else
            this.PlayEffect3(name);
    }

    public PlayEffectBulletRealCheck(type:EffectType, name:string, bullet:Bullet)
    {
        if (type == EffectType.BulletRealCheck)
        {
            let effect = this.InstantiateEffect(name);
            if(!effect){
                let effectsNameStr = this.Effects.keys().join('，');
                console.log('not find prefab name='+name+'，effectsNameStr='+effectsNameStr)
                return;
            }
            effect.InitBulletRealCheck(type, bullet);
            // effect.node.active = true;
            BattleGlobal.playParticleEffect(effect.node);
        }
    }

    public InstantiateEffect(name:string):EffectController
    {
        console.log('EntityEffectManager InstantiateEffect name='+name)
        let prefab = this.Effects.get(name) as Node;
        if(prefab)
        {
            //创建对象池
            GlobalPool.createPool(name, prefab);
            //获取对象实例
            let go = GlobalPool.get(name);
            // let go = instantiate(prefab) as Node;
            BattleManager.Instance.AllBattleEffectsNode.addChild(go);
            go.worldPosition = prefab.worldPosition;
            go.worldRotation = prefab.worldRotation;
            return go.getComponent(EffectController);
        }
        return null;
    }
}