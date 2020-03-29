import {
  addRecentImagesAction,
  fetchRecentImagesAction
} from "./../actions/image-actions";
import { ActionTypes } from "./../actions/action-types";
import { ajax } from "rxjs/ajax";
import { ActionsObservable, StateObservable } from "redux-observable";
import { ActionType } from "typesafe-actions";
import { State, RecentImage } from "../types";
import { mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { Observable, of } from "rxjs";

const FLICKR_API_KEY = process.env || "746ed29f9373e4f3628d6c3b3028eaac"; // normally in env, here just for example

const FLICKR_SEARCH_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${FLICKR_API_KEY}&per_page=${10}&format=json&nojsoncallback=1`;

const getRecentImages = (payload: {}): Observable<Array<RecentImage>> =>
  ajax.getJSON(FLICKR_SEARCH_URL);

// epic
export const imageRequestEpic = (
  action$: ActionsObservable<ActionType<typeof fetchRecentImagesAction>>,
  state$: StateObservable<State>
) => {
  console.log("yoyo");
  // @ts-ignore
  return action$.ofType(ActionTypes.FETCH_IMAGES).pipe(
    withLatestFrom(state$),
    switchMap(([action, state]) => {
      console.log("heyhey");
      return getRecentImages({}).pipe(
        mergeMap(
          (recentImages: Array<RecentImage>): Observable<any> => {
            console.log(recentImages);
            const actions = [];
            actions.push(addRecentImagesAction({ recentImages: recentImages }));
            return of(...actions);
          }
        )
      );
    })
  );
};
