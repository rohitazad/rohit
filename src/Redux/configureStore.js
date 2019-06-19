import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/index";
import reduxImmutableStateInariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
export default function configureStore(initialState) {
  const composenEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools only single time

  return createStore(
    rootReducer,
    applyMiddleware(thunk),
    initialState,
    composenEnhancers(applyMiddleware(reduxImmutableStateInariant()))
  );
}
