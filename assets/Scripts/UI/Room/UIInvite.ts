
import { _decorator, Component, Node, EditBox } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import proto from '../../../Proto/proto.js';
import { RoomService } from '../../Services/RoomService';
import { UIInviteItem } from './UIInviteItem';
import { UIRoom } from './UIRoom';
import { UIFollow } from '../Follow/UIFollow';
import { UIManager } from '../Common/UIManager';
const { ccclass, property } = _decorator;
const { RoomUser, TeamType } = proto;

@ccclass('UIInvite')
export class UIInvite extends UIWindow {
    
    @property(EditBox)
    public nickNameInput:EditBox=null as unknown as EditBox;
    @property([UIInviteItem])
    public uiInviteItemArr:Array<UIInviteItem>=[];

        

    start () {
        this.RefieshUI();
        EventManager.Instance.addListener(EventType.OnNickNameSearch_UI,this.OnNickNameSearch_UI,this); 
        EventManager.Instance.addListener(EventType.OnMyRoom_RefieshUI,this.RefieshUI,this); 
    }

    public RefieshUI(){
        RoomService.Instance.SendNickNameSearch(this.nickNameInput.string);
    }

    public OnNickNameSearch_UI(param: any){
        let roomUsers = param[0] as Array<RoomUser>;
        for(let i=0; i < 3; i++){
            let uiInviteItem=this.uiInviteItemArr[i];
            if(i < roomUsers.length){
               let roomUser=roomUsers[i];
               uiInviteItem.SetItemInfo(roomUser);
               uiInviteItem.node.active=true;
            }else{
                uiInviteItem.node.active=false;
            }
        }
    }

    /**
     * 搜索点击
     */
    OnSearchClick(){
        this.RefieshUI();
    }

    /**
     * 关注列表点击
     */
    async OnFollowListClick(){
        let uiFollow = await UIManager.Instance.show("UIFollow") as UIFollow;

    }

    /**
     * 邀请点击
     */
    OnInviteClick(param:any,customEventData:any){
        console.log(customEventData)
        let uiInviteItem=this.uiInviteItemArr[customEventData-1];
        RoomService.Instance.SendInviteRequest(uiInviteItem.roomUser.userId, uiInviteItem.roomUser.nickName, UIRoom.inviteTeamType);
    }

    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }
}