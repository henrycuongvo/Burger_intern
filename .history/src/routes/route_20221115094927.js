import Home from "../pages/Home";
import Login from "../pages/Login";
import Order from "../pages/Order";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
// const publicRoutes = [
//   { path: "/", component: Home },
//   { path: "login", component: Login },
//   { path: "order", component: Order },
//   { path: "register", component: Register },
//   { path: "checkout", component: Checkout },
// ];

// const privateRoutes = [];
// export { publicRoutes, privateRoutes };
export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  USER: {
    HOME: {
      path: " /",
      component: Home,
    },
    ORDER: {
      path: "/order",
      component: Order,
    },
    CHECKOUT: {
      path: "/checkout",
      component: Checkout,
    },
  },
  ADMIN: {},
  NOT_FOUND: "/404",
};
