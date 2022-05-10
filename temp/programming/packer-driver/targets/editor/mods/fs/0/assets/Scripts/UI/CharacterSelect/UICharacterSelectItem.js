System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, Sprite, SystemEventType, MessageBox, MessageBoxType, UIManager, User, LoadResUtil, EventManager, EventType, proto, ListViewItem, UserService, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, CharacterClass, UnLockCharacter, ccclass, property, UICharacterSelectItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBoxType(extras) {
    _reporterNs.report("MessageBoxType", "../Common/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Common/Event/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Common/Event/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterDefine(extras) {
    _reporterNs.report("CharacterDefine", "../../Data/CharacterDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserService(extras) {
    _reporterNs.report("UserService", "../../Services/UserService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICharacterDetail(extras) {
    _reporterNs.report("UICharacterDetail", "../UICharacterDetail/UICharacterDetail", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SystemEventType = _cc.SystemEventType;
    }, function (_unresolved_2) {
      MessageBox = _unresolved_2.MessageBox;
      MessageBoxType = _unresolved_2.MessageBoxType;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
    }, function (_unresolved_4) {
      User = _unresolved_4.User;
    }, function (_unresolved_5) {
      LoadResUtil = _unresolved_5.LoadResUtil;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      EventType = _unresolved_7.EventType;
    }, function (_unresolved_8) {
      proto = _unresolved_8.default;
    }, function (_unresolved_9) {
      ListViewItem = _unresolved_9.ListViewItem;
    }, function (_unresolved_10) {
      UserService = _unresolved_10.UserService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96553Z2q2NKIrwLFfA6/Gju", "UICharacterSelectItem", undefined);

      ({
        CharacterClass,
        UnLockCharacter
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      ({
        ccclass,
        property
      } = _decorator);

      _export("UICharacterSelectItem", UICharacterSelectItem = (_dec = ccclass('UICharacterSelectItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = (_class2 = (_temp = class UICharacterSelectItem extends (_crd && ListViewItem === void 0 ? (_reportPossibleCrUseOfListViewItem({
        error: Error()
      }), ListViewItem) : ListViewItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "img", _descriptor, this);

          _initializerDefineProperty(this, "unlockLabel", _descriptor2, this);

          _initializerDefineProperty(this, "selectedLabel", _descriptor3, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor4, this);

          _defineProperty(this, "define", null);

          _defineProperty(this, "state", 0);

          _defineProperty(this, "tCharacterId", 0);
        }

        //已解锁数据库角色id
        start() {
          this.node.on(SystemEventType.TOUCH_END, this.OnPointerClick, this);
        } // public onSelected(selected:boolean):void{
        //     console.log('selected='+selected)
        // }

        /**
         * 点击响应
         */


        async onClcik() {
          console.log('onClcik');

          if (this.state == 0) {
            //未解锁
            let confirmObj = await (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).Show("确定消耗" + this.define.UnlockCoin + "金币解锁英雄吗？", "解锁英雄", (_crd && MessageBoxType === void 0 ? (_reportPossibleCrUseOfMessageBoxType({
              error: Error()
            }), MessageBoxType) : MessageBoxType).Confirm, "确定", "取消");
            let this_ = this;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.addListener((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UIMessageBox_OnClickYes, function () {
              (_crd && UserService === void 0 ? (_reportPossibleCrUseOfUserService({
                error: Error()
              }), UserService) : UserService).Instance.SendUnLock(this_.define.ID);
            }, confirmObj); //    EventManager.Instance.addListener(EventType.UIMessageBox_OnClickNo,function(){
            //     // console.log('取消解锁')  
            //     TipsManager.Instance.showTips("取消解锁");
            //    },confirmObj);
          } else {
            let uiCharacterDetail = await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.show("UICharacterDetail");
            uiCharacterDetail.SendCharacterDetail((_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
              error: Error()
            }), User) : User).Instance.user.id, this.tCharacterId);
          }
        }

        async SetItemInfo(define) {
          var _Instance$user$charac;

          this.define = define;
          this.nameLabel.string = define.Name;
          this.img.spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).load_local_sprite(define.UpperBodyImg + '/spriteFrame');
          let unLockCharacters = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.unLockCharacters; // console.log('unLockCharacters='+unLockCharacters)

          let isUnlock = false; //是否解锁

          for (let i = 0; i < unLockCharacters.length; i++) {
            let unLockCharacter = unLockCharacters[i];

            if (define.ID == unLockCharacter.cid) {
              //已解锁
              isUnlock = true;
              this.tCharacterId = unLockCharacter.tid;
              break;
            }
          }

          this.unlockLabel.node.active = this.selectedLabel.node.active = false;

          if (((_Instance$user$charac = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.character) === null || _Instance$user$charac === void 0 ? void 0 : _Instance$user$charac.cid) == define.ID) {
            //已选择
            console.log('已选择');
            this.selectedLabel.string = '已选择';
            this.selectedLabel.node.active = true;
            this.unlockLabel.node.active = false;
            this.state = 2;
            console.log('selectedLabel=' + this.selectedLabel.node.active + '，unlockLabel=' + this.unlockLabel.node.active);
          } else if (!isUnlock) {
            //未解锁
            this.unlockLabel.string = '未解锁\n' + define.UnlockCoin;
            this.unlockLabel.node.active = true;
            this.selectedLabel.node.active = false;
            this.state = 0;
          } else {
            this.state = 1;
          }
        }

        onDestroy() {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "img", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "unlockLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectedLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UICharacterSelectItem.js.map