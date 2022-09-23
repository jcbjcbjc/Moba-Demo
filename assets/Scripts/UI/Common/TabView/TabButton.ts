import { _decorator, Component, Node, Sprite, SpriteFrame, Button, Label, director, EventHandler } from 'cc';
import { TabView } from './TabView';
import { EventManager } from '../Event/EventManager';
import { LoadResUtil } from '../../../Utils/LoadResUtil';
const { ccclass, property } = _decorator;

@ccclass('TabButton')
export class TabButton extends Component {
    @property(SpriteFrame)
    public activeSpriteFrame:SpriteFrame=null as unknown as SpriteFrame;     //选中状态图片
    private normalSpriteFrame:SpriteFrame=null as unknown as SpriteFrame;  //未选中图片

    public tabView:TabView=null as unknown as TabView;  

    public tabIndex:number = 0;
    public selected:boolean = false;

    private tabSprite:Sprite=null as unknown as Sprite;  //图片对象
    private btn:Button=null as unknown as Button;  //按钮
	// Use this for initialization
	start () {
        this.tabSprite = this.getComponent(Sprite) as Sprite;
        this.btn=this.getComponent(Button) as Button;
        
        this.normalSpriteFrame = this.tabSprite.spriteFrame as SpriteFrame;

        this.getComponent(Button)?.clickEvents.push(EventManager.Instance.createButtonClickEvent(this.node,"TabButton","OnClick"));
	}

    public SelectBtn(select:boolean):void
    {
        if(!this.node.active){
            return;
        }
        console.log('SelectBtn select='+select)
       this.btn.normalSprite= this.tabSprite.spriteFrame = select ? this.activeSpriteFrame : this.normalSpriteFrame;
    }

    public async OnClick():void
    {
        this.tabView.SelectTab(this.tabIndex);
    }
}