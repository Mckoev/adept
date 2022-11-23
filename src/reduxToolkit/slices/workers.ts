import { createSlice } from '@reduxjs/toolkit';

const workers = createSlice({
    name: 'workers',
    initialState: [],
    reducers: {
        workersAction(state, action) {
            return action.payload
        }
    },
});

export default workers.reducer;
export const { workersAction } = workers.actions;
