import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import dynamicMiddlewares from "redux-dynamic-middlewares";
import { createInjectorsEnhancer } from "redux-injectors";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createReducer } from "./create-reducer";

/**
 *
 * whitelist initial slices/reducer paths to add to persist.
 *
 */
export const persistWhiteList = [];

export const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: persistWhiteList,
};

/**
 *
 * Creating a persisted reducer along with the dynamic reducer injector - createReducer;
 *
 */
const persistedReducer = persistReducer(persistConfig, createReducer());

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
      /**
       *
       * Adding dynamicMiddlewares, so that we can inject middlewares from any where on demand.
       *
       */
    }).concat(dynamicMiddlewares);

    return middlewares;
  },
  enhancers: [
    createInjectorsEnhancer({
      createReducer: createReducer,
      /**
       *
       * This setup needs dynamic reducer injection, but doesn't require saga to handle side effects
       * using RTK Query to handle queries. so passed as empty.
       *
       */
      runSaga: () => {},
    }),
  ],
});

const persistor = persistStore(store);

/**
 *
 * setupListeners is called on dispatch, this enables query configs like refetchOnFocus.
 *
 */
setupListeners(store.dispatch);

export { persistor, store };
