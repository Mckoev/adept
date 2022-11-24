import {createSlice} from '@reduxjs/toolkit';

const selectedAllCompanies = createSlice({
    name: 'selectedAllCompanies',
    initialState: false,
    reducers: {
        selectedAllCompaniesAction(state, action) {
            return action.payload
        }
    },
});

export default selectedAllCompanies.reducer;
export const {selectedAllCompaniesAction} = selectedAllCompanies.actions;
