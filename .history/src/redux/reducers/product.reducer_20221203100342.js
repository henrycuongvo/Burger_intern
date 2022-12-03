import { createSlice } from '@reduxjs/toolkit';
import { REQUEST, SUCCESS, FAIL, PRODUCT_ACTION } from 'redux/constans';

const initialState = {
    productList: {
        data: 0,
        error: null,
        loading: false,
    },

    createProductData: {
        error: null,
    },
};

const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        [REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
            console.log('reducer');
            return {
                ...state,
                createProductData: {
                    ...state.createProductData,
                    error: null,
                },
            };
        },
        [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
            return {
                ...state,
                createProductData: {
                    ...state.createProductData,
                },
            };
        },
        [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                createProductData: {
                    ...state.createProductData,
                    error: error,
                },
            };
        },
        [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
            const data = action.payload;
            console.log(data);
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data: data,
                    loading: true,
                },
            };
        },
        [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
            return {
                ...state,
                productList: {
                    ...state.productList,
                    loading: false,
                },
            };
        },

        [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
            const { error } = action.payload;
            console.log(error);
            return {
                ...state,
                productList: {
                    ...state.productList,
                    error: error,
                },
            };
        },
    },
});
export const { incrementByAmount } = productReducer.actions;

export default productReducer.reducer;
