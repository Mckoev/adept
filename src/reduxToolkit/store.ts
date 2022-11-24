import {combineReducers, configureStore} from '@reduxjs/toolkit';
import companies from "./slices/companies";
import workers from "./slices/workers";
import selectedAllWorkers from "./slices/selectedAllWorkers";
import selectedAllCompanies from "./slices/selectedAllCompanies";

const rootReducer = combineReducers({
    companies,
    workers,
    selectedAllWorkers,
    selectedAllCompanies
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
