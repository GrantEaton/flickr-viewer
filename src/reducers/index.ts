import { combineReducers } from "redux";

import { imageReducers } from "./image-reducers";

const rootReducer = combineReducers({
  imageData: imageReducers
});

export default rootReducer;
