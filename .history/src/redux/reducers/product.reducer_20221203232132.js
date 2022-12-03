import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productList: {
        data: [],
        loading: false,
        error: null,
    },

    createProductData: {
        loading: false,
        error: null,
    },
};

const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        GET_PRODUCT_LIST_REQUEST: (state) => {
            return {
                ...state,
                productList: {
                    ...state.productList,
                    loading: true,
                    error: null,
                },
            };
        },
        GET_PRODUCT_LIST_SUCCESS: (state, action) => {
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
        GET_PRODUCT_LIST_FAIL: (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                productList: {
                    ...state.productList,
                    loading: false,
                    error: error,
                },
            };
        },

        CREATE_PRODUCT_REQUEST: (state, action) => {
            return {
                ...state,
                createProductData: {
                    ...state.createProductData,
                    loading: true,
                    error: null,
                },
            };
        },
        CREATE_PRODUCT_SUCCESS: (state, action) => {
            console.log('createProductReducer');
            return {
                ...state,
                createProductData: {
                    ...state.createProductData,
                    loading: false,
                },
            };
        },
        CREATE_PRODUCT_FAIL: (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                createProductData: {
                    ...state.createProductData,
                    loading: false,
                    error: error,
                },
            };
        },
    },
});
export const {
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_REQUEST,
    GET_PRODUCT_LIST_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
} = productReducer.actions;
export default productReducer.reducer;
