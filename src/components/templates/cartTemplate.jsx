import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "./cartContent";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  const { updateCartItemCount } = useCartContext();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const shippingPrice = 5.99;

  const updateQuantity = (id, delta) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCartItemCount();
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCartItemCount();
  };

  const calculateTotals = () => {
    const total = cart.reduce((sum, item) => {
      const discountedPrice = item.discountedPrice ?? 0;
      const quantity = item.quantity ?? 0;

      return sum + discountedPrice * quantity;
    }, 0);

    const discount = cart.reduce((sum, item) => {
      const originalPrice = item.price ?? 0;
      const discountedPrice = item.discountedPrice ?? originalPrice;
      const quantity = item.quantity ?? 0;

      return sum + (originalPrice - discountedPrice) * quantity;
    }, 0);

    setTotalPrice(total);
    setTotalDiscount(discount);
  };

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(existingCart);
    updateCartItemCount();
  }, []);

  useEffect(() => {
    calculateTotals();
  }, [cart]);

  const totalAmount = totalPrice + totalDiscount + shippingPrice;

  const handleCheckout = () => {
    localStorage.removeItem("cart");
    setCart([]);
    updateCartItemCount();
    navigate("/checkout-success", { state: { cartItems: cart } });
  };

  if (cart.length === 0) {
    return (
      <div className="flex justify-center mx-auto mt-20">
        <div className="text-center">
          <FontAwesomeIcon icon={faCartShopping} className="text-[23px]" />
          <p>Your cart is empty.</p>
          <div className="mt-5">
            <Link
              to="/"
              className="bg-primary text-white px-4 py-1.5 rounded mt-4"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg">
      <h1 className="text-[25px] font-bold mb-4">Shopping Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between mb-4 border-b pb-2"
        >
          <div className="flex items-center">
            <img
              src={item.image.url}
              alt={item.image.alt || item.title}
              className="w-[100px] h-[100px] object-cover mr-4"
            />
            <div>
              <h2 className="font-bold text-primary">{item.title}</h2>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 bg-gray-200 text-primary rounded mr-2"
                >
                  -
                </button>
                <span className="text-[16px]">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 text-primary rounded ml-2"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-secondary font-bold mr-4">
              $ {(item.discountedPrice * item.quantity).toFixed(2)}
            </p>
            <button onClick={() => deleteItem(item.id)}>
              <FontAwesomeIcon
                icon={faTrash}
                className="text-primary hover:text-secondary"
              />
            </button>
          </div>
        </div>
      ))}

      <div className="mt-8">
        <div className="flex justify-between">
          <p className="text-[18px] font-bold">Former Price:</p>
          <p className="text-[18px]">
            $ {(totalPrice + totalDiscount).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[18px] font-bold">Total Discount:</p>
          <p className="text-[18px] text-primary">
            - $ {totalDiscount.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-[18px] font-bold">Shipping:</p>
          <p className="text-[18px] text-primary">
            $ {shippingPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-[20px] font-bold">Total:</p>
          <p className="text-[20px] font-bold text-primary">
            $ {totalAmount.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleCheckout}
          className="bg-primary text-white px-4 py-2 rounded font-bold"
        >
          Checkout <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
