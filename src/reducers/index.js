import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import gameDetailReducer from "./gameDetailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: gameDetailReducer,
});

export default rootReducer;
