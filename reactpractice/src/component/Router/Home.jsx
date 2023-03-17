import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/about">About으로 이동</Link>
      <br></br>
      <Link to="/products">Products로 이동</Link>
    </div>
  );
};

export default Home;
