import { NextPage } from "next";
import GameObject from "@/components/gameObject/gameObject";


const Game: NextPage = () => {
    return (
        <div className="h-full">
            <GameObject />
        </div>
    )
}

export default Game;