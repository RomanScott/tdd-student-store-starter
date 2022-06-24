import * as React from "react";
import CheckoutForm from "./CheckoutForm";
import ShoppingCart from "./ShoppingCart";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section
      className="menu sidebar toggle-button"
      style={{
        borderRight: "1px solid black",
        ...(!isOpen ? { maxWidth: "150px" } : { minWidth: "350px" }),
      }}
    >
      <button className="button is-black is-large" onClick={handleOnToggle}>
        <span className="icon">
          <i
            className={"fas fa-arrow-alt-circle-" + (isOpen ? "left" : "right")}
          ></i>
        </span>
      </button>

      {isOpen && (
        <div>
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart}
          />
          <CheckoutForm />
        </div>
      )}
    </section>
  );
}
