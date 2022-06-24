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
          <br />
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart}
          />
          <br />
          {shoppingCart.length > 0 && (
            <CheckoutForm
              isOpen={isOpen}
              products={products}
              shoppingCart={shoppingCart}
              checkoutForm={checkoutForm}
              handleOnCheckoutFormChange={handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            />
          )}
        </div>
      )}
    </section>
  );
}
