import { applyMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/useSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, userReducer)


// const persistedReducer = persistReducer(persistConfig)
 
export const store = configureStore({
    reducer: {
          user: persistedReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })

export const Persistor=persistStore(store)


