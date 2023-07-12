'use client';
import { Stage } from "@/interfaces/Stage/Stage.interface"
import styles from './StageBox.module.css';
import StageModal from "../stageModal/stageModal";
import { useState, useEffect } from "react";

const StageBox: React.FC<Stage> = (stage) => {

    const [showModal, setShowModal ] = useState<boolean>(false);

    return (
        <div  className={`${styles.stageBox} flex justify-center items-center m-auto cursor-pointer`}>
            <button onClick={() => setShowModal(true)} className="font-semibold">{stage.name}</button>
            {showModal && (
                <StageModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    )
}

export default StageBox;