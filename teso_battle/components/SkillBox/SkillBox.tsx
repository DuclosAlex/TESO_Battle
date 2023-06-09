import { skill } from "@/interfaces/battleAction/skill"
import {useEffect } from 'react';
import { addSkillType } from "@/redux/slice/skillTypeSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

const SkillBox: React.FC<skill> = (skill) => {

    let currentSkill = useAppSelector((state) => state.skillTypeSlice);
    const dispatch = useAppDispatch();

    const handleClick = () => {

        dispatch(addSkillType(skill))
    }

    useEffect(() => {
        console.log(currentSkill)
    }, [currentSkill]);
    
    return (
        <button type="button" onClick={handleClick} className="transition ease delay-350  w-3/4 h-1/4 m-auto flex items-center text-lg font-semibold justify-center bg-blue-400 rounded-full hover:scale-125 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-200/60">
            <p className="text-center w-full">{skill.name}</p>
        </button>
    )
}



export default SkillBox;