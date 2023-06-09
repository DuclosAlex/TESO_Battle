import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "@/redux/slice/characterSlice";
import  skillTypeSlice from "../slice/skillTypeSlice";


export const store = configureStore({
    reducer : {
        characterSlice, skillTypeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;