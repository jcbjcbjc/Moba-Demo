System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Label, Sprite, SystemEventType, Color, UIManager, LoadResUtil, DataManager, proto, ListViewItem, RoomService, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, CharacterClass, UnLockCharacter, NUser, TeamType, ccclass, property, UIFollowLiveItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItem(extras) {
    _reporterNs.report("ListViewItem", "../Common/ListView/ListViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICharacterDetail(extras) {
    _reporterNs.report("UICharacterDetail", "../UICharacterDetail/UICharacterDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomService(extras) {
    _reporterNs.report("RoomService", "../../Services/RoomService", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SystemEventType = _cc.SystemEventType;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      UIManager = _unresolved_2.UIManager;
    }, function (_unresolved_3) {
      LoadResUtil = _unresolved_3.LoadResUtil;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      proto = _unresolved_5.default;
    }, function (_unresolved_6) {
      ListViewItem = _unresolved_6.ListViewItem;
    }, function (_unresolved_7) {
      RoomService = _unresolved_7.RoomService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "efc90ssvwBKIrvVgD7QE5dT", "UIFollowLiveItem", undefined);

      ({
        CharacterClass,
        UnLockCharacter,
        NUser,
        TeamType
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);
      ({
        ccclass,
        property
      } = _decorator);

      _export("UIFollowLiveItem", UIFollowLiveItem = (_dec = ccclass('UIFollowLiveItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec(_class = (_class2 = (_temp = class UIFollowLiveItem extends (_crd && ListViewItem === void 0 ? (_reportPossibleCrUseOfListViewItem({
        error: Error()
      }), ListViewItem) : ListViewItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "img", _descriptor, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor2, this);

          _initializerDefineProperty(this, "blueBiFenLabel", _descriptor3, this);

          _initializerDefineProperty(this, "redBiFenLabel", _descriptor4, this);

          _initializerDefineProperty(this, "nickNameLabel", _descriptor5, this);

          _initializerDefineProperty(this, "levelLabel", _descriptor6, this);

          _initializerDefineProperty(this, "biFenLabel", _descriptor7, this);

          _initializerDefineProperty(this, "numLabel", _descriptor8, this);

          _initializerDefineProperty(this, "enterButtonNode", _descriptor9, this);

          _defineProperty(this, "user", null);
        }

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
          let uiCharacterDetail = await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.show("UICharacterDetail");
          uiCharacterDetail.SendCharacterDetail(this.user.id, 0, 2);
        }

        async SetItemInfo(follow, selectedIndex) {
          this.user = follow;
          let define = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.characters[follow.character.cid];
          this.nameLabel.string = define.Name;
          this.img.spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
            error: Error()
          }), LoadResUtil) : LoadResUtil).load_local_sprite(define.Avatar + '/spriteFrame');
          this.nickNameLabel.string = '昵称:' + follow.nickname;
          this.levelLabel.string = 'Lv:' + follow.character.level;

          if (selectedIndex == 0) {
            //直播中
            this.enterButtonNode.active = true;
            this.blueBiFenLabel.node.active = true;
            this.redBiFenLabel.node.active = true;
            this.biFenLabel.node.active = true;
            this.numLabel.node.active = true;
            let biFenArr = (follow.biFen + '' || '0:0').split(':');
            let blueBiFenText = '';
            let redBiFenText = '';
            let blueColor = '';
            let redColor = '';

            if (follow.teamType == TeamType.My) {
              //蓝队
              blueColor = '#FF0000'; //红

              redColor = '#000000';
              blueBiFenText = biFenArr[0];
              redBiFenText = ':' + biFenArr[1];
            } else {
              blueColor = '#000000';
              redColor = '#FF0000'; //红

              blueBiFenText = biFenArr[0] + ':';
              redBiFenText = biFenArr[1];
            } // this.blueBiFenLabel.color.fromHEX(blueColor);
            // this.redBiFenLabel.color.fromHEX(redColor);  


            this.blueBiFenLabel.color = new Color().fromHEX(blueColor);
            this.redBiFenLabel.color = new Color().fromHEX(redColor);
            this.blueBiFenLabel.string = blueBiFenText;
            this.redBiFenLabel.string = redBiFenText;
            this.numLabel.string = '人数:' + (follow.roomNum || 0);
          } else {
            this.enterButtonNode.active = false;
            this.blueBiFenLabel.node.active = false;
            this.redBiFenLabel.node.active = false;
            this.biFenLabel.node.active = false;
            this.numLabel.node.active = false;
          }
        }
        /**
         * 进入直播
         */


        OnAddLive() {
          (_crd && RoomService === void 0 ? (_reportPossibleCrUseOfRoomService({
            error: Error()
          }), RoomService) : RoomService).Instance.SendAddLive(this.user.id);
        }

        onDestroy() {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "img", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blueBiFenLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "redBiFenLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nickNameLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "biFenLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "numLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "enterButtonNode", [_dec10], {
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
//# sourceMappingURL=UIFollowLiveItem.js.map