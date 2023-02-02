import { createSlice } from "@reduxjs/toolkit";

export const activeTabSlice = createSlice({
  name: "activeTab",
  initialState: {
    active: "createNew",
  },
  reducers: {
    activetab: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { activetab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
