import Home from '../pages/Home';
import Login from '../pages/Login';
import Order from 'pages/Order';
import Register from '../pages/Register';
import Doashboard from 'layouts/Dashboard';
const user = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/order', component: Order },
    { path: '/register', component: Register, layout: null },
    { path: '/doashboard', component: Doashboard, layout: null },
];

const admin = [];

export { user, admin };
