import { NextPage } from "next";
import Link from "next/link";

const GameHome: NextPage = () => {

    


    return (
        <div className="flex ">
            <Link className="bg-red-600 p-4 w-1/4 m-auto mt-8 items-center text-center justify-center" href="gameHome/campaign">Menu de campagne</Link>
        </div>
    )
}

export default GameHome;