import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import localforage from "localforage";
import rootReducer from "../reducers";
import {persistReducer, persistStore} from "redux-persist";

const config = {
  key: 'root',
  storage: localforage,
  whitelist: ['form'],
};

const persistedReducer = persistReducer(config, rootReducer);
const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

export const persistor = persistStore(store);
export type ReduxState = ReturnType<typeof store.getState>;
export default store;
