System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Sprite, RichText, Layout, UITransform, SystemEventType, proto, LoadResUtil, DataManager, UIManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ChatMessage, UIOtherMyUserItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResUtil(extras) {
    _reporterNs.report("LoadResUtil", "../../Utils/LoadResUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Managers/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Common/UIManager", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
      Layout = _cc.Layout;
      UITransform = _cc.UITransform;
      SystemEventType = _cc.SystemEventType;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      LoadResUtil = _unresolved_3.LoadResUtil;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      UIManager = _unresolved_5.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64a8coqQ0RJQLS+zARSXAiK", "UIOtherMyUserItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        ChatMessage
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("UIOtherMyUserItem", UIOtherMyUserItem = (_dec = ccclass('UIOtherMyUserItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(RichText), _dec(_class = (_class2 = (_temp = class UIOtherMyUserItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "avatarSprite", _descriptor, this);

          _initializerDefineProperty(this, "levelLabel", _descriptor2, this);

          _initializerDefineProperty(this, "nickNameLabel", _descriptor3, this);

          _initializerDefineProperty(this, "contentRichText", _descriptor4, this);

          _defineProperty(this, "chatMessage", null);

          _defineProperty(this, "userId", void 0);
        }

        start() {
          this.avatarSprite.node.on(SystemEventType.TOUCH_END, this.avatarClick, this);
        }

        async SetItemInfo(chatMessage, enterFontCount) {
          // console.log(this.chatMessage && this.chatMessage.fromId==chatMessage.fromId && this.chatMessage.time==chatMessage.time)
          // if(this.chatMessage && this.chatMessage.fromId==chatMessage.fromId && this.chatMessage.time==chatMessage.time){
          //     return;
          // }
          this.chatMessage = chatMessage;

          if (chatMessage.fromCCharacterId) {
            this.userId = chatMessage.fromId;
            this.levelLabel.string = 'lv' + chatMessage.fromLevel;
            this.nickNameLabel.string = chatMessage.fromName;
            this.avatarSprite.spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_sprite((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.characters[chatMessage.fromCCharacterId].Avatar + '/spriteFrame');
          } else if (chatMessage.toCCharacterId) {
            this.userId = chatMessage.toId;
            this.levelLabel.string = 'lv' + chatMessage.toLevel;
            this.nickNameLabel.string = chatMessage.toName;
            this.avatarSprite.spriteFrame = await (_crd && LoadResUtil === void 0 ? (_reportPossibleCrUseOfLoadResUtil({
              error: Error()
            }), LoadResUtil) : LoadResUtil).load_local_sprite((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.characters[chatMessage.toCCharacterId].Avatar + '/spriteFrame');
          }

          this.contentRichText.string = this.getContent(chatMessage.msg, enterFontCount); //动态计算聊天item高度

          let offset = 60;
          let bubbleNode = this.node.getChildByName('bubbleSprite'); //弹幕背景

          let bubbleLayout = bubbleNode.getComponents(Layout)[1]; //弹幕布局组件

          bubbleLayout.updateLayout();
          let bubbleUt = bubbleNode.getComponent(UITransform); //弹幕变换组件

          let itemUt = this.node.parent.getComponent(UITransform); //item

          itemUt.height = bubbleNode.getPosition().y + bubbleUt.height + offset; //更新item高度
          // console.log('item height：'+itemUt.height+'，'+bubbleNode.getPosition().y+'，'+bubbleUt.height)
        }
        /**
         * 获取文本内容
         * @param msg 
         */


        getContent(msg, enterFontCount) {
          let contentStr = '';
          let tempStr = '';
          let startFlag = false;
          let endFlag = false;
          let i = 0;

          for (let char of msg) {
            i++;

            if (i % enterFontCount == 0) {
              //换行
              char += '\n';
            }

            if (char == '[') {
              startFlag = true;
            }

            if (char == ']') {
              endFlag = true;
            }

            if (startFlag || endFlag) {
              tempStr += char;
            }

            if (startFlag && endFlag) {
              startFlag = endFlag = false; //替换表情

              let chatIconId = tempStr.replace('[', '').replace(']', '');
              contentStr += "<img src='" + chatIconId + "' width=32 height=32 />";
              tempStr = '';
              continue;
            }

            if (startFlag || endFlag) {
              continue;
            }

            contentStr += char;
          }

          contentStr += tempStr; // console.log('contentStr='+contentStr)

          return '<color=#000000>' + contentStr + '</color>';
        }
        /**
         * 头像点击
         */


        async avatarClick() {
          console.log('avatarClick');
          let uiCharacterDetail = await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.show("UICharacterDetail");
          uiCharacterDetail.SendCharacterDetail(this.userId, 0, 2);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "avatarSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nickNameLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "contentRichText", [_dec5], {
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
//# sourceMappingURL=UIOtherMyUserItem.js.map