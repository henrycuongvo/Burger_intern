import "./App.css";
import { Route, Routes } from "react-router";
import { user } from "./routes/route";
function App() {
  return (
    <div className="App">
      <Routes>
        {user.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
