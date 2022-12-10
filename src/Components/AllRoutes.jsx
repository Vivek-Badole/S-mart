import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Orders from "../Pages/Orders";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import AuthWrapper from "./AuthWrapper";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<AuthWrapper><Cart /></AuthWrapper> } />
      <Route path="/orders" element={<AuthWrapper><Orders /></AuthWrapper>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
