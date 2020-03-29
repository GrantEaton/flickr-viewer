import { ActionTypes } from "./../actions/action-types";
import { ImageStoreState } from "./../types";
import { ImageActions } from "../actions";
import { State } from "../types";

const initialState = {
  recentImages: [],
  images: []
};

export const imageReducers = (
  state: ImageStoreState = initialState,
  action: ImageActions
) => {
  switch (action.type) {
    case ActionTypes.ADD_RECENT_IMAGES:
      return Object.assign({}, state, {
        images: [...state.images, action.payload.recentImages]
      });
    case ActionTypes.ADD_IMAGE_DETAILS:
      return Object.assign({}, state, {
        images: [...state.images, action.payload.imageDetails]
      });
    default:
      return state;
  }
};

export const selectImages = (state: State) => state;
