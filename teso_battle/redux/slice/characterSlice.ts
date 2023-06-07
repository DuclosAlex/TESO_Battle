import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterList } from "@/interfaces/Character/Character";

type characterState = {
    characters: Character[]
}

const initialState = {
    characters: []
} as characterState;

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        selectCharacter: (state, action: PayloadAction<Character>) => {
            return {
                ...state, 
                characters : state.characters.concat(action.payload)
            }
        },
        reset: () => initialState,
    }
})

export const {selectCharacter, reset} = characterSlice.actions

export default characterSlice.reducer