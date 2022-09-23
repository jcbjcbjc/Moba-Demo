import { NetConfig } from "../../../Network/NetConfig";
import { BattleManager } from "./BattleManager";
import { DataManager } from "../../../Managers/DataManager";
import { SpawnRuleDefine } from "../../../Data/SpawnRuleDefine";
import { LoadResUtil } from "../../../Utils/LoadResUtil";
import { instantiate, Node, find, Vec3 } from "cc";
import { CreatureManager } from "./CreatureManager";
import { TeamType2 } from "../enums/TeamType2";
import { DataUtil } from "../../../Utils/DataUtil";
import proto from '../../../../Proto/proto.js';
import { CharacterDefine } from "../../../Data/CharacterDefine";
import { Creature } from "../Enities/Creature";
import { CreatureType } from "../enums/CreatureType";
import { MathUtil } from "../../../Utils/MathUtil";
import { PositionVo } from "../Vo/PositionVo";
import { HashMap } from "../../../Utils/HashMap";
import { CarDirType } from "../enums/CarDirType";
import { BattleGlobal } from "../Utils/BattleGlobal";
import { LogicRenderConvert } from "../Utils/LogicRenderConvert";
const { CharacterClass } = proto;

/**
 * 刷怪管理器
 */
export class SpawnMonManager {
    public static Instance: SpawnMonManager = new SpawnMonManager();

    public noticeSpawnRuleId: number = 0; //公告刷怪规则id
    public soldierCreateCount: number = 0;  //小兵创建数量
    public soldierCreateFrameId: number = 0;  //小兵创建帧数
    public blueSoldierPosList: Array<PositionVo> = [];  //蓝队小兵位置
    public redSoldierPosList: Array<PositionVo> = [];  //红队小兵位置
    public soldierCreateIndex: number = 0;  //小兵创建索引
    public soldierCharacterDefineList:Array<CharacterDefine> = [];   //小兵配置

    private blueCartNode: Node;  //蓝队镖车
    private redCartNode: Node;  //红队镖车
    private noticeMonList:Array<Node>=[]; //公告怪物集合
    private monMap: HashMap = new HashMap();   //怪物集合  key怪物配置id  value节点集合
    private blueSoldierMap: HashMap = new HashMap(); //蓝队小兵集合  key怪物配置id  value节点集合
    private redSoldierMap: HashMap = new HashMap(); //红队小兵集合  key怪物配置id  value节点集合
    private soldierCardDir:number=0;  //小兵在镖车的方向 
    private soldierCreateWaveCount:number=0;  //创建波数

    /**
     * 初始化，在各个刷怪点，创建怪物
     */
    public async Init() {
        this.noticeSpawnRuleId = 0;
        this.soldierCreateCount = 0;
        this.soldierCreateFrameId = 0;
        this.blueSoldierPosList = [];
        this.redSoldierPosList = [];
        this.soldierCreateIndex = 0;
        this.soldierCardDir = 0;
        this.soldierCreateWaveCount = 0;
        this.monMap.clear();
        // this.blueSoldierMap.clear();
        // this.redSoldierMap.clear();
        this.blueCartNode = null;
        this.redCartNode = null;

        this.soldierCharacterDefineList = DataUtil.queryCharactersByClass(CharacterClass.Soldier);
       
        //镖车提前创建
        let cartCharacterDefine = DataUtil.queryCharactersByClass(CharacterClass.Cart)[0];
        if(!this.blueCartNode){
            let prefab = await LoadResUtil.loadPrefab(cartCharacterDefine.Resource);
            this.blueCartNode = instantiate(prefab) as Node;
        }
        if(!this.redCartNode){
            let prefab = await LoadResUtil.loadPrefab(cartCharacterDefine.RedResource);
            this.redCartNode = instantiate(prefab) as Node;
        }
        this.noticeMonList=[];
        //公告怪物提前创建，用一个移除一个
        let noticeMonsterCharacterDefineList = DataUtil.queryCharactersByClass(CharacterClass.NoticeMonsters);
        for(let noticeMonsterCharacterDefine of noticeMonsterCharacterDefineList){
            let prefab = await LoadResUtil.loadPrefab(noticeMonsterCharacterDefine.Resource);
            let node = instantiate(prefab) as Node;
            this.noticeMonList.push(node);
        }
        //怪物提前创建，创建一个存储起来
        let monstersCharacterDefineList = DataUtil.queryCharactersByClass(CharacterClass.Monsters);
        for(let monstersCharacterDefine of monstersCharacterDefineList){
            let nodeList = this.monMap.get(monstersCharacterDefine.ID) as Array<Node>;
            if(!nodeList){
                nodeList=[];
            }
              let prefab = await LoadResUtil.loadPrefab(monstersCharacterDefine.Resource);
              let node = instantiate(prefab) as Node;
              let node2 = instantiate(prefab) as Node;
              nodeList.push(node);
              nodeList.push(node2);
              this.monMap.put(monstersCharacterDefine.ID, nodeList);
        }
        //创建小兵
    //    await this.CreateSoldier(TeamType2.Blue, 10);
    //    await this.CreateSoldier(TeamType2.Red, 10);

        let nodeParentMap: { [key: number]: Node; } = {} as unknown as { [key: number]: Node; };
        let childrenNodeArr = BattleManager.Instance.spawnMonsterNode.children;
        for (let i = 0; i < childrenNodeArr.length; i++) {
            let characterParentNode = childrenNodeArr[i];
           // console.log('characterParentNode len='+characterParentNode.children.length+'，name='+characterParentNode.name)
            characterParentNode.removeAllChildren();
            let spawnID = parseInt(characterParentNode.name.replace('_', ''));    //刷怪点id
            let spawnRuleDefineList = DataUtil.queryListBySpawnID(spawnID);
            if (!spawnRuleDefineList || spawnRuleDefineList.length < 1) {
                continue;
            }
            //获取第一个刷怪规则
            let spawnRuleDefine = spawnRuleDefineList[0];
            let characterDefine: CharacterDefine = DataManager.Instance.characters[spawnRuleDefine.SpawnMonID];

            let blueTeamType2 = TeamType2.Neutral;  //蓝队类型
            let redTeamType2 = TeamType2.Neutral;  //红队类型
            if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier] ||
                characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                blueTeamType2 = TeamType2.Blue;
                redTeamType2 = TeamType2.Red;
            }
            // console.log(characterDefine.Class.toString() +'====='+ CharacterClass[CharacterClass.NoticeMonsters])
            if (characterParentNode.name.indexOf('_') != -1) {
                //不是公告，创建红方、中立
                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                    continue;
                }
                    let oldParentNode = nodeParentMap[characterParentNode.name.replace('_', '')] as Node;
                    characterParentNode.setPosition(oldParentNode.position.x, oldParentNode.position.y, -oldParentNode.position.z);
                    if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier]) {   //红队小兵
                        let rotation:Vec3=new Vec3();
                        characterParentNode.getRotation().getEulerAngles(rotation);
                        this.redSoldierPosList.push(new PositionVo(characterParentNode.getWorldPosition(), rotation));
                        continue;
                    }
                    let node=null;
                    if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Monsters]) { //怪物缓存取
                        node=this.monMap.get(characterDefine.ID)[1];
                    }else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) { //镖车缓存取
                        node=this.redCartNode;
                    }
                    let monster = await this.CreateMonster(characterDefine, redTeamType2, node, characterParentNode, spawnRuleDefine);
                    if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) {
                        BattleGlobal.redCart = monster;
                    }
            } else {
                nodeParentMap[characterParentNode.name] = characterParentNode;
                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier]) {   //蓝队小兵
                   let rotation:Vec3=new Vec3();
                   characterParentNode.getRotation().getEulerAngles(rotation);
                   this.blueSoldierPosList.push(new PositionVo(characterParentNode.getWorldPosition(), rotation));
                   continue;
                }
                //创建怪物蓝方、中立
                let node=null;
                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {  //公告怪物缓存取
                    if(this.noticeMonList.length > 0){
                        node=this.noticeMonList.shift();  //删除第一个元素
                    }
                }else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Monsters]) { //怪物缓存取
                   node=this.monMap.get(characterDefine.ID)[0];
                }else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) { //镖车缓存取
                   node=this.blueCartNode;
                   console.log('创建镖车 node id='+node.uuid+'，characterParentNode='+characterParentNode)
                }
                let monster = await this.CreateMonster(characterDefine, blueTeamType2, node, characterParentNode, spawnRuleDefine);
                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]) { 
                    BattleGlobal.blueCart=monster;
                }

                if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {  //公告怪物
                    this.noticeSpawnRuleId = spawnRuleDefine.ID;
                    // //测试代码，测试怪物20秒死亡
                    // setTimeout(function(){
                    //     console.log(monster.characterDefine.Class+'，死亡')
                    //     monster.DoDeath();
                    // },12000);
                } else if (characterDefine.Class.toString() == CharacterClass[CharacterClass.Monsters]) {  //怪物
                    //测试代码，测试怪物20秒死亡
                    // setTimeout(function(){
                    //     console.log(monster.characterDefine.Class+'，死亡')
                    //     monster.DoDeath();
                    // },1200);                
                }
            }
        }
    }

    /**
     * 创建小兵
     */
    private async CreateSoldier(teamType2: TeamType2, count:number=5){
        let soldierMap = (teamType2==TeamType2.Blue ? this.blueSoldierMap : this.redSoldierMap);
        for(let soldierCharacterDefine of this.soldierCharacterDefineList){
            let nodeList = soldierMap.get(soldierCharacterDefine.ID) as Array<Node>;
            if(!nodeList){
                nodeList=[];
            }
            for(let i=nodeList.length; i < count; i++){  //创建5个
                let prefab = await LoadResUtil.loadPrefab(teamType2==TeamType2.Blue ? soldierCharacterDefine.Resource : soldierCharacterDefine.RedResource);
                let node = instantiate(prefab) as Node;
                nodeList.push(node);
            }
            // console.log('count='+count+'，soldier id='+soldierCharacterDefine.ID+'，nodeList len='+nodeList.length)
            soldierMap.put(soldierCharacterDefine.ID, nodeList);
        }
    }

    /**
     * 创建怪物
     * @param characterDefine 
     * @param teamType2 
     */
    private async CreateMonster(characterDefine: CharacterDefine, teamType2: TeamType2, node: Node, parentNode: Node, spawnRuleDefine: SpawnRuleDefine, idx: number = undefined
        , birthPosition: Vec3 = null, birthRotation: Vec3 = null): Creature {
        if(!node){
            let resource = '';
            if(characterDefine.Class.toString() == CharacterClass[CharacterClass.Soldier] ||
               characterDefine.Class.toString() == CharacterClass[CharacterClass.Cart]){
               resource = teamType2==TeamType2.Red ? characterDefine.RedResource : characterDefine.Resource;
            }else{
               resource = characterDefine.Resource;
            }
            let prefab = await LoadResUtil.loadPrefab(resource);
            node = instantiate(prefab) as Node;
        }
        console.log('创建怪物：'+characterDefine.ID + '，node：' + node +"，parentNode："+parentNode)
        parentNode.addChild(node);
        let monster: Creature = new Creature(teamType2, node, characterDefine, undefined, CreatureType.Monster, birthPosition, birthRotation);
        monster.spawnRuleDefine = spawnRuleDefine;
        CreatureManager.Instance.AddCreature(monster.node, monster, idx);
        return monster;
    }

    /**
     * 逻辑更新
     * @param frameId 
     */
    public async LogicUpdate(frameId: number) {
        //遍历所有生物
        let creatureMap = CreatureManager.Instance.creatureMap;
        let creatureData = creatureMap.data;
        for (let entityId in creatureData) {
            // console.log('entityId='+entityId)
            let creature = creatureMap.get(entityId) as Creature;
            if (creature.creatureType == CreatureType.Monster) {  //怪物类型
                let creatureClass = creature.characterDefine.Class.toString();
                //创建公告怪物
                if (creatureClass == CharacterClass[CharacterClass.NoticeMonsters]) {
                    let frameCount = creature.deathFrameId + MathUtil.secondToFrame(creature.spawnRuleDefine.SpawnPeriod);  //创建帧数
                    if (creature.IsDeath && frameId == frameCount) {
                        //根据刷怪id查询
                        this.noticeSpawnRuleId++;  //刷怪id+1
                        let spawnRuleDefine = DataManager.Instance.spawnRules[this.noticeSpawnRuleId];  //获取刷怪规则
                        let characterDefine = DataManager.Instance.characters[spawnRuleDefine.SpawnMonID];  //获取怪物角色定义

                        //还存在公告怪物，创建
                        if (characterDefine.Class.toString() == CharacterClass[CharacterClass.NoticeMonsters]) {
                            //清空父节点下的模型
                            let characterParentNode = creature.node.parent;
                            characterParentNode.removeAllChildren();
                            let node:Node=null;
                            if(this.noticeMonList.length > 0){
                                node=this.noticeMonList.shift();  //删除第一个元素
                            }
                            let monster = await this.CreateMonster(characterDefine, TeamType2.Neutral, node, characterParentNode, spawnRuleDefine, parseInt(entityId), creature.birthPosition, creature.birthRotation);
                        }
                    }
                    continue;
                }
                //创建怪物，配置周期刷怪时间创建
                if (creatureClass == CharacterClass[CharacterClass.Monsters]) {
                    let frameCount = creature.deathFrameId + MathUtil.secondToFrame(creature.spawnRuleDefine.SpawnPeriod);  //创建帧数
                    if (creature.IsDeath && frameId == frameCount) {
                        let spawnRuleDefine = creature.spawnRuleDefine;  //获取刷怪规则
                        let characterDefine = creature.characterDefine;  //获取怪物角色定义

                        if (!spawnRuleDefine.IsSpawnPeriod) {  //不是周期刷怪
                            continue;
                        }

                        //清空父节点下的模型
                        let characterParentNode = creature.node.parent;
                        characterParentNode.removeAllChildren();
                        let node=null;
                        if(characterParentNode.name.indexOf('_') != -1){  //红队
                            node=this.monMap.get(characterDefine.ID)[1];
                        }else{  //蓝队
                            node=this.monMap.get(characterDefine.ID)[0];
                        }
                        let monster = await this.CreateMonster(characterDefine, TeamType2.Neutral, node, characterParentNode, spawnRuleDefine, parseInt(entityId), creature.birthPosition, creature.birthRotation);

                    }
                    continue;
                }
            }
        }
        //创建小兵，配置周期刷怪时间创建
       let soldierWaveCreateCount = DataManager.Instance.gameConfig.SoldierWaveCreateCount;  //每波创建数量
        //创建数量超过每波数量，判断下波帧数是否到达
        if (this.soldierCreateCount >= soldierWaveCreateCount) {
            let frameCount = this.soldierCreateFrameId + MathUtil.secondToFrame(DataManager.Instance.gameConfig.SoldierWaveWaitTime);  //下波创建帧数
            if (frameId == frameCount) {  //到了可以创建的帧
                this.soldierCreateCount = 0;
                this.soldierCreateFrameId = frameId;
                this.soldierCreateWaveCount++;
            }
        }
        //创建数量小于每波创建数量，开始创建
        if (this.soldierCreateCount < soldierWaveCreateCount) {
            //根据当前最新创建的小兵索引取
            if(this.soldierCreateIndex >= this.soldierCharacterDefineList.length){
                this.soldierCreateIndex=0;
            }
           let characterDefine = this.soldierCharacterDefineList[this.soldierCreateIndex];
           let spawnRuleDefine = DataUtil.querySpawnRulesByMonID(characterDefine.ID)[0];
           let frameCount = this.soldierCreateFrameId + MathUtil.secondToFrame(spawnRuleDefine.SpawnPeriod);  //每波中的创建帧数
        //    console.log('每波中的创建帧数:'+frameId +'，'+ frameCount)
           if (frameId != frameCount) {  //未到可以创建的帧
               return;
           }
           this.soldierCreateFrameId = frameId;  //更新创建小兵帧数

           let soldierCount = CreatureManager.Instance.GetCountByClass(CharacterClass.Soldier);  //当前战场小兵数量
           if(soldierCount >= DataManager.Instance.gameConfig.SoldierMaxCount){
               console.log('小兵数量达到上限：'+soldierCount)
              return;
           }
           
           let isGuardCart = (this.soldierCreateWaveCount==0 ? true : false);  //是否守护镖车
           this.soldierCreateIndex++;  //更新创建小兵索引
            let blueSoldierCardDir=this.soldierCardDir;
            for(let positionVo of this.blueSoldierPosList){
                let parentNode=new Node();
                BattleManager.Instance.spawnMonsterNode.addChild(parentNode);
                // let nodeList=this.blueSoldierMap.get(characterDefine.ID) as Array<Node>;
                // console.log('blue nodeList len='+nodeList.length)
                // let node=nodeList.shift();
                let monster = await this.CreateMonster(characterDefine, TeamType2.Blue, null, parentNode, spawnRuleDefine, null, positionVo.position, positionVo.rotation);
                monster.isGuardCart=isGuardCart;
                if(isGuardCart){
                  monster.soldierCardDir=blueSoldierCardDir;
                  blueSoldierCardDir++;
                }
                this.soldierCreateCount++;
            }
            let redSoldierCardDir=this.soldierCardDir;
            for(let positionVo of this.redSoldierPosList){
                let parentNode=new Node();
                BattleManager.Instance.spawnMonsterNode.addChild(parentNode);
                // let nodeList=this.redSoldierMap.get(characterDefine.ID) as Array<Node>;
                // console.log('red nodeList len='+nodeList.length)
                // let node=nodeList.shift();
                let monster = await this.CreateMonster(characterDefine, TeamType2.Red, null, parentNode, spawnRuleDefine, null, positionVo.position, positionVo.rotation);
                monster.isGuardCart=isGuardCart;
                if(isGuardCart){
                  monster.soldierCardDir=redSoldierCardDir;
                  redSoldierCardDir++;
                }
            }
            if(isGuardCart){  //更新小兵在镖车的方向
                this.soldierCardDir += 2;
            }
            console.log('创建小兵：'+this.soldierCreateCount+'，isGuardCart：'+isGuardCart+'，soldierCardDir：'+this.soldierCardDir)
        } 
    }

    // private timerTemp:number=0;
    public update(dt:number){
        // this.timerTemp += dt;
        // if(this.timerTemp >= 3){ //每3秒创建一次
        //     this.timerTemp=0;
        //     //创建小兵
        //     this.CreateSoldier(TeamType2.Blue);
        //     this.CreateSoldier(TeamType2.Red);
        // }
    }

}