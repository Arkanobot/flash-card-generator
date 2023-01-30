import { createSlice } from "@reduxjs/toolkit";

export const isMobileSlice = createSlice({
  name: "isMobile",
  initialState: {
    isMobile: false,
  },

  reducers: {
    mobileVal: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { mobileVal } = isMobileSlice.actions;
export default isMobileSlice.reducer;
