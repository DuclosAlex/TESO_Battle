import { Character } from "@/interfaces/Character/Character";
import SkillsList from "../SkillsList/SkillsList";


const CharacterCard: React.FC<Character> = (character) => {

    const { skillList} = character;
    
    return (
        <div className="text-center bg-blue-500 p-4 m-auto w-1/2">
            <p>{ character.name }</p>
            <SkillsList {...skillList} />
        </div>
    )
}

export default CharacterCard;