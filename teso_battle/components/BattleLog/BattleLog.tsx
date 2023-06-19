import { useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { resetBattleLog } from '@/redux/slice/battleLogSlice';
import styles from './BattleLog.module.css';
import { battleLog } from '@/interfaces/log/battleLog';

const BattleLog: React.FC = () => {

    const battleState = useAppSelector((state) => state.battleLogSlice);
    const dispatch = useAppDispatch();
    const [ messageInLog, setMessageInLog ] = useState<battleLog[]>([]);
    
    useEffect(() => {
        if(battleState.battleLog[0]) {
            const newLog = battleState.battleLog[0];
            setMessageInLog((prevMessageInLog) => {
                let updateLog = [...prevMessageInLog, newLog];
                if(updateLog.length > 5) {
                    updateLog = updateLog.slice(1);
                }
                return updateLog
            })

            dispatch(resetBattleLog());
        }
    },[battleState])

    return (
        <div className={`${messageInLog[0] ? styles.logBackground : ''}  w-1/4 text-center absolute bottom-1/2 transform translate-y-1/4`}>
          {messageInLog[0] &&
          messageInLog.map((log) => (
            <p className={` 
                ${styles.logText}
                ${log.type === 'attack' ? `${styles.redLog}` : log.type === 'heal' ? 'text-green-500' : ''}`
        } key={log.id}>{log.log}</p>
          ))}
        </div>
      );
}

export default BattleLog;