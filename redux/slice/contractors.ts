import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "@/Api's";

export interface CounterState{
    data: [] | null,
    loading: boolean,
    error: string | null
}
const initialState: CounterState={
    data: [],
    loading: false,
    error: ""
}

export const getContractors= createAsyncThunk("contractor", async()=>{
    return await axios.get(`${baseUrl}/similar-profiles`);
})
export const contractorSlice= createSlice({
    name: 'contractor',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getContractors.pending, (state)=>{
            state.loading= true;
        })
        .addCase(getContractors.fulfilled, (state, action: PayloadAction<any>)=>{
            state.loading= false;
            state.error=null;
            state.data= action.payload;
        })
        .addCase(getContractors.rejected,(state, action: PayloadAction<any>)=>{
            state.loading= false;
            state.error= action.payload;
            state.data= []

        })
    }
});

export default contractorSlice.reducer;