import { Prefab, NodePool, instantiate, Node } from "cc";

export interface IPoolObject {
    /**
     * 对象池中创建新的实例时，将调用此函数初始化实例
     */
    init: (data?: any) => void;
    /**
     * 对象池中已经存在的实例重新取出使用时，将调用此函数
     */
    reuse: (data?: any) => void;
    /**
     * 节点放回对象池时将调用的函数
     */
    unuse: () => void;
}

/**节点对象池，对象池为空时可自动实例化新的对象 */
export class AutoNodePool {
    private prefab: Prefab|Node;
    private scripteName: string;
    private pool: NodePool;
    /**
     * 节点对象池，对象池为空时可自动实例化新的对象
     * @param prefab 预制
     * @param scriptName 节点挂载的脚本，管理节点进出对象池时的逻辑，必须实现接口IPoolObject
     */
    constructor(prefab: Prefab|Node, scriptName?: string) {
        this.prefab = prefab;
        this.scripteName = scriptName;
        this.pool = new NodePool(scriptName);
    }

    /**
     * 获取实例
     * @param data 给实例赋值的数据
     */
    public get(data?: any): Node {
        let item: Node = this.pool.get(data);
        if (!item) {
            item = instantiate(this.prefab) as Node;
            if (!!this.scripteName) {
                let s = item.getComponent(this.scripteName) as unknown as IPoolObject;
                if (!!s) {
                    s.init(data);
                } else {
                    this.scripteName = null;
                }
            }
        }else{
            console.log('对象池中取到对象名称：'+item.name)
        }
        return item;
    }

    /**
     * 回收节点
     * @param item
     */
    public put(item: Node) {
        this.pool.put(item);
    }

    /**
     * 清空对象池，将销毁所有缓存的实例
     */
    public clear() {
        this.pool.clear();
    }
}

/**全局节点对象池 */
export default class GlobalPool {
    private static allPools: { [nodeName: string]: AutoNodePool } = {};
    /**
     * 创建新的对象池
     * @param nodeName 节点名称
     * @param prefab 节点预制资源
     * @param scriptName 节点上挂载的脚本名称，必须实现接口IPoolObject，用于处理节点进出对象池时的逻辑
     */
    public static createPool(nodeName: string, prefab: Prefab|Node, scriptName?: string): void {
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
    public static get(nodeName: string, data?: any): Node {
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
    public static put(node: Node, nodeName?: string) {
        if (!nodeName) nodeName = node.name;
        if (!this.allPools[nodeName]) {
            console.warn("未创建对应名称的对象池，将销毁节点：", nodeName);
            let js = node.getComponent(nodeName) as any;
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
    public static putAllChildren(node: Node) {
        for (let i = node.children.length - 1; i >= 0; --i) {
            let child = node.children[i];
            this.put(child);
        }
    }
    /**
     * 清空对象池缓存，未指定名称时将清空所有的对象池
     * @param nodeName 对象池名称
     */
    public static clear(nodeName?: string) {
        if (!!nodeName) {
            if (!!this.allPools[nodeName]) {
                this.allPools[nodeName].clear();
                delete this.allPools[nodeName];
            }
        } else {
            for (let key in this.allPools) {
                this.allPools[key].clear();
            }
            this.allPools = {};
        }
    }
}