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
    const [isEnnemySelected, setIsEnnemySelected] = useState(false)
    
    console.log(ennemy)
    const selectCurrentEnnemy = () => {

        setIsEnnemySelected(true);
        dispatch(resetEnnemy())
        dispatch(selectEnnemy(ennemy))
    };

    useEffect(() => {
        if(ennemyState.ennemies[0]) {
            if(ennemyState.ennemies[0].id !== ennemy.id && isEnnemySelected === true) {
                setIsEnnemySelected(false)
            }
        }
    }, [ennemyState])


    return (
        <div onClick={selectCurrentEnnemy} className={`cursor-pointer w-1/3 bg-green-400 flex flex-col items-center justify-center text-center p-2 h-full 
            ${styles.ennemyContainer}
            ${isEnnemySelected ? styles.ennemySelected : ''}
            `}>
            <p className="w-full">{ennemy.name}</p>
            <Image
            src={ennemy.image}
            alt={ennemy.alt}
            width={140}
            height={120} />
            <div className="w-3/4  h-[30px] mt-2 relative">
                <div className={`absolute  ${styles.underLifeBar}`}></div>
                <FramerMotion.div className={`absolute  ${styles.lifeBar}`} >{ennemy.pv}</FramerMotion.div>
            </div>
        </div>
    )
}

export default EnnemyBox;