import { Character } from "@/interfaces/Character/Character";


const CharacterCard: React.FC<Character> = (character) => {
    return (
        <div >
            <p>{ character.name }</p>
        </div>
    )
}

export default CharacterCard;