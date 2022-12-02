import { createSlice } from '@reduxjs/toolkit';
import { REQUEST, SUCCESS, FAIL, PRODUCT_ACTION } from 'redux/constans';

const initialState = {
    productList: {
        data: [],
        error: null,
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
        [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state) => {
            console.log('getProductList');
            return {
                ...state,
                productList: {
                    ...state.productList,
                },
            };
        },
        [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
            console.log('getProductList');
            const data = action.payload;
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data: data,
                },
            };
        },

        [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
            const { error } = action.payload;
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

export default productReducer.reducer;
