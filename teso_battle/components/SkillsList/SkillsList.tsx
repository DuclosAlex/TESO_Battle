"use client";

import { skillsList, skill } from "@/interfaces/battleAction/skill";
import SkillBox from "../SkillBox/SkillBox";

interface SkillsListProps {
    skillsList: skillsList;
}


const SkillsList: React.FC<SkillsListProps> = ({skillsList}) => {

    
    const skills = Object.values(skillsList)

    
    return (
        <div className="flex flex-col justify-around p-4 absolute right-0 bottom-1/2 translate-y-1/4 h-2/6 w-1/6">
            {skills.map((skill) => {
                return (
                    <SkillBox key={skill.id} {...skill} />
                )
            })}
        </div>
    )
}

export default SkillsList; 