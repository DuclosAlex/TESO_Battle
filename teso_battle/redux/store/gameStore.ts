import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "@/redux/slice/characterSlice";
import  skillSlice from "../slice/skillSlice";
import ennemySlice from "../slice/ennemySlice";
import battleLogSlice from "../slice/battleLogSlice";


export const store = configureStore({
    reducer : {
        characterSlice, skillSlice, ennemySlice, battleLogSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;