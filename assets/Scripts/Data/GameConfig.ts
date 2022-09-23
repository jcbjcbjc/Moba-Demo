export class GameConfig{
    public BagMaxGridCount:number=null as unknown as number;  //背包最大格子数
    public MaxTranCount:number=null as unknown as number;  //最大交易数量
    public MaxMatchTime:number=null as unknown as number;  //最大匹配时间(s)

    public SoldierWaveCreateCount:number=null;  //小兵每波创建数量
    public SoldierWaveWaitTime:number=null;  //小兵每波等待秒数
    public LiveIntervalForwardTime:number=null;  //直播间隔转发秒数
    public SoldierMaxCount:number=null;  //小兵最大数量

}