import { UIMessageBox } from "./UIMessageBox";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { instantiate, Node } from "cc";
import { LogUtil } from "../../Log/LogUtil";
import { UIInputBox } from "./UIInputBox";

export class InputBox{
    static cacheObject:any = null;

    public static async Show(message:string, title:string="", btnOK:string = "",  btnCancel:string = "",  emptyTips:string = "内容不能为空"):UIInputBox
    {
        LogUtil.log('InputBox:Show')
        if(!this.cacheObject) 
        {
            this.cacheObject=await LoadResUtil.loadPrefab("UI/Common/UIInputBox");
        }
        
        let node =instantiate(this.cacheObject) as Node;
        let msgbox = node.getComponent(UIInputBox) as UIInputBox;
        msgbox.Init(title, message,  btnOK, btnCancel, emptyTips);
        return msgbox;
    }
}
