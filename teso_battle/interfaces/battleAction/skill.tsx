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

export type skillsList = skill[]
