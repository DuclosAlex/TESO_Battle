"use client";

import PlayerBattleCharacterList from "../PlayerBattleCharacterList/PlayerBattleCharacterList";
import SkillsList from "../SkillsList/SkillsList";
import { skillsList } from "@/interfaces/battleAction/skill";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";


const GameObject: React.FC = () => {

    const characterState = useAppSelector((state) => state.characterSlice);
    console.log(characterState);
    const [currentCharacterSkills, setCurrentCharacterSkill] = useState<skillsList | null>(null)

    useEffect(() => {
        if(characterState.characters[0]) {

            setCurrentCharacterSkill(characterState.characters[0].skillList);
            console.log(currentCharacterSkills)
        }
    }, [characterState])

    return (
        <div className="relative h-full">
            <PlayerBattleCharacterList />
            { currentCharacterSkills &&(
                <SkillsList  skillsList={ currentCharacterSkills} />
            )}
        </div>
    ) 
}

export default GameObject;