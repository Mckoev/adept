import { combineReducers, configureStore } from '@reduxjs/toolkit';

import companies from "./slices/companies";

const rootReducer = combineReducers({
    companies,

});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
