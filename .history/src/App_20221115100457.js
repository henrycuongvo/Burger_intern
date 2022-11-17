import "./App.css";
import { Route, Routes } from "react-router";
import { user } from "./routes/route";
function App() {
  return (
    <div className="App">
      <Routes>
        {user.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={user.path} element={<Page />} />;
        })}
      </Routes>
      {/* <Routes>
        <Route path={ROUTES.USER.HOME} element={<Home />} />
        <Route path={ROUTES.USER.ORDER} element={<Order />} />
        <Route path={ROUTES.USER.CHECKOUT} element={<Checkout />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes> */}
    </div>
  );
}

export default App;
