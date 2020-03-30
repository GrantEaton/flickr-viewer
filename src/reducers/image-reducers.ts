import { ActionTypes } from "./../actions/action-types";
import { ImageStoreState } from "../types/types";
import { ImageActions } from "../actions";
import { State } from "../types/types";

const initialState = {
  recentImages: [],
  imageDetails: []
};

export const imageReducers = (
  state: ImageStoreState = initialState,
  action: ImageActions
) => {
  switch (action.type) {
    case ActionTypes.ADD_RECENT_IMAGES:
      return Object.assign({}, state, {
        recentImages: [...state.recentImages, ...action.payload.recentImages]
      });
    case ActionTypes.ADD_IMAGE_DETAILS:
      return Object.assign({}, state, {
        imageDetails: [...state.imageDetails, action.payload.imageDetails]
      });
    default:
      return state;
  }
};

export const selectImages = (state: State) => state;
export const selectRecentImageIds = (state: State) =>
  state.imageData &&
  state.imageData.recentImages.map(image => image && image.id);
export const selectImageDetails = (state: State) =>
  state.imageData.imageDetails;
