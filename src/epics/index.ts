import { combineEpics } from "redux-observable";
import * as imageEpics from "./image-epics";
import { catchError } from "rxjs/operators";

const rootEpic = (action$: any, store$: any, dependencies: any) =>
  combineEpics(...Object.values(imageEpics))(
    action$,
    store$,
    dependencies
  ).pipe(
    catchError((error: any, source: any) => {
      console.error(error);
      return source;
    })
  );

export default rootEpic;
