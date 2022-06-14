import { configureStore } from '@reduxjs/toolkit';
import policyReducer from 'store/reducers/policyReducer';
import { apiSlice } from './api/apiSlice';

const store = configureStore({
    reducer: {
        policy: policyReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;