import { createSlice } from "@reduxjs/toolkit";

const country = createSlice({
name:'countryStatus',
  initialState: {
    changedCountry: "in",
  },
  reducers: {
    setCountry: (state, action) => {
        state.changedCountry=action.payload;
    },
  },
});
export const {setCountry}=country.actions;
export default country.reducer;

