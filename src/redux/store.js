import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './reducer';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    users: contactReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const stores = { store, persistor };

export default stores;
