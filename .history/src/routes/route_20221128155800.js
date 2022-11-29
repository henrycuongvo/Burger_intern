import Home from '../pages/Home';
import Login from '../pages/Login';
import Order from 'pages/Order';
import Register from 'pages/Register';
import Checkout from 'pages/Checkout';
const user = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/checkout', component: Checkout },
    { path: '/order', component: Order },
    { path: '/register', component: Register, layout: null },
];

const admin = [];

export { user, admin };
