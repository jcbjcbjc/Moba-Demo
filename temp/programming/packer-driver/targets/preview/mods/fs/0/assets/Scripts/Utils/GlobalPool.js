System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, NodePool, instantiate, AutoNodePool, GlobalPool, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    AutoNodePool: void 0,
    default: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1cfe0jRFQ5FZKT4w/5g3sCE", "GlobalPool", undefined);

      /**节点对象池，对象池为空时可自动实例化新的对象 */
      _export("AutoNodePool", AutoNodePool = class AutoNodePool {
        /**
         * 节点对象池，对象池为空时可自动实例化新的对象
         * @param prefab 预制
         * @param scriptName 节点挂载的脚本，管理节点进出对象池时的逻辑，必须实现接口IPoolObject
         */
        constructor(prefab, scriptName) {
          _defineProperty(this, "prefab", void 0);

          _defineProperty(this, "scripteName", void 0);

          _defineProperty(this, "pool", void 0);

          this.prefab = prefab;
          this.scripteName = scriptName;
          this.pool = new NodePool(scriptName);
        }
        /**
         * 获取实例
         * @param data 给实例赋值的数据
         */


        get(data) {
          var item = this.pool.get(data);

          if (!item) {
            item = instantiate(this.prefab);

            if (!!this.scripteName) {
              var s = item.getComponent(this.scripteName);

              if (!!s) {
                s.init(data);
              } else {
                this.scripteName = null;
              }
            }
          } else {
            console.log('对象池中取到对象名称：' + item.name);
          }

          return item;
        }
        /**
         * 回收节点
         * @param item
         */


        put(item) {
          this.pool.put(item);
        }
        /**
         * 清空对象池，将销毁所有缓存的实例
         */


        clear() {
          this.pool.clear();
        }

      });
      /**全局节点对象池 */


      _export("default", GlobalPool = class GlobalPool {
        /**
         * 创建新的对象池
         * @param nodeName 节点名称
         * @param prefab 节点预制资源
         * @param scriptName 节点上挂载的脚本名称，必须实现接口IPoolObject，用于处理节点进出对象池时的逻辑
         */
        static createPool(nodeName, prefab, scriptName) {
          if (!!this.allPools[nodeName]) {
            console.warn("已存在该名称的对象池，请确认是否名字冲突：", nodeName);
            return;
          }

          this.allPools[nodeName] = new AutoNodePool(prefab, scriptName);
        }
        /**
         * 获取实例
         * @param nodeName 要获取的节点名称
         * @param data 节点需要的数据
         * @returns {Node} 按传入的数据进行设置的节点实例
         */


        static get(nodeName, data) {
          if (!this.allPools[nodeName]) {
            console.error("未创建对应名称的对象池，获取实例失败：", nodeName);
            return null;
          }

          return this.allPools[nodeName].get(data);
        }
        /**
         * 回收节点
         * @param node 回收的节点
         * @param nodeName 节点名称，与节点要放回的对象池名称对应
         */


        static put(node, nodeName) {
          if (!nodeName) nodeName = node.name;

          if (!this.allPools[nodeName]) {
            console.warn("未创建对应名称的对象池，将销毁节点：", nodeName);
            var js = node.getComponent(nodeName);

            if (!!js && !!js.unuse) {
              js.unuse();
            }

            node.destroy();
            return;
          }

          this.allPools[nodeName].put(node);
        }
        /**
         * 回收节点的所有子节点
         * @param node 
         */


        static putAllChildren(node) {
          for (var i = node.children.length - 1; i >= 0; --i) {
            var child = node.children[i];
            this.put(child);
          }
        }
        /**
         * 清空对象池缓存，未指定名称时将清空所有的对象池
         * @param nodeName 对象池名称
         */


        static clear(nodeName) {
          if (!!nodeName) {
            if (!!this.allPools[nodeName]) {
              this.allPools[nodeName].clear();
              delete this.allPools[nodeName];
            }
          } else {
            for (var key in this.allPools) {
              this.allPools[key].clear();
            }

            this.allPools = {};
          }
        }

      });

      _defineProperty(GlobalPool, "allPools", {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GlobalPool.js.map