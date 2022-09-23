
import { _decorator, Component, Node, Label } from 'cc';
import { UIWindow } from '../Common/UIWindow';
import { DataManager } from '../../Managers/DataManager';
import { TipsManager } from '../TipsManager';
const { ccclass, property } = _decorator;

@ccclass('UIMatchWait')
export class UIMatchWait extends UIWindow {
  
    @property(Label)
    private matchNum=null as unknown as Label;

    private timer=null;
    private num:number=1;

    start () {
     let startTime=new Date().getTime();
     let this_=this;  
     this.timer=setInterval(function(){
        this_.num=parseInt((new Date().getTime()-startTime)/1000+'')+1;
        this_.matchNum.string=this_.num+'';
        //匹配超时
        if(DataManager.Instance.gameConfig.MaxMatchTime <= this_.num-1){   
            TipsManager.Instance.showTips("匹配超时");
            clearInterval(this_.timer);
            this_.Close();
        }
      },1000)   
    }

    onDestroy(){
        clearInterval(this.timer);
    }

}
