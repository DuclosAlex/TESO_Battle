import PlayerBattleCharacterList from "../PlayerBattleCharacterList/PlayerBattleCharacterList";
import { Character } from "@/interfaces/Character/Character";
import { attack } from "@/interfaces/battleAction/skill";

const GameObject: React.FC = () => {

    return (
        <div>
            <PlayerBattleCharacterList />
        </div>
    )
}

export default GameObject;