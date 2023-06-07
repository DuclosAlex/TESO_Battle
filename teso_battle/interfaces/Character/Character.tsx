import { skillsList } from "../battleAction/skill";


export interface Character {
    name: string;
    pv: number;
    id: number;
    is_selected : boolean;
    skillList : skillsList;
}

export type CharacterList = Character[];