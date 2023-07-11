import { Ennemy } from "../Ennemy/ennemy";

export interface Stage {
    id: number;
    name: string;
    ennemies: Ennemy[];
}