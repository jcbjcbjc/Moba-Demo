// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, director, view, ResolutionPolicy, sys, macro, EditBox, Button } from 'cc';
import { UIManager } from './Common/UIManager';
import { LoadResUtil } from '../Utils/LoadResUtil';
import proto from '../../Proto/proto.js';
import { UIMessageBox } from './Common/UIMessageBox';
import { MessageBox, MessageBoxType } from './Common/MessageBox';
import { EventManager } from './Common/Event/EventManager';
import { EventType } from './Common/Event/EventType';
import { LogUtil } from '../Log/LogUtil';
import { SoundManager } from '../../Sound/SoundManager';
import { SoundDefine } from '../../Sound/SoundDefine';
import { UserService } from '../Services/UserService';
import { User } from '../Models/User';
import { TipsManager } from './TipsManager';
import { RandomUtil } from './Battle/Utils/RandomUtil';
const { Result, UserLoginResponse, NUser } = proto;
const { ccclass, property } = _decorator;

@ccclass('UILogin')
export class UILogin extends Component {

    @property(EditBox)
    public username: EditBox = null as unknown as EditBox;
    @property(EditBox)
    public password: EditBox = null as unknown as EditBox;
    @property(Button)
    public buttonLogin: Button = null as unknown as Button;
    @property(Button)
    public buttonRegister: Button = null as unknown as Button;

    async start() {
        this.username["_impl"]._edTxt.autocomplete = "off";

        SoundManager.Instance.PlayMusic(SoundDefine.Music_Login);
        // this.username.string="123";
        // this.password.string="123";
        //随机数测试
        // RandomUtil.seed=6;
        // console.log('随机数1：'+RandomUtil.limit(0, 1))
        // console.log('随机数2：'+RandomUtil.limit(0, 1))
        // console.log('随机数3：'+RandomUtil.limit(0, 1))
        // RandomUtil.seed=6;
        // console.log('随机数1：'+RandomUtil.limit(0, 1))
        // console.log('随机数2：'+RandomUtil.limit(0, 1))
        // console.log('随机数3：'+RandomUtil.limit(0, 1))

    }

    /**
     * 登录点击
     */
    public OnClickLogin(): void {
        console.log('OnClickLogin')
        if (!this.username.string) {
            MessageBox.Show("请输入账号");
            return;
        }
        if (!this.password.string) {
            MessageBox.Show("请输入密码");
            return;
        }
        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Click);
        // Enter Game
        UserService.Instance.SendLogin(this.username.string, this.password.string);

    }


    /**
     * 点击注册
     */
    public OnClickRegister(): void {
        if (!this.username.string) {
            MessageBox.Show("请输入账号");
            return;
        }
        if (!this.password.string) {
            MessageBox.Show("请输入密码");
            return;
        }
        SoundManager.Instance.PlaySound(SoundDefine.SFX_UI_Click);
        UserService.Instance.SendRegister(this.username.string, this.password.string);
    }

}
