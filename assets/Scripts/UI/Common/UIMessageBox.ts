
import { _decorator, Component, Node, Sprite, SpriteFrame, Button, Label, director } from 'cc';
import { MessageBoxType } from './MessageBox';
import { EventManager } from './Event/EventManager';
import { EventType } from './Event/EventType';
import { LogUtil } from '../../Log/LogUtil';
import { SoundManager } from '../../../Sound/SoundManager';
import { SoundDefine } from '../../../Sound/SoundDefine';
const { ccclass, property } = _decorator;

@ccclass('UIMessageBox')
export class UIMessageBox extends Component {
  
    @property(Label)
    public title:Label=null as unknown as Label;
    @property(Label)
    public message:Label=null as unknown as Label;
    @property([Sprite])
    public icons:Array<Sprite>=[];
    @property(Button)
    public buttonYes:Button=null as unknown as Button;
    @property(Button)
    public buttonNo:Button=null as unknown as Button;
    @property(Label)
    public buttonYesTitle:Label=null as unknown as Label;
    @property(Label)
    public buttonNoTitle:Label=null as unknown as Label;
    
    start () {
    }

    public Init(title:string,  message:string, type:MessageBoxType = MessageBoxType.Information, btnOK:string = "",  btnCancel:string = ""):void
    {
        LogUtil.log('UIMessageBox:Init')
        if (title)  this.title.string = title;
        
        this.message.string = message;
        this.icons[0].enabled = (type == MessageBoxType.Information);
        this.icons[1].enabled = (type == MessageBoxType.Confirm);
        this.icons[2].enabled = (type == MessageBoxType.Error);

        if (btnOK) this.buttonYesTitle.string = btnOK;
        if (btnCancel) this.buttonNoTitle.string = btnCancel;        
        
        this.buttonNo.node.active=(type == MessageBoxType.Confirm);
        director.getScene()?.addChild(this.node);
        if(type==MessageBoxType.Error)
            SoundManager.Instance.PlaySound(SoundDefine.SFX_Message_Error);
        else
            SoundManager.Instance.PlaySound(SoundDefine.SFX_Message_Info);
    }

    public OnClickYes():void
    {
        console.log('OnClickYes')
        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Confirm);
        EventManager.Instance.dispatchObj(EventType.UIMessageBox_OnClickYes,this);
        this.Destroy();
    }

    public OnClickNo():void
    {
        console.log('OnClickNo'+this.uuid)
        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Win_Close);
        EventManager.Instance.dispatchObj(EventType.UIMessageBox_OnClickNo,this);
        this.Destroy();
    }

    private Destroy():void{
        director.getScene()?.removeChild(this.node);
        this.destroy();
        EventManager.Instance.removeAll(this);
    }
}
