import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CheckoutSuccess() {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] }; 
  
  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg">
      <h1 className="text-[25px] font-bold mb-4">Thank You for Your Purchase!</h1>
      <p className="mb-4">Your order has been confirmed.</p>

      <h2 className="text-[20px] font-bold mb-4">Your Order:</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
            <div className="flex items-center">
              <img 
                src={item.image.url} 
                alt={item.image.alt || item.title} 
                className="w-[100px] h-[100px] object-cover mr-4"
              />
              <div>
                <h2 className="font-bold text-primary">{item.title}</h2>
                <p className="text-secondary">Quantity: {item.quantity}</p>
                <p className="text-secondary">Price: ${item.discountedPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))
      )}

      <Link to="/" className="bg-primary text-white px-4 py-2 rounded mt-4">
        Continue Shopping
      </Link>
    </div>
  );
}
