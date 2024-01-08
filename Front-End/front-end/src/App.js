import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Products from "./Pages/AllProducts.js";
import Product from "./Pages/SingleProduct.js";
import Dashboard from "./Pages/Dashboard.js";
import Login from './Pages/Login.js';

const App = () => {

  const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
      return children;
    } else {
      return <Login />
    }
  }

  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Product" element={<Product />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
