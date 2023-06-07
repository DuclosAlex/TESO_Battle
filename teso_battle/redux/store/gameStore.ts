import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "@/redux/slice/characterSlice";


export const store = configureStore({
    reducer : {
        characterSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;