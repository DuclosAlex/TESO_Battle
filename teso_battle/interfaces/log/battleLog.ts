import { skillType } from "../battleAction/skill";

export interface battleLog {
    log: string;
    id: number;
    type: skillType;
}