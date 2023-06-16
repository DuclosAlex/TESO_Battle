import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import BattleLog from "@/components/BattleLog/BattleLog";
import { battleLog } from "@/interfaces/log/battleLog";

type battleLogState = {
    battleLog: battleLog[];
}

const initialState = {
    battleLog: []
} as battleLogState;

export const battleLogSlice = createSlice({
    name : 'battleLog',
    initialState,
    reducers : {
        addBattleLog: (state, action: PayloadAction<battleLog>) => {
            return { 
                ...state,
                battleLog : state.battleLog.concat(action.payload)
            }
        },
        resetBattleLog: () => initialState,
    }
})

export const { addBattleLog, resetBattleLog } = battleLogSlice.actions;

export default battleLogSlice.reducer;