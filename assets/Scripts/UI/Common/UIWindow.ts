
import { _decorator, Component, Node } from 'cc';
import { SoundManager } from '../../../Sound/SoundManager';
import { SoundDefine } from '../../../Sound/SoundDefine';
import { UIManager } from './UIManager';
import { EventManager } from './Event/EventManager';
import { EventType } from './Event/EventType';
const { ccclass, property } = _decorator;

@ccclass('UIWindow')
export class UIWindow extends Component {

    start () {
      
    }
	
	public Close(result= WindowResult.None):void
    {        
        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Win_Close);        
        if(this.node){
          UIManager.Instance.Close(this.node.name);
        }
        EventManager.Instance.dispatch(EventType.UIWindow_OnClose,result);
        EventManager.Instance.removeAll(this);
    }
	public OnCloseClick():void
    {
		this.Close();
    }

	public OnYesClick():void
    {
		this.Close(WindowResult.Yes);
    }

    public OnNoClick():void
    {
        this.Close(WindowResult.No);
    }
}


export enum WindowResult
{
    None=0,
    Yes,
    No
}