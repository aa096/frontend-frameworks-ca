import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from './cartContent';

export default function CartPage() {
  const { updateCartItemCount } = useCartContext(); // Access the context
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const shippingPrice = 5.99; // Set a fixed shipping price (or make it dynamic)

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    ).filter(item => item.quantity > 0);
    
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartItemCount(); // Call to update cart item count
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartItemCount(); // Call to update cart item count
  };

  const calculateTotals = () => {
    const total = cart.reduce((sum, item) => {
      const discountedPrice = item.discountedPrice ?? 0;
      const quantity = item.quantity ?? 0;

      return sum + (discountedPrice * quantity);
    }, 0);

    const discount = cart.reduce((sum, item) => {
      const originalPrice = item.price ?? 0;
      const discountedPrice = item.discountedPrice ?? originalPrice;
      const quantity = item.quantity ?? 0;

      return sum + ((originalPrice - discountedPrice) * quantity);
    }, 0);

    setTotalPrice(total);
    setTotalDiscount(discount);
  };

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(existingCart);
    updateCartItemCount(); // Update count when the component mounts
  }, []);

  useEffect(() => {
    calculateTotals();
  }, [cart]);

  const totalAmount = totalPrice + totalDiscount + shippingPrice; // Total includes shipping

  if (cart.length === 0) {
    return <div className="text-center">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg">
      <h1 className="text-[25px] font-bold mb-4">Shopping Cart</h1>

      {cart.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
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
                >-</button>
                <span className="text-[16px]">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, 1)} 
                  className="px-2 py-1 bg-gray-200 text-primary rounded ml-2"
                >+</button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-secondary font-bold mr-4">
              $ {(item.discountedPrice * item.quantity).toFixed(2)}
            </p>
            <button onClick={() => deleteItem(item.id)}>
              <FontAwesomeIcon icon={faTrash} className="text-primary hover:text-secondary" />
            </button>
          </div>
        </div>
      ))}

      {/* Total Section */}
      <div className="mt-8">
        <div className="flex justify-between">
          <p className="text-[18px] font-bold">Former Price:</p>
          <p className="text-[18px]">$ {(totalPrice + totalDiscount).toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[18px] font-bold">Total Discount:</p>
          <p className="text-[18px] text-primary">- $ {totalDiscount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-[18px] font-bold">Shipping:</p>
          <p className="text-[18px] text-primary">$ {shippingPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-[20px] font-bold">Total:</p>
          <p className="text-[20px] font-bold text-primary">$ {totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
