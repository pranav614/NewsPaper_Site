import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";
import changedBooleanMode  from "./modeTheme";
import  setCountry  from "./country";
import newsHeadLines from "./newsHeadLines";


const storeConfig=configureStore({
    name:'News-Paper Site Store',
    reducer:{
        user:userData,
        theme:changedBooleanMode,
        country:setCountry,
        newsheadlines:newsHeadLines,
    },
})
export default storeConfig;