import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './redux/reducers/burger.reducer';

export const store = configureStore({
    reducer: {
        burger: burgerReducer,
    },
});
