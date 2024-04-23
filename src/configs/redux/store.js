import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
