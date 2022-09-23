
import { _decorator, Component, Node, director } from 'cc';
import { SoundManager } from '../../../Sound/SoundManager';
import { SoundDefine } from '../../../Sound/SoundDefine';
const { ccclass, property } = _decorator;

@ccclass('UIGameOver')
export class UIGameOver extends Component {
  
    start () {
       
    }

     /**
     * 返回大厅
     */
    public OnClickBackHall(){
        director.loadScene('UIMain');
        SoundManager.Instance.PlayMusic(SoundDefine.Music_Login);
    }
}
