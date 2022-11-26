import { put, takeEvery } from 'redux-saga/effects';
import { incrementSaga } from 'redux/reducers/burger.reducer';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// ...

// Our worker Saga: will perform the async increment task
export function* handleChangeValue() {
    console.log('Hello saga');
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery(incrementSaga, handleChangeValue);
}
