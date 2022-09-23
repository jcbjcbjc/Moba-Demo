import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame, Button } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from "../Common/Event/EventManager";
import { ListView } from "../Common/ListView/ListView";
import { DataManager } from "../../Managers/DataManager";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { UIFollow } from "./UIFollow";
import { ShopItemDefine } from "../../Data/ShopItemDefine";
import { ItemDefine } from "../../Data/ItemDefine";
import { CharacterDefine } from "../../Data/CharacterDefine";
import { UserService } from "../../Services/UserService";
import { CombatPowerRankingManager } from "../../Managers/CombatPowerRankingManager";
import { UIManager } from '../Common/UIManager';
import { UICharacterDetail } from "../UICharacterDetail/UICharacterDetail";
import { TipsManager } from "../TipsManager";
import { FollowManager } from "../../Managers/FollowManager";
import { RoomService } from "../../Services/RoomService";
import { UIRoom } from "../Room/UIRoom";
const { ccclass, property } = _decorator;
const { NItem, NUser } = proto;

@ccclass('UIFollowItem')
export class UIFollowItem extends ListViewItem {  
 
    @property(Sprite)
    public imgSprite=null as unknown as Sprite;
    @property(Label)
    public nickNameLabel=null as unknown as Label;
    @property(Node)
    public offLineLabel=null as unknown as Node;
    @property(Node)
    public onLineLabel=null as unknown as Node;
    @property(Label)
    public levelLabel=null as unknown as Label;
    @property(Label)
    public fensiLabel=null as unknown as Label;
    @property(Label)
    public attLabel=null as unknown as Label;
    @property(Label)
    public defLabel=null as unknown as Label;
    @property(Node)
    public inviteButton=null as unknown as Node;

    // @property(SpriteFrame)
    // public selectBgSpriteFrame=null as unknown as SpriteFrame;

    // public normalBgSpriteFrame=null as unknown as SpriteFrame;
    // private nodeBgSprite:Sprite=null as unknown as Sprite;
    private index:number=0;
    private uiFollowItem=null as unknown as UIFollow; 

    private user:NUser=null as unknown as NUser; 
    onLoad () {
      if(this.index==0){
        console.log('onLoad index='+this.index)
      }
      this.node.on(SystemEventType.TOUCH_END,this.onClcik,this);
      // this.nodeBgSprite=this.node.getComponent(Sprite) as Sprite;
      // this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame as SpriteFrame;
    }

    public async onClcik(){
     if(this.user.status){ 
       let uiCharacterDetail = await UIManager.Instance.show("UICharacterDetail") as UICharacterDetail;
       uiCharacterDetail.SendCharacterDetail(this.user.id,this.user.character?.tid as number,2);
     }else{
       TipsManager.Instance.showTips('对方不在线！');
     }
    }

    public async SetItemInfo(user:NUser,uiFollowItem:UIFollow){
      this.user=user;
      this.uiFollowItem=uiFollowItem;
      let characterDefine=DataManager.Instance.characters[user.character?.cid as number] as CharacterDefine;
      this.imgSprite.spriteFrame=await LoadResUtil.load_local_sprite(characterDefine.Avatar+'/spriteFrame');
      this.nickNameLabel.string='昵称：'+user.nickname;
      this.offLineLabel.active=!user.status;
      this.onLineLabel.active=user.status;
      this.levelLabel.string='Lv：'+user.character?.level;
      this.fensiLabel.string='粉丝：'+user.fenSiCount;
      this.attLabel.string='攻击力：'+user.character?.att;
      this.defLabel.string='防御力：'+user.character?.def;
      
      this.inviteButton.active=user.status;
    }

    /**
     * 点击邀请
     */
  public async OnClickInvite(){
    RoomService.Instance.SendInviteRequest(this.user.id, this.user.nickname, UIRoom.inviteTeamType);
  }



    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}