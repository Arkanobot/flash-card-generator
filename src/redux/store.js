import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "./isMobile";
import cardReducer from "./flashcards";
import activeReducer from "./activeTab";

export default configureStore({
  reducer: {
    mobile: mobileReducer,
    cards: cardReducer,
    active: activeReducer,
  },
});
