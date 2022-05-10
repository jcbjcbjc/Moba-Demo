System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AttributeType, AttributeData, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAttributeType(extras) {
    _reporterNs.report("AttributeType", "./AttributeType", _context.meta, extras);
  }

  _export("AttributeData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AttributeType = _unresolved_2.AttributeType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c7c4c36NZEBLMimwRwLtGe", "AttributeData", undefined);

      _export("AttributeData", AttributeData = class AttributeData {
        constructor() {
          _defineProperty(this, "Data", new Array((_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).MAX));
        }

        /**
         * 最大生命
         */
        get MaxHP() {
          return this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).MaxHP];
        }

        set MaxHP(value) {
          this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).MaxHP] = value;
        }
        /**
         * 攻击
         */


        get ATT() {
          return this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).ATT];
        }

        set ATT(value) {
          this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).ATT] = value;
        }
        /**
         * 防御
         */


        get DEF() {
          return this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).DEF];
        }

        set DEF(value) {
          this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).DEF] = value;
        }
        /**
         * 复活率
         */


        get RESU() {
          return this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).RESU];
        }

        set RESU(value) {
          this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).RESU] = value;
        }
        /**
         * 速度
         */


        get Speed() {
          return this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).Speed];
        }

        set Speed(value) {
          this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).Speed] = value;
        }
        /**
         * 暴击率
         */


        get CRI() {
          return this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).CRI];
        }

        set CRI(value) {
          this.Data[(_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).CRI] = value;
        }

        Reset() {
          for (let i = 0; i < (_crd && AttributeType === void 0 ? (_reportPossibleCrUseOfAttributeType({
            error: Error()
          }), AttributeType) : AttributeType).MAX; i++) {
            this.Data[i] = 0;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AttributeData.js.map