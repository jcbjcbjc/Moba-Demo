import { UIWindow } from "../Common/UIWindow";
import { _decorator, Component, Node, Label, Sprite, SpriteFrame, loader, resources, director, Font, Prefab, instantiate, Button } from 'cc';
import { MessageBox } from '../Common/MessageBox';
import { UIManager } from '../Common/UIManager';
import { UISystemConfig } from '../UISystemConfig';
import { User } from '../../Models/User';
import { LoadResUtil } from '../../Utils/LoadResUtil';
import { DataManager } from '../../Managers/DataManager';
import { TabView } from '../Common/TabView/TabView';
import { EventManager } from '../Common/Event/EventManager';
import { EventType } from '../Common/Event/EventType';
import { CharacterDefine } from '../../Data/CharacterDefine';
import proto from '../../../Proto/proto.js';
import { ListView } from '../Common/ListView/ListView';
import { ListViewItem } from '../Common/ListView/ListViewItem';
import { UserService } from "../../Services/UserService";
import { UIPromote } from "./UIPromote";
import { UIBag } from "../Bag/UIBag";
import { UITran } from "../Tran/UITran";
import { CombatPowerRankingManager } from "../../Managers/CombatPowerRankingManager";
import { FollowManager } from "../../Managers/FollowManager";
import { UIChat } from "../Chat/UIChat";
const { CharacterClass, NUser, AttrPromoteType, AttrPromoteInfoResponse, CharacterDetailResponse, Result, FollowResponse } = proto;
const { ccclass, property } = _decorator;

@ccclass('UICharacterDetail')
export class UICharacterDetail extends UIWindow {

    @property(Label)
    public nicknameLabel = null as unknown as Label;
    @property(Sprite)
    public characterSprite = null as unknown as Sprite;
    @property(Label)
    public levelLabel = null as unknown as Label;
    @property(Label)
    public expLabel = null as unknown as Label;
    @property(Label)
    public attLabel = null as unknown as Label;
    @property(Label)
    public attSpotLabel = null as unknown as Label;
    @property(Label)
    public defLabel = null as unknown as Label;
    @property(Label)
    public defSpotLabel = null as unknown as Label;
    @property(Label)
    public hpLabel = null as unknown as Label;
    @property(Label)
    public hpSpotLabel = null as unknown as Label;
    @property(Label)
    public criLabel = null as unknown as Label;
    @property(Label)
    public criSpotLabel = null as unknown as Label;
    @property(Label)
    public resuLabel = null as unknown as Label;
    @property(Label)
    public resuSpotLabel = null as unknown as Label;
    @property(Label)
    public speedLabel = null as unknown as Label;
    @property(Label)
    public speedSpotLabel = null as unknown as Label;
    @property(Label)
    public cdLabel = null as unknown as Label;
    @property(Label)
    public cdSpotLabel = null as unknown as Label;
    @property([Sprite])
    public skillSpriteArr = [];
    @property(Button)
    public attPromoteButton = null as unknown as Button;
    @property(Button)
    public defPromoteButton = null as unknown as Button;
    @property(Button)
    public hpPromoteButton = null as unknown as Button;
    @property(Button)
    public criPromoteButton = null as unknown as Button;
    @property(Button)
    public resuPromoteButton = null as unknown as Button;
    @property(Button)
    public speedPromoteButton = null as unknown as Button;
    @property(Button)
    public cdPromoteButton = null as unknown as Button;
    @property(Button)
    public switchButton = null as unknown as Button;
    @property(Button)
    public bagButton = null as unknown as Button;
    @property(Button)
    public transButton = null as unknown as Button;
    @property(Button)
    public privChatButton = null as unknown as Button;
    @property(Node)
    public myGroup = null as unknown as Node;
    @property(Node)
    public otherGroup = null as unknown as Node;
    @property(Node)
    public cancelFollowButton = null as unknown as Node;
    @property(Node)
    public followButton = null as unknown as Node;

    private userId: number = 0;
    private tCharacterId: number = 0;
    private user: NUser = null as unknown as NUser;

    start() {
        EventManager.Instance.addListener(EventType.OnSwitchCharacter_UI, this.OnSwitchCharacter_UI, this);
        EventManager.Instance.addListener(EventType.OnFollowRes_UI, this.OnFollowRes_UI, this);
        EventManager.Instance.addListener(EventType.OnCharacterDetail_UI, this.OnCharacterDetail_UI, this);
    }


    /**
     * 查看英雄详情
     * @param userId  用户id 
     * @param tCharacterId  角色数据库id
     * @param openMode  打开方式 1、英雄详细打开 2、其它点击
     */
    public SendCharacterDetail(userId: number, tCharacterId: number, openMode: number = 1) {
        console.log('SendCharacterDetail userId=' + userId + '，tCharacterId=' + tCharacterId)
        this.userId = userId;
        this.tCharacterId = tCharacterId;
        UserService.Instance.SendCharacterDetail(this.userId, this.tCharacterId);
        if (this.userId == User.Instance.user.id) {
            this.myGroup.active = openMode == 1 ? true : false;
            this.otherGroup.active = false;
        } else {
            this.myGroup.active = false;
            this.otherGroup.active = true;
        }
        if (this.userId == User.Instance.user.id && this.tCharacterId == User.Instance.user.character.tid) {
            this.switchButton.node.active = false;
        } else {
            this.switchButton.node.active = true;
        }
    }

    private async OnCharacterDetail_UI(param: any) {
        console.log('OnCharacterDetail_UI')
        let response = param[0] as CharacterDetailResponse;
        let user = response.user as any;
        this.user = user;
        if (response.result == Result.Failed) {
            this.Close();
            return;
        }
        this.nicknameLabel.string = '昵称：' + user.nickname;
        this.characterSprite.spriteFrame = await LoadResUtil.load_local_sprite(DataManager.Instance.characters[user.character?.cid].Avatar + '/spriteFrame');
        this.levelLabel.string = '等级：' + user.character?.level;
        this.expLabel.string = '经验：' + user.character?.exp;
        this.attLabel.string = '攻击力：' + user.character?.att;
        this.attSpotLabel.string = '+' + user.character?.attSpot;
        this.defLabel.string = '防御力：' + user.character?.def;
        this.defSpotLabel.string = '+' + user.character?.defSpot;
        this.hpLabel.string = '血量：' + user.character?.hp;
        this.hpSpotLabel.string = '+' + user.character?.hpSpot;
        this.criLabel.string = '暴击率：' + user.character?.cri;
        this.criSpotLabel.string = '+' + user.character?.criSpot;
        this.resuLabel.string = '复活率：' + user.character?.resu;
        this.resuSpotLabel.string = '+' + user.character?.resuSpot;
        this.speedLabel.string = '速度：提升' + user.character?.speed + "%";
        this.speedSpotLabel.string = '+' + user.character?.speedSpot;
        this.cdLabel.string = 'cd：降低' + user.character?.cd + "%";
        this.cdSpotLabel.string = '+' + user.character?.cdSpot;

        this.cancelFollowButton.active = user.isFollow;
        this.followButton.active = !user.isFollow;

        let skillMap = DataManager.Instance.skills[user.character?.cid];
        let index = 0;
        for (var skillId in skillMap) {
            let define = skillMap[skillId];
            this.skillSpriteArr[index].spriteFrame = await LoadResUtil.load_local_sprite(define.Icon + '/spriteFrame');
            index++;
        }
    }

    /**
     * 切换英雄
     */
    private SwitchCharacter() {
        UserService.Instance.SendSwitchCharacter(this.tCharacterId);
    }

    /**
     * 切换英雄成功响应
     */
    private OnSwitchCharacter_UI() {
        this.Close();
    }

    /**
     * 打开提升界面
     */
    public async OpenUIPromote(param: any, customEventData: any) {
        console.log(customEventData)
        let uiPromote = await UIManager.Instance.show("UIPromote") as UIPromote;
        let spot: number = 0;
        if (customEventData == AttrPromoteType.Att) {
            spot = this.user.character?.attSpot as number;
        } else if (customEventData == AttrPromoteType.Def) {
            spot = this.user.character?.defSpot as number;
        } else if (customEventData == AttrPromoteType.Hp) {
            spot = this.user.character?.hpSpot as number;
        } else if (customEventData == AttrPromoteType.Cri) {
            spot = this.user.character?.criSpot as number;
        } else if (customEventData == AttrPromoteType.Resu) {
            spot = this.user.character?.resuSpot as number;
        } else if (customEventData == AttrPromoteType.Speed) {
            spot = this.user.character?.speedSpot as number;
        } else if (customEventData == AttrPromoteType.Cd) {
            spot = this.user.character?.cdSpot as number;
        }
        uiPromote.SetPromoteDetail(this.tCharacterId, customEventData, spot, this);
    }

    /**
     * 更新属性提升
     */
    public UpdateAttrPromote(attrPromoteType: AttrPromoteType, attrPromoteInfoResponse: AttrPromoteInfoResponse) {
        if (attrPromoteType == AttrPromoteType.Att) {
            this.attLabel.string = '攻击力：' + attrPromoteInfoResponse.attrValue;
            this.attSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.att = attrPromoteInfoResponse.attrValue;
            this.user.character.attSpot = attrPromoteInfoResponse.spot;
        } else if (attrPromoteType == AttrPromoteType.Def) {
            this.defLabel.string = '防御力：' + attrPromoteInfoResponse.attrValue;
            this.defSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.def = attrPromoteInfoResponse.attrValue;
            this.user.character.defSpot = attrPromoteInfoResponse.spot;
        } else if (attrPromoteType == AttrPromoteType.Hp) {
            this.hpLabel.string = '血量：' + attrPromoteInfoResponse.attrValue;
            this.hpSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.hp = attrPromoteInfoResponse.attrValue;
            this.user.character.hpSpot = attrPromoteInfoResponse.spot;
        } else if (attrPromoteType == AttrPromoteType.Cri) {
            this.criLabel.string = '暴击率：' + attrPromoteInfoResponse.attrValue;
            this.criSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.cri = attrPromoteInfoResponse.attrValue;
            this.user.character.criSpot = attrPromoteInfoResponse.spot;
        } else if (attrPromoteType == AttrPromoteType.Resu) {
            this.resuLabel.string = '复活率：' + attrPromoteInfoResponse.attrValue;
            this.resuSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.resu = attrPromoteInfoResponse.attrValue;
            this.user.character.resuSpot = attrPromoteInfoResponse.spot;
        } else if (attrPromoteType == AttrPromoteType.Speed) {
            this.speedLabel.string = '速度：提升' + attrPromoteInfoResponse.attrValue + '%';
            this.speedSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.speed = attrPromoteInfoResponse.attrValue;
            this.user.character.speedSpot = attrPromoteInfoResponse.spot;
        } else if (attrPromoteType == AttrPromoteType.Cd) {
            this.cdLabel.string = 'cd：降低' + attrPromoteInfoResponse.attrValue + '%';
            this.cdSpotLabel.string = '+' + attrPromoteInfoResponse.spot;
            this.user.character.cd = attrPromoteInfoResponse.attrValue;
            this.user.character.cdSpot = attrPromoteInfoResponse.spot;
        }
    }

    public async OnClickBag() {
        let uiBag = await UIManager.Instance.show("UIBag") as UIBag;
        uiBag.SetUpOpenMode(1);
    }

    public async OnClickTran() {
        let uiTran = await UIManager.Instance.show("UITran") as UITran;
        uiTran.SetUserLoadList(this.userId);
    }

    /**
     * 点击关注
     */
    public async OnClickFollow() {
        FollowManager.Instance.SendFollow(this.user.id, true);
    }

    /**
     * 点击取消关注
     */
    public async OnClickCancelFollow() {
        FollowManager.Instance.SendFollow(this.user.id, false);
    }

    /**
     * 关注/取消关注响应
     */
    private OnFollowRes_UI(param: any) {
        let response = param[0] as FollowResponse;
        this.cancelFollowButton.active = FollowManager.Instance.isFollow;
        this.followButton.active = !FollowManager.Instance.isFollow;
    }

    /**
     * 点击私聊
     */
    public async OnClickPrivateChat() {
        let uiChat = await UIManager.Instance.show("UIChat") as UIChat;
        uiChat.ChangeChatChannel(1, this.user);
    }

    onDestroy() {
        EventManager.Instance.removeAll(this);
    }
}