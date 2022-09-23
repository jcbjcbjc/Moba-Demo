import { sys } from "cc";

export class LocalStorageUtil{

    public static readonly privateMessagesKey="privateMessagesKey"; 
    public static readonly allFrameHandlesKey="allFrameHandlesKey"; 

    /**
     * 数据存储
     * @param key
     * @param value 
     */
  public static SetItem(key:string,value:string){
     sys.localStorage.setItem(key, value);
  }

  /**
   * 数据获取
   * @param key 
   */
  public static GetItem(key:string):string{
    let value = sys.localStorage.getItem(key);
    return value;
  }

  /**
   * 数据删除
   * @param key 
   */
  public static RemoveItem(key:string){
     sys.localStorage.removeItem(key);
  }


}