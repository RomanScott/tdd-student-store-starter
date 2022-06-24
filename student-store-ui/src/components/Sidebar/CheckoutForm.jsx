export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  return (
    <div className="checkout-form">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input checkout-form-input"
            type="email"
            name="email"
            placeholder="student@codepath.org"
            value={checkoutForm.email}
            onChange={handleOnCheckoutFormChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </p>
      </div>

      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input checkout-form-input"
            type="text"
            name="name"
            placeholder="Student Name"
            value={checkoutForm.name}
            onChange={handleOnCheckoutFormChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </p>
      </div>

      <button
        onClick={handleOnSubmitCheckoutForm}
        className="button is-link checkout-button"
      >
        Checkout
      </button>
    </div>
  );
}
