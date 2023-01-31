import { createSlice } from "@reduxjs/toolkit";

export const flashcardSlice = createSlice({
  name: "flashcards",
  initialState: {
    cards: {},
  },
  reducers: {
    cardVal: (state, action) => {
      state.cards = Object.assign(state.cards, action.payload);
    },
  },
});

export const { cardVal } = flashcardSlice.actions;
export default flashcardSlice.reducer;
