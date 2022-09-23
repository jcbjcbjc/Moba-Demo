
import { _decorator, Component, Node, Label, Sprite, SpriteFrame, loader, resources, director, Font, Prefab, instantiate } from 'cc';
import { MessageBox } from '../Common/MessageBox';
import { UIManager } from '../Common/UIManager';
import { UISystemConfig } from '../UISystemConfig';
import { User } from '../../Models/User';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { DataManager } from '../../Managers/DataManager';
import { TabView } from '../Common/TabView/TabView';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import { CharacterDefine } from '../../Data/CharacterDefine';
import proto from '../../../Proto/proto.js';
import { UICharacterSelectItem } from './UICharacterSelectItem';
import { ListView } from '../Common/ListView/ListView';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import List from '../Common/ScrollView/List';
const { CharacterClass }=proto;
const { ccclass, property } = _decorator;

/**
 * 英雄选择
 */
@ccclass('UICharacterSelect')
export class UICharacterSelect extends Component {

    @property(List) 
    private characterList = null as unknown as List;
    @property(TabView)
    public tab:TabView=null as unknown as TabView;
    @property(Prefab)
    public itemPrefab:Prefab=null as unknown as Prefab;
    @property(ListView)
    public listMain:ListView=null as unknown as ListView;

    private characterDefineList:Array<CharacterDefine> = [];

    private index:number=-1;  //选择索引
    start () { 
        this.tab.owner=this;
        this.listMain.isAddScene=false;
        EventManager.Instance.addListener(EventType.TabView_OnTabSelect,this.OnTabSelect,this);
        EventManager.Instance.addListener(EventType.UICharacterSelect_list,this.RefreshUI,this);
    }

    /**
     * 刷新UI
     */
    public RefreshUI(){
        console.log('RefreshUI')
        
        this.ClearList();
        //获取对应索引的英雄
       let charactersMap=DataManager.Instance.characters;
       this.characterDefineList=[];
       for(let id in charactersMap){
           if(parseInt(id) > 1000){
               continue;
           }
          let define=charactersMap[id];
          if(this.index==0 || this.index+''==CharacterClass[define.Class]){  
            this.characterDefineList.push(define);
            // console.log('id='+define.ID)
          }
       }
       this.characterList.numItems=this.characterDefineList.length;
       this.characterList.scrollTo(0);
    }

    /**
     * 切换选择
     * @param param 索引
     */
    private OnTabSelect(param:any){
        let index=param[0];
        if(this.index==index){
            return;
        }
        this.index=index;
        console.log('OnTabSelect index='+this.index,this)
       this.RefreshUI();
    }

    private ClearList():void
    {
        this.listMain.RemoveAll();
    }

    
     /**
     * 英雄列表渲染
     * @param node
     * @param index 
     */
    OnCharacterListRender(node: Node, index: number) {
        let uiCharacterSelectItem=node.getComponent(UICharacterSelectItem);
        this.listMain.AddItem(node,uiCharacterSelectItem as ListViewItem);
        uiCharacterSelectItem?.SetItemInfo(this.characterDefineList[index]);
    }


    /**
     * 返回
     */
    back(){
        director.loadScene('UIMain');
    }

    onDestroy(){
        console.log('onDestroy')
        EventManager.Instance.removeAll(this);
    }

}
