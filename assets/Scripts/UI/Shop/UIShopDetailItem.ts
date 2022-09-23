import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame, Button } from 'cc';
import proto from '../../../Proto/proto.js';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import { EventManager } from "../Common/Event/EventManager";
import { ListView } from "../Common/ListView/ListView";
import { DataManager } from "../../Managers/DataManager";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { EventType } from "../Common/Event/EventType";
import { ItemService } from "../../Services/ItemService";
import { MessageBox,MessageBoxType } from "../Common/MessageBox";
import { ItemDefine } from "../../Data/ItemDefine";
import { InputBox } from "../Common/InputBox";
import { Validate } from "../../Utils/Validate";
import { TipsManager } from "../TipsManager";
import { ItemManager } from "../../Managers/ItemManager";
import { UIShop } from "./UIShop";
import { ShopItemDefine } from "../../Data/ShopItemDefine";
const { ccclass, property } = _decorator;
const { NItem, Result } = proto;

@ccclass('UIShopDetailItem')
export class UIShopDetailItem extends Component {

    @property(Label)
    public nameLabel=null as unknown as Label;
    @property(Label)
    public countLabel=null as unknown as Label;
    @property(Label)
    public priceLabel=null as unknown as Label;
    @property(Label)
    public descLabel=null as unknown as Label;
    @property(Sprite)
    public imgSprite=null as unknown as Sprite;

    private index:number=0;
    private itemDefine=null as unknown as ItemDefine; 
    public shopItemDefine=null as unknown as ShopItemDefine;
    private money:string='';
    private uiShop=null as unknown as UIShop; 

    start () {

    }


    public async SetItemInfo(itemDefine:ItemDefine,shopItemDefine:ShopItemDefine,index:number=-1,uiShop:UIShop){
      if(index != -1){
        this.index=index;
      }
      this.uiShop=uiShop;
      this.itemDefine= itemDefine;
      this.shopItemDefine=shopItemDefine;
      this.imgSprite.spriteFrame=await LoadResUtil.load_local_sprite(this.itemDefine.Icon+'/spriteFrame');
      this.nameLabel.string=this.itemDefine.Name;
      this.countLabel.string='数量：'+this.shopItemDefine.Count;
      this.priceLabel.string='价格：'+this.shopItemDefine.Price;
      this.descLabel.string='描述：'+this.itemDefine.Description;
    }

    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}