import { skill } from "@/interfaces/battleAction/skill"


const SkillBox: React.FC<skill> = (skill) => {
    return (
        <div>
            <p>{skill.name}</p>
        </div>
    )
}

export default SkillBox;