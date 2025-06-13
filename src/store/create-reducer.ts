import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { InjectedReducersType } from "./store-types";
import { allApi } from "app/services/all-api";

/**
 * Creates the root reducer for the store.
 *
 * It combines the static reducers (like RTK Query's API) with any
 * reducers that are injected dynamically at runtime.
 */
export function createReducer(injectedReducers: InjectedReducersType = {}): Reducer {
  // These will be available on app load.
  const staticReducers = {
    [allApi.reducerPath]: allApi.reducer,
    // Add any other static reducers here, e.g., 'theme', 'auth', etc.
  };

  // Combining the static reducers with the dynamically injected ones.
  return combineReducers({
    ...staticReducers,
    ...injectedReducers,
  });
}
