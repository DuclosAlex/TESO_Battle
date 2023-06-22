

import CharacterCard from "../CharacterCard/CharacterCard";
import { Character, CharacterList } from "@/interfaces/Character/Character";
import { skillType, skillsList } from "@/interfaces/battleAction/skill";

const skillTest: skillsList = [
    {
        name: 'sword slash',
        power: 20,
        cost: 0,
        id : 1,
        type : skillType.Attack
    },
    {
        name: 'heal',
        power: 20,
        cost: 0,
        id: 2,
        type : skillType.Heal
    },
    {
        name: 'quick slash',
        power: 20,
        cost: 0,
        id: 3,
        type : skillType.Attack
    }
]

const skillMagic: skillsList = [
    {
        name: 'fire ball',
        power: 20,
        cost: 0,
        id : 1,
        type : skillType.Attack
    },
    {
        name: 'ice pike',
        power: 20,
        cost: 0,
        id: 2,
        type : skillType.Attack
    },
    {
        name: 'thunder',
        power: 50,
        cost: 0,
        id: 3,
        type : skillType.Attack
    }
]

const playerCharacter: CharacterList = [
    {
    name : 'Ayreen',
    pv : 150,
    id : 1,
    skillList : skillTest,
    alt : 'ayreen',
    src : '/assets/character/ayrenn.jpg'

    },
    {
    name : 'Emeric',
    pv : 150,
    id : 2,
    skillList : skillMagic,
    alt : 'emeric',
    src : '/assets/character/emeric.jpg'
    },
    {
    name : 'Jorunn',
    pv : 2250,
    id : 3,
    skillList : skillMagic,
    alt : 'jorunn',
    src : '/assets/character/jorunn.jpg'
    }
]

const playerBattleCharacterList: React.FC = () => {
    
    return (
        <div className="w-3/4 m-auto p-4 absolute inset-x-0 bottom-10 flex justify-around">
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