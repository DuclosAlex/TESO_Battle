import { skill } from "@/interfaces/battleAction/skill";
import { Character } from "@/interfaces/Character/Character";
import { Ennemy } from "@/interfaces/Ennemy/ennemy";

import { battleLog } from "@/interfaces/log/battleLog";

// Service to make battle log
const dispatchBattleLog = (skill: skill, character: Character, ennemy: Ennemy): battleLog => {

    let messageLog = { log: '', id: 0, type: skill.type};

    switch(skill.type) {
        // A plus long terme il faudra vérifier le statut de la cible et du lanceur
        // Également faire des vérifications si le type d'attaque est  autorisé
        case 'attack' :
            messageLog.log = `${character.name} inflige ${skill.power} de dégats à ${ennemy.name}`;
            messageLog.id = Date.now();
            
            break;
            
        case 'heal' : 
            messageLog.log = `${character.name} soigne ${skill.power} point de vie à ${ennemy.name}`;
            messageLog.id = Date.now();
            break;
        default :
        break;
    }
    return messageLog;
}

export default dispatchBattleLog