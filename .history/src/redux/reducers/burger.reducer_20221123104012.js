import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
};
export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        increment: (state, action) => {
            if (action.payload === 'salad') {
                state.cart.salad += 1;
            } else if (action.payload === 'bacon') {
                state.cart.bacon += 1;
            } else if (action.payload === 'cheese') {
                state.cart.cheese += 1;
            } else if (action.payload === 'meat') {
                state.cart.meat += 1;
            }
        },
        decrement: (state, action) => {
            if (action.payload === 'salad') {
                state.cart.salad -= 1;
            } else if (action.payload === 'bacon') {
                state.cart.bacon -= 1;
            } else if (action.payload === 'cheese') {
                state.cart.cheese -= 1;
            } else if (action.payload === 'meat') {
                state.cart.meat -= 1;
            }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = burgerSlice.actions;
export const showConnt = (state) => state.burger.value;

export default burgerSlice.reducer;
