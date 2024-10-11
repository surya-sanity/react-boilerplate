import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQueryWithInterceptor } from "./api";

// code split, inject endpoints into a single createApi. manage tags here.
export const allApi = createApi({
  reducerPath: "allApi",
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
  refetchOnReconnect: false,
  refetchOnFocus: false,
  refetchOnMountOrArgChange: false,
  tagTypes: ["CurrentUser"],
});
