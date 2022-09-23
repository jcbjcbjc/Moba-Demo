
import { _decorator, Component, Node, game, Prefab, instantiate, director, v2, Label, view, math, tween, Vec3 } from 'cc';
import { UITips } from './Common/UITips';
const { ccclass, property } = _decorator;

@ccclass('TipsManager')
export class TipsManager extends Component {

  @property(Prefab)
  public labelPfb: Prefab = null as unknown as Prefab;
  public static Instance: TipsManager = null as unknown as TipsManager;
  private tipsList: Array<Node> = []; //提示节点集合
  private windowSize: math.Size = null as unknown as math.Size;

  private moveTipsList: Array<Node> = [];

  start() {
    game.addPersistRootNode(this.node);
    if (!TipsManager.Instance) {
      TipsManager.Instance = this;
    }
    this.windowSize = view.getCanvasSize();
    console.log('windowSize=' + this.windowSize)
  }

  /**
   * 创建显示节点
   * @param content 
   */
  private createShowNode(content: string): Node {
    try {
      let labelNode = null as unknown as Node;
      if (this.tipsList.length > 3) {
        labelNode = this.tipsList.shift() as Node;
        console.log('缓存取节点 size=' + this.tipsList.length)
      } else {
        labelNode = instantiate(this.labelPfb)
        // this.tipsList.push(labelNode)
      }
      //设置内容
      let uiTips = (labelNode.getComponent(UITips) as UITips);
      uiTips.LabelText = content;
      //设置位置
      uiTips.labelNode.setPosition(0, 0, 0);
      labelNode.setPosition(this.windowSize.width / 2, this.windowSize.height / 2, 0);
      let newNode = director.getScene()?.getChildByUuid(labelNode.uuid);
      if (!newNode) {  //未找到
        console.log('添加到场景' + labelNode.uuid)
        director.getScene()?.addChild(labelNode);
      }
      return labelNode;
    } catch (err) {
      console.log(err)
    }
    return null as unknown as Node;
  }

  update() {
    if (this.moveTipsList.length > 0) {
      try {
        for (let i = 0; i < this.moveTipsList.length; i++) {
          let labelNode = this.moveTipsList[i];
          let uiTips = (labelNode.getComponent(UITips) as UITips);
          let pos = uiTips.labelNode.position;

          // console.log('pos='+pos)
          let y = pos.y + 0.8;
          uiTips.labelNode.setPosition(pos.x, y, pos.z);
          if (y > 25) {  //移除
            console.log('移除id=' + labelNode.uuid)
            director.getScene()?.removeChild(labelNode);
            this.tipsList.push(labelNode);
            this.moveTipsList.splice(i, 1);
          }
        }
      } catch (err) {
        console.log(err)
        this.moveTipsList = [];
      }
    }
  }

  /**
   * 显示提示
   * @param str 
   */
  public showTips(str: string) {
    let labelNode = this.createShowNode(str)
    if (labelNode) {
      this.moveTipsList.push(labelNode);
    }
  }


}
