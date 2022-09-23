
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIGameLoadIn')
export class UIGameLoadIn extends Component {

    @property(Label)
    public msgLabel:Label=null;  //消息

    start () {
        
    }

    public setMsg(msg:string){
      this.msgLabel.string = msg;
    }

    public show(){
      this.node.active = true;
    }

    public hide(){
      this.node.active = false;
    }
  
}
