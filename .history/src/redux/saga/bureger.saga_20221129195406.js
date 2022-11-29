import { put, takeEvery, debounce } from 'redux-saga/effects';
import axios from 'axios';
function* createProductSaga(action) {
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
