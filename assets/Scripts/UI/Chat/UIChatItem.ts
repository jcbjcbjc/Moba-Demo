import { ListViewItem } from "../Common/ListView/ListViewItem";

import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { User } from '../../Models/User';
import proto from '../../../Proto/proto.js';
import { EventManager } from "../Common/Event/EventManager";
import { ListView } from "../Common/ListView/ListView";
import { DataManager } from "../../Managers/DataManager";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { UIChat } from "./UIChat";
import { ShopItemDefine } from "../../Data/ShopItemDefine";
import { ItemDefine } from "../../Data/ItemDefine";
import { UIOtherMyUserItem } from "./UIOtherMyUserItem";
import { ChatManager } from "../../Managers/ChatManager";
const { ccclass, property } = _decorator;
const { NItem, ChatMessage, ChatChannel } = proto;

@ccclass('UIChatItem')
export class UIChatItem extends ListViewItem {

    @property(Node)
    public otherUser=null as unknown as Node;
    @property(Node)
    public myUser=null as unknown as Node;
    @property(Node)
    public timeNode=null as unknown as Node;
    @property(Label)
    public timeLabel=null as unknown as Label;


    onLoad () {
      this.node.on(SystemEventType.TOUCH_END,this.OnPointerClick,this);
    }


    public async SetItemInfo(chatMessage:ChatMessage,enterFontCount:number, index: number, chatChannel:ChatChannel, chatMessageList?: any){
      this.timeNode.active=false;
      if(!chatMessage){
        return;
      }
      let uiOtherMyUserItem=null;
      if(chatMessage.fromId==User.Instance.user.id){
        this.myUser.active=true;
        this.otherUser.active=false;
        uiOtherMyUserItem=this.myUser.getComponent(UIOtherMyUserItem);
      }else{
        this.myUser.active=false;
        this.otherUser.active=true;
        uiOtherMyUserItem=this.otherUser.getComponent(UIOtherMyUserItem);
      }
      uiOtherMyUserItem?.SetItemInfo(chatMessage,enterFontCount);

      //判断时间是否显示
      let isShowTime:boolean=false;
      if(index-1 < 0){  //第一个显示
        isShowTime=true;
      }else{  //与上一条聊天的时间间隔
        console.log('chat Type='+chatChannel)
        let prevCompMessage;
        if(chatChannel==ChatChannel.Comp){  //综合
            prevCompMessage=ChatManager.Instance.compMessages[index-1];
        }else if(chatChannel==ChatChannel.Private){  //私聊
            prevCompMessage=chatMessageList[index-1];
        }else if(chatChannel==ChatChannel.RoomChat){  //房间
            prevCompMessage=ChatManager.Instance.roomMessages[index-1];
      }
        if(prevCompMessage){
          let jgTime=chatMessage.time-prevCompMessage.time;
          if(jgTime > 3*60*1000){
            isShowTime=true;
          }
        }
      }
      if(isShowTime){
        this.timeNode.active=true;
        console.log('chatMessage.time='+chatMessage.time)
        this.timeLabel.string=new Date(parseInt(chatMessage.time)).toWeiXinString();
      }
    }


    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}