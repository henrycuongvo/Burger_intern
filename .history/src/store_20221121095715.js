import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './redux/reducers/burger.reducer';

const initState = {
    user: {},
    token: '',
    cart: {},
    isAuthenticated: false,
};

export const store = configureStore({
    reducer: {
        burger: burgerReducer,
    },
});
