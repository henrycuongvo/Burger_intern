import { put, takeEvery, debounce } from 'redux-saga/effects';
import axios from 'axios';
import { REQUEST, SUCCESS, FAIL } from 'redux/constans';
import { PRODUCT_ACTION } from 'redux/constans/burger.constant';

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
            type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST),
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
    yield debounce(
        300,
        REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST),
        getProductListSaga,
    );
}
