import { _decorator, Component, Node, Prefab, Label, Sprite, SystemEventType, SpriteFrame, RichText } from 'cc';
const { ccclass, property } = _decorator;
import proto from '../../../Proto/proto.js';
import { DataManager } from '../../Managers/DataManager';
import { UIBattleChat } from './UIBattleChat';
import { User } from '../../Models/User';
import { BattleGlobal } from './Utils/BattleGlobal';
import { BattleMode } from './enums/BattleMode';
const { NItem, ChatMessage, ChatChannel } = proto;

@ccclass('UIBattleChatItem')
export class UIBattleChatItem extends Component{
    
    @property(RichText)
    public contentRichText=null as unknown as RichText;
    
    public SetItemInfo(chatMessage:ChatMessage,  index:number){
        this.contentRichText.string=BattleGlobal.getBattleMsgContent(chatMessage, -1, index);
    }

   
}