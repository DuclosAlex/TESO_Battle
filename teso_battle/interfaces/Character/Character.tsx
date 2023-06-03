import { attack } from "../battleAction/attack";


export interface Character {
    name: string;
    pv: number;
    id: number;
    attackList : attack[]
}