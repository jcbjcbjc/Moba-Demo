import { LoadResUtil } from "../Utils/LoadResUtil";
import { CharacterDefine } from "../Data/CharacterDefine";
import { ItemDefine } from "../Data/ItemDefine";
import { ShopDefine } from "../Data/ShopDefine";
import { ShopItemDefine } from "../Data/ShopItemDefine";
import { GameConfig } from "../Data/GameConfig";
import { AddAttrDefine } from "../Data/AddAttrDefine";
import { RockerSpeedVo } from "../Vo/RockerSpeedVo";
import { SkillDefine } from "../Data/SkillDefine";
import { SpawnRuleDefine } from "../Data/SpawnRuleDefine";
import { BuffDefine } from "../Data/BuffDefine";

export class DataManager {

   public static Instance:DataManager=new DataManager();

    private DataPath:string='Data/';
    public characters: { [key: number]: CharacterDefine; }=null as unknown as { [key: number]: CharacterDefine; }; 
    public items: { [key: number]: ItemDefine; }=null as unknown as { [key: number]: ItemDefine; }; 
    public shops: { [key: number]: ShopDefine; }=null as unknown as { [key: number]: ShopDefine; }; 
    public shopItems: { [key: number]: { [key: number]: ShopItemDefine; }; }=null as unknown as { [key: number]: { [key: number]: ShopItemDefine; }; }; 
    public gameConfig:GameConfig=null as unknown as GameConfig;
    public addAttrs: { [key: number]: AddAttrDefine; }=null as unknown as { [key: number]: AddAttrDefine; };  
    // public rockerSpeeds: { [key: number]: RockerSpeedVo; }={}; 
    public rockerSpeeds = new Array<RockerSpeedVo>();
    public skills: { [key: number]: { [key: number]: SkillDefine; }; }=null; 
    public spawnRules: { [key: number]: SpawnRuleDefine; }=null;
    public buffs: { [key: number]: BuffDefine; }=null;
    

  public async Load(){
      console.log('Load json')
     this.characters = JSON.parse(await LoadResUtil.loadConfig(this.DataPath+"CharacterDefine.txt"));
     this.items = JSON.parse(await LoadResUtil.loadConfig(this.DataPath+"ItemDefine.txt"));
     this.shops = JSON.parse(await LoadResUtil.loadConfig(this.DataPath+"ShopDefine.txt"));
     this.shopItems = JSON.parse(await LoadResUtil.loadConfig(this.DataPath+"ShopItemDefine.txt"));
     this.gameConfig = JSON.parse(await LoadResUtil.loadConfig(this.DataPath+"GameConfig.txt"));
     this.addAttrs = JSON.parse(await LoadResUtil.loadConfig(this.DataPath+"AddAttrDefine.txt"));
     this.skills = JSON.parse(await LoadResUtil.loadConfig(this.DataPath+"SkillDefine.txt"));
     this.spawnRules = JSON.parse(await LoadResUtil.loadConfig(this.DataPath+"SpawnRuleDefine.txt"));
     this.buffs = JSON.parse(await LoadResUtil.loadConfig(this.DataPath+"BuffDefine.txt"));
     
     //解析摇杆数据
    //  this.rockerSpeeds={};
    // let rockerSpeedStr= await LoadResUtil.loadConfig(this.DataPath+"RockerSpeed.txt");
    // let rockerSpeedArr=rockerSpeedStr.split('\n');
    // for(let i=0;i<rockerSpeedArr.length;i++){
    //   let str=rockerSpeedArr[i];
    //   if(!str){
    //     continue;
    //   }
    //    let arr = str.split(',');
    //    let rockerSpeedVo = new RockerSpeedVo(Number(arr[1]), Number(arr[2]));
    //    this.rockerSpeeds[arr[0]] = rockerSpeedVo;
    // }
    this.rockerSpeeds = [];
    let rockerSpeedStr= await LoadResUtil.loadConfig(this.DataPath+"RockerSpeed.txt");
    let rockerSpeedArr=rockerSpeedStr.split('\n');
    for(let i=0;i<rockerSpeedArr.length;i++){
      let str=rockerSpeedArr[i];
      if(!str){
        continue;
      }
       let arr = str.split(',');
       let rockerSpeedVo = new RockerSpeedVo(Number(arr[1]), Number(arr[2]));
       this.rockerSpeeds.push(rockerSpeedVo);
    }
  }
}