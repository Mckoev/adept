import {createSlice} from '@reduxjs/toolkit';

const showWorkers = createSlice({
    name: 'showWorkers',
    initialState: false,
    reducers: {
        showWorkersAction(state, action) {
            return action.payload
        }
    },
});

export default showWorkers.reducer;
export const {showWorkersAction} = showWorkers.actions;
