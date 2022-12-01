import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productReducer from 'redux/reducers/product.reducer';
import userReducer from 'redux/reducers/user.reducer';
import rootSga from 'redux/saga';

import burgerReducer from './redux/reducers/burger.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        burger: burgerReducer,
        user: userReducer,
        product: productReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false }),
        sagaMiddleware,
    ],
});
sagaMiddleware.run(rootSga);
