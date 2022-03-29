import "./index.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import About from "./pages/About";
import Login from "./pages/Login";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";

function RouterT() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="dashboard" element={<Dashboard user={user} />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="products/:productId" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterT;
