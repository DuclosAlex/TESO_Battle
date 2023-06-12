import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { skill } from "@/interfaces/battleAction/skill";

type skillState = {
    currentSkill : skill[]
}

const initialState = {
    currentSkill : []
} as skillState;

export const skillSlice = createSlice({
    name: 'skillType',
    initialState,
    reducers: {
        addSkill: (state, action: PayloadAction<skill>) => {
            return {
                ...state,
                currentSkill : state.currentSkill.concat(action.payload)
            };
            
        },
        resetSkill : () => initialState
    }
})

export const { addSkill, resetSkill } = skillSlice.actions

export default skillSlice.reducer

