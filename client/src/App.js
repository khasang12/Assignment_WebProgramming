import "./App.css";
import React from "react";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/admin/Home";
import Products from "./components/pages/admin/Products";
import Accounts from "./components/pages/admin/Accounts";
import Orders from "./components/pages/admin/Orders";
import Settings from "./components/pages/admin/Settings";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/admin" exact element={<Home />} />
        <Route path="/admin/accounts" exact element={<Accounts />} />
        <Route path="/admin/orders" exact element={<Orders />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
