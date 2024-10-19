import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { repositorySlice } from './slices';

const rootReducer = combineReducers({
  repository: repositorySlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
