import { SpriteFrame, loader, AudioClip, resources } from "cc";

export class LoadResUtil{
    /**
     * 加载prefab
     * @param load_url 
     */
    public static loadPrefab(load_url:string) : Promise<any>{
      return new Promise<string>((resolve, reject) => {          
        loader.loadRes(load_url, (err, loadedResource) => {
            if(err){
                reject(err);
            }else{
                resolve(loadedResource);
            }
        });
      });
    }

    /**
     * 加载文本文件
     * @param json_name 
     */
    public static loadConfig(path): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            cc.loader.loadRes(path, (err, data: cc.JsonAsset) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data.text);
                }
            });
        });
    }

     /**
     * 加载本地图片
     * @param load_url  
     */
    public static load_local_sprite(load_url:string): Promise<any> {
       return new Promise<any>((resolve, reject) => {
        resources.load(load_url,SpriteFrame, function(err,spriteFrame){
            if(err){
                reject(err);
            }else{
                resolve(spriteFrame);
            }
            
        });
      });
    }

    /**
     * 加载音效资源
     * @param load_url 
     */
    public static load_local_AudioClip(load_url:string): Promise<AudioClip> {
        return new Promise<AudioClip>((resolve, reject) => {
         cc.loader.loadRes(load_url,AudioClip, function(err,audioClip:AudioClip){
             if(err){
                 reject(err);
             }else{
                 resolve(audioClip);
             }
         });
       });
     }
}