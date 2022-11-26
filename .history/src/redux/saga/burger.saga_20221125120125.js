import { put, takeEvery } from 'redux-saga/effects';
import { incrementSaga } from 'redux/reducers/burger.reducer';
import { PayloadAction } from '@reduxjs/toolkit';

// ...

// Our worker Saga: will perform the async increment task
export function* handleChangeValue(action) {
    console.log('Hello saga');
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* watchIncrementAsync() {
    console.log(' This is SagaMiddleWare');
    yield takeEvery(incrementSaga.toString(), handleChangeValue());
}
