import { createSlice } from "@reduxjs/toolkit";

export const flashcardSlice = createSlice({
  name: "flashcards",
  initialState: {},
  reducers: {
    cardVal: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cardVal } = flashcardSlice.actions;
export default flashcardSlice.reducer;
