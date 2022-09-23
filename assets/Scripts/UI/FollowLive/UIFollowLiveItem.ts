import { _decorator, Component, Node, Label, Sprite, SpriteFrame, loader, resources, director, Font, Prefab, instantiate, SystemEventType, Color } from 'cc';
import { MessageBox, MessageBoxType } from '../Common/MessageBox';
import { UIManager } from '../Common/UIManager';
import { UISystemConfig } from '../UISystemConfig';
import { User } from '../../Models/User';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { DataManager } from '../../Managers/DataManager';
import { TabView } from '../Common/TabView/TabView';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import { CharacterDefine } from '../../Data/CharacterDefine';
import proto from '../../../Proto/proto.js';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { UserService } from '../../Services/UserService';
import { UICharacterDetail } from '../UICharacterDetail/UICharacterDetail';
import { TipsManager } from '../TipsManager';
import { RoomService } from '../../Services/RoomService';
const { CharacterClass,UnLockCharacter,NUser,TeamType }=proto;
const { ccclass, property } = _decorator;


@ccclass('UIFollowLiveItem')
export class UIFollowLiveItem extends ListViewItem {
 
    @property(Sprite)
    public img:Sprite=null;
    @property(Label)
    public nameLabel:Label=null;
    @property(Label)
    public blueBiFenLabel:Label=null;
    @property(Label)
    public redBiFenLabel:Label=null;
    @property(Label)
    public nickNameLabel:Label=null;
    @property(Label)
    public levelLabel:Label=null;
    @property(Label)
    public biFenLabel:Label=null;
    @property(Label)
    public numLabel:Label=null;
    @property(Node)
    public enterButtonNode:Node=null;
    private user:NUser=null;

    start (){
        this.node.on(SystemEventType.TOUCH_END,this.OnPointerClick,this);
    }

    // public onSelected(selected:boolean):void{
    //     console.log('selected='+selected)
    // }
    
    /**
     * 点击响应
     */
    public async onClcik():void{
        console.log('onClcik')
        let uiCharacterDetail = await UIManager.Instance.show("UICharacterDetail") as UICharacterDetail;
        uiCharacterDetail.SendCharacterDetail(this.user.id, 0, 2);
    }


    public async SetItemInfo(follow:NUser, selectedIndex:number):void{
        this.user = follow;
       let define = DataManager.Instance.characters[follow.character.cid];

       this.nameLabel.string=define.Name;
       this.img.spriteFrame = await LoadResUtil.load_local_sprite(define.Avatar+'/spriteFrame');
       this.nickNameLabel.string='昵称:'+follow.nickname;
       this.levelLabel.string='Lv:'+follow.character.level;
       if(selectedIndex==0){  //直播中
        this.enterButtonNode.active = true;
        this.blueBiFenLabel.node.active=true;
        this.redBiFenLabel.node.active=true;
        this.biFenLabel.node.active=true;        
        this.numLabel.node.active=true;
        let biFenArr = (follow.biFen+'' || '0:0').split(':');
        let blueBiFenText='';
        let redBiFenText='';
        let blueColor='';
        let redColor='';
        if(follow.teamType==TeamType.My){  //蓝队
            blueColor='#FF0000'; //红
            redColor='#000000';
            blueBiFenText=biFenArr[0];
            redBiFenText=':'+biFenArr[1];
        }else{
            blueColor='#000000';   
            redColor='#FF0000';  //红
            blueBiFenText=biFenArr[0]+':';
            redBiFenText=biFenArr[1];
        }
        // this.blueBiFenLabel.color.fromHEX(blueColor);
        // this.redBiFenLabel.color.fromHEX(redColor);  
        this.blueBiFenLabel.color = new Color().fromHEX(blueColor);
        this.redBiFenLabel.color = new Color().fromHEX(redColor);
        
        this.blueBiFenLabel.string = blueBiFenText;
        this.redBiFenLabel.string = redBiFenText;
        this.numLabel.string = '人数:'+(follow.roomNum || 0);
       }else{
        this.enterButtonNode.active = false;
        this.blueBiFenLabel.node.active=false;
        this.redBiFenLabel.node.active=false;
        this.biFenLabel.node.active=false;        
        this.numLabel.node.active=false;
       }

    }

    /**
     * 进入直播
     */
    public OnAddLive(){
        RoomService.Instance.SendAddLive(this.user.id);
    }

    onDestroy(){
        
    }

}
