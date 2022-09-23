export class HashMap {
    private map=new Map();
        /**
         * 加入数据
         * @param key 键
         * @param value 值
         */
        put(key:any, value:any):void {
            this.map[key] = value;
        }

        /**
         * 获得数据
         * @param key 键
         */
        get(key:any):any {
            return this.map[key];
        }

        /**
         * 移除数据
         * @param key 键
         */
        remove(key:any):any {
            var value = this.map[key];
            if (value) {
                this.map[key] = null;////////////////////zhengxin add at 2016-08-15
                delete this.map[key];//then undefined
            }
            return value;//should outter be = null, for clear memory
        }

        /**
         * 是否存在
         * @param key 键
         */
        contains(key:any):boolean {
            return this.map[key] != null;
        }

        /**
         * 获得所有键值
         */
        keys():string[] {
            var keys = Object.keys(this.map);
            var index = keys.indexOf("_hashCode");
            if (index > -1) {
                keys.splice(index, 1);
            }
            return keys;
        }

      /**
       * 获取所有值
       */
       values():any[] {
            var keys = Object.keys(this.map);
            let values=[];
            for (var i = 0; i < keys.length; i++) {
                let value = this.map[keys[i]];
                values.push(value);
            }
            return values;
        }
        
        /**
         * 获取长度
         */
        get length():number{
            var keys = Object.keys(this.map);
            return keys.length;
        }

        /**
         * 获取数据
         */
        get data():Map{
            return this.map;
        }

         /**
         * 设置数据
         */
        set data(map){
            this.map=map;
        }

        /**
         * 清空
         */
        clear():void {
            var keys = Object.keys(this.map);
            var len = keys.length;
            for (var i = 0; i < len; i++) {
                let value = this.remove(keys[i]);
                value = null;////////////////////zhengxin at 2016-08-15
            }
        }
    }