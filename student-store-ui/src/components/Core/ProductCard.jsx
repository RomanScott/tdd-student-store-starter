import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="product-card card">
      {quantity && <div className="product-quantity is-info">{quantity}</div>}
      <div className="card-image">
        <figure className="image is-4by3">
          <Link to={"products/" + product.id}>
            <img src={product.image} alt="Product Image" />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 product-name">{product.name}</p>
            <p className="subtitle is-6 product-price">
              {formatter.format(product.price)}
            </p>
          </div>
        </div>

        {showDescription && (
          <div className="content product-description">
            {product.description}
          </div>
        )}

        <div className="buttons">
          <button className="button is-link">
            <span className="icon is-small">
              <i
                className="fas fa-cart-plus add"
                onClick={handleAddItemToCart(productId)}
              ></i>
            </span>
          </button>
          <button className="button is-danger">
            <span className="icon is-small">
              <i
                className="fas fa-trash-alt remove"
                onClick={handleRemoveItemToCart(productId)}
              ></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
