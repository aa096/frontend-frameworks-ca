import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../../products/read";
import { useCartContext } from "./cartContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import Loader from "../loader";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { updateCartItemCount } = useCartContext();
  const [showShopMore, setShowShopMore] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (!productId) {
      setError("Product ID is missing");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await getProduct(productId, setLoading);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProductIndex = existingCart.findIndex(
        (cartItem) => cartItem.id === product.id
      );

      if (existingProductIndex !== -1) {
        existingCart[existingProductIndex].quantity += 1;
      } else {
        existingCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      updateCartItemCount();
      setAddedToCart(true);
      setShowShopMore(true);
    }
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  const hasDiscount = product.price > product.discountedPrice;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0;

  return (
    <div className="container mx-auto bg-white shadow-lg mb-4 pb-4 text-secondary">
      <Helmet>
        <title>{product.title} - AnyCart</title>
        <meta
          name="description"
          content={`Discover ${product.title} at AnyCart. Explore features, pricing, and get the best deals on your favorite products. Shop now and enjoy great savings!`}
        />
      </Helmet>
      <h1 className="text-primary text-[25px] font-bold uppercase text-center pt-9 my-6">
        {product.title}
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center mx-3">
        <div className="relative mb-5 md:mb-0">
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            className="object-cover object-center w-[400px] h-[370px] m-auto"
          />
          {hasDiscount && (
            <div className="absolute top-0 left-0 bg-primary text-white text-sm font-bold px-2 py-1">
              {discountPercentage}% OFF
            </div>
          )}
        </div>
        <div className="mt-4 md:mt-20 md:ms-4">
          <p className="text-center mb-4 w-80">{product.description}</p>
          {hasDiscount ? (
            <div className="text-secondary font-bold mb-3 text-center">
              <p className="line-through text-[12px]">{`$ ${product.price.toFixed(
                2
              )}`}</p>
              <p className="font-black text-[19px] text-primary">{`Price: $ ${product.discountedPrice.toFixed(
                2
              )}`}</p>
            </div>
          ) : (
            <p className="font-black mb-3 text-[19px] text-primary text-center">{`Price: $ ${product.discountedPrice.toFixed(
              2
            )}`}</p>
          )}
          <button
            onClick={handleAddToCart}
            className={`mt-4 text-white font-bold py-1.5 px-3 rounded transition duration-300 mx-auto block ${
              addedToCart ? "bg-secondary" : "bg-primary hover:bg-secondary"
            }`}
          >
            {addedToCart ? (
              <>
                <FontAwesomeIcon icon={faCheck} /> Added to Cart
              </>
            ) : (
              "Add to Cart"
            )}
          </button>

          {showShopMore && (
            <Link
              to="/"
              className="block mt-4 text-primary font-semibold hover:underline text-center"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Shop More
            </Link>
          )}
        </div>
      </div>

      <section className="mt-10 text-center">
        <h2 className="text-[20px] uppercase font-bold text-center text-primary">
          Reviews
        </h2>
        {product.reviews && product.reviews.length > 0 ? (
          <div className="list-disc list-inside mt-2">
            {product.reviews.map((review) => (
              <div key={review.id} className="mb-2">
                <div className="flex-col place-content-center">
                  <span className="font-semibold text-[15px]">
                    {review.username}
                  </span>
                  <p className="text-secondary">{review.description}</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < review.rating
                            ? "text-primary"
                            : "text-gray-300"
                        }
                        style={{ fontSize: "25px" }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No reviews yet.</p>
        )}
      </section>
    </div>
  );
}

export default ProductPage;
