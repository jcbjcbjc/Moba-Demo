
import { _decorator, Component, Node, Label } from 'cc';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import { User } from '../../Models/User';
import { UserService } from '../../Services/UserService';
import { UIWindow } from '../Common/UIWindow';
import { DataManager } from '../../Managers/DataManager';
import { DataUtil } from '../../Utils/DataUtil';
import proto from '../../../Proto/proto.js';
import { UICharacterDetail } from './UICharacterDetail';
const { ccclass, property } = _decorator;
const { AttrPromoteType, AddAttrType, AttrPromoteInfoResponse }=proto;

@ccclass('UIPromote')
export class UIPromote extends UIWindow {

    @property(Label)
    public attrLabel=null as unknown as Label;
    @property(Label)
    public cgjhLabel=null as unknown as Label;

    private tCharacterId: number=0;   //数据库角色id
    private attrPromoteType:AttrPromoteType=null as unknown as AttrPromoteType;  //提升类型
    private spot:number=0;  //点数
    private uiCharacterDetail:UICharacterDetail=null as unknown as UICharacterDetail;
 
    start () {
        EventManager.Instance.addListener(EventType.OnAttrPromoteInfo_UI,this.OnAttrPromoteInfo_UI,this); 
    }
    
    /**
     * 设置提升属性信息
     */
    public SetPromoteDetail(tCharacterId: number, attrPromoteType:AttrPromoteType,spot:number,uiCharacterDetail:UICharacterDetail){
        console.log('SetPromoteDetail tCharacterId='+tCharacterId+'，attrPromoteType='+attrPromoteType+'，spot='+spot)
        this.tCharacterId=tCharacterId;
        this.attrPromoteType=attrPromoteType;
        this.spot=spot;
        this.uiCharacterDetail=uiCharacterDetail;
        this.UpdateAttrPromoteInfo();
    }

    /**
     * 更新提升属性信息
     */
    private UpdateAttrPromoteInfo(){ 
        let attrStr='';  //属性信息
       let addAttrDefine = DataUtil.queryObjAddAttrByType(AddAttrType.GEM,this.spot);
       let cgjhStr='';//成功机会信息
       if(addAttrDefine){ 
           cgjhStr='成功机会：'+addAttrDefine.Probability+'%';   
       }else{
           cgjhStr='成功机会：0%';
       }

       if(this.attrPromoteType==AttrPromoteType.Att){
          attrStr='攻击：';
       }else if(this.attrPromoteType==AttrPromoteType.Def){
          attrStr='防御：';
       }else if(this.attrPromoteType==AttrPromoteType.Hp){
          attrStr='血量：';
       }else if(this.attrPromoteType==AttrPromoteType.Cri){
          attrStr='暴击率：';
       }else if(this.attrPromoteType==AttrPromoteType.Resu){
          attrStr='复活率：';
       }else if(this.attrPromoteType==AttrPromoteType.Speed){
          attrStr='速度：';
       }else if(this.attrPromoteType==AttrPromoteType.Cd){
          attrStr='cd：';
       }

       this.attrLabel.string=attrStr+this.spot;
       this.cgjhLabel.string=cgjhStr;
    }

    /**
     * 请求属性提升
     */
    public AttrPromote():void{
        UserService.Instance.SendAttrPromote(this.tCharacterId,this.attrPromoteType);
    }

    /**
     * 属性提升响应
     */
    private OnAttrPromoteInfo_UI(param:any){
        let attrPromoteInfoResponse = param[0] as AttrPromoteInfoResponse;
          //更新已选角色属性
        if(User.Instance.user.character?.tid==this.tCharacterId){
            User.Instance.UpdateAttrPromote(this.attrPromoteType,attrPromoteInfoResponse.spot,attrPromoteInfoResponse.attrValue);
        }
        this.spot=attrPromoteInfoResponse.spot;
        this.UpdateAttrPromoteInfo();
        //更新详情界面属性提升
        if(this.uiCharacterDetail){
            this.uiCharacterDetail.UpdateAttrPromote(this.attrPromoteType,attrPromoteInfoResponse);
        }
    }

    onDestroy(){
        EventManager.Instance.removeAll(this);
    }

}
