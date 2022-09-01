import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Register from "./pages/auth/Register/Register";
import Login from "./pages/auth/Login/Login";
import Success from "./pages/Success/Success";

import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  const user = true;

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
