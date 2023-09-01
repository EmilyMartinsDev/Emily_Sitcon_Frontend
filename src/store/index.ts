import { configureStore } from "@reduxjs/toolkit";

import api from "../services/api";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootRedux = ReturnType<typeof store.getState>;
