import proto from '../../Proto/proto.js';
const { NUser, AddAttrType, CharacterClass }=proto;
import { AddAttrDefine } from "../Data/AddAttrDefine";
import { DataManager } from "../Managers/DataManager";
import { SpawnRuleDefine } from '../Data/SpawnRuleDefine.js';
import { CharacterDefine } from '../Data/CharacterDefine.js';

/**
 * data工具类
 */
export class DataUtil{
 
    /**
     * 根据类型查询加属性列表
     * @param addAttrType 
     */
    public static queryListAddAttrByType(addAttrType:AddAttrType):Array<AddAttrDefine>{
       let addAttrs=DataManager.Instance.addAttrs;
       let addAttrArr=[];
       for(let key in addAttrs){
           let addAttr=addAttrs[key];
           if(addAttr.Type==addAttrType){   //判断类型
              addAttrArr.push(addAttr);
           }
       }
       return addAttrArr;
    }

    /**
     * 根据类型查询加属性类型
     * @param addAttrType 
     */
    public static queryObjAddAttrByType(addAttrType:AddAttrType,spot:number):AddAttrDefine{
        // console.log(AddAttrType[addAttrType])
        let addAttrs=DataManager.Instance.addAttrs;
        for(let key in addAttrs){
            let addAttr=addAttrs[key];
            if(addAttr.Type.toString()==AddAttrType[addAttrType] && addAttr.Range[0] <= spot && spot <= addAttr.Range[1]){   //判断类型点数范围
                return addAttr;
            }
        }
        return null as unknown as AddAttrDefine;
    }

    /**
     * 根据刷怪id查询
     * @param spawnID 刷怪id
     */
    public static queryListBySpawnID(spawnID:number):Array<SpawnRuleDefine>{
        let spawnRules = DataManager.Instance.spawnRules;
        let spawnList=[];
        for(let key in spawnRules){
            let spawnRuleDefine=spawnRules[key];
            if(spawnRuleDefine.SpawnID==spawnID){
                spawnList.push(spawnRuleDefine);
            }
        }
        return spawnList;
    }

    /**
     * 更加角色类型查询角色配置
     * @param characterClass 角色类型
     */
    public static queryCharactersByClass(characterClass:CharacterClass):Array<CharacterDefine>{
        let charactersList=new Array<CharacterDefine>();
        let charactersMap=DataManager.Instance.characters;
        for(let id in charactersMap){
           let define=charactersMap[id];
           if(define.Class.toString() == CharacterClass[characterClass]){
              charactersList.push(define);
           }
        }
        return charactersList;
    }

    /**
     * 根据怪物id查询怪物配置
     * @param monID 怪物id
     */
    public static querySpawnRulesByMonID(monID:number):Array<SpawnRuleDefine>{
        let spawnRules = DataManager.Instance.spawnRules;
        let spawnList=[];
        for(let key in spawnRules){
            let spawnRuleDefine=spawnRules[key];
            if(spawnRuleDefine.SpawnMonID==monID){
                spawnList.push(spawnRuleDefine);
            }
        }
        return spawnList;
    }
}