import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: {
        value: 0,
    },
};

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        increment: (state) => {
            state.cart += 1;
        },
        decrement: (state) => {
            state.cart -= 1;
        },
        incrementByAmount: (state, action) => {
            state.cart += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = burgerSlice.actions;
export const showConnt = (state) => state.burger.value;

export default burgerSlice.reducer;
