import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "./isMobile";
import cardReducer from "./flashcards";

export default configureStore({
  reducer: {
    mobile: mobileReducer,
    cards: cardReducer,
  },
});
