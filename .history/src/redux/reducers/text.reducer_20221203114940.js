import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productList: {
        data: [],
    },
};

const textReducer = createSlice({
    name: 'text',
    initialState,
    reducers: {},
});
