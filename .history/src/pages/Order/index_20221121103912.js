import Button from '../../components/Button';
import { useSelector } from 'react-redux';
const Order = () => {
    const cartState = useSelector((state) => state.cart);
    console.log(cartState);
    return (
        <>
            <Button less>less</Button>
            <Button more> more</Button>
        </>
    );
};
export default Order;
