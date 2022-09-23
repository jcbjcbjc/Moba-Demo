export class ChatUserVo{
    public userId: number=0;
    public nickName:string='';
    public level: number=0;
    public cCharacterId: number=0;
    public status:boolean=false;
    public time:number=0;
    constructor(userId: number, nickName:string, level: number, cCharacterId: number, status:boolean, time:number){
        this.userId=userId;
        this.nickName=nickName;
        this.level=level;
        this.cCharacterId=cCharacterId;
        this.status=status;
        this.time=time;
    }
}