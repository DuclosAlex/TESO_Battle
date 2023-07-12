import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Character } from "@/interfaces/Character/Character";

type characterState = {
    currentCharacters: Character[],
    characters: Character[]
}

const initialState = {
    currentCharacters: [],
    characters : []
} as characterState;

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        selectCharacter: (state, action: PayloadAction<Character>) => {
            return {
                ...state, 
                currentCharacters : state.currentCharacters.concat(action.payload)
            }
        },
        keepAllCharacters: (state, action: PayloadAction<Character[]>) => {
            return { 
                ...state,
                characters : state.characters.concat(action.payload)
            }
        },
        reset: () => initialState,
    }
})

export const {selectCharacter, keepAllCharacters, reset} = characterSlice.actions

export default characterSlice.reducer