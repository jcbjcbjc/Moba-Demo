
import { _decorator, Component, Node, instantiate, systemEvent, SystemEvent, Vec2, Vec3, game, v3, Label, SpriteFrame, Sprite, SystemEventType, RichText, Prefab, view, math, director, UITransform } from 'cc';
import { EventManager } from '../Common/Event/EventManager';
import proto from '../../../Proto/Battle/proto.js';
import proto2 from '../../../Proto/proto.js';
import { OptType } from './enums/OptType';
import { BattleService } from '../../Services/BattleService';
import { NetConfig } from '../../Network/NetConfig';
import { EventType } from '../Common/Event/EventType';
import { LogUtil } from '../../Log/LogUtil';
import { HashMap } from '../../Utils/HashMap';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { User } from '../../Models/User';
import { DataManager } from '../../Managers/DataManager';
import { CreatureManager } from './Managers/CreatureManager';
import { TeamType2 } from './enums/TeamType2';
import { MathUtil } from '../../Utils/MathUtil';
import { BattleManager } from './Managers/BattleManager';
import { NetClientBattle } from '../../Network/Battle/NetClientBattle';
import { RoomService } from '../../Services/RoomService';
import { LocalStorageUtil } from '../../Utils/LocalStorageUtil';
import { BattleGlobal } from './Utils/BattleGlobal';
import { BattleMode } from './enums/BattleMode';
import { ChatManager } from '../../Managers/ChatManager';
import { UILiveMsg } from './UILiveMsg';
import { RandomUtil } from "./Utils/RandomUtil";
const { ccclass, property } = _decorator;
const {FrameHandle,FrameHandleResponse,RepairFrameResponse }  = proto;
const {TeamType, HeartBeatResponse,ChatChannel }  = proto2;

@ccclass('UIBattle')
export class UIBattle extends Component {

    @property(Node)
    public GameOverNode:Node=null;   //游戏结束节点
    @property([Node])
    public controlActiveNodeArr=[];   //控制显示、隐藏节点
    @property(Label)
    public FenSiCountLabel:Label=null;   //粉丝数量
    @property([SpriteFrame]) 
    public networkSpriteFrameArr:Array<SpriteFrame>=[];    //网络图片集合
    @property(Sprite) 
    public networkSprite:Sprite=null;    //网络图片
    @property(Label)
    public networkLabel:Label=null;  //网络文本
    @property(Label)
    public fpsLabel:Label=null;  //fps文本
    @property(Node)
    public ChatUI:Node=null;  //对局聊天ui
    @property(Node)
    public LiveChatUI:Node=null;  //观看直播聊天ui
    @property(Sprite) 
    public chatBtnSprite:Sprite=null;    //聊天按钮
    @property(RichText)
    public myChatLastRichText:RichText=null;  //我方最后一次消息
    @property(Prefab)
    public uiLiveMsg:Prefab=null;
    
    @property(Label)
    public handleFrameLabel:Label=null;  //已经处理的帧


    private startMoveVec2 = new Vec2();   //开始移动点位置
    private currentMoveVec2 = new Vec2();   //当前移动点位置
    private isMoveFlag = false;  //是否移动
    private moveTime:number = 0;  //移动时间
    private isEndFlag = false;  //是否结束点击
    private lastUpdateTime:number = 0;  //最后帧更新时间
    private frameJgMs:number = 0;  //两帧间隔毫秒数
    private liveMsgPoolList:Array<Node>=[]; //直播消息缓存池
    private windowSize:math.Size=null as unknown as math.Size;
    private moveLiveMsgList:Array<Node>=[];    //移动直播消息集合

    start () {
        this.windowSize = view.getCanvasSize();

        this.GameOverNode.active=false;
        
        if(BattleGlobal.battleMode == BattleMode.Battle){    //对局模式
          this.FenSiCountLabel.node.active=true;
          this.networkSprite.node.active=true;
          this.networkLabel.node.active=true;
          this.fpsLabel.node.active=true;
        }else if(BattleGlobal.battleMode == BattleMode.Live){  //观看直播模式
          this.FenSiCountLabel.node.active=false;        
          this.networkSprite.node.active=false; 
          this.networkLabel.node.active=false; 
          this.fpsLabel.node.active=false; 
        } 

        for(let i=0; i < this.controlActiveNodeArr.length; i++){
            let node = this.controlActiveNodeArr[i] as Node;
            if(BattleGlobal.battleMode == BattleMode.Battle){    //对局模式
                node.active=true;
            }else if(BattleGlobal.battleMode == BattleMode.Live){  //观看直播模式
                node.active=false;            
            } 
        }
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.OnTouchStart, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.OnTouchMove, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.OnTouchEnd, this);
        EventManager.Instance.addListener(EventType.OnHeartBeat_UI,this.OnHeartBeatUI,this);
 
        //我方消息与粉丝消息
        this.ChatUI.active=false;
        this.LiveChatUI.active=false;
        this.chatBtnSprite.node.on(SystemEventType.TOUCH_END,this.OnChatClick,this);

        //更新我方最后一次消息
        EventManager.Instance.addListener(EventType.OnChat_UI, this.OnChat_UI, this);
        this.updateMyChatLastRichText();

    }

    /**
     * 收到消息更新
     * @param param 
     */
    private OnChat_UI(param:any){
        let channel = param[0] as ChatChannel;
        if(channel==ChatChannel.RoomChat){  //房间
           this.updateMyChatLastRichText();
           this.updateLiveChatLastMsg();
        } 
    }

    /**
     * 更新我方最后一次消息
     */
    private updateMyChatLastRichText(){
        let len = ChatManager.Instance.gameMessages.length;
        if(len > 0){
          let chatMessage = ChatManager.Instance.gameMessages[len - 1];
          this.myChatLastRichText.string=BattleGlobal.getBattleMsgContent(chatMessage, 50, 0);
        }
    }

    /**
     * 更新直播最后一次消息
     */
    private updateLiveChatLastMsg(){
        let len = ChatManager.Instance.liveMessages.length;
        if(len > 0){
          let chatMessage = ChatManager.Instance.liveMessages[len - 1];
          let liveMsgStr = BattleGlobal.getBattleMsgContent(chatMessage, 50, 1);
          let node:Node=null;
          if(this.liveMsgPoolList.length > 0){
            node=this.liveMsgPoolList.shift()
            console.log('缓存取，剩余len='+this.liveMsgPoolList.length)
          }else{
            node = instantiate(this.uiLiveMsg) 
          }
          //设置内容
          let uiLiveMsg = node.getComponent(UILiveMsg);
          uiLiveMsg.Text = liveMsgStr;
          let heightRange = this.windowSize.height/2-30;  //高度正负范围随机
          uiLiveMsg.richText.node.setPosition(this.windowSize.width/2, RandomUtil.limit2(0, heightRange) , 0);
          console.log('直播消息 pos='+uiLiveMsg.richText.node.position)
          director.getScene()?.addChild(node);
          this.moveLiveMsgList.push(node);
        }
    }

    /**
     * 点击聊天
     */
    private OnChatClick(){ 
        if(BattleGlobal.battleMode == BattleMode.Battle){    //对局模式
            this.ChatUI.active = !this.ChatUI.active;
        }else if(BattleGlobal.battleMode == BattleMode.Live){  //观看直播模式
            this.LiveChatUI.active = !this.LiveChatUI.active;
        }
    }

    /**
     * 更新间隔帧时间
     * @param frameTime 间隔帧时间
     */
    public updateFrameTime(frameTime:number){
        this.networkLabel.string = frameTime+'ms';
        //设置图标
        let index=0;
        if(frameTime < 80){
            index=5;
        }else if(frameTime >= 80 && frameTime < 90){
            index=4;
        }else if(frameTime >= 90 && frameTime < 100){
            index=3;
        }else if(frameTime >= 100 && frameTime < 110){
            index=2;
        }else if(frameTime >= 110 && frameTime < 120){
            index=1;
        }else if(frameTime >= 120){
            index=0;
        }
        this.networkSprite.spriteFrame = this.networkSpriteFrameArr[index];
        this.fpsLabel.string = 'FPS：' +  Math.floor(1000 / this.frameJgMs);
        console.log('frameJgMs='+this.frameJgMs)
    }
      
    /**
     * 心跳响应
     */
    private OnHeartBeatUI(param: any){
        let response = param[0] as HeartBeatResponse;
        this.FenSiCountLabel.string='粉丝数：'+response.liveFenSiCount;
    }

    /**
     * 触摸开始
     */
    private OnTouchStart(e){
        e.getStartLocation(this.startMoveVec2);  //开始移动点

    }

    /**
     * 触摸移动
     */
    private OnTouchMove(e){
       if(BattleGlobal.battleMode != BattleMode.Live){  //非观看直播模式
         return;
       }
       e.getLocation(this.currentMoveVec2);   //当前移动点

       this.isMoveFlag = true;  //移动了
       BattleManager.Instance.isLookAtCharacterFlag = false;

       this.moveTime = new Date().getTime();

       //控制按钮移动位置
    //    let len=MathUtil.GetDistance(this.startMoveVec2.x, this.startMoveVec2.y, this.currentMoveVec2.x, this.currentMoveVec2.y);
       let angle = Math.round(MathUtil.GetAngle(this.currentMoveVec2.y-this.startMoveVec2.y, this.currentMoveVec2.x-this.startMoveVec2.x));
       let teamType2 = BattleManager.Instance.currentCharacter.teamType2;
       if(teamType2 == TeamType2.Red){  //红队
        angle = 180 - angle;
       }else{
        angle = -angle;
       }
       let rockerSpeedVo = DataManager.Instance.rockerSpeeds[teamType2==TeamType2.Blue ? angle + 180 : Math.abs(angle)];
       if(!rockerSpeedVo){
          console.log('rockerSpeedVo不存在!'+'==='+angle +'=='+(teamType2==TeamType2.Blue ? angle + 180 : Math.abs(angle)))
          return;
       }
       let cameraPos = BattleManager.Instance.camera.worldPosition;
       let speed:number = 2.5;
       let vx=cameraPos.x+((teamType2==TeamType2.Blue ? -1 : 1)*(rockerSpeedVo.x*0.001)*speed);
       let vz=cameraPos.z+((teamType2==TeamType2.Blue ? -1 : 1)*(rockerSpeedVo.y*0.001)*speed);
       BattleManager.Instance.camera.setWorldPosition(vx, cameraPos.y, vz);

       this.startMoveVec2.set(this.currentMoveVec2.x, this.currentMoveVec2.y);
    }

    /**
     * 触摸结束
     */
    private OnTouchEnd(e){
        this.isEndFlag = true;
    }

    update(){
        this.handleFrameLabel.string = '当前逻辑帧数：'+BattleManager.Instance.handleFrameId;
        //计算两帧间隔毫秒数
        let currentTime =  new Date().getTime();
        if(this.lastUpdateTime != 0){
           this.frameJgMs = currentTime - this.lastUpdateTime;
        }
        this.lastUpdateTime = currentTime;

        //摄像机结束移动后5秒跟随主角
        if(this.isEndFlag && this.isMoveFlag){
          let jgTime = (new Date().getTime() - this.moveTime) / 1000;  //距离最后一次移动间隔时间(s)
          if(jgTime >= 5){  //滑动到角色
            this.isEndFlag = false;
            this.isMoveFlag = false;
            BattleManager.Instance.isLookAtCharacterFlag = true;
          }
        }

        //移动直播消息
        if(this.moveLiveMsgList.length > 0){
            for(let i=0;i<this.moveLiveMsgList.length;i++){
               let node = this.moveLiveMsgList[i];
               let richTextNode = node.getComponent(UILiveMsg).richText.node;
               let richTextWidth = richTextNode.getComponent(UITransform).contentSize.width;  //文字宽

               let pos = richTextNode.position;
               let x = pos.x - 1;
               richTextNode.setPosition(x, pos.y, pos.z);
               if(x < -(this.windowSize.width / 2)-richTextWidth){  //超出屏幕
                console.log('超出屏幕移除')
                 director.getScene()?.removeChild(node);
                 this.liveMsgPoolList.push(node);  //回收对象池
                 this.moveLiveMsgList.splice(i, 1); 
               }
            }
        }
    }

    onDestroy(){
        EventManager.Instance.removeAll(this);
    }

    /**
     * 点击游戏结束
     */
    public OnClickGameOver(){
        BattleService.Instance.SendGameOver();
        RoomService.Instance.SendGameOver2();
        this.GameOverNode.active=true;
    }

    /**
     * 打印结果
     */
    public OnClickPrintResult(){
        let allFrameHandlesStr = LocalStorageUtil.GetItem(LocalStorageUtil.allFrameHandlesKey);
        console.log(allFrameHandlesStr)
    }
}
