import { fork } from 'redux-saga/effects';
import productSaga from './product.saga';
import userSaga from './user.saga';

export default function* rootSga() {
    // yield fork(userSaga);
    yield fork(productSaga);
}
