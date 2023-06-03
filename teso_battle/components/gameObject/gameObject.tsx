import CharacterCard from "../CharacterCard/CharacterCard";
import { Character } from "@/interfaces/Character/Character";
import { attack } from "@/interfaces/battleAction/attack";

const attackTest: attack[] = [
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

const testCharacter: Character = {
    name : 'test',
    pv : 150,
    id : 1,
    attackList : attackTest
}

const GameObject: React.FC = () => {

    return (
        <div>
            
            <CharacterCard {...testCharacter}></CharacterCard>
        </div>
    )
}

export default GameObject;