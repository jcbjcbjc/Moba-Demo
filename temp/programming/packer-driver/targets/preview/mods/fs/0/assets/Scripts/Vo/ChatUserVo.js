System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ChatUserVo, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("ChatUserVo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a17betKMQZN1JPFCxkBj51a", "ChatUserVo", undefined);

      _export("ChatUserVo", ChatUserVo = class ChatUserVo {
        constructor(userId, nickName, level, cCharacterId, status, time) {
          _defineProperty(this, "userId", 0);

          _defineProperty(this, "nickName", '');

          _defineProperty(this, "level", 0);

          _defineProperty(this, "cCharacterId", 0);

          _defineProperty(this, "status", false);

          _defineProperty(this, "time", 0);

          this.userId = userId;
          this.nickName = nickName;
          this.level = level;
          this.cCharacterId = cCharacterId;
          this.status = status;
          this.time = time;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ChatUserVo.js.map