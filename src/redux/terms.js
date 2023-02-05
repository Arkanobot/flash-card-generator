import { createSlice } from "@reduxjs/toolkit";

export const termsSlice = createSlice({
  name: "terms",
  initialState: {
    allTerms: [{ no: 0, name: "", defination: "", img: "" }],
  },
  reducers: {
    addterms: (state, action) => {
      state.allTerms = [...state.allTerms, action.payload];
    },
    resetTerms: (state, action) => {
      state.allTerms = [action.payload];
    },
  },
});

export const { addterms, resetTerms } = termsSlice.actions;
export default termsSlice.reducer;
