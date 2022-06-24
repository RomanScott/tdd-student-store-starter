import * as React from "react";
import "./Home.css";
import Hero from "../Core/Hero";
import ProductGrid from "../Core/ProductGrid";

export default function Home({
  products,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="home">
      <Hero />
      <br />
      <ProductGrid
        products={products}
        shoppingCart={shoppingCart}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
}
