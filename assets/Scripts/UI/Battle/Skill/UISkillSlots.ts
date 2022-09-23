import { _decorator, Component, Node, Rect, Sprite, Vec3, Label } from 'cc';
import { UISkillSlot } from './UISkillSlot';
import { BattleManager } from '../Managers/BattleManager';
import { SkillType } from '../enums/SkillType';
import { EventManager } from '../../Common/Event/EventManager';
import { EventType } from '../../Common/Event/EventType';
const { ccclass, property } = _decorator;

@ccclass('UISkillSlots')
export class UISkillSlots extends Component {

    @property([UISkillSlot])
    public slots:Array<UISkillSlot>=[];

	// Use this for initialization
	start () {
        EventManager.Instance.addListener(EventType.OnBattleGameIn,this.UpdateSkills,this);
    }
	
	// Update is called once per frame
	public UpdateSkills () {
        var Skills = BattleManager.Instance.currentCharacter.SkillMgr.Skills;
        // let skillIdx:number = 0;
        for(var skill of Skills){
            let currentUISkillSlot:UISkillSlot=null;
            for(var uiSkillSlot of this.slots){
                // console.log(uiSkillSlot.type+'========'+skill.Define.Type.toString())
                if(uiSkillSlot.type==skill.Define.Type.toString()){  //技能卡槽类型和技能类型一致
                    currentUISkillSlot=uiSkillSlot;
                    break;
                }
            }
            if(currentUISkillSlot){
                currentUISkillSlot.SetSkill(skill);
            }
            // skillIdx++;
        } 
    }

    onDestroy(){
        EventManager.Instance.removeAll(this);
    }
}