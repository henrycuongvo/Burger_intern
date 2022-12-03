import { createSlice } from '@reduxjs/toolkit';
import { PRODUCT_ACTION, REQUEST } from 'redux/constans';

const initialState = {
    productList: {
        data: [],
    },
};

const textReducer = createSlice({
    name: 'text',
    initialState,
    reducers: {
        [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
            const data = action.payload;
            return {
                ...state,
                productList: {
                    data: data,
                },
            };
        },
    },
});
