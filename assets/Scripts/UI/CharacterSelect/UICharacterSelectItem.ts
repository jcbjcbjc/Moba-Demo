import { _decorator, Component, Node, Label, Sprite, SpriteFrame, loader, resources, director, Font, Prefab, instantiate, SystemEventType } from 'cc';
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
const { CharacterClass,UnLockCharacter }=proto;
const { ccclass, property } = _decorator;


@ccclass('UICharacterSelectItem')
export class UICharacterSelectItem extends ListViewItem {

    @property(Sprite)
    public img=null as unknown as Sprite;
    @property(Label)
    public unlockLabel=null as unknown as Label;
    @property(Label)
    public selectedLabel=null as unknown as Label;
    @property(Label)
    public nameLabel=null as unknown as Label;
    private define:CharacterDefine=null as unknown as CharacterDefine;
     
    private state:number=0; //状态 0、未解锁 1、已解锁  2、已选择 
    private tCharacterId: number=0;  //已解锁数据库角色id

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
        if(this.state==0){  //未解锁
           let confirmObj= await MessageBox.Show("确定消耗"+this.define.UnlockCoin+"金币解锁英雄吗？", "解锁英雄", MessageBoxType.Confirm,"确定","取消"); 
           let this_=this;
           EventManager.Instance.addListener(EventType.UIMessageBox_OnClickYes,function(){
               UserService.Instance.SendUnLock(this_.define.ID);
           },confirmObj);
        //    EventManager.Instance.addListener(EventType.UIMessageBox_OnClickNo,function(){
        //     // console.log('取消解锁')  
        //     TipsManager.Instance.showTips("取消解锁");
        //    },confirmObj);
        }else{
           let uiCharacterDetail = await UIManager.Instance.show("UICharacterDetail") as UICharacterDetail;
           uiCharacterDetail.SendCharacterDetail(User.Instance.user.id,this.tCharacterId);
        }
    }


    public async SetItemInfo(define:CharacterDefine):void{
        this.define=define;
        this.nameLabel.string=define.Name;
        this.img.spriteFrame = await LoadResUtil.load_local_sprite(define.UpperBodyImg+'/spriteFrame');
        let unLockCharacters=User.Instance.user.unLockCharacters;
        // console.log('unLockCharacters='+unLockCharacters)
        let isUnlock:boolean=false; //是否解锁
        for(let i=0;i<unLockCharacters.length;i++){
            let unLockCharacter=unLockCharacters[i] as UnLockCharacter;
            if(define.ID==unLockCharacter.cid){  //已解锁
                isUnlock=true;
                this.tCharacterId = unLockCharacter.tid;
                break;
            }
        }
        this.unlockLabel.node.active=this.selectedLabel.node.active=false;
        if(User.Instance.user.character?.cid==define.ID){  //已选择
            console.log('已选择')
            this.selectedLabel.string='已选择';
            this.selectedLabel.node.active=true;
            this.unlockLabel.node.active=false;
            this.state=2;
            console.log('selectedLabel='+this.selectedLabel.node.active+'，unlockLabel='+this.unlockLabel.node.active)
        }else if(!isUnlock){  //未解锁
            this.unlockLabel.string='未解锁\n'+define.UnlockCoin;
            this.unlockLabel.node.active=true;
            this.selectedLabel.node.active=false;
            this.state=0;
        }else{
            this.state=1;
        }
    }

    onDestroy(){
        
    }

}
