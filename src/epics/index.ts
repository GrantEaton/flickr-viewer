import { combineEpics } from "redux-observable";
import * as imageEpics from "./image-epics";

const rootEpic = (action$: any, store$: any, dependencies: any) =>
  combineEpics(...Object.values(imageEpics))(action$, store$);

export default rootEpic;
