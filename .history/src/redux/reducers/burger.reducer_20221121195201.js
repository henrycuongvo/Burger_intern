import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: {
        salad: 0,
        bacon: 0,
    },
};
console.log(initialState.cart.salad);
export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        increment: (state = initialState, action) => {
            switch (action.type) {
                case 'SALAD':
                    return (state.cart.salad += 1);
                case 'BACON':
                    return (state.cart.bacon += 1);

                default:
                    return state;
            }
        },
        decrement: (state) => {
            state.cart -= 1;
        },
        incrementByAmount: (state, action) => {
            state.salad += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = burgerSlice.actions;
export const showConnt = (state) => state.burger.value;

export default burgerSlice.reducer;
