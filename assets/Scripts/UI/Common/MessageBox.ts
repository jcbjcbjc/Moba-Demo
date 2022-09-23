import { UIMessageBox } from "./UIMessageBox";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { instantiate, Node } from "cc";
import { LogUtil } from "../../Log/LogUtil";

export class MessageBox{
    static cacheObject:any = null;

    public static async Show(message:string, title:string="", type:MessageBoxType = MessageBoxType.Information, btnOK:string = "",  btnCancel:string = ""):UIMessageBox
    {
        LogUtil.log('MessageBox:Show')
        if(!this.cacheObject) 
        {
            this.cacheObject=await LoadResUtil.loadPrefab("UI/Common/UIMessageBox");
        }
        
        let node =instantiate(this.cacheObject) as Node;
        let msgbox = node.getComponent(UIMessageBox) as UIMessageBox;
        msgbox.Init(title, message, type, btnOK, btnCancel);
        return msgbox;
    }
}

export enum MessageBoxType
{
    /// <summary>
    /// Information Dialog with OK button
    /// </summary>
    Information = 1,

    /// <summary>
    /// Confirm Dialog whit OK and Cancel buttons
    /// </summary>
    Confirm = 2,

    /// <summary>
    /// Error Dialog with OK buttons
    /// </summary>
    Error = 3
}