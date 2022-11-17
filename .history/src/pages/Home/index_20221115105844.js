import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../layouts/Header";
function Home() {
  return (
    <div>
      <Helmet>
        <title>Burger Builder</title>
      </Helmet>{" "}
      <h1>HomePage</h1>
    </div>
  );
}

export default Home;
