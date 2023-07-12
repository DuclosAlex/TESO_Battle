'use client'
import { Ennemy } from "@/interfaces/Ennemy/ennemy";
import styles from './stageModal.module.css';
import ReactPortal from "../ReactPortal/ReactPortal";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const StageModal = ({ isOpen, onClose}: ModalProps) => {


    if(!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal">
            <>
                <div className={styles.modalOverlay}>
                    <div className={styles.modalWrapper}>
                        <div className={styles.modal}>
                            <div className={`${styles.modalHeader} font-semibold text-lg p-2`}>
                                <p>Niveau :  </p>
                                <button onClick={onClose} className="text-red-500 bg-white">X</button>
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
        </ReactPortal>
    )
    }

export default StageModal;