import { Button } from 'antd';
import { useSelector } from 'react-redux';
const Order = () => {
    const counterReducer = useSelector((state) => state.cart);
    console.log(counterReducer);
    return (
        <>
            <Button less>less</Button>
            <Button more> more</Button>
        </>
    );
};
export default Order;
