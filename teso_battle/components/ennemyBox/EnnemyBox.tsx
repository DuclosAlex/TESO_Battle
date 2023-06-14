import { Ennemy } from "@/interfaces/Ennemy/ennemy";
import Image from "next/image";
import styles from './EnnemyBox.module.css';
import { motion } from "framer-motion";

const EnnemyBox: React.FC<Ennemy> = (ennemy) => {
    return (
        <div className={`w-1/3 bg-green-400 flex flex-col items-center justify-center text-center p-2 h-full ${styles.ennemyContainer}`}>
            <p className="w-full">{ennemy.name}</p>
            <Image
            src={ennemy.image}
            alt={ennemy.alt}
            width={140}
            height={120} />
            <div className="w-3/4  h-[30px] mt-2 relative">
                <div className={`absolute  ${styles.underLifeBar}`}></div>
                <div className={`absolute  ${styles.lifeBar}`} >{ennemy.pv}</div>
            </div>
        </div>
    )
}

export default EnnemyBox;