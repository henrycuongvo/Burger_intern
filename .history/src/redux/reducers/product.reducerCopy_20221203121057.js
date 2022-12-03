import { createSlice } from '@reduxjs/toolkit';
import { REQUEST, SUCCESS, FAIL, PRODUCT_ACTION } from 'redux/constans';
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
        [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state) => {
            return {
                ...state,
                productList: {
                    ...state.productList,
                    loading: true,
                    error: null,
                },
            };
        },
        [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
            const { data, meta, more } = action.payload;
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data: more ? [...state.productList.data, ...data] : data,
                    meta: meta,
                    loading: false,
                },
            };
        },
        [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
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

        [REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
            return {
                ...state,
                createProductData: {
                    ...state.createProductData,
                    loading: true,
                    error: null,
                },
            };
        },
        [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
            return {
                ...state,
                createProductData: {
                    ...state.createProductData,
                    loading: false,
                },
            };
        },
        [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
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

        [REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
            return {
                ...state,
                updateProductData: {
                    ...state.updateProductData,
                    loading: true,
                    error: null,
                },
            };
        },
    },
});
export default productReducer.reducer;
