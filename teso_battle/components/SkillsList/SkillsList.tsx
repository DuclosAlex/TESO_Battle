"use client";

import { skillsList, skill } from "@/interfaces/battleAction/skill";
import SkillBox from "../SkillBox/SkillBox";


const SkillsList: React.FC<skillsList> = (skillsList) => {

    function showList(): void {
        console.log(skillsList);
    }

    
    return (
        <div className="flex p-4 bg-green-100">
            
            <button className="bg-black" onClick={() => showList()}>Test</button>
        </div>
    )
}

export default SkillsList; 