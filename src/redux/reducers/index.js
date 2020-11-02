import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import mostPopularMoviesReducer from "./mostPopularMoviesReducer";
const rootReducer = combineReducers({
  //   demoReducer,
  searchReducer,
  mostPopularMoviesReducer,
});

export default rootReducer;
