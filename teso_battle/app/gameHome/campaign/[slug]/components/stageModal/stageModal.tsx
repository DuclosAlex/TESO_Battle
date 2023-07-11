import { useState } from "react";
import { Ennemy } from "@/interfaces/Ennemy/ennemy";
import styles from './stageModal.module.css';

export interface ModalProps {
    ennemies: Ennemy[];
    stageName: string;
    onClose: () => void;
}

const StageModal: React.FC<ModalProps> = ({ ennemies, stageName, onClose}) => {

    return (
        <>
            <div className={styles.modalOverlay}>
                <div className={styles.modalWrapper}>
                    <div className={styles.modal}>
                        <div className={`${styles.modalHeader} font-semibold text-lg p-2`}>
                            <p>Niveau : {stageName} </p>
                        </div>
                        <div className={`${styles.modalBody}`}>
                            <div>

                            </div>
                            <div>
                                <div className="battleInfo">

                                </div>
                                <div className="ennemyList">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default StageModal;