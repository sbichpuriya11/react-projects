import updateValue from "./updateCounterValue";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  updateValue,
  // Add all other reducers
});

export default rootReducers;
