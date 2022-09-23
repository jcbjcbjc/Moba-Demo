import { _decorator, Component, Node, Sprite, SpriteFrame, Button, Label, director, EventHandler } from 'cc';
import { TabButton } from './TabButton';
import { EventManager } from '../Event/EventManager';
import { EventType } from '../Event/EventType';
import { UICharacterSelect } from '../../CharacterSelect/UICharacterSelect';
const { ccclass, property } = _decorator;

@ccclass('TabView')
export class TabView extends Component {

    @property([TabButton])
    public tabButtons:Array<TabButton>=[] as unknown as Array<TabButton>;

    @property([Node])
    public tabPages:Array<Node>=[] as unknown as Array<Node>;

    public owner=null as unknown as any;

    public index:number = -1;
    public defaultIndex:number = 0;

    start () {
        for (let i = 0; i < this.tabButtons.length; i++)
        {
            this.tabButtons[i].tabView = this;
            this.tabButtons[i].tabIndex = i;
        }
        console.log('SelectTab(0)')
        let this_=this;
      setTimeout(function(){
        this_.SelectTab(this_.defaultIndex);
      },500)  
    }

    public SelectTab(index:number):void
    {
        if (this.index != index)
        {
            this.index = index;
            // console.log('tabButtons.length='+this.tabButtons.length)
            for (let i = 0; i < this.tabButtons.length; i++)
            {
                // console.log(this.tabButtons[i])
                this.tabButtons[i].SelectBtn(i == index);
                if (this.tabPages.length > 0)
                {
                    this.tabPages[i].active=(i == index);
                }
            }
            console.log('dispatchObj index='+index)
           if(this.owner){ 
              EventManager.Instance.dispatchObj(EventType.TabView_OnTabSelect,this.owner,index);
           }
        }
    }
}