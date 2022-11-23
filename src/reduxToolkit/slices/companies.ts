import {createSlice} from '@reduxjs/toolkit';

const companies = createSlice({
    name: 'companies',
    initialState: [],
    reducers: {
        companiesAction(state, action) {
            return action.payload
        },
    },
});

export default companies.reducer;
export const {companiesAction} = companies.actions;
