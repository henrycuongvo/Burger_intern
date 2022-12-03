import { createSlice } from '@reduxjs/toolkit';
import { PRODUCT_ACTION, REQUEST, SUCCESS } from 'redux/constans';

const initialState = {
    productList: {
        data: [],
    },
};

const textReducer = createSlice({
    name: 'text',
    initialState,
    reducers: {
        [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
            const data = action.payload;
            console.log(data);
            return {
                ...state,
                productList: {
                    data: data,
                },
            };
        },
    },
});

export default textReducer.reducer;
