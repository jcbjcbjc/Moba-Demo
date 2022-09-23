import { _decorator, Component, Node, Label, Sprite, SpriteFrame, loader, resources, director, Font, Prefab, instantiate, SystemEventType } from 'cc';
import { ListView } from './ListView';
const { ccclass, property } = _decorator;

@ccclass('ListViewItem')
export class ListViewItem extends Component{

    onLoad (){
        // console.log('ListViewItem onLoad'+this.node.uuid)
    }

    private selected:boolean=false;
    public get Selected():boolean{
        return this.selected; 
    }
    public set Selected(value){
        this.selected = value;
        this.onSelected(this.selected);
    }
    

    public onSelected(selected:boolean):void
    {
    }

    public onClcik():void{

    }

    public owner:ListView=null as unknown as ListView;

    public OnPointerClick():void
    {
        console.log('OnPointerClick selected='+this.selected)
        this.onClcik();
        // if (!this.selected)
        // {
            this.Selected = true;
        // }
           if (this.owner && this.owner.SelectedItem != this) {
               this.owner.SelectedItem = this;
           }
    }
    
}
