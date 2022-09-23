
import { _decorator, Component, Node, Label, Sprite, RichText, Layout, UITransform, SystemEventType } from 'cc';
import proto from '../../../Proto/proto.js';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { User } from '../../Models/User';
import { DataManager } from '../../Managers/DataManager';
import { UIManager } from '../Common/UIManager';
import { UICharacterDetail } from '../UICharacterDetail/UICharacterDetail';
const { ccclass, property } = _decorator;
const { ChatMessage } = proto;

@ccclass('UIOtherMyUserItem')
export class UIOtherMyUserItem extends Component {
 
    @property(Sprite)
    public avatarSprite=null as unknown as Sprite;
    @property(Label)
    public levelLabel=null as unknown as Label;
    @property(Label)
    public nickNameLabel=null as unknown as Label;
    @property(RichText)
    public contentRichText=null as unknown as RichText;

    private chatMessage=null as unknown as ChatMessage;
    private userId:number; 

    start () {
        this.avatarSprite.node.on(SystemEventType.TOUCH_END, this.avatarClick,this);
    }

    public async SetItemInfo(chatMessage:ChatMessage,enterFontCount:number){
        // console.log(this.chatMessage && this.chatMessage.fromId==chatMessage.fromId && this.chatMessage.time==chatMessage.time)
        // if(this.chatMessage && this.chatMessage.fromId==chatMessage.fromId && this.chatMessage.time==chatMessage.time){
        //     return;
        // }
        this.chatMessage=chatMessage;
        if(chatMessage.fromCCharacterId){
            this.userId=chatMessage.fromId;
            this.levelLabel.string='lv'+chatMessage.fromLevel;
            this.nickNameLabel.string=chatMessage.fromName;
            this.avatarSprite.spriteFrame=await LoadResUtil.load_local_sprite(DataManager.Instance.characters[chatMessage.fromCCharacterId].Avatar+'/spriteFrame');
        }else if(chatMessage.toCCharacterId){
            this.userId=chatMessage.toId;
            this.levelLabel.string='lv'+chatMessage.toLevel;
            this.nickNameLabel.string=chatMessage.toName;
            this.avatarSprite.spriteFrame=await LoadResUtil.load_local_sprite(DataManager.Instance.characters[chatMessage.toCCharacterId].Avatar+'/spriteFrame');
        }
        
        this.contentRichText.string=this.getContent(chatMessage.msg,enterFontCount);
    
        //动态计算聊天item高度
        let offset: number = 60;
        let bubbleNode=this.node.getChildByName('bubbleSprite');   //弹幕背景
        let bubbleLayout: Layout = bubbleNode.getComponents(Layout)[1];  //弹幕布局组件
        bubbleLayout.updateLayout();
        let bubbleUt: UITransform = bubbleNode.getComponent(UITransform);  //弹幕变换组件
        let itemUt=this.node.parent.getComponent(UITransform);  //item
        itemUt.height=bubbleNode.getPosition().y+bubbleUt.height+offset;  //更新item高度
        // console.log('item height：'+itemUt.height+'，'+bubbleNode.getPosition().y+'，'+bubbleUt.height)
    }

    /**
     * 获取文本内容
     * @param msg 
     */
    public getContent(msg:string,enterFontCount:number):string{
        let contentStr='';
        let tempStr='';
        let startFlag=false;
        let endFlag=false;
        let i=0;
        for(let char of msg){
            i++;
            if(i%enterFontCount==0){  //换行
                char += '\n';
            }
            if(char=='['){
                startFlag=true;
            }
            if(char==']'){
                endFlag=true;
            }
            if(startFlag || endFlag){
                tempStr += char;
            }
            if(startFlag && endFlag){
                startFlag=endFlag=false;
                //替换表情
                let chatIconId=tempStr.replace('[','').replace(']','');
                contentStr += "<img src='"+chatIconId+"' width=32 height=32 />";
                tempStr = '';
                continue;
            }
            if(startFlag || endFlag){
                continue;            
            }
            contentStr += char;
        }
        contentStr += tempStr;
        // console.log('contentStr='+contentStr)
        return '<color=#000000>'+contentStr+'</color>';
    }
    

    /**
     * 头像点击
     */
    private async avatarClick(){
        console.log('avatarClick')
        let uiCharacterDetail = await UIManager.Instance.show("UICharacterDetail") as UICharacterDetail;
        uiCharacterDetail.SendCharacterDetail(this.userId, 0, 2);
      }
}
