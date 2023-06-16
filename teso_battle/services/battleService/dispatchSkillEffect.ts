import { skill } from "@/interfaces/battleAction/skill";
import { reset } from "@/redux/slice/characterSlice";
import { addBattleLog } from "@/redux/slice/battleLogSlice";
import BattleLog from "@/components/BattleLog/BattleLog";
import dispatchBattleLog from "./dispatchBattleLog";
import { updateLifePoint, resetEnnemy } from "@/redux/slice/ennemySlice";
import store from "@/redux/store/gameStore";
import { battleLog } from "@/interfaces/log/battleLog";

// service to apply skill effect to character/ennemies and dispatch battleLog in store
const dispatchSkillEffect = (skill: skill) => {
    
    const character = store.getState().characterSlice.characters[0];
    const ennemy = store.getState().ennemySlice.ennemies[0];


    if( character && ennemy ) {
        store.dispatch(updateLifePoint(skill));
        const message: battleLog = dispatchBattleLog(skill, character, ennemy);
        store.dispatch(addBattleLog(message));
    }
    
    
}

export default dispatchSkillEffect;