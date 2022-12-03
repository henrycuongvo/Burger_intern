import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { PRODUCT_ACTION, REQUEST } from 'redux/constans';

function* getProductList() {}

export default function* textSaga() {
    yield takeEvery(REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST), getProductList);
}
