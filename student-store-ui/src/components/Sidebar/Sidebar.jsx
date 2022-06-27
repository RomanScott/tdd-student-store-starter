import * as React from "react";
import { useState } from "react";
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
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  async function submitForm() {
    setStatus(await handleOnSubmitCheckoutForm());
    setSubmitted(true);
  }

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
              handleOnSubmitCheckoutForm={submitForm}
            />
          )}
          {submitted && (
            <div>
              {!!status ? (
                <div className="success">{status}</div>
              ) : (
                <div className="error">
                  An error occurred while submitting your order. Please try
                  again!
                </div>
              )}
              <br />
              <button
                className="button is-link"
                onClick={() => setSubmitted(false)}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
