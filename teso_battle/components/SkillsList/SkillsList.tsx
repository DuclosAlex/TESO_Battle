"use client";

import { skillsList, skill } from "@/interfaces/battleAction/skill";
import SkillBox from "../SkillBox/SkillBox";


const SkillsList: React.FC<skillsList> = (skillsList) => {

    //
    const skills = Object.values(skillsList)

    function showList(): void {
        console.log(skills);
    }

    
    return (
        <div className="flex p-4 bg-green-900">
            {skills.map((skill) => {
                return (
                    <SkillBox key={skill.id} {...skill} />
                )
            })}
            <button className="bg-black" onClick={() => showList()}>Test</button>
        </div>
    )
}

export default SkillsList; 