
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UITips')
export class UITips extends Component {
   
    @property(Node)
    public labelNode:Node=null as unknown as Node;

    start () {
    }

    /**
     * 设置标签文字
     * @param str 
     */
    public set LabelText(str:string){
        (this.labelNode.getComponent(Label) as Label).string=str;
    }

}
