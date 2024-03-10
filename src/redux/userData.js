import { createSlice } from "@reduxjs/toolkit";

const userData=createSlice({
    name:'usersInfo',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})
export const {addUser,removeUser}=userData.actions;
export default userData.reducer;