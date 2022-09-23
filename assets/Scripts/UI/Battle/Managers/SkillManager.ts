import { Creature } from "../Enities/Creature";
import { Skill } from "../Models/Skill";
import { DataManager } from "../../../Managers/DataManager";
import { SkillType } from "../enums/SkillType";

export class SkillManager{
    public Owner:Creature;
    public NormalSkill:Skill;

    public Skills:Array<Skill> = [];

    public Infos:Array<number> = [];

    public constructor(owner:Creature)
    {
        this.Owner = owner;
        this.InitSkills();
    }

    private InitSkills()
    {
        this.Skills = [];
        this.Infos = [];

        let skillMap = DataManager.Instance.skills[this.Owner.characterDefine.ID];
        for (var skillId in skillMap)
        {
            let define = skillMap[skillId];
            // console.log(JSON.stringify(define))

            this.Infos.push(define.ID);
            let skill = new Skill(define.ID, this.Owner);
            if (define.Type == SkillType.Normal)
            {
                this.NormalSkill = skill;
            }
            this.AddSkill(skill);
        }
    }

    private AddSkill(skill:Skill)
    {
        this.Skills.push(skill);
    }

    public GetSkill(skillId:number):Skill
    {
        for(let i = 0; i < this.Skills.length; i++)
        {
            if (this.Skills[i].Define.ID == skillId)
                return this.Skills[i];
        }
        return null;
    }

    public LogicUpdate(frameId: number)
    {
        for (let i = 0; i < this.Skills.length; i++)
        {
             this.Skills[i].LogicUpdate(frameId);
        }
    }
}