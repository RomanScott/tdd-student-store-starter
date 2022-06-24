import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductGrid({
  products,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const categories = {
    "All Categories": "globe",
    Clothing: "tshirt",
    Food: "hamburger",
    Accessories: "gem",
    Tech: "mobile-alt",
  };
  const [category, setCategory] = useState("All Categories");
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="field" style={{ maxWidth: "800px", marginRight: "3em" }}>
        <label className="label">Search</label>
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="input"
            type="text"
            placeholder="Product, brand, or item..."
          />
          <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>

      <div className="tabs is-centered">
        <ul>
          {Object.keys(categories).map((key) => {
            return (
              <li
                onClick={() => setCategory(key)}
                key={key}
                className={category == key ? "is-active" : ""}
              >
                <a>
                  <span className="icon is-small">
                    <i
                      className={"fas fa-" + categories[key]}
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span>{key}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="product-grid columns is-multiline">
        {products
          .filter(
            (product) =>
              category == "All Categories" ||
              category.toLowerCase() == product.category
          )
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product, idx) => {
            return (
              <div key={product.id} className="column is-3">
                <ProductCard
                  product={product}
                  productId={product.id}
                  quantity={
                    shoppingCart.find((p) => p.itemId === product.id)?.quantity
                  }
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  showDescription={false}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
