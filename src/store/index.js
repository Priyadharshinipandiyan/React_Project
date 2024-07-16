import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../services/auth/authSlice';
import userReducer from '../services/user/userSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
});

export default store;
