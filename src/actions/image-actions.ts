import { ActionTypes } from "./action-types";
import { ImageDetails, RecentImage } from "../types/types";
import { createAction } from "typesafe-actions";

export const addRecentImagesAction = createAction(
  ActionTypes.ADD_RECENT_IMAGES,
  resolve => {
    return (payload: { recentImages: Array<RecentImage> }) => resolve(payload);
  }
);

export const addImageDetails = createAction(
  ActionTypes.ADD_IMAGE_DETAILS,
  resolve => {
    return (payload: { imageDetails: Array<ImageDetails> }) => resolve(payload);
  }
);

export const fetchRecentImagesAction = createAction(
  ActionTypes.FETCH_IMAGES,
  resolve => {
    return () => resolve();
  }
);

export const fetchImageSizesAction = createAction(
  ActionTypes.FETCH_IMAGES_SIZES,
  resolve => {
    return (payload: { imageId: string }) => resolve(payload);
  }
);
