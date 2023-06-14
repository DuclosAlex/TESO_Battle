import { skill } from "@/interfaces/battleAction/skill"
import { addSkill } from "@/redux/slice/skillSlice";
import {  useAppDispatch } from "@/redux/hooks";
import dispatchSkillEffect from "@/services/battleService/dispatchSkillEffect";

const SkillBox: React.FC<skill> = (skill) => {

    const dispatch = useAppDispatch();

    const handleClick = () => {

        dispatch(addSkill(skill))
    }
    
    return (
        // Chercher une solution pour fixer le problème de texte qui clignote dans le battleLog au survol des skillBox. Solution trouvé, retiré la transition. Problème déclenché par le scale et la transition. 
        <button type="button" onClick={()=> dispatchSkillEffect(skill)} className={`  w-3/4 h-1/4 m-auto flex items-center text-lg font-semibold justify-center bg-blue-400 rounded-full hover:scale-125 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-200/60`}>
            <p className="text-center w-full">{skill.name}</p>
        </button>
    )
}



export default SkillBox;