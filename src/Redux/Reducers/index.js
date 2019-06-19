import { combineReducers } from "redux";
import courses from "./courseReducers";
import posts from "./postReducer";

const rootReducer = combineReducers({
  courses,
  posts
});

export default rootReducer;
