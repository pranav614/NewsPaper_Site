import { createSlice } from "@reduxjs/toolkit";

const modeTheme=createSlice({
    name:"theme",
    initialState:{
        theme:true,
    },
    reducers:{
        changedBooleanMode:(state,action)=>{
            state.theme=!state.theme
        }
    }
})
export const {changedBooleanMode}=modeTheme.actions;
export default modeTheme.reducer;