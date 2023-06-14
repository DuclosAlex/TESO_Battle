import { skill } from "@/interfaces/battleAction/skill";
import { reset } from "@/redux/slice/characterSlice";
import { updateLifePoint, resetEnnemy } from "@/redux/slice/ennemySlice";
import store from "@/redux/store/gameStore";

const dispatchSkillEffect = (skill: skill) => {
    
    const characterState = store.getState().characterSlice
    const ennemyState = store.getState().ennemySlice;
    console.log(ennemyState);
    console.log(characterState);
    console.log(skill)

    if( characterState.characters[0] && ennemyState.ennemies[0] ) {
        console.log("first step");
        store.dispatch(updateLifePoint(skill))
    }
    
    
}

export default dispatchSkillEffect;