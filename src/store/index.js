// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const rootReducer = {
    // your reducers go here
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;