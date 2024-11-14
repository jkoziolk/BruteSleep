import { configureStore } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistCombineReducers } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import localizationReducer from './localization/localization.slice';

const persistConfig = {
  key: 'bruteSleep',
  storage: localforage,
};

const persistReducer = persistCombineReducers(persistConfig, {
  localization: localizationReducer,
});

export const store = configureStore({
  reducer: persistReducer,
  //devtools
  //middleware
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof persistReducer>;
