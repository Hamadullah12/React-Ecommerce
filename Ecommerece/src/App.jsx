import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Order from "./pages/order/Order";
import AllProducts from "../src/pages/allproducts/AllProducts";
import Dashboard from "../src/pages/admin/dashboard/Dashboard";
import Cart from "../src/pages/cart/Cart";
import NoPage from "../src/pages/nopage/NoPage";
import MyState from "./context/data/myState";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}
export default App;
