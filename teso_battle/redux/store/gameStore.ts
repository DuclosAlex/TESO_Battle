import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "@/redux/slice/characterSlice";
import  skillSlice from "../slice/skillSlice";


export const store = configureStore({
    reducer : {
        characterSlice, skillSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;