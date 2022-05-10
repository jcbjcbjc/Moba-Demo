System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SoundDefine, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("SoundDefine", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4d18SW4AlFfp+seJi5/gVf", "SoundDefine", undefined);

      _export("SoundDefine", SoundDefine = class SoundDefine {});

      _defineProperty(SoundDefine, "Music_Login", "bgm-login2");

      _defineProperty(SoundDefine, "Music_Select", "bgm-select2");

      _defineProperty(SoundDefine, "SFX_Message_Info", "UI/sfx_msg_info");

      _defineProperty(SoundDefine, "SFX_Message_Error", "UI/sfx_msg_error");

      _defineProperty(SoundDefine, "SFX_UI_Click", "UI/sfx_click1");

      _defineProperty(SoundDefine, "SFX_UI_Confirm", "UI/sfx_accept1");

      _defineProperty(SoundDefine, "SFX_UI_Win_Open", "UI/ui_win_show");

      _defineProperty(SoundDefine, "SFX_UI_Win_Close", "UI/ui_win_close");

      _defineProperty(SoundDefine, "SFX_UI_CountDown", "UI/sfx_return1");

      _defineProperty(SoundDefine, "SFX_Success", "UI/sfx_shop_purchase2");

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SoundDefine.js.map