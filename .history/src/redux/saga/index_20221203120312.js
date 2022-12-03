import { fork } from 'redux-saga/effects';
import textReducer from 'redux/reducers/text.reducer';
import productSaga from './product.saga';
import textSaga from './text.saga';
import userSaga from './user.saga';

export default function* rootSga() {
    yield fork(userSaga);
    yield fork(productSaga);
    yield fork(textSaga);
}
