import { createSlice } from '@reduxjs/toolkit';
import { REQUEST, SUCCESS, FAIL, PRODUCT_ACTION } from 'redux/constans';

const initialState = {
    productList: {
        data: [],
        error: null,
        loading: false,
    },

    createProductData: {
        error: null,
    },
    salad: 0,
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
            console.log('getProductList');
            return {
                ...state,
                productList: {
                    ...state.productList,
                    loading: true,
                },
            };
        },
        [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
            console.log(action);
            const data = action.payload;
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data: data,
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
        textRedux: (state, action) => {
            state.salad = action.payload;
        },
    },
});

export default productReducer.reducer;
