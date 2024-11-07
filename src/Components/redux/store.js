import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

// Combine reducers (even if there's only one, to allow future additions)
const rootReducer = combineReducers({
    cart: cartSlice
});

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});



export default store;
export const persistor = persistStore(store)