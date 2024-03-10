import { createSlice } from "@reduxjs/toolkit";

const newsHeadLines=createSlice({
    name:"headlines", 
    initialState:{
        headLinesArray:[],
        journal:[],
        sportsNews:[],
        technologyNews:[],
        topHeadlines:[],
    },
    reducers:{
        addHeadlines:(state,action)=>{
            state.headLinesArray=action.payload;
        },
        addJournals:(state,action)=>{
            state.journal=action.payload;
        },
        addSportsNews:(state,action)=>{
            state.sportsNews=action.payload;
        },
        addTechNews:(state,action)=>{
            state.technologyNews=action.payload;
        },
        addTopHeadLines:(state,action)=>{
            state.topHeadlines=action.payload;
        }
    }
})
export const {addHeadlines,addJournals,addSportsNews,addTechNews,addTopHeadLines}=newsHeadLines.actions;
export default newsHeadLines.reducer;