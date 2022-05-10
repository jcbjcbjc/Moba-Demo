import { SoundManager } from "./SoundManager";
import { sys } from "cc";

export class SoundConfig{
    //音乐开关
    public static get MusicOn():boolean{
        let value=sys.localStorage.getItem("Music");
        if(!value && value!=0){
            value=1;
        }
        return value == 1;
    }
    public static set MusicOn(value:boolean) {
        sys.localStorage.setItem("Music", value?1:0);
        SoundManager.Instance.MusicOn = value;
    }

    //音效开关
    public static get SoundOn():boolean{
        let value=sys.localStorage.getItem("Sound");
        if(!value && value!=0){
            value=1;
        }
        return value == 1;
    }     
    public static set SoundOn(value:boolean) {
        sys.localStorage.setItem("Sound", value?1:0);
        SoundManager.Instance.SoundOn = value;
    }

   //音乐大小设置
    public static get MusicVolume():number {
        let value=sys.localStorage.getItem("MusicVolume");
        if(!value && value!=0){
            value=1;
        }
        return value;
    }
    public static set MusicVolume(value:number) {
        sys.localStorage.setItem("MusicVolume", value);
        SoundManager.Instance.MusicVolume = value;
    }

    //音量大小设置
    public static get SoundVolume():number{
        let value=sys.localStorage.getItem("SoundVolume");
        if(!value && value!=0){
            value=1;
        }
        return value;
    }
    public static set SoundVolume(value:number){
        sys.localStorage.setItem("SoundVolume", value);
        SoundManager.Instance.SoundVolume = value;
    }
}