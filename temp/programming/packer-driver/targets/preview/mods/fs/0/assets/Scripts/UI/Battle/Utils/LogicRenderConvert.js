System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, LogicRenderConvert, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("LogicRenderConvert", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ea557E8p1BAIx8PB9AjwhW", "LogicRenderConvert", undefined);

      /**
       * 逻辑向量和渲染互相转换
       */
      _export("LogicRenderConvert", LogicRenderConvert = class LogicRenderConvert {
        //逻辑和渲染系数
        //逻辑和渲染系数

        /**
         * 逻辑向量转渲染向量
         * @param vec3 逻辑向量 
         */
        static LogicToRender_Vec3(vec3) {
          vec3.set(this.LogicToRender_Value(vec3.x), this.LogicToRender_Value(vec3.y), this.LogicToRender_Value(vec3.z));
        }
        /**
         * 渲染向量转逻辑向量
         * @param vec3 渲染向量 
         */


        static RenderToLogic_Vec3(vec3) {
          vec3.set(this.RenderToLogic_Value(vec3.x), this.RenderToLogic_Value(vec3.y), this.RenderToLogic_Value(vec3.z));
        }
        /**
        * 逻辑向量转渲染向量
        * @param logicVec3 逻辑向量 
        * @param renderVec3 渲染向量 
        */


        static LogicToRender_TwoVec3(logicVec3, renderVec3) {
          renderVec3.set(this.LogicToRender_Value(logicVec3.x), this.LogicToRender_Value(logicVec3.y), this.LogicToRender_Value(logicVec3.z));
        }
        /**
         * 渲染向量转逻辑向量
         * @param logicVec3 逻辑向量 
         * @param renderVec3 渲染向量 
         */


        static RenderToLogic_TwoVec3(logicVec3, renderVec3) {
          logicVec3.set(this.RenderToLogic_Value(renderVec3.x), this.RenderToLogic_Value(renderVec3.y), this.RenderToLogic_Value(renderVec3.z));
        }
        /**
         * 逻辑值转渲染值
         * @param value 逻辑值 
         */


        static LogicToRender_Value(value) {
          return value * this.logicRenderRatio2;
        }
        /**
         * 渲染值转逻辑值
         * @param value 渲染值
         */


        static RenderToLogic_Value(value) {
          return Math.floor(value * this.logicRenderRatio);
        }
        /**
         * 逻辑向量转渲染向量
         * @param renderVec3 渲染向量 
         */


        static LogicToRender_TwoVec3_3f(renderVec3, logicX, logicY, logicZ) {
          renderVec3.set(this.LogicToRender_Value(logicX), this.LogicToRender_Value(logicY), this.LogicToRender_Value(logicZ));
        }
        /**
         * 渲染向量转逻辑向量
         * @param logicVec3 逻辑向量 
         */


        static RenderToLogic_TwoVec3_3f(logicVec3, renderX, renderY, renderZ) {
          logicVec3.set(this.RenderToLogic_Value(renderX), this.RenderToLogic_Value(renderY), this.RenderToLogic_Value(renderZ));
        }

      });

      _defineProperty(LogicRenderConvert, "logicRenderRatio", 1000);

      _defineProperty(LogicRenderConvert, "logicRenderRatio2", 0.001);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LogicRenderConvert.js.map