import Home from "../pages/Home";
import Login from "../pages/Login";
import Order from "../pages/Order";
import Register from "../pages/Register";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "login", component: Login },
  { path: "order", component: Order },
  { path: "register", component: Register },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
