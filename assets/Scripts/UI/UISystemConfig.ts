
import { _decorator, Component, Node, Slider, Sprite, ProgressBar, SystemEvent } from 'cc';
import { UIWindow } from './Common/UIWindow';
import { EventType } from './Common/Event/EventType';
import { SoundManager } from '../../Sound/SoundManager';
import { SoundDefine } from '../../Sound/SoundDefine';
import { SoundConfig } from '../../Sound/SoundConfig';
const { ccclass, property } = _decorator;

@ccclass('UISystemConfig')
export class UISystemConfig extends UIWindow {

    @property(Slider)
    public sliderMusic:Slider=null as unknown as Slider;
    @property(Slider)
    public sliderSound:Slider=null as unknown as Slider;

    @property(ProgressBar)
    public musicProgressBar:ProgressBar=null as unknown as ProgressBar;
    @property(ProgressBar)
    public soundProgressBar:ProgressBar=null as unknown as ProgressBar;

    @property(Sprite)
    public musicOff:Sprite=null as unknown as Sprite;
    @property(Sprite)
    public soundOff:Sprite=null as unknown as Sprite;

    @property(Sprite)
    public musicOn:Sprite=null as unknown as Sprite;
    @property(Sprite)
    public soundOn:Sprite=null as unknown as Sprite;

    start () {
        this.musicOn.node.active=SoundConfig.MusicOn;
        this.musicOff.node.active=!SoundConfig.MusicOn;
        this.soundOn.node.active=SoundConfig.SoundOn;
        this.soundOff.node.active=!SoundConfig.SoundOn;


        this.sliderMusic.progress =this.musicProgressBar.progress= SoundConfig.MusicVolume;
        this.sliderSound.progress =this.soundProgressBar.progress= SoundConfig.SoundVolume;

        let this_ = this;
        //音乐滑动事件
        this.sliderMusic.node.on('slide', function(event){
            this_.musicProgressBar.progress = this_.sliderMusic.progress;
            SoundConfig.MusicVolume=this_.sliderMusic.progress;
            this_.PlaySound();
        }, this);
        //声音滑动事件
        this.sliderSound.node.on('slide', function(event){
            this_.soundProgressBar.progress = this_.sliderSound.progress;
            SoundConfig.SoundVolume=this_.sliderSound.progress;
            this_.PlaySound();
        }, this);
        
        //关音乐点击事件
        this.musicOff.node.on(Node.EventType.TOUCH_END, function (event) {
            console.log("TOUCH_END this.musicOff", event.type);
            this_.MusicToogle(false);
        },this);

        //关声音点击事件
        this.soundOff.node.on(Node.EventType.TOUCH_END, function (event) {
            // console.log("TOUCH_END this.soundOff", event.type);
            this_.SoundToogle(false);
        },this);

        //开音乐点击事件
        this.musicOn.node.on(Node.EventType.TOUCH_END, function (event) {
            console.log("TOUCH_END this.musicOn", event.type);
            this_.MusicToogle(true);

        },this);

        //开声音点击事件
        this.soundOn.node.on(Node.EventType.TOUCH_END, function (event) {
            // console.log("TOUCH_END this.soundOn", event.type);
            this_.SoundToogle(true);
        },this);
    }

    public MusicToogle(on:boolean) {
        this.musicOn.node.active=!on;        
        this.musicOff.node.active = on;
        SoundConfig.MusicOn = !on;
        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Click);
    }

    public SoundToogle(on:boolean) {
        this.soundOn.node.active = !on;
        this.soundOff.node.active = on;
        SoundConfig.SoundOn = !on;
        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Click);
    } 

    private lastPlay = 0;
    private PlaySound():void
    {
        let time=new Date().getTime();
        if(time - this.lastPlay > 0.1)
        {
            this.lastPlay = time;
            SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Click);
            
        }
    }

    // update (deltaTime: number) {
    //     
    // }
}
