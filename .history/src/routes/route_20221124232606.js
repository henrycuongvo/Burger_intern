import Home from '../pages/Home';
import Login from '../pages/Login';
import Order from 'pages/Checkout';
import Register from 'pages/Register';
import Doashboard from 'layouts/Dashboard';
import Checkout from 'pages/Checkout';
const user = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/checkout', component: Checkout },
    { path: '/order', component: Order },

    { path: '/register', component: Register, layout: null },
    { path: '/doashboard', component: Doashboard, layout: null },
];

const admin = [];

export { user, admin };
