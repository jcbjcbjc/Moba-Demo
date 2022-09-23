import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import { NItem } from '../../../Proto/proto';
import { EventManager } from "../Common/Event/EventManager";
import { ListView } from "../Common/ListView/ListView";
import { DataManager } from "../../Managers/DataManager";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { UIShopDetailItem } from "./UIShopDetailItem";
import { UIShop } from "./UIShop";
import { ShopItemDefine } from "../../Data/ShopItemDefine";
import { ItemDefine } from "../../Data/ItemDefine";
const { ccclass, property } = _decorator;

@ccclass('UIShopItem')
export class UIShopItem extends ListViewItem {
 
    @property(Label)
    public countLabel=null as unknown as Label;
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
    public shopItemDefine=null as unknown as ShopItemDefine;
    public uiShopDetailItem=null as unknown as UIShopDetailItem;
    private index:number=0;
    private uiShop=null as unknown as UIShop; 
    public itemDefine=null as unknown as ItemDefine;
    public id:number;  //唯一标识

    onLoad () {
      // if(this.index==0){
      //   console.log('onLoad index='+this.index)
      // }
      this.node.on(SystemEventType.TOUCH_END,this.OnPointerClick,this);
      this.nodeBgSprite=this.node.getComponent(Sprite) as Sprite;
      this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame as SpriteFrame;
    }

    public async onSelected(selected:boolean):void{
      // if(this.index==0){
        // console.log('onSelected index='+this.index+'，selected='+selected)
      // }
        if(this.nodeBgSprite){
           this.nodeBgSprite.spriteFrame = selected ? this.selectBgSpriteFrame : this.normalBgSpriteFrame;
        }
        if(selected){  //选中，更新右边详细
          await this.uiShopDetailItem.SetItemInfo(this.itemDefine, this.shopItemDefine,this.index, this.uiShop);
           this.uiShop.selectedIndex=this.index;
        }
    }

    public async SetItemInfo(shopItemDefine:ShopItemDefine,uiShopDetailItem:UIShopDetailItem,selected:boolean=false,index:number=-1,uiShop:UIShop){
      this.shopItemDefine=shopItemDefine;
      if(index != -1){
        this.index=index;
      }
      this.uiShop=uiShop;
      this.uiShopDetailItem=uiShopDetailItem;
      this.itemDefine= DataManager.Instance.items[shopItemDefine.ItemID];
      this.id = this.itemDefine.ID;
      //  this.countLabel.string=shopItemDefine.Count+'';
       this.nameLabel.string=this.itemDefine.Name+'x'+shopItemDefine.Count;
       this.priceLabel.string=shopItemDefine.Price+'';
       this.imgSprite.spriteFrame=await LoadResUtil.load_local_sprite(this.itemDefine.Icon+'/spriteFrame');
       if(selected){
        this.OnPointerClick();
       }
       
    }


    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}