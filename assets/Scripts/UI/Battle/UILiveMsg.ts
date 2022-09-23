import { _decorator, Component, Node, Label, RichText } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('UILiveMsg')
export class UILiveMsg extends Component {

    @property(RichText)
    public richText:RichText=null;  

    /**
     * 设置标签文字
     * @param str 
     */
    public set Text(str:string){
        this.richText.getComponent(RichText).string=str;
    }
}
