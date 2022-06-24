export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const subtotal = shoppingCart.reduce(
    (a, cart) =>
      a + cart.quantity * products.find((p) => p.id === cart.itemId).price,
    0
  );
  const taxes = subtotal * 0.0875;
  const total = subtotal + taxes;

  return (
    <div className="shopping-cart">
      {shoppingCart.length ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <abbr title="Name">Name</abbr>
                </th>
                <th>
                  <abbr title="Quantity">Quantity</abbr>
                </th>
                <th>
                  <abbr title="Unit Price">Unit Price</abbr>
                </th>
                <th>
                  <abbr title="Cost">Cost</abbr>
                </th>
              </tr>
            </thead>

            <tbody>
              {shoppingCart.map((cart) => {
                const product = products.find((p) => p.id === cart.itemId);

                return (
                  <tr key={cart.itemId}>
                    <td className="cart-product-name">{product.name}</td>
                    <td className="cart-product-quantity">{cart.quantity}</td>
                    <td>{formatter.format(product.price)}</td>
                    <td>{formatter.format(cart.quantity * product.price)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <table className="table is-fullwidth is-bordered">
            <tr>
              <td>
                <b>Subtotal</b>
              </td>
              <td className="subtotal">{formatter.format(subtotal)}</td>
            </tr>
            <tr>
              <td>
                <b>Taxes</b>
              </td>
              <td>{formatter.format(taxes)}</td>
            </tr>
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td className="total-price">{formatter.format(total)}</td>
            </tr>
          </table>
        </div>
      ) : (
        <div className="notification">
          No items added to cart yet. Start shopping now!
        </div>
      )}
    </div>
  );
}
