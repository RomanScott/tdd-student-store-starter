import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="product-grid columns is-multiline">
      {products.map((product, idx) => {
        return (
          <div className="column is-3">
            <ProductCard
              product={product}
              productId={product.id}
              quantity={product.quantity}
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemToCart={handleRemoveItemToCart}
              showDescription={false}
            />
          </div>
        );
      })}
    </div>
  );
}
