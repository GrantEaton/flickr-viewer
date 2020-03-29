import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "../epics";
import rootReducer from "../reducers";

const epicMiddleware = createEpicMiddleware();

const middleware = [epicMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composedEhancers = composeEnhancers(applyMiddleware(...middleware));

export default function configureStore() {
  const store = createStore(rootReducer, composedEhancers);

  epicMiddleware.run(rootEpic);

  return store;
}
