import { SkillType } from "../UI/Battle/enums/SkillType";
import { TargetType } from "../UI/Battle/enums/TargetType";

export class SkillDefine{
    public ID:number=null;
    public Name:string=null;
    public Description:string=null;
    public Icon:string=null;
    public Type:SkillType=null;
    public CastTarget:TargetType=null;
    public CastRange:number=null;
    public CastTime:number=null;
    public CastValidAngle:number;
    public BlowsNum:number;

    public CD:number=null;
    public Bullet:boolean;
    public RealDetection:boolean;
    public MultipleHit:boolean;
    public BulletRadius:number;
	public BulletSpeed:number;
	public BulletResource:string;
	public AOERange:number;
	public AOEEffect:string;
	public SkillAnim:string;
	public Duration:number;
    public Interval:number;
	public HitTimes:Array<number>;
	public HitEffect:string;
	public Buff:Array<number>;
    public ATTFator:number;
    
}