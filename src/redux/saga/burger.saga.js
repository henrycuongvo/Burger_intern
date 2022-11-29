import { put, takeEvery, debounce } from 'redux-saga/effects';
import axios from 'axios';
import { addProduct } from 'redux/reducers';

function* createProduct(action) {
    try {
        const { data, callback } = action.payload;
        yield axios.post(`http://localhost:4000/products`, data);
        yield put({ type: '' });
        yield callback.goToList();
    } catch (e) {
        yield put({
            type: '',
            payload: {
                error: 'Lỗi không xác định',
            },
        });
    }
}

export default function* burgerSaga() {
    yield takeEvery(addProduct, createProduct);
}
