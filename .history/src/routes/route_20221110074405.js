import Home from "../pages/Home";
import Login from "../pages/Login";
import Order from "../pages/Order";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "login", component: Login },
  { path: "order", component: Order },
  { path: "register", component: Register },
  { path: "checkout", component: Checkout },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
