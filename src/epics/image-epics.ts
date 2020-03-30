import { RecentImagesResponse, ImageSizesResponse } from "../types/types";
import {
  addRecentImagesAction,
  fetchRecentImagesAction,
  addImageDetails,
  fetchImageSizesAction
} from "./../actions/image-actions";
import { ActionTypes } from "./../actions/action-types";
import { ajax } from "rxjs/ajax";
import { ActionsObservable, StateObservable } from "redux-observable";
import { ActionType } from "typesafe-actions";
import { State } from "../types/types";
import { mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { Observable, of } from "rxjs";

const FLICKR_API_KEY =
  process.env.FLICKR_API_KEY || "746ed29f9373e4f3628d6c3b3028eaac"; // normally in env, here just for example

const FLICKR_SEARCH_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${FLICKR_API_KEY}&per_page=${10}&format=json&nojsoncallback=1&safe_search=1`;
const FLICKR_SIZE_URL = (photoId: string) =>
  `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${FLICKR_API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`;

const getRecentImages = (): Observable<RecentImagesResponse> =>
  ajax.getJSON(FLICKR_SEARCH_URL) as Observable<RecentImagesResponse>;

// epic
export const recentImageRequestEpic = (
  action$: ActionsObservable<ActionType<typeof fetchRecentImagesAction>>,
  state$: StateObservable<State>
) => {
  // @ts-ignore
  return action$.ofType(ActionTypes.FETCH_IMAGES).pipe(
    withLatestFrom(state$),
    switchMap(([action, state]) => {
      const actions: any = [];
      return getRecentImages().pipe(
        mergeMap(
          (recentImagesResponse: RecentImagesResponse): Observable<any> => {
            const recentImages =
              recentImagesResponse &&
              recentImagesResponse.photos &&
              recentImagesResponse.photos.photo;

            if (recentImages) {
              actions.push(
                addRecentImagesAction({
                  recentImages
                })
              );

              return of(...actions);
            }
            return of();
          }
        )
      );
    })
  );
};

const getImageSize = (imageId: string): Observable<ImageSizesResponse> =>
  ajax.getJSON(FLICKR_SIZE_URL(imageId)) as Observable<ImageSizesResponse>;

export const imageSizeRequestEpic = (
  action$: ActionsObservable<ActionType<typeof fetchImageSizesAction>>,
  state$: StateObservable<State>
) => {
  // @ts-ignore
  return action$.ofType(ActionTypes.FETCH_IMAGES_SIZES).pipe(
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const actions: any = [];
      const { imageId } = action.payload;
      return getImageSize(imageId).pipe(
        mergeMap(
          (recentImagesResponse: ImageSizesResponse): Observable<any> => {
            const imageSize =
              recentImagesResponse &&
              recentImagesResponse.sizes &&
              recentImagesResponse.sizes.size;

            if (imageSize) {
              console.log(imageSize);
              actions.push(
                addImageDetails({
                  imageDetails: imageSize
                })
              );

              return of(...actions);
            }
            return of();
          }
        )
      );
    })
  );
};
