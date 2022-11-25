import { fork } from 'redux-saga/effects';

import userSaga from './user.saga';

export default function* rootSga() {
    yield fork(userSaga);
}
