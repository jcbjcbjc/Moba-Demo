
import { _decorator, Component, Node, Sprite, Label, System, SystemEventType } from 'cc';
import proto from '../../../Proto/proto.js';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { DataManager } from '../../Managers/DataManager';
import { EventManager } from '../Common/Event/EventManager';
import { UICharacterDetail } from '../UICharacterDetail/UICharacterDetail';
import { UIManager } from '../Common/UIManager';
const { ccclass, property } = _decorator;
const { RoomUser } = proto;

@ccclass('UIInviteItem')
export class UIInviteItem extends Component {
   
    @property(Sprite)
    public sprite=null as unknown as Sprite;
    @property(Label)
    public nicknameLabel=null as unknown as Label;

    public roomUser=null as unknown as RoomUser;

    start () {
        if(this.sprite.node){
          this.sprite.node.on(SystemEventType.TOUCH_END,this.OnUserClcik,this);
        }
    }

    public async SetItemInfo(roomUser:RoomUser){
        this.roomUser=roomUser;
        this.sprite.spriteFrame=await LoadResUtil.load_local_sprite(DataManager.Instance.characters[roomUser.cCharacterId].Avatar+'/spriteFrame');
        this.nicknameLabel.string=roomUser.nickName;
    }

    private async OnUserClcik(){
        let uiCharacterDetail = await UIManager.Instance.show("UICharacterDetail") as UICharacterDetail;
        uiCharacterDetail.SendCharacterDetail(this.roomUser.userId, 0, 2);
    }

    onDestroy(){ 
        console.log('onDestroy')
        if(this.sprite.node){
          this.sprite.node.off(SystemEventType.TOUCH_END,this.OnUserClcik,this);
        }
        EventManager.Instance.removeAll(this);
    }
}

