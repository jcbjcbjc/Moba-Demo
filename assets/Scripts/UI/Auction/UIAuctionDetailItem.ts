import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame, Button, Vec3 } from 'cc';
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
import { UIAuction } from "./UIAuction";
import { ShopItemDefine } from "../../Data/ShopItemDefine";
import { UIManager } from '../Common/UIManager';
import { UICharacterDetail } from "../UICharacterDetail/UICharacterDetail";
const { ccclass, property } = _decorator;
const { NItem, Result, NAuctionItem } = proto;

@ccclass('UIAuctionDetailItem')
export class UIAuctionDetailItem extends Component {

    @property(Label)
    public nameLabel=null as unknown as Label;
    @property(Label)
    public countLabel=null as unknown as Label;
    @property(Label)
    public biddingPriceLabel=null as unknown as Label;
    @property(Label)
    public currentPriceLabel=null as unknown as Label;
    @property(Label)
    public bidderNickNameLabel=null as unknown as Label;
    @property(Label)
    public descLabel=null as unknown as Label;
    @property(Sprite)
    public imgSprite=null as unknown as Sprite;
    @property(Node)
    public remainingTimeNode=null as unknown as Node;

    private index:number=0;
    private itemDefine=null as unknown as ItemDefine; 
    private uiAuction=null as unknown as UIAuction; 
    private item=null as unknown as NAuctionItem;

    // private descPos=null as unknown as Vec3;  //描述位置
    start () {
      // this.descPos = this.descLabel.node.getPosition();
      // this.descPos.y -= 20;
      this.bidderNickNameLabel.node.on(SystemEventType.TOUCH_END,this.OnBidderNickNameClick,this);
    }  

    /**
     * 竞拍者昵称点击
     */
    private async OnBidderNickNameClick(){
      console.log('OnBidderNickNameClick')
       let uiCharacterDetail = await UIManager.Instance.show("UICharacterDetail") as UICharacterDetail;
       uiCharacterDetail.SendCharacterDetail(this.item.bidderUserId, 0, 2); 
    }

 
    public async SetItemInfo(item: NAuctionItem, itemDefine:ItemDefine, index:number=-1, uiAuction:UIAuction){
      this.item=item;
      if(index != -1){
        this.index=index;
      }
      this.uiAuction=uiAuction;
      this.itemDefine= itemDefine;
      this.imgSprite.spriteFrame=await LoadResUtil.load_local_sprite(this.itemDefine.Icon+'/spriteFrame');
      this.nameLabel.string=this.itemDefine.Name;
      this.countLabel.string='数量：'+item.count;
      this.biddingPriceLabel.string='竞拍价：'+item.biddingPrice;
      this.currentPriceLabel.string='现价：'+item.currentPrice;
      this.bidderNickNameLabel.string='出价者：'+item.bidderNickName;
      this.currentPriceLabel.node.active=item.bidderUserId?true:false;
      this.bidderNickNameLabel.node.active=item.bidderUserId?true:false;

      this.descLabel.string='描述：'+this.itemDefine.Description;
      // this.descLabel.node.setPosition(this.descPos);
      this.remainingTimeNode.active=item.remainingTime <= 60000;
    }

    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}