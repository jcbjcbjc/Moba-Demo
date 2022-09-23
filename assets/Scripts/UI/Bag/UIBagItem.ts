import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import { NItem } from '../../../Proto/proto';
import { EventManager } from "../Common/Event/EventManager";
import { ListView } from "../Common/ListView/ListView";
import { DataManager } from "../../Managers/DataManager";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { UIBagDetailItem } from "./UIBagDetailItem";
import { UIBag } from "./UIBag";
import { ItemDefine } from "../../Data/ItemDefine";
const { ccclass, property } = _decorator;

@ccclass('UIBagItem')
export class UIBagItem extends ListViewItem {

    @property(Label)
    public countLabel=null as unknown as Label;
    @property(Label)
    public tranLabel=null as unknown as Label;
    @property(Sprite)
    public imgSprite=null as unknown as Sprite;
    @property(SpriteFrame)
    public selectBgSpriteFrame=null as unknown as SpriteFrame;

    public normalBgSpriteFrame=null as unknown as SpriteFrame;
    private nodeBgSprite:Sprite=null as unknown as Sprite;
    public item=null as unknown as NItem;
    public uiBagDetailItem=null as unknown as UIBagDetailItem;
    public index:number=0;
    private uiBag=null as unknown as UIBag; 
    public define=null as unknown as ItemDefine; 

    start () {
      this.imgSprite.node.on(SystemEventType.TOUCH_END,this.OnPointerClick,this);
      this.nodeBgSprite=this.node.getComponent(Sprite) as Sprite;
      this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame as SpriteFrame;
    }

    public onSelected(selected:boolean):void{
        console.log('selected='+selected)
        if(this.nodeBgSprite){
           this.nodeBgSprite.spriteFrame = selected ? this.selectBgSpriteFrame : this.normalBgSpriteFrame;
        }
        if(selected){  //选中，更新右边详细
           this.uiBagDetailItem.SetItemInfo(this.item);
           this.uiBag.selectedIndex=this.index;
        }
    }

    public async SetItemInfo(item:NItem,uiBagDetailItem:UIBagDetailItem,selected:boolean=false,index:number=-1,uiBag:UIBag){
      this.item=item;
      if(index != -1){
        this.index=index;
      }
      this.uiBag=uiBag;
      this.uiBagDetailItem=uiBagDetailItem;
      console.log('UIBagItem SetItemInfo:'+JSON.stringify(item))
      this.define= DataManager.Instance.items[item.itemId];
       this.countLabel.string=item.count+'';
       this.tranLabel.node.active=item.isTran;
       this.imgSprite.spriteFrame=await LoadResUtil.load_local_sprite(this.define.Icon+'/spriteFrame');
       if(selected){
        // this.nodeBgSprite.spriteFrame = this.selectBgSpriteFrame;
        this.OnPointerClick();
        this.uiBagDetailItem.SetItemInfo(item);
       }
      //  console.log('spriteFrame='+this.imgSprite+'，Icon='+this.define.Icon)
       
    }


    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}