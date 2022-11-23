import { configureStore } from '@reduxjs/toolkit';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
const Order = () => {
    const setCart = useSelector((state) => state.cart);
    console.log(setCart);
    return (
        <>
            <Button less>less</Button>
            <Button more> more</Button>
        </>
    );
};
export default Order;
