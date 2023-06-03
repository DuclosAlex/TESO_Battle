
import CharacterCard from "../CharacterCard/CharacterCard";
import { Character, CharacterList } from "@/interfaces/Character/Character";
import { skill, skillsList } from "@/interfaces/battleAction/skill";

const skillTest: skillsList = [
    {
        name: 'sword slash',
        power: 1,
        cost: 0,
    },
    {
        name: 'double hit',
        power: 5,
        cost: 0,
    }
]

const playerCharacter: CharacterList= [
    {
    name : 'test',
    pv : 150,
    id : 1,
    skillList : skillTest
    },
    {
    name : 'Orion',
    pv : 150,
    id : 1,
    skillList : skillTest
    }
]

const playerBattleCharacterList: React.FC = () => {
    
    return (
        <div className="bg-red-900 w-1/2 m-auto p-4">
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