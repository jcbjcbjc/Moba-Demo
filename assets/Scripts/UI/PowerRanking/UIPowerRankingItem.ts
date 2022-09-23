import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame, Button } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from "../Common/Event/EventManager";
import { ListView } from "../Common/ListView/ListView";
import { DataManager } from "../../Managers/DataManager";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { UIPowerRanking } from "./UIPowerRanking";
import { ShopItemDefine } from "../../Data/ShopItemDefine";
import { ItemDefine } from "../../Data/ItemDefine";
import { CharacterDefine } from "../../Data/CharacterDefine";
import { UserService } from "../../Services/UserService";
import { CombatPowerRankingManager } from "../../Managers/CombatPowerRankingManager";
import { UIManager } from '../Common/UIManager';
import { UICharacterDetail } from "../UICharacterDetail/UICharacterDetail";
import { TipsManager } from "../TipsManager";
import { FollowManager } from "../../Managers/FollowManager";
const { ccclass, property } = _decorator;
const { NItem, NUser } = proto;

@ccclass('UIPowerRankingItem')
export class UIPowerRankingItem extends ListViewItem {
 
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
    public cancelFollowButton=null as unknown as Node;
    @property(Node)
    public followButton=null as unknown as Node;

    // @property(SpriteFrame)
    // public selectBgSpriteFrame=null as unknown as SpriteFrame;

    // public normalBgSpriteFrame=null as unknown as SpriteFrame;
    // private nodeBgSprite:Sprite=null as unknown as Sprite;
    public shopItemDefine=null as unknown as ShopItemDefine;
    private index:number=0;
    private uiPowerRanking=null as unknown as UIPowerRanking; 

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

    // public onSelected(selected:boolean):void{
    //   if(this.index==0){
    //     console.log('onSelected index='+this.index)
    //   }
    //     // console.log('selected='+selected)
    //     // if(this.nodeBgSprite){
    //     //    this.nodeBgSprite.spriteFrame = selected ? this.selectBgSpriteFrame : this.normalBgSpriteFrame;
    //     // }
    //     if(selected){  //选中，更新右边详细
    //        this.uiPowerRanking.selectedIndex=this.index;
    //     }
    // }

    public async SetItemInfo(user:NUser,uiPowerRanking:UIPowerRanking){
      this.user=user;
      this.uiPowerRanking=uiPowerRanking;
      let characterDefine=DataManager.Instance.characters[user.character?.cid as number] as CharacterDefine;
      this.imgSprite.spriteFrame=await LoadResUtil.load_local_sprite(characterDefine.Avatar+'/spriteFrame');
      this.nickNameLabel.string='昵称：'+user.nickname;
      this.offLineLabel.active=!user.status;
      this.onLineLabel.active=user.status;
      this.levelLabel.string='Lv：'+user.character?.level;
      this.fensiLabel.string='粉丝：'+user.fenSiCount;
      this.attLabel.string='攻击力：'+user.character?.att;
      this.defLabel.string='防御力：'+user.character?.def;
      if(User.Instance.user.id==user.id){
        this.cancelFollowButton.active=this.followButton.active=false;
      }else{
        this.cancelFollowButton.active=user.isFollow;
        this.followButton.active=!user.isFollow;
      }
    }

    /**
     * 点击关注
     */
  public async OnClickFollow(){
      FollowManager.Instance.SendFollow(this.user.id,true);
  }

  /**
   * 点击取消关注
   */
  public async OnClickCancelFollow(){
    FollowManager.Instance.SendFollow(this.user.id,false);
  }


    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}