import { HashMap } from "../../../Utils/HashMap";
import { TeamType2 } from "../enums/TeamType2";
import { instantiate, Node } from "cc";
import { LoadResUtil } from "../../../Utils/LoadResUtil";
import { DataManager } from "../../../Managers/DataManager";
import { CreatureManager } from "./CreatureManager";
import { User } from "../../../Models/User";
import { BattleManager } from "./BattleManager";
import { Creature } from "../Enities/Creature";
import { CreatureType } from "../enums/CreatureType";
import { BattleGlobal } from "../Utils/BattleGlobal";
import { BattleMode } from "../enums/BattleMode";

/**
 * 角色管理器
 */
export class CharacterManager{

    public static Instance:CharacterManager=new CharacterManager(); 

    public characterList:Array<Creature>=[];

     /**
     * 添加角色
     * @param Creature
     */
    public AddCharacter(character:Creature){
        this.characterList.push(character);
    }

    /**
     * 清空
     */
    public Clear(){
        this.characterList=[];
    }

    /**
     * 创建角色
     */ 
    public async CreateCharacter(teamType2:TeamType2){
        let teamArr= TeamType2.Blue==teamType2 ? BattleManager.Instance.MyTeam : BattleManager.Instance.EnemyTeam;
        let roomUsers= TeamType2.Blue==teamType2 ? User.Instance.room.my : User.Instance.room.enemy;
        
        for(let i=0;i<teamArr.length;i++){
           let characterNode=teamArr[i] as Node;
           if(!roomUsers[i]){
             return;
           }
           let cId=roomUsers[i].cCharacterId;
           let characterDefine = DataManager.Instance.characters[cId];

           let resource=characterDefine.Resource;
           console.log('cId='+cId+',resource='+resource)
           let prefab= await LoadResUtil.loadPrefab(resource);
           let node=instantiate(prefab) as Node; 
           characterNode.addChild(node);
           
           //创建角色
           let character=new Creature(teamType2, node, characterDefine, roomUsers[i].user, CreatureType.Character);
           CreatureManager.Instance.AddCreature(node, character);
           CharacterManager.Instance.AddCharacter(character);
           //当前角色
          if(BattleGlobal.battleMode == BattleMode.Battle){    //对局模式
            if(User.Instance.user.id == character.user.id){  
              BattleManager.Instance.currentCharacter=character;
            }
          }else if(BattleGlobal.battleMode == BattleMode.Live){    //观看直播模式
            if(BattleGlobal.targetLiveUserId == character.user.id){  
                BattleManager.Instance.currentCharacter=character;
            }
          }
        }
     }


}