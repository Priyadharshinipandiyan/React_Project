import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    details: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.details = action.payload;
        },
    },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer; // Ensure this is the default export
