import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate("/products/:id");
  };
  return (
    <div>
      <h1>Product</h1>

      <button onClick={goDetail}>자세히</button>
    </div>
  );
};

export default Products;
