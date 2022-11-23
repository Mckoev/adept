import { createSlice } from '@reduxjs/toolkit';

const selectedAllWorkers = createSlice({
    name: 'selectedAllWorkers',
    initialState: false,
    reducers: {
        selectedAllWorkersAction(state, action) {
            return action.payload
        }
    },
});

export default selectedAllWorkers.reducer;
export const { selectedAllWorkersAction } = selectedAllWorkers.actions;
