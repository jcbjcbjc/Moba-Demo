import { random } from "cc";

export class RandomUtil{

    public static seed:number=5;
    /**
     * 获取一个区间的随机数
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    public static limit($from:number, $end:number):number {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        // var range:number = $end - $from;
        // return $from + Math.random() * range;

        this.seed = (this.seed * 9301 + 49297) % 233280;
        var rnd = this.seed / 233280.0;
        return  $from + rnd * ($end - $from) ;  
    }

    /**
     * 获取一个区间的随机数(整数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    public static limitInteger($from:number, $end:number):number {
        return Math.round(this.limit($from, $end));
    }

    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组
     * @returns {any} 随机出来的结果
     */
    public static randomArray(arr:Array<any>):any {
        var index:number = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

    /**
     * 获取一个区间的随机数（不按随机数种子来）
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    public static limit2($from:number, $end:number):number {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range:number = $end - $from;
        return $from + Math.random() * range;
    }
}