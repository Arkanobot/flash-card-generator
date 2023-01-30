import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "./isMobile";

export default configureStore({
  reducer: {
    mobile: mobileReducer,
  },
});
