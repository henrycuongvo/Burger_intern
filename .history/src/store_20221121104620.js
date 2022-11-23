import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/reducers/burger.reducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
