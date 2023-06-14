import EnnemyBox from "../ennemyBox/EnnemyBox";
import { ennemy } from "@/interfaces/ennemy/ennemy";

const ennemyArray: ennemy[] = [
    {
        name : 'Draugr',
        pv : 150,
        id : 1,
        image : '/assets/ennemy/draugr.jpg',
        alt : 'Draugr'
    },
    {
        name : 'Squellete',
        pv : 250,
        id : 2,
        image : '/assets/ennemy/squellette.jpg',
        alt : 'squellette'
    }];


const EnnemyBattleList: React.FC = () => {
    return (
        <div className="absolute inset-x-0 top-2  flex items-center h-1/4 justify-around w-1/2 m-auto">
            {ennemyArray.map((ennemy: ennemy) => {
                return (
                    <EnnemyBox key={ennemy.id} {...ennemy}  />
                )
            })}
        </div>
    )
}

export default EnnemyBattleList;