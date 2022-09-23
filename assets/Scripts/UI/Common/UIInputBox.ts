
import { _decorator, Component, Node, Sprite, SpriteFrame, Button, Label, director, EditBox } from 'cc';
import { MessageBoxType } from './MessageBox';
import { EventManager } from './Event/EventManager';
import { EventType } from './Event/EventType';
import { LogUtil } from '../../Log/LogUtil';
import { SoundManager } from '../../../Sound/SoundManager';
import { SoundDefine } from '../../../Sound/SoundDefine';
const { ccclass, property } = _decorator;

@ccclass('UIInputBox')
export class UIInputBox extends Component {
  
    @property(Label)
    public title:Label=null as unknown as Label;
    @property(Label)
    public tips:Label=null as unknown as Label;
    @property(Label)
    public message:Label=null as unknown as Label;
    @property(Button)
    public buttonYes:Button=null as unknown as Button;
    @property(Button)
    public buttonNo:Button=null as unknown as Button;
    @property(EditBox)
    public input:EditBox=null as unknown as EditBox;
    @property(Label)
    public buttonYesTitle:Label=null as unknown as Label;
    @property(Label)
    public buttonNoTitle:Label=null as unknown as Label;
    
    public emptyTips:string=null as unknown as string;

    start () {
    }

    public Init(title:string,  message:string, btnOK:string = "",  btnCancel:string = "",  emptyTips:string = ""):void
    {
        LogUtil.log('UIInputBox:Init')
        if (title)  this.title.string = title;
        this.message.string = message;
        this.tips.string = '';
        this.emptyTips = emptyTips;

        if (btnOK) this.buttonYesTitle.string = btnOK;
        if (btnCancel) this.buttonNoTitle.string = btnCancel;        
        
        director.getScene()?.addChild(this.node);
    }

    public OnClickYes():void
    {
        console.log('OnClickYes')
        this.tips.string = "";
        let inputStr=this.input.string;
        if(!inputStr && inputStr != '0'){
            this.tips.string = this.emptyTips;
            return;
        }

        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Confirm);
        let tips= EventManager.Instance.dispatchObj(EventType.UIInputBox_OnClickYes,this,inputStr);
        console.log('tips='+tips)
        if(tips && tips != 'close'){
            this.tips.string=tips;
            return;
        }
        if(tips=='close'){
          this.Destroy();
        }
    }

    public OnClickNo():void
    {
        console.log('OnClickNo')
        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Win_Close);
        EventManager.Instance.dispatchObj(EventType.UIInputBox_OnClickNo,this);
        this.Destroy();
    }

    public Close():void
    {
        this.Destroy();
    }

    private Destroy():void{
        director.getScene()?.removeChild(this.node);
        this.destroy();
        EventManager.Instance.removeAll(this);
    }
}
