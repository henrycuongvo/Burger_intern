import { configureStore } from '@reduxjs/toolkit';
import { Button } from 'antd';
const Order = () => {
    //state
    const initialState = ['Hello'];

    //Reducer

    const burger = (state = initialState, action) => {
        return;
    };

    //store
    const store = configureStore(burger);

    return (
        <>
            <Button less> less</Button>
            <Button more></Button>
        </>
    );
};
export default Order;
