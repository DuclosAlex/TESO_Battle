'use client';

import { Stage } from "@/interfaces/Stage/Stage.interface"
import styles from './StageBox.module.css';
import StageModal from "../stageModal/stageModal";
import { createPortal } from "react-dom";
import { useState } from "react";

const StageBox: React.FC<Stage> = (stage) => {

    const [showModal, setShowModal ] = useState(false);
    const container = document.getElementById('modal-root') as HTMLElement;

    const modalProps = {
        ennemies : stage.ennemies,
        stageName : stage.name,
        onClose : () => setShowModal(false)
    };

    return (
        <div className={`${styles.stageBox} flex justify-center items-center m-auto cursor-pointer`}>
            <button onClick={() => setShowModal(true)} className="font-semibold">{stage.name}</button>

            {showModal && createPortal(
                <StageModal { ...modalProps}/>,
                container
            )}
        </div>
    )
}

export default StageBox;