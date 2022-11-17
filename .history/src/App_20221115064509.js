import "./App.css";
import { Route, Routes } from "react-router";
import { publicRoutes, ROUTES } from "./routes/route";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes> */}
      <Routes>
        <Route path={ROUTES.USER.HOME} element={<Home />} />
        <Route path={ROUTES.USER.ORDER} element={<Order />} />
        <Route path={ROUTES.USER.CHECKOUT} element={<Checkout />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
