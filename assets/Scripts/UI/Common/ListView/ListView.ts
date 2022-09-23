import { _decorator, Component, Node, Label, Sprite, SpriteFrame, loader, resources, director, Font, Prefab, instantiate } from 'cc';
import { ListViewItem } from './ListViewItem';
import { EventManager } from '../Event/EventManager';
import { EventType } from '../Event/EventType';
const { ccclass, property } = _decorator;

@ccclass('ListView')
export class ListView extends Component{
    
    private items:Array<ListViewItem>=[] ;
    public owner:any;
    public isAddScene:boolean=true; //是否添加场景

    private selectedItem:ListViewItem = null as unknown as ListViewItem;
    public get SelectedItem():ListViewItem
    {
         return this.selectedItem; 
        
    }

    public set SelectedItem(value:ListViewItem){
          if (this.selectedItem && this.selectedItem != value){
              this.selectedItem.Selected = false;
          }

            this.selectedItem = value;
            if(this.owner){
               EventManager.Instance.dispatchObj(EventType.ListView_OnItemSelected,this.owner,value);
            }
    }

    public  AddItem(node:Node,item:ListViewItem):void
    {
        item.owner = this;
        //判断存在则退出
        for(let i=0;i<this.items.length;i++){
            let listViewItem = this.items[i];
            if(listViewItem.uuid == item.uuid){
                listViewItem.Selected=false;  
                console.log('AddItem 已存在项')
                return;
            }            
        }

        this.items.push(item);
        if(this.isAddScene){
          this.node.addChild(node);
        }
    }

    public RemoveAll():void
    {
      if(this.isAddScene){
        this.node.removeAllChildren();
        for(let i=0;i<this.items.length;i++){
           let listViewItem =this.items[i];
           listViewItem.destroy();
        }
      }
        this.items=[];
       
    }

    /// <summary>
    /// 清除所有的选中状态
    /// </summary>
    public ClearAllSelect():void
    {
        for(let i=0;i<this.items.length;i++){
            let listViewItem =this.items[i];
           if(listViewItem.Selected){
            listViewItem.Selected=false;
           }
         }
    }

    public removeListener(){
        EventManager.Instance.removeAll(this);
    }
}
