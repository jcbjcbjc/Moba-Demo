
import { _decorator, Component, Node, Sprite, Label, Color } from 'cc';
import { Creature } from './Enities/Creature';
import { User } from '../../Models/User';
import { TeamType2 } from './enums/TeamType2';
import { BattleManager } from './Managers/BattleManager';
import { CreatureType } from './enums/CreatureType';
const { ccclass, property } = _decorator;
/**
 * 血量条
 */
@ccclass('UIHpBar')
export class UIHpBar extends Component {
   
    @property(Sprite)
    public hpSprite:Sprite=null;
    @property(Label)
    public hpLabel:Label=null;
    @property(Label)
    public nameLabel:Label=null;

    public owner:Creature=null;

    start () {
        
    }

    private tempColor = new Color();
    /**
     * 设置血条信息
     * @param level 等级 
     * @param nickName  昵称
     * @param currentHp 当前hp
     * @param maxHp  最大hp
     * @param isCharacter 是否是角色
     * @param type 类型 1、自己  2、队友  3、敌队
     */
    private SetItemInfo(level:string, nickName:string, currentHp:number, maxHp:number, isCharacter:boolean, type:number){
        if(isCharacter){
           this.nameLabel.string='Lv'+level+'.'+nickName;
        }else{
           this.nameLabel.string='';
        }
        this.hpLabel.string=currentHp+'/'+maxHp;
        this.hpSprite.fillRange=currentHp/maxHp;
        // this.hpSprite.color.fromHEX(type==1?'#00FF00':(type==2?'#0085FF':'#FF0000'));
        this.tempColor.fromHEX(type==1?'#00FF00':(type==2?'#0085FF':'#FF0000'));
        this.hpSprite.color = this.tempColor;
    }

    update(){
        if(this.owner){
            let currentCharacter = BattleManager.Instance.currentCharacter;
            if(currentCharacter && this.owner.creatureType==CreatureType.Character){  //角色
                let user = this.owner.user;
                let type = user.id==currentCharacter.user.id ? 1:(this.owner.teamType2 == currentCharacter.teamType2 ? 2 : 3);
                this.SetItemInfo(user.character.level, user.nickname, this.owner.attributes.HP, user.character.hp, true, type);
            }else if(this.owner.creatureType==CreatureType.Monster){  //怪物
                let type = this.owner.teamType2==currentCharacter.teamType2 ? 2 : 3;
                this.SetItemInfo(undefined, undefined, this.owner.attributes.HP, this.owner.characterDefine.HP, false, type);
            }
        }
    }
 
}

