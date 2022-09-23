import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame, tween, v3, Vec3 } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from "../Common/Event/EventManager";
import { ListView } from "../Common/ListView/ListView";
import { DataManager } from "../../Managers/DataManager";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { UIAuctionDetailItem } from "./UIAuctionDetailItem";
import { UIAuction } from "./UIAuction";
import { ShopItemDefine } from "../../Data/ShopItemDefine";
import { ItemDefine } from "../../Data/ItemDefine";
const { ccclass, property } = _decorator;
const { NItem, Result,NAuctionItem } = proto;

@ccclass('UIAuctionItem')
export class UIAuctionItem extends ListViewItem {

    @property(Label)
    public nameLabel=null as unknown as Label;
    @property(Sprite)
    public imgSprite=null as unknown as Sprite;
    @property(Label)
    public priceLabel=null as unknown as Label;
    @property(SpriteFrame)
    public selectBgSpriteFrame=null as unknown as SpriteFrame;

    public normalBgSpriteFrame=null as unknown as SpriteFrame;
    private nodeBgSprite:Sprite=null as unknown as Sprite;
    public item=null as unknown as NAuctionItem;
    public uiAuctionDetailItem=null as unknown as UIAuctionDetailItem;
    private index:number=0;
    private uiAuction=null as unknown as UIAuction; 
    public itemDefine=null as unknown as ItemDefine;

    onLoad () {
      if(this.index==0){
        console.log('onLoad index='+this.index) 
      }
      this.node.on(SystemEventType.TOUCH_END,this.OnPointerClick,this);
      this.nodeBgSprite=this.node.getComponent(Sprite) as Sprite;
      this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame as SpriteFrame;
    }

    public onSelected(selected:boolean):void{
      if(this.index==0){
        console.log('onSelected index='+this.index)
      }
        // console.log('selected='+selected)
        if(this.nodeBgSprite){
           this.nodeBgSprite.spriteFrame = selected ? this.selectBgSpriteFrame : this.normalBgSpriteFrame;
        }
        if(selected){  //选中，更新右边详细
           this.uiAuctionDetailItem.SetItemInfo(this.item,this.itemDefine,this.index, this.uiAuction);
           this.uiAuction.selectedIndex=this.index;
        }
    }

    public async SetItemInfo(item:NAuctionItem,uiAuctionDetailItem:UIAuctionDetailItem,selected:boolean=false,index:number=-1,uiAuction:UIAuction){
      this.item=item;
      if(index != -1){
        this.index=index;
      }
      this.uiAuction=uiAuction;
      this.uiAuctionDetailItem=uiAuctionDetailItem;
      this.itemDefine= DataManager.Instance.items[item.itemId];
       this.nameLabel.string=this.itemDefine.Name+'x'+item.count;
       this.priceLabel.string=item.bidderUserId ? item.currentPrice : item.biddingPrice;
       this.imgSprite.spriteFrame=await LoadResUtil.load_local_sprite(this.itemDefine.Icon+'/spriteFrame');
       if(selected){
        this.OnPointerClick();
       }
       
    }  

    private time=0;
    public update(dt:number){
      this.time += dt;
      if(this.item.remainingTime <= 60000){  //闪烁
        if(this.time > 0.5){ 
          this.time=0;
          this.nodeBgSprite.color.a = (this.nodeBgSprite.color.a==1) ? 255 : 1;
        }
      }else{
        this.nodeBgSprite.color.a = 255;
      }
    }


    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}