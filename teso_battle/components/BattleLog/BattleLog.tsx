import { useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { skill } from '@/interfaces/battleAction/skill';
import { resetSkill } from '@/redux/slice/skillSlice';

const BattleLog: React.FC = () => {

    let currentSkillState = useAppSelector((state) => state.skillSlice);
    const dispatch = useAppDispatch();
    const [ skillInLog, setSkillInLog ] = useState<Array<skill>>([])

    useEffect(() => {
        if( currentSkillState.currentSkill[0]) {
            const lastSkill = currentSkillState.currentSkill[currentSkillState.currentSkill.length -1];
            setSkillInLog((prevSkillInLog) => {
                const skillWithNewId = { ...lastSkill, id : Date.now()};    
                return [ ...prevSkillInLog, skillWithNewId]
            });

            dispatch(resetSkill())
        }
    }, [currentSkillState])

    console.log(skillInLog)


    return (
        <div>
          {skillInLog[0] &&
            skillInLog.map((skill) => (
              <p key={skill.id}>{skill.name}</p>
            ))}
        </div>
      );
}

export default BattleLog;