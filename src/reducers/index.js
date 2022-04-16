import { combineReducers } from "redux";
import subredditReducers from "./subreddit";

const allReducers = combineReducers({
  subreddit: subredditReducers,
});

export default allReducers;
