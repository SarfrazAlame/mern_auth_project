import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'

const rootReducer = combineReducers({ user: userReducer })

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
