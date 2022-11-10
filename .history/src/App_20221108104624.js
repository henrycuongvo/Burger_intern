import "./App.css";
import { Route, Routes } from "react-router";
import { publicRoutes } from "./routes/route";
function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default App;
