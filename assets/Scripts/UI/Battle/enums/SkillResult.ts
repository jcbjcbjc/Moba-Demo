export enum SkillResult{
    Ok=0,   //成功
    CoolDown=1,  //冷却中
    InvalidTarget=2,  //无效的目标
    OutOfRange=3,  //超出技能范围
    Casting=4,  //技能正在释放
}