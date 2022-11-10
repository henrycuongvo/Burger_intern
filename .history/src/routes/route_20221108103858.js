import Home from "../pages/Home";
import Login from "../pages/Login";
import Order from "../pages/Order";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "login", component: Login },
  { path: "order", component: Order },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
