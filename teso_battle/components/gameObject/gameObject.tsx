import PlayerBattleCharacterList from "../PlayerBattleCharacterList/PlayerBattleCharacterList";
import SkillsList from "../SkillsList/SkillsList";


const GameObject: React.FC = () => {

    return (
        <div className="relative h-full">
            <PlayerBattleCharacterList />
        </div>
    )
}

export default GameObject;