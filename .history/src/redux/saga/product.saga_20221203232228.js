import { put, takeEvery, debounce } from 'redux-saga/effects';
import axios from 'axios';
import {
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_REQUEST,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    GET_PRODUCT_LIST_FAIL,
} from 'redux/reducers/product.reducer';

function* createProductSaga(action) {
    try {
        const { data, callback } = action.payload;
        yield axios.post(`http://localhost:4000/products`, data);
        yield put({ type: CREATE_PRODUCT_SUCCESS });
        yield callback.goToList();
    } catch (e) {
        yield put({
            type: CREATE_PRODUCT_FAIL,
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
            type: GET_PRODUCT_LIST_FAIL,
            payload: {
                error: 'Lỗi không xác định',
            },
        });
    }
}

export default function* productSaga() {
    yield takeEvery(CREATE_PRODUCT_REQUEST, createProductSaga);
    yield takeEvery(GET_PRODUCT_LIST_REQUEST, getProductListSaga);
}
