import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { todos } from "./reducers/todoReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";

const reducers = { todos };

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configurStore = () =>
  createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
