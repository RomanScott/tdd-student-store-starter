import ProductCard from "./ProductCard";
import NotFound from "./NotFound";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail({
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [found, setFound] = useState(false);
  const { productId } = useParams();

  useEffect(async () => {
    try {
      const product = (
        await axios.get(
          "http://localhost:3001/store/" + productId
        )
      ).data.product;

      setProduct(product);
      setLoading(false);
      setFound(product != null);
    } catch (e) {
      setLoading(false);

      console.log(e);
    }
  }, []);

  return (
    <div className={"product-detail" + (found ? " product-detail-center" : "")}>
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : !found ? (
        <NotFound />
      ) : (
        <div style={{ maxWidth: "800px" }}>
          <ProductCard
            product={product}
            productId={productId}
            quantity={
              shoppingCart.find((p) => p.itemId === product.id)?.quantity
            }
            showDescription={true}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
          />
        </div>
      )}
    </div>
  );
}
