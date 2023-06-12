import { useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { skill, skillMessageLog } from '@/interfaces/battleAction/skill';
import { resetSkill } from '@/redux/slice/skillSlice';

const BattleLog: React.FC = () => {

    let currentSkillState = useAppSelector((state) => state.skillSlice);
    let currentCharacterState = useAppSelector((state) => state.characterSlice.characters[0]);
    const dispatch = useAppDispatch();
    const [ skillInLog, setSkillInLog ] = useState<Array<skillMessageLog>>([]);
    

    useEffect(() => {

        if(currentSkillState.currentSkill[0]) {
            const lastSkill = currentSkillState.currentSkill[currentSkillState.currentSkill.length -1];
            setSkillInLog((prevSkilledInlog) => {
                const skillWithNewId = { ...lastSkill, id: Date.now()};
                const dataForLog: skillMessageLog = { character : currentCharacterState, skill : skillWithNewId};
                let updateLog = [ ...prevSkilledInlog, dataForLog];
                if(updateLog.length > 5) {
                    updateLog = updateLog.slice(1);
                }
                console.log(updateLog);
                return updateLog;
            })


            
        }

        // if( currentSkillState.currentSkill[0]) {
        //     const lastSkill = currentSkillState.currentSkill[currentSkillState.currentSkill.length -1];
        //     setSkillInLog((prevSkillInLog) => {
        //         const skillWithNewId = { ...lastSkill, id : Date.now()};    
        //         let updatedSkillInLong = [ ...prevSkillInLog, skillWithNewId];
        //         if(updatedSkillInLong.length > 5) {
        //             updatedSkillInLong =  updatedSkillInLong.slice(1);
        //         }
        //         return updatedSkillInLong
        //     });

        //     dispatch(resetSkill())
        // }
    }, [currentSkillState])

    console.log(skillInLog)


    return (
        <div className='w-1/4 bg-gray-200/30 text-center absolute bottom-1/2 left-0'>
          {skillInLog[0] &&
            skillInLog.map((skillLog) => (
                
              <p className={`
              p-2 text-lg
              ${skillLog.skill.type === 'attack' ? 'text-red-600' : skillLog.skill.type === 'heal' ? 'text-green-500' : ''}
              `
              } key={skillLog.skill.id}>{skillLog.character.name} utilise {skillLog.skill.name} et{' '}
                {skillLog.skill.type === 'attack' && (
                    <>
                        inflige {skillLog.skill.power} dégâts.
                    </>
                )}
                {skillLog.skill.type === 'heal' && (
                    <>
                        soigne {skillLog.skill.power} points de vie.
                    </>
                )}
              </p>
            ))}
        </div>
      );
}

export default BattleLog;