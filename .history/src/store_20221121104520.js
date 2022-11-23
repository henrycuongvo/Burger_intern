import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/reducers/burger.reducer';

const initialState = {
    cart: {},
};
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
