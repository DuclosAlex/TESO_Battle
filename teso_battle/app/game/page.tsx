import { NextPage } from "next";
import GameObject from "@/components/gameObject/gameObject";
import styles from './page.module.css';


const Game: NextPage = () => {
    return (
        <div className={`h-full ${styles.backgroundBattlefield}`}>
            <GameObject />
        </div>
    )
}

export default Game;