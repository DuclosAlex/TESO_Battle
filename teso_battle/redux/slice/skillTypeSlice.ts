import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { skill } from "@/interfaces/battleAction/skill";

type skillState = {
    skillPlayed : skill[]
}

const initialState = {
    skillPlayed : []
} as skillState;

export const skillTypeSlice = createSlice({
    name: 'skillType',
    initialState,
    reducers: {
        addSkillType: (state, action: PayloadAction<skill>) => {

            let updatedSkillPlayed;
            
            if (state.skillPlayed.length >= 5) {
                updatedSkillPlayed = state.skillPlayed.slice(1).concat(action.payload);
            } else {
                updatedSkillPlayed = state.skillPlayed.concat(action.payload);
            }

            return {
                ...state,
                skillPlayed: updatedSkillPlayed
            };
        }
    }
})

export const { addSkillType} = skillTypeSlice.actions

export default skillTypeSlice.reducer

