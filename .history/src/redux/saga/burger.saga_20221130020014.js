import { put, takeEvery, debounce } from 'redux-saga/effects';
import axios from 'axios';
import { addProduct } from 'redux/reducers';
import { REQUEST, SUCCESS, FAIL } from 'redux/constans';
import { PRODUCT_ACTION } from 'redux/constans/burger.constant';

function* createProduct(action) {
    try {
        const { data } = action.payload;
        yield axios.post(`http://localhost:4000/products`, data);
        yield put({ type: addProduct });
        // yield callback.goToList();
    } catch (e) {
        // yield put({
        //     type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
        //     payload: {
        //         error: 'Lỗi không xác định',
        //     },
        // });
    }
}

export default function* burgerSaga() {
    yield takeEvery(REQUEST(PRODUCT_ACTION.CREATE_PRODUCT), createProduct);
}
