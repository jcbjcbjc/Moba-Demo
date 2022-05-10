
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('DelayActiveChild')
export class DelayActiveChild extends Component {

    @property(Node)
    public child:Node;
    @property(Number)
    public delayTime:number;

    onLoad(){
        this.ActiveChild(false);
        let this_  = this;
        setTimeout(function(){
            this_.ActiveChild(true);
        }, this.delayTime)
    }

    start () {
        
    }

    private ActiveChild(active:boolean)
    {
        if (this.child != null && this.child != this.node)
        {
            this.child.active=active;
        }
    }

}
