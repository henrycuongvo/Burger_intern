import { Fragment } from "react";
import { Route, Routes } from "react-router";

import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import { user } from "./routes/route";
function App() {
  return (
    <div className="App">
      <Routes>
        {user.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          }
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
