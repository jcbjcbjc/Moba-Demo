import { HashMap } from "../../Utils/HashMap";
import { Node, instantiate, js, director } from "cc";
import { SoundManager } from "../../../Sound/SoundManager";
import { SoundDefine } from "../../../Sound/SoundDefine";
import { LoadResUtil } from "../../Utils/LoadResUtil";
import { UISystemConfig } from "../UISystemConfig";
export class UIElement
{    
    public Resource:string = null as unknown as string;
    public Cache:boolean = null as unknown as boolean;
    public Instance:Node = null as unknown as Node;

    constructor(resource:string,cache:boolean){
        this.Resource=resource;        
        this.Cache=cache;
    }

}
export class UIManager{

    public static Instance:UIManager=new UIManager();

    public UIResource = new HashMap();
    public Init(){
        this.UIResource.put("UISystemConfig", new UIElement("UI/UISystemConfig",false));
        this.UIResource.put("UICharacterDetail", new UIElement("UI/UICharacterDetail",false));
        this.UIResource.put("UIPromote", new UIElement("UI/UIPromote",false));
        this.UIResource.put("UIBag", new UIElement("UI/UIBag",false));
        this.UIResource.put("UIShop", new UIElement("UI/UIShop",false));
        this.UIResource.put("UIPowerRanking", new UIElement("UI/UIPowerRanking",false));
        this.UIResource.put("UITran", new UIElement("UI/UITran",false));
        this.UIResource.put("UIAuction", new UIElement("UI/UIAuction",false));
        this.UIResource.put("UIInvite", new UIElement("UI/UIInvite",false));
        this.UIResource.put("UIFollow", new UIElement("UI/UIFollow",false));
        this.UIResource.put("UIChat", new UIElement("UI/UIChat",false));
        this.UIResource.put("UIMatchWait", new UIElement("UI/UIMatchWait",false));
        
    }

     /// <summary>
    /// Show UI
    /// </summary>
    public async show(UIName:string):any
    {
        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Win_Open);
        let classInstance=js.getClassByName(UIName);

        if (this.UIResource.contains(UIName))
        {
            let info = this.UIResource.get(UIName);
            if (info.Instance)
            {
                director.getScene()?.addChild(info.Instance);
            }
            else
            {
                let prefab= await LoadResUtil.loadPrefab(info.Resource);               
                if (!prefab)
                {
                    return classInstance; 
                }else{
                   info.Instance = instantiate(prefab);
                   director.getScene()?.addChild(info.Instance);
                }
            }
            
            return info.Instance.getComponent(UIName);
        }
        return classInstance;
    }

    public Close(UIName:string):void
    {
        //SoundManager.Instance.PlaySound("ui_close");
        if (this.UIResource.contains(UIName))
        {
            let info = this.UIResource.get(UIName);
            if (info.Cache)
            {
                director.getScene()?.removeChild(info.Instance);
            }
            else
            {
                
                info.Instance.destroy();
                info.Instance = null;
            }
        }
    }

}