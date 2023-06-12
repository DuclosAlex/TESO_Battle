import { Character } from "../Character/Character";

export interface skill {
    name: string;
    power: number;
    cost: number;
    id: number;
    type: skillType
}

export enum skillType {
    Attack = 'attack',
    Heal = 'heal'
}

export interface skillMessageLog {
    character: Character;
    skill: skill;
}

export type skillsList = skill[]
