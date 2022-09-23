
import { _decorator, Component, Node, Label, Sprite, SpriteFrame, SystemEventType } from 'cc';
import { ChatUserVo } from '../../Vo/ChatUserVo';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { DataManager } from '../../Managers/DataManager';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import { ChatManager } from '../../Managers/ChatManager';
import { UIManager } from '../Common/UIManager';
import { UICharacterDetail } from '../UICharacterDetail/UICharacterDetail';
const { ccclass, property } = _decorator;

@ccclass('UIChatUserItem')
export class UIChatUserItem extends ListViewItem {
    @property(Sprite)
    public avatarSprite=null as unknown as Sprite;
    @property(Label)
    public levelLabel=null as unknown as Label;
    @property(Label)
    public nickNameLabel=null as unknown as Label;
    @property(Node)
    public onLineLabel=null as unknown as Node;
    @property(Node)
    public offLineLabel=null as unknown as Node;
    public chatUserVo =null as unknown as ChatUserVo;
    // @property(Label)
    // private userMsgNumLabel=null as unknown as Label;
    @property(Sprite)
    public chatRedSprite: Sprite = null as unknown as Sprite;

    @property(SpriteFrame)
    public selectBgSpriteFrame=null as unknown as SpriteFrame;
    public normalBgSpriteFrame=null as unknown as SpriteFrame;
    private nodeBgSprite:Sprite=null as unknown as Sprite;
    public index:number=0;
    
    onLoad () {
        this.node.on(SystemEventType.TOUCH_END,this.OnPointerClick,this); 
        this.avatarSprite.node.on(SystemEventType.TOUCH_END, this.avatarClick,this);
    }

    start () {
      this.nodeBgSprite=this.node.getComponent(Sprite) as Sprite;
      this.normalBgSpriteFrame = this.nodeBgSprite.spriteFrame as SpriteFrame;
      this.chatRedSprite.node.active = false;
      EventManager.Instance.addListener(EventType.OnChangeRedNum,this.OnChangeRedNum,this);
      this.OnChangeRedNum();
    }

    public onSelected(selected:boolean):void{
          // console.log('selected='+selected)
          if(this.nodeBgSprite){
             this.nodeBgSprite.spriteFrame = selected ? this.selectBgSpriteFrame : this.normalBgSpriteFrame;
          }
      }

    public async SetItemInfo(chatUserVo : ChatUserVo,selected:boolean=false, index:number){
        this.index=index;
        if(!chatUserVo){
          return;
        }
        this.chatUserVo=chatUserVo;
        this.avatarSprite.spriteFrame=await LoadResUtil.load_local_sprite(DataManager.Instance.characters[chatUserVo.cCharacterId].Avatar+'/spriteFrame');
        this.levelLabel.string='lv'+chatUserVo.level;
        this.nickNameLabel.string=chatUserVo.nickName;
        this.onLineLabel.active=chatUserVo.status;
        this.offLineLabel.active=!chatUserVo.status;

        if(selected){
          this.OnPointerClick();
        }
    }

    /**
     * 消息数量改变
     */
    private OnChangeRedNum(){
      let userMsgNum=ChatManager.Instance.privateUserNum.get(this.chatUserVo.userId) || 0;
      // this.userMsgNumLabel.string=(userMsgNum > 99 ? '99+' : userMsgNum+'');
      if (userMsgNum > 0) {
        this.chatRedSprite.node.active = true;
      } else {
        this.chatRedSprite.node.active = false;
      }
    }

    /**
     * 头像点击
     */
    private async avatarClick(){
      console.log('avatarClick')
      let uiCharacterDetail = await UIManager.Instance.show("UICharacterDetail") as UICharacterDetail;
      uiCharacterDetail.SendCharacterDetail(this.chatUserVo.userId, 0, 2);
    }

  onDestroy(){
    EventManager.Instance.removeAll(this);
  }
}
