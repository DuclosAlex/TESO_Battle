import { skillsList } from "../battleAction/skill";


export interface Character {
    name: string;
    pv: number;
    id: number;
    src: string;
    alt: string;
    skillList : skillsList;
}

export type CharacterList = Character[];