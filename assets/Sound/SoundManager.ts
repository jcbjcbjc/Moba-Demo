import { _decorator,AudioSource, Component, CCClass, AudioClip, url, game } from "cc";
import { LoadResUtil } from "../Scripts/Utils/LoadResUtil";
import { LogUtil } from "../Scripts/Log/LogUtil";
import { SoundConfig } from "./SoundConfig";
const { ccclass, property } = _decorator;

@ccclass('SoundManager')
export class SoundManager extends Component{
    public static Instance:SoundManager=null as unknown as SoundManager;
    private audioSource:AudioSource=null as unknown as AudioSource;
    private MusicPath:string = "Music/";
    private SoundPath:string = "Sound/";

    onLoad(){
        LogUtil.log('SoundManager onLoad')
        if(!SoundManager.Instance){
            SoundManager.Instance=this;
            game.addPersistRootNode(this.node);
        }
        this.audioSource = this.getComponent(AudioSource) as AudioSource;
        // console.log(this.audioSource)
        this.MusicVolume = SoundConfig.MusicVolume;
        this.SoundVolume = SoundConfig.SoundVolume;
        this.MusicOn = SoundConfig.MusicOn;
        this.SoundOn = SoundConfig.SoundOn;
    }
    //音乐开关
    private musicOn:boolean=null as unknown as boolean;
    public get MusicOn():boolean{
        return this.musicOn;
    }
    public set MusicOn(value:boolean){
        this.musicOn=value;
        this.MusicMute(!this.musicOn);
    }

    //音效开关
    private soundOn:boolean=null as unknown as boolean;
    public get SoundOn():boolean{
        return this.soundOn;
    }
    public set SoundOn(value:boolean){
        this.soundOn = value;
        this.SoundMute(!this.soundOn);
    }

    //音乐声音控制
    public musicVolume:number=null as unknown as number;
    public get MusicVolume():number{
        return this.musicVolume;
    }
    public set MusicVolume(value:number){
        if (this.musicVolume != value){
            this.musicVolume = value;
            if (this.musicOn) this.SetVolume(this.musicVolume);
        }
    }

    //音效声音控制
    public soundVolume:number=null as unknown as number;
    public get SoundVolume():number{
        return this.soundVolume;
    }
    public set SoundVolume(value:number){
        if (this.soundVolume != value)
        {
            this.soundVolume = value;
            // if (this.soundOn) this.SetVolume(this.soundVolume);
        }
    }

    public async PlayMusic(name:string){
        let clip=await LoadResUtil.load_local_AudioClip(this.MusicPath + name);
        if(clip==null){
            LogUtil.error("PlayMusic not existed name:",name);
            return;
        }
        if(this.audioSource.playing){
            this.audioSource.stop();
        }
        this.audioSource.clip=clip;
        this.audioSource.play();
    }

    public async PlaySound(name:string){
        let clip=await LoadResUtil.load_local_AudioClip(this.SoundPath + name);
        if(clip==null){
            LogUtil.error("PlaySound not existed name:",name);
            return;
        }
        if(this.soundOn){            
            this.audioSource.playOneShot(clip,this.soundVolume);
        }
    }

    private SetVolume(value:number):void{
        this.audioSource.volume=value;
    }

    private MusicMute(mute:boolean):void{
        this.SetVolume(mute ? 0 : this.musicVolume);
    }

    private SoundMute(mute:boolean):void{
        // this.SetVolume(mute ? 0 : this.soundVolume);
    }


}