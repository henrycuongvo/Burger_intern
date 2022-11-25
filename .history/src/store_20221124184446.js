import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './redux/reducers/burger.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSga from 'redux/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        burger: burgerReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false }),
        sagaMiddleware,
    ],
});
sagaMiddleware.run(rootSga);
