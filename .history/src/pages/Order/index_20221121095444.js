import { configureStore } from '@reduxjs/toolkit';
const Order = () => {
    //state
    const initialState = ['Hello'];

    //Reducer

    const burger = (state = initialState, action) => {
        return;
    };

    //store
    const store = configureStore(burger);

    return;
};
export default Order;
