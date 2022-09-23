import { LogUtil } from "../Log/LogUtil";
import proto from '../../Proto/proto.js';
import { NetClient } from "../Network/NetClient";
import { MessageBox, MessageBoxType } from "../UI/Common/MessageBox";
import { EventManager } from "../UI/Common/Event/EventManager";
import { EventType } from "../UI/Common/Event/EventType";
import { SocketConst } from "../Network/SocketConst";
import { User } from "../Models/User";
import { director } from "cc";
import { SoundManager } from "../../Sound/SoundManager";
import { SoundDefine } from "../../Sound/SoundDefine";
import { ItemManager } from "../Managers/ItemManager";
const { NetMessage, NetMessageRequest, Result, NStatus, StatusNotify, StatusType, StatusAction } = proto;

export class StatusService{
    public static Instance: StatusService = new StatusService();

    public Init() {
        EventManager.Instance.addListener(EventType.OnStatusNotify, this.OnStatusNotify, this)
    }


    private OnStatusNotify(param: any):void{
        let response = param[0] as StatusNotify;
        for(let i=0; i < response.status.length; i++){
            let status=response.status[i] as NStatus;
            this.Notify(status);
        }
    }

    private Notify(status:NStatus):void{
        console.info("StatusNotify:[{0}][{1}]{2}:{3}",status.type, status.action, status.id, status.value);
        if (status.type == StatusType.MONEY){  //金币变更
            if (status.action == StatusAction.ADD)
                User.Instance.AddGold(status.value);
            else if(status.action == StatusAction.DELETE)
                User.Instance.AddGold(-status.value);
        }else if(status.type == StatusType.ITEM){  //道具变更  
            if (status.action == StatusAction.ADD){  //加道具
                ItemManager.Instance.AddItem(status.id,status.value);
            }else if(status.action == StatusAction.DELETE){  //删道具
                ItemManager.Instance.RemoveItem(status.id,status.value);
            }else if(status.action == StatusAction.UPDATE){  //更新道具
                ItemManager.Instance.UpdateBagItemCount(status.id,status.value);
            }
        }
    }

    
}