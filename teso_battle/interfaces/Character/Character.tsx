import { skillsList } from "../battleAction/skill";


export interface Character {
    name: string;
    pv: number;
    id: number;
    skillList : skillsList;
}

export type CharacterList = Character[];