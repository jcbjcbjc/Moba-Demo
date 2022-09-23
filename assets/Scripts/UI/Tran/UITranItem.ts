import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from "../Common/Event/EventManager";
import { ListView } from "../Common/ListView/ListView";
import { DataManager } from "../../Managers/DataManager";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { UITranDetailItem } from "./UITranDetailItem";
import { UITran } from "./UITran";
import { ShopItemDefine } from "../../Data/ShopItemDefine";
import { ItemDefine } from "../../Data/ItemDefine";
const { ccclass, property } = _decorator;
const { NItem, Result } = proto;

@ccclass('UITranItem')
export class UITranItem extends ListViewItem {
 
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
    public item=null as unknown as NItem;
    public uiTranDetailItem=null as unknown as UITranDetailItem;
    private index:number=0;
    private uiTran=null as unknown as UITran; 
    public itemDefine=null as unknown as ItemDefine;

    onLoad () {
      if(this.index==0){
        console.log('onLoad index='+this.index) 
      }
      this.node.on(SystemEventType.TOUCH_END,this.OnPointerClick,this);
      this.nodeBgSprite=this.node.getComponent(Sprite) as Sprite;
      this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame as SpriteFrame;
    }

    public async onSelected(selected:boolean):void{
      if(this.index==0){
        console.log('onSelected index='+this.index)
      }
        // console.log('selected='+selected)
        if(this.nodeBgSprite){
           this.nodeBgSprite.spriteFrame = selected ? this.selectBgSpriteFrame : this.normalBgSpriteFrame;
        }
        if(selected){  //选中，更新右边详细
          await this.uiTranDetailItem.SetItemInfo(this.item,this.itemDefine,this.index, this.uiTran);
           this.uiTran.selectedIndex=this.index;
        }
    }

    public async SetItemInfo(item:NItem,uiTranDetailItem:UITranDetailItem,selected:boolean=false,index:number=-1,uiTran:UITran){
      this.item=item;
      if(index != -1){
        this.index=index;
      }
      this.uiTran=uiTran;
      this.uiTranDetailItem=uiTranDetailItem;
      this.itemDefine= DataManager.Instance.items[item.itemId];
       this.nameLabel.string=this.itemDefine.Name+'x'+item.count;
       this.priceLabel.string=item.money+'';
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