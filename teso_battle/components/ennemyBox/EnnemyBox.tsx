import { Ennemy } from "@/interfaces/Ennemy/ennemy";
import Image from "next/image";
import styles from './EnnemyBox.module.css';
import { motion as FramerMotion} from 'framer-motion';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectEnnemy, resetEnnemy } from "@/redux/slice/ennemySlice";
import { useEffect, useState } from "react";


const EnnemyBox: React.FC<Ennemy> = (ennemy) => {

    const ennemyState = useAppSelector((state) => state.ennemySlice);
    const dispatch = useAppDispatch();
    const [isEnnemySelected, setIsEnnemySelected] = useState(false);
    const [lastPvValue, setLastPvValue] = useState(ennemy.pv);
    const [ isDead, setIsDead] = useState(false);

    // Fonction permettant de sélectionnez un ennemy
    const selectCurrentEnnemy = () => {

        if(lastPvValue !== ennemy.pv) {
            setIsEnnemySelected(true);
            dispatch(resetEnnemy())
            dispatch(selectEnnemy({...ennemy, pv : lastPvValue}))
        }
        else {

            setIsEnnemySelected(true);
            dispatch(resetEnnemy())
            dispatch(selectEnnemy(ennemy))
        }
    };

    useEffect(() => {
        if(ennemyState.ennemies[0]) {
            // varification de l'id de l'ennemy dans le state et de l'ennemy courant
            if(ennemyState.ennemies[0].id !== ennemy.id && isEnnemySelected === true) {
                setIsEnnemySelected(false)
            }
            // gestion des pv et du status isDead
            if(ennemyState.ennemies[0].pv !== lastPvValue && ennemyState.ennemies[0].id === ennemy.id) {
                if(ennemyState.ennemies[0].pv <= 0) {
                    setLastPvValue(0);
                    setIsDead(true);
                    setIsEnnemySelected(false)
                }
                else {
                    setLastPvValue(ennemyState.ennemies[0].pv);
                }
            }
            
        }
    }, [ennemyState])


    return (
        <div onClick={isDead ? undefined : selectCurrentEnnemy} className={`cursor-pointer w-1/3 bg-green-400 flex flex-col items-center justify-center text-center p-2 h-full 
            ${styles.ennemyContainer}
            ${isEnnemySelected ? `${styles.ennemySelected}` : ''}
            `}>
            <p className="w-full">{ennemy.name}</p>
            <Image
            src={ennemy.image}
            alt={ennemy.alt}
            width={140}
            height={120} />
            <div className="w-3/4  h-[30px] mt-2 relative">
                <div className={`absolute  ${styles.underLifeBar}`}></div>
                <FramerMotion.div className={`absolute  ${styles.lifeBar}`} >{lastPvValue}</FramerMotion.div>
            </div>
            { isDead &&
            <div className='w-full h-full bg-neutral-800 absolute rounded-3xl opacity-60 z-20'>
                <div className="relative w-full h-full">

                <p className="bg-red-500 w-full h-1/4 absolute rounded-3xl top-1/2 left-1/2 transform rotate-45 -translate-y-1/2 -translate-x-1/2 z-20"></p>
                <p className="bg-red-500 w-full h-1/4 absolute rounded-3xl top-1/2 left-1/2 transform -rotate-45 -translate-y-1/2 -translate-x-1/2"></p>
                </div>
            </div>
            }
        </div>
    )
}

export default EnnemyBox;