/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "@reduxjs/toolkit";
import { allApi } from "app/services/all-api";
import { persistReducer } from "redux-persist";
import { persistConfig } from "./store";
import { InjectedReducersType } from "./store-types";

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return (state: any) => state;
  } else {
    return persistReducer(
      persistConfig,
      combineReducers({
        ...injectedReducers,
        [allApi.reducerPath]: allApi.reducer,
      })
    );
  }
}
