import { skill } from "@/interfaces/battleAction/skill"


const SkillBox: React.FC<skill> = (skill) => {


    console.log(skill);
    return (
        <button type="button" className="transition ease delay-350  w-3/4 h-1/4 m-auto flex items-center text-lg font-semibold justify-center bg-blue-300 rounded-full hover:scale-125 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
            <p className="text-center">{skill.name}</p>
        </button>
    )
}



export default SkillBox;