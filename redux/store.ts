import { configureStore } from "@reduxjs/toolkit"; 
import contractorReducer from "./slice/contractors";

export const store= configureStore({
    reducer:{
        contractor: contractorReducer
    }
})

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;