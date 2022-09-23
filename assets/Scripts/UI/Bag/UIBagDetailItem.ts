import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame } from 'cc';
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
import { UIBag } from "./UIBag";
const { ccclass, property } = _decorator;
const { NItem, BagHandleResponse, BagHandleType, Result } = proto;

@ccclass('UIBagDetailItem')
export class UIBagDetailItem extends Component {

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
    @property(Node)
    public tranButton=null as unknown as Node; 
    @property(Node)
    public cancelTranButton=null as unknown as Node; 
    private define=null as unknown as ItemDefine; 

    start () {
      
    }


    public async SetItemInfo(item:NItem){
      this.define= DataManager.Instance.items[item.itemId];
      this.imgSprite.spriteFrame=await LoadResUtil.load_local_sprite(this.define.Icon+'/spriteFrame');
      this.nameLabel.string=this.define.Name;
      this.countLabel.string='数量：'+item.count;
      this.priceLabel.node.active=item.isTran;
      let descPos=this.descLabel.node.getPosition();
      if(item.isTran){  //交易
        this.priceLabel.string='价格：'+item.money;
        this.descLabel.node.setPosition(descPos.x, -118, descPos.z);  

        this.tranButton.active=false;
        this.cancelTranButton.active=true;
      }else{
        //未交易设置描述位置
        this.descLabel.node.setPosition(descPos.x, -78, descPos.z);  
        
        this.tranButton.active=true;
        this.cancelTranButton.active=false;
      }
      this.descLabel.string='描述：'+this.define.Description;
    }

    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}