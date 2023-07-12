"use client";

import PlayerBattleCharacterList from "../PlayerBattleCharacterList/PlayerBattleCharacterList";
import SkillsList from "../SkillsList/SkillsList";
import { skillsList } from "@/interfaces/battleAction/skill";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import BattleLog from "../BattleLog/BattleLog";
import EnnemyBattleList from "../EnnemyBattleList/EnnemyBattleList";


const GameObject: React.FC = () => {

    const characterState = useAppSelector((state) => state.characterSlice);
    const [currentCharacterSkills, setCurrentCharacterSkill] = useState<skillsList | null>(null)

    useEffect(() => {
        if(characterState.characters[0]) {

            setCurrentCharacterSkill(characterState.currentCharacters[0].skillList);

        }
    }, [characterState])

    return (
        <div className="relative h-full">
            <PlayerBattleCharacterList />
            { currentCharacterSkills &&(
                <SkillsList  skillsList={ currentCharacterSkills} />
            )}
            <BattleLog />
            <EnnemyBattleList />
        </div>
    ) 
}

export default GameObject;