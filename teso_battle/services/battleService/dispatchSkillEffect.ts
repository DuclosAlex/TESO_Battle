import { skill } from "@/interfaces/battleAction/skill";
import { reset } from "@/redux/slice/characterSlice";
import { updateLifePoint, resetEnnemy } from "@/redux/slice/ennemySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const dispatchSkillEffect = (skill: skill) => {
    
    const characterState = useAppSelector((state) => state.characterSlice);
    const ennemyState = useAppSelector((state) => state.ennemySlice);
    const dispatch = useAppDispatch();
    console.log(ennemyState);
    console.log(characterState);
    console.log(skill)

    dispatch(updateLifePoint(skill));
    
    
}

export default dispatchSkillEffect;