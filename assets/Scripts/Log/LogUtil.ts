export class LogUtil{
    public static log(message?: any, ...optionalParams: any){
        console.log(message,optionalParams);
   }

   public static error(message?: any, ...optionalParams: any){
       LogUtil.log(message,optionalParams);
   }
}