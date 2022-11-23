import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: {
        salad: 0,
        bacon: 0,
    },
};

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        increment: (state) => {
            state.salad += 1;
        },
        decrement: (state) => {
            state.salad -= 1;
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
