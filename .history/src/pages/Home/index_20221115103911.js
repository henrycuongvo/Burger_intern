import React from "react";
import Header from "../../layouts/Header";
import { Helmet } from "react-helmet";
function Home() {
  return (
    <div>
      {" "}
      <Helmet>BurgerBuilder</Helmet>
      <Header />
    </div>
  );
}

export default Home;
