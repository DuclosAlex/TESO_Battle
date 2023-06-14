import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Ennemy } from "@/interfaces/Ennemy/ennemy";
import { skill } from "@/interfaces/battleAction/skill";


type ennemyState = {
    ennemies : Ennemy[];
}

const initialState = {
    ennemies: []
} as ennemyState;

const ennemySlice = createSlice({
    name: 'ennemy',
    initialState,
    reducers: {
        selectEnnemy: (state, action: PayloadAction<Ennemy>) => {
            return {
                ...state,
                ennemies : state.ennemies.concat(action.payload)
            }
        },
        updateLifePoint: (state, action: PayloadAction<skill>) => {
            switch(action.payload.type) {
                case 'attack' : 
                    if(state.ennemies[0]) {
                        state.ennemies[0].pv -= action.payload.power;
                    }
                    break;
                case 'heal' :
                    if(state.ennemies[0]) {
                        state.ennemies[0].pv += action.payload.power;
                    }
                    break;
                default :
                    console.log('default');
                    break;
            }
        },
        resetEnnemy : () => initialState,
    }   
});

export const { selectEnnemy, resetEnnemy, updateLifePoint } = ennemySlice.actions;
export default ennemySlice.reducer;