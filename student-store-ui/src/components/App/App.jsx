import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../Core/ProductDetail";
import NotFound from "../Core/NotFound";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]); // {itemId: 1, quantity: 1}
  const [checkoutForm, setCheckoutForm] = useState({});

  useEffect(async () => {
    try {
      setProducts(
        (await axios.get("https://codepath-store-api.herokuapp.com/store")).data
          .products
      );
      setFetching(false);
    } catch (e) {
      setError(
        "An error occurred while loading the products! Please contact support."
      );
      console.log(e);
    }
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <main>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                error ? (
                  <div>{error}</div>
                ) : (
                  <Home
                    products={products}
                    handleAddItemToCart={() => {}}
                    handleRemoveItemToCart={() => {}}
                  />
                )
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={() => {}}
                  handleRemoveItemToCart={() => {}}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
