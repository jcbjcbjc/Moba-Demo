/**
 * 处理帧结果
 */
export enum HandlerFrameResult{
    NoFrameData=0,  //无帧数据
    NotRepeatFrame,  //不能重复执行帧
    Success   //执行成功
}