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
import { UITran } from "./UITran";
import { ShopItemDefine } from "../../Data/ShopItemDefine";
const { ccclass, property } = _decorator;
const { NItem, Result } = proto;

@ccclass('UITranDetailItem')
export class UITranDetailItem extends Component {

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
    private uiTran=null as unknown as UITran; 

    start () {

    }  

 
    public async SetItemInfo(item:NItem, itemDefine:ItemDefine, index:number=-1, uiTran:UITran){
      if(index != -1){
        this.index=index;
      }
      this.uiTran=uiTran;
      this.itemDefine= itemDefine;
      this.imgSprite.spriteFrame=await LoadResUtil.load_local_sprite(this.itemDefine.Icon+'/spriteFrame');
      this.nameLabel.string=this.itemDefine.Name;
      this.countLabel.string='数量：'+item.count;
      this.priceLabel.string='价格：'+item.money;
      this.descLabel.string='描述：'+this.itemDefine.Description;
    }

    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}