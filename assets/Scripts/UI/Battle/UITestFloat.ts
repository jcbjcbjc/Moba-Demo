
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UITestFloat')
export class UITestFloat extends Component {

    start () {
      this.TestFloat(100);
    }

    TestFloat(count:number){
        let v=0.25;
        for(let i=0; i < count; i++){
            v=Math.sin(v);
            this.node.children[i%28].getComponent(Label).string=i+':'+v;
        }
    }
 
}
