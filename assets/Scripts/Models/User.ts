import proto from '../../Proto/proto.js';
import { EventManager } from '../UI/Common/Event/EventManager';
import { EventType } from '../UI/Common/Event/EventType';
const { NUser, AttrPromoteType, NItem, NRoom}=proto;

// import { NUser, AttrPromoteType } from "../../Proto/proto";

export class User{
    public static Instance:User=new User();

    public user:NUser=null as unknown as NUser;
    public isLogin:boolean=false;  //是否登录
    public room:NRoom=null;  //房间


      

    /**
     * 更改金币
     * @param coin 金币 
     */
    public AddGold(coin:number):void{
        this.user.coin += coin;
        EventManager.Instance.dispatch(EventType.UserCoinChange,this.user.coin);
    }
    
    /**
     * 修改已选角色属性
     * @param attrPromoteType 类型
     * @param spot 属性点
     */
    public UpdateAttrPromote(attrPromoteType:number,spot:number,attrValue:number){
        let character=this.user.character;
        if(attrPromoteType=AttrPromoteType.Att){ 
            character.attSpot += spot;
            character.att +=  attrValue;
         }else if(attrPromoteType=AttrPromoteType.Def){
            character.defSpot += spot;
            character.def += attrValue; 
         }else if(attrPromoteType=AttrPromoteType.Hp){
            character.hpSpot += spot;
            character.hp += attrValue;
         }else if(attrPromoteType=AttrPromoteType.Cri){
            character.criSpot += spot;
            character.cri += attrValue;
         }else if(attrPromoteType=AttrPromoteType.Resu){
            character.resuSpot += spot;
            character.resu += attrValue;
         }else if(attrPromoteType=AttrPromoteType.Speed){
            character.speedSpot += spot;
            character.speed += attrValue;
         }else if(attrPromoteType=AttrPromoteType.Cd){
            character.cdSpot += spot;
            character.cd += attrValue; 
         }
    }
   
    

}