import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 0,
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
                const removeSalad = (state.cart.salad -= 1);
            } else if (action.payload === 'bacon') {
                const removeBacon = (state.cart.bacon -= 1);
            } else if (action.payload === 'cheese') {
                const removeCheese = (state.cart.cheese -= 1);
            } else if (action.payload === 'meat') {
                const removeMeat = (state.cart.meat -= 1);
            }
        },
        incrementByAmount: (state) => {
            state.totalPrice =
                state.cart.salad + state.cart.bacon + state.cart.cheese + state.cart.meat;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = burgerSlice.actions;
export const showConnt = (state) => state.burger.value;

export default burgerSlice.reducer;
