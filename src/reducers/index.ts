import { combineReducers } from "redux";

import { imageReducers } from "./image-reducers";

const rootReducer = combineReducers({
  images: imageReducers
});

export default rootReducer;
