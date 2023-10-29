import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice.js';
import transReducer from './slices/transSlice.js';
import { apiSlice, apiTransSlice } from "./slices/apiSlice.js";

const store = configureStore({
        reducer: {
            auth: authReducer,
            [apiSlice.reducerPath]: apiSlice.reducer,
            trans: transReducer,
            [apiTransSlice.reducerPath]: apiTransSlice.reducer,



        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiTransSlice.middleware),
        devTools: true
    });

export default store;