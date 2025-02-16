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
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });

  useEffect(async () => {
    try {
      setProducts(
        (await axios.get("http://localhost:3001/store")).data.products
      );
      setFetching(false);
    } catch (e) {
      setError(
        "An error occurred while loading the products! Please contact support."
      );
      console.log(e);
    }
  }, []);

  function handleAddItemToCart(productId) {
    const index = shoppingCart.findIndex(
      (product) => product.itemId == productId
    );

    if (index == -1) {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }]);
    } else {
      setShoppingCart(
        shoppingCart.map((p) =>
          p.itemId == productId ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    }
  }

  function handleRemoveItemToCart(productId) {
    const index = shoppingCart.findIndex(
      (product) => product.itemId == productId
    );

    if (index != -1) {
      setShoppingCart(
        shoppingCart
          .map((p) =>
            p.itemId == productId ? { ...p, quantity: p.quantity - 1 } : p
          )
          .filter((p) => p.quantity > 0)
      );
    }
  }

  function handleOnCheckoutFormChange(e) {
    setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value });
  }

  async function handleOnSubmitCheckoutForm() {
    try {
      const {
        purchase: { receipt },
      } = (
        await axios.post("http://localhost:3001/store", {
          user: checkoutForm,
          shoppingCart: shoppingCart,
        })
      ).data;

      return receipt;
    } catch {
      return null;
    } finally {
      setShoppingCart([]);
      setCheckoutForm({ name: "", email: "" });
    }
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          products={products}
          checkoutForm={checkoutForm}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          handleOnToggle={() => setOpen(!isOpen)}
        />
        <main style={{ marginLeft: "1em" }}>
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
                    shoppingCart={shoppingCart}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemToCart}
                  />
                )
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
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
