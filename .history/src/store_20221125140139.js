import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from 'redux/reducers/user.reducer';
import rootSga from 'redux/saga';

import burgerReducer from './redux/reducers/burger.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        burger: burgerReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false }),
        sagaMiddleware,
    ],
});
sagaMiddleware.run(rootSga);
