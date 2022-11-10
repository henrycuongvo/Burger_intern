import "./App.css";
import { Route, Routes } from "react-router";
import { publicRoutes } from "./routes/route";
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route path={route.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
