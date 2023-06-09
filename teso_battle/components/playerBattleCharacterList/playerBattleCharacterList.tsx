

import CharacterCard from "../CharacterCard/CharacterCard";
import { Character, CharacterList } from "@/interfaces/Character/Character";
import { skillType, skillsList } from "@/interfaces/battleAction/skill";

const skillTest: skillsList = [
    {
        name: 'sword slash',
        power: 1,
        cost: 0,
        id : 1,
        type : skillType.Attack
    },
    {
        name: 'double hit',
        power: 5,
        cost: 0,
        id: 2,
        type : skillType.Heal
    },
    {
        name: 'quick slash',
        power: 5,
        cost: 0,
        id: 2,
        type : skillType.Attack
    }
]

const skillMagic: skillsList = [
    {
        name: 'fire ball',
        power: 1,
        cost: 0,
        id : 1,
        type : skillType.Attack
    },
    {
        name: 'ice pike',
        power: 5,
        cost: 0,
        id: 2,
        type : skillType.Attack
    },
    {
        name: 'thunder',
        power: 5,
        cost: 0,
        id: 2,
        type : skillType.Attack
    }
]

const playerCharacter: CharacterList = [
    {
    name : 'test',
    pv : 150,
    id : 1,
    is_selected : false,
    skillList : skillTest
    },
    {
    name : 'Orion',
    pv : 150,
    id : 2,
    is_selected: false,
    skillList : skillMagic
    }
]

const playerBattleCharacterList: React.FC = () => {
    
    return (
        <div className="bg-red-900 w-3/4 m-auto p-4 absolute inset-x-0 bottom-0 flex justify-around">
            {playerCharacter.map((character: Character) => {
                return(
                    // Pour vérifier le typade des valeurs Typescript force à utiliser le spread Operator
                    <CharacterCard key={character.id} {...character} />
                    
                )
            })}

        </div>
    )
}

export default playerBattleCharacterList;