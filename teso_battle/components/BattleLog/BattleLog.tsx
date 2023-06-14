import { useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { skill, skillMessageLog } from '@/interfaces/battleAction/skill';
import { resetSkill } from '@/redux/slice/skillSlice';
import styles from './BattleLog.module.css';

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
                
                return updateLog;
            })

            dispatch(resetSkill())            
        }
    }, [currentSkillState])


    return (
        <div className={`${styles.logBackground}  w-1/4 text-center absolute bottom-1/2 transform translate-y-1/4`}>
          {skillInLog[0] &&
            skillInLog.map((skillLog) => (
                
              <p className={`
              ${styles.logText}
              ${skillLog.skill.type === 'attack' ? `${styles.redLog}` : skillLog.skill.type === 'heal' ? 'text-green-500' : ''}
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