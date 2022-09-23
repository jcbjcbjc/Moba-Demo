
import { _decorator, Component, Node, Rect, Sprite, Vec3, Color } from 'cc';
import { LoadResUtil } from '../../../Utils/LoadResUtil';
import { DataManager } from '../../../Managers/DataManager';
import { User } from '../../../Models/User';
import { TeamType2 } from '../enums/TeamType2';
import { BattleManager } from '../Managers/BattleManager';
import { MinimapBoxVo } from '../../../Vo/MinimapBoxVo';
import { Creature } from '../Enities/Creature';
const { ccclass, property } = _decorator;

@ccclass('UIMinimapCharacter')
export class UIMinimapCharacter extends Component {

    @property(Sprite)
    private avatarImgSprite:Sprite = null;

    private avatarBgSprite:Sprite = null;
    private character:Creature = null;
    private minimapBoxVo:MinimapBoxVo = null;

    onLoad () {
       this.avatarBgSprite = this.node.getComponent(Sprite);
    }

    /**
     * 设置信息
     * @param character 
     * @param minimapBoxVo 
     */
    public async SetItemInfo(character:Creature, minimapBoxVo:MinimapBoxVo){
        this.character = character;
        this.minimapBoxVo = minimapBoxVo;
        //更换背景颜色
        if(character.user.id == User.Instance.user.id){  //自己
            // this.avatarBgSprite.color.fromHEX('#00FF00');
            this.avatarBgSprite.color = new Color().fromHEX('#00FF00');
        }else if(character.teamType2 == BattleManager.Instance.currentCharacter.teamType2){  //友队
            // this.avatarBgSprite.color.fromHEX('#0085FF');
            this.avatarBgSprite.color = new Color().fromHEX('#0085FF');
        }else{  //敌对
            // this.avatarBgSprite.color.fromHEX('#FF0000');
            this.avatarBgSprite.color = new Color().fromHEX('#FF0000');
        }
        //加载头像
        this.avatarImgSprite.spriteFrame = await LoadResUtil.load_local_sprite(DataManager.Instance.characters[character.user.character.cid].Avatar+'/spriteFrame');
    }

    // private isPrintResult:boolean=true;
    update(){
        if(this.character && this.minimapBoxVo /*&& this.isPrintResult*/){     
            //获取角色在包围盒的x、y位置
            let relaX=-(this.character.renderPosition.x - this.minimapBoxVo.x) + this.minimapBoxVo.width/2;
            let relaY=-(this.character.renderPosition.z - this.minimapBoxVo.z) + this.minimapBoxVo.height/2;
         
            //获取角色在包围盒的x、y比例
            let pivoX = relaX/this.minimapBoxVo.width;
            let pivoY = relaY/this.minimapBoxVo.height;

            this.node.setPosition(this.minimapBoxVo.minimapWidth*pivoY - this.minimapBoxVo.minimapWidth/2,
                this.minimapBoxVo.minimapHeight*pivoX - this.minimapBoxVo.minimapHeight/2, this.node.position.z )

            this.node.setRotationFromEuler(0, 0, this.character.logicRotation.y+90);

            // console.log('characterId='+this.character.user.id+'，character.renderPosition='+this.character.renderPosition
            // +'，minimapBoxVo='+JSON.stringify(this.minimapBoxVo)+'，pivoX='+pivoX+'，pivoY='+pivoY)
            // console.log('characterId='+this.character.user.id+'==='+(this.minimapBoxVo.minimapWidth*pivoY - this.minimapBoxVo.minimapWidth/2)+'===='+
            //     (this.minimapBoxVo.minimapHeight*pivoX - this.minimapBoxVo.minimapHeight/2))
            // this.isPrintResult=false;
        }
    }
}
