import { Creature } from "../Enities/Creature";
import { HashMap } from "../../../Utils/HashMap";
import { RoomService } from "../../../Services/RoomService";
import { BattleMode } from "../enums/BattleMode";
import { DataManager } from "../../../Managers/DataManager";
import { User } from "../../../Models/User";
import proto from '../../../../Proto/proto.js';
import { Node, ParticleSystem } from "cc";
const {  ChatMessage, ChatChannel } = proto;

/**
 * 对战变量
 */
export class BattleGlobal{

    public static blueCart:Creature; //蓝队镖车
    public static redCart:Creature;  //红队镖车
    public static skillTipsMap=new HashMap();  //技能提示模型 key：技能提示类型名称字符串   value：技能模型
    public static battleMode:BattleMode;  //对局模式
    public static targetLiveUserId:number;  //目标直播用户id

    /** 蓝队成绩 */
    private static blueScore:number=0; 
    public static get BlueScore():number{
        return this.blueScore;
    }
    /**
     * 更新蓝队比分
     */
    public static UpdateBlueScore(){
        this.blueScore++;
        RoomService.Instance.SendUploadBiFen(this.blueScore+':'+this.redScore); //上传比分
    }

    /** 红队成绩 */
    private static redScore:number=0; 
    public static get RedScore():number{
        return this.redScore;
    }
    /**
     * 更新红队比分
     */
    public static UpdateRedScore(){
        this.redScore++;
        RoomService.Instance.SendUploadBiFen(this.blueScore+':'+this.redScore); //上传比分
    }

    public static clear(){
        this.blueScore = 0;
        this.redScore = 0;
        this.blueCart=null;
        this.redCart=null;
        this.skillTipsMap.clear();
    }

     /**
     * 获取对战消息文本内容
     * @param chatMessage 消息对象
     * @param enterFontCount 换行字数  -1代表不手动换行
     * @param index 0、我方  1、观看直播粉丝
     */
    public static getBattleMsgContent(chatMessage:ChatMessage, enterFontCount:number, index:number):string{
        let characterDefine = DataManager.Instance.characters[chatMessage.fromCCharacterId];
        let name = '';
        let nameStr = '';
        if((BattleGlobal.battleMode == BattleMode.Battle && User.Instance.user.id == chatMessage.fromId) || 
           (BattleGlobal.battleMode == BattleMode.Live && chatMessage.fromId == chatMessage.enterLiveUserId)) {  //自己玩家或被关注者
            name = chatMessage.fromName+'('+characterDefine.Name+'):';
            nameStr = '<color=#FF1493>'+name+'</color>';
        }else if(index == 0){  //我方玩家
            name = chatMessage.fromName+'('+characterDefine.Name+'):';
            nameStr = '<color=#4169E1>'+name+'</color>';
        }else if(index == 1 && BattleGlobal.battleMode == BattleMode.Battle){  //粉丝
            name = '(粉丝)'+chatMessage.fromName+':';  
            nameStr = '<color=#4169E1>'+name+'</color>';          
        }else if(index == 1 && BattleGlobal.battleMode == BattleMode.Live){  //游客
            name = '(游客)'+chatMessage.fromName+':';  
            nameStr = '<color=#4169E1>'+name+'</color>';       
        }
        
        let contentStr='';
      if(enterFontCount < 0){
        contentStr = chatMessage.msg;
      } else {
        let i=name.length;
        for(let char of chatMessage.msg){
            i++;
            if(i%enterFontCount==0){  //换行
                char += '\n';
            }
            contentStr += char;
        }
      }
       // console.log('contentStr='+contentStr)
        return nameStr+'<color=#ffffff>'+contentStr+'</color>';
    }

    /**
     * 播放粒子特效
     */
    public static playParticleEffect(node : Node){
        node.active = true;
        let particleSystem = node.getComponent(ParticleSystem);
        if(particleSystem){
            particleSystem.stop();
            particleSystem.clear();
            particleSystem.play();
            // particleSystem.pause();
            // particleSystem.play();
        }
        let childrenList = node.children;
        for(let i=0; i < childrenList.length; i++){
            this.playParticleEffect(childrenList[i]);
        }
    }

}