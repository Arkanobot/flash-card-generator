import { combineReducers } from "redux";
import flashCardReducer from "./flashCardReducer";

const reducers = combineReducers({
  card: flashCardReducer,
});

export default reducers;
