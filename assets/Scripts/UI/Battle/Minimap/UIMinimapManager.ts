
import { _decorator, Component, Node, UITransform, Rect, instantiate, MeshRenderer, /*BoxCollider,*/ Vec3 } from 'cc';
import { TeamType2 } from '../enums/TeamType2';
import { User } from '../../../Models/User';
import { UIMinimapCharacter } from './UIMinimapCharacter';
import { CharacterManager } from '../Managers/CharacterManager';
import { MinimapBoxVo } from '../../../Vo/MinimapBoxVo';
const { ccclass, property } = _decorator;

@ccclass('UIMinimapManager')
export class UIMinimapManager extends Component {

    public static Instance:UIMinimapManager=null;
   
    @property(Node)
    private minimapBoundingBox:Node = null;
    @property(Node)
    private minimapCharacterPrfab:Node = null;
    private minimapBoxVo:MinimapBoxVo = null;

    onLoad () {
        UIMinimapManager.Instance=this;
    }

   //BoxCollider 编辑器可用查看地图大小，在运行状态下不可用，因为是3D物理的库
    Init () {
        let boxBgVec3 = new Vec3(32, 1, 72);//this.minimapBoundingBox.getComponent(BoxCollider).size;
        let minimapSize=this.node.getComponent(UITransform).contentSize;
        this.minimapBoxVo=new MinimapBoxVo(boxBgVec3.x, boxBgVec3.z, this.minimapBoundingBox.worldPosition.x, 
            this.minimapBoundingBox.worldPosition.z, minimapSize.width, minimapSize.height);
        this.CreateMinimapCharacter();
    }

    /**
     * 创建小地图角色
     */
    CreateMinimapCharacter(){
        let characterList = CharacterManager.Instance.characterList;
        this.minimapCharacterPrfab.active=true;
        for(let i=0;i<characterList.length;i++){
           let character = characterList[i];
             let minimapCharacterNode = instantiate(this.minimapCharacterPrfab);
             let uiMinimapCharacter = minimapCharacterNode.getComponent(UIMinimapCharacter) as UIMinimapCharacter;
             this.node.addChild(minimapCharacterNode);
             uiMinimapCharacter.SetItemInfo(character, this.minimapBoxVo);
        }
        this.minimapCharacterPrfab.active=false;
    }


   
}
