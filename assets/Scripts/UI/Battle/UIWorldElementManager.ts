
import { _decorator, Component, Node, instantiate, Vec3 } from 'cc';
import { HashMap } from '../../Utils/HashMap';
import { UIWorldElement } from './UIWorldElement';
import { UIHpBar } from './UIHpBar';
import proto from '../../../Proto/proto.js';
import { Creature } from './Enities/Creature';
import { DataManager } from '../../Managers/DataManager';
import { PopupType } from './enums/PopupType';
import { UIPopupText } from './UIPopupText';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
const { ccclass, property } = _decorator;
const { NUser }  = proto;

/**
 * 世界元素管理器
 */
@ccclass('UIWorldElementManager')
export class UIWorldElementManager extends Component {
    
    public static Instance:UIWorldElementManager=null;

    @property(Node)
    public hpBarNode:Node;
    @property(Node)
    public popupTextNode:Node;

    onLoad () {
          UIWorldElementManager.Instance=this;

    }

    /**
     * 添加生物血条
     * @param owner 生物节点
     * @param creature  生物对象
     */
    public AddCharacterHpBar(owner:Node, creature:Creature){
        // console.log('AddCharacterHpBar hpBarNode='+this.hpBarNode);
        //创建血条节点
        let hpBarNode2=instantiate(this.hpBarNode);
        this.node.addChild(hpBarNode2);
        creature.hpBarNode=hpBarNode2;
        //获取血条节点 UIWorldElement、UIHpBar组件
        // hpBarNode2.active=true;
        let uiWorldElement=hpBarNode2.getComponent(UIWorldElement);
        let uiHpBar=hpBarNode2.getComponent(UIHpBar);
        uiWorldElement.owner=owner;
        uiWorldElement.height=DataManager.Instance.characters[creature.characterDefine.ID].Height; 
        uiHpBar.owner=creature;
    }

    /**
     * 移除生物血条
     * @param creature  生物对象
     */
    public RemoveCharacterHpBar(creature:Creature){
        if(creature.hpBarNode){
            // let uiWorldElement=creature.hpBarNode.getComponent(UIWorldElement);
            // let uiHpBar=creature.hpBarNode.getComponent(UIHpBar);
            // uiWorldElement.owner=null;
            // uiHpBar.owner=null;
            creature.hpBarNode.destroy();
            creature.hpBarNode=null;
        }
    }


    public ShowPopupText(type:PopupType, creature:Creature, damage:number, isCrit:boolean, isBuff:boolean)
    {
        let goPopup = instantiate(this.popupTextNode);
        goPopup.setPosition(creature.GetPopupOffset().add(creature.renderPosition));

        let uiWorldElement=goPopup.getComponent(UIWorldElement);
        uiWorldElement.owner = creature.node;
        uiWorldElement.height = creature.characterDefine.Height; 
        uiWorldElement.isExecuteOnce=true;

        goPopup.name = "Popup"; 
        goPopup.active = true;
        this.node.addChild(goPopup);
        // isCrit=true;
        EventManager.Instance.addListener(EventType.OnWorldElementExecuteOnceSuccess,function(){
          goPopup.getComponent(UIPopupText).InitPopup(type, damage, isCrit, isBuff);
        }, uiWorldElement);
        
    }
}

