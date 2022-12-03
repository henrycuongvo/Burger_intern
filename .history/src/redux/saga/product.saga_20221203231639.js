import { put, takeEvery, debounce } from 'redux-saga/effects';
import axios from 'axios';
import { REQUEST, SUCCESS, FAIL } from 'redux/constans';
import { PRODUCT_ACTION } from 'redux/constans/product.constant';
import { createReducer } from '@reduxjs/toolkit';
import { GET_PRODUCT_LIST_SUCCESS } from 'redux/reducers/product.reducer';
import { GET_PRODUCT_LIST_REQUEST } from 'redux/action/product.action';

function* createProductSaga(action) {
    try {
        const { data, callback } = action.payload;
        yield axios.post(`http://localhost:4000/products`, data);
        yield put({ type: SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT) });
        yield callback.goToList();
    } catch (e) {
        yield put({
            type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
            payload: {
                error: 'Lỗi không xác định',
            },
        });
    }
}
function* getProductListSaga(action) {
    try {
        const result = yield axios.get(`http://localhost:4000/products`);
        yield put({
            type: GET_PRODUCT_LIST_SUCCESS,
            payload: {
                data: result.data,
            },
        });
    } catch (e) {
        yield put({
            type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST),
            payload: {
                error: 'Lỗi không xác định',
            },
        });
    }
}

export default function* productSaga() {
    yield takeEvery(REQUEST(PRODUCT_ACTION.CREATE_PRODUCT), createProductSaga);
    yield takeEvery(GET_PRODUCT_LIST_REQUEST, getProductListSaga);
}
