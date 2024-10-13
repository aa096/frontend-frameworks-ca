import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function CheckoutSuccess() {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] }; 

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg flex flex-col items-center">
      <h1 className="text-[25px] font-bold mb-4 text-center">Thank You for Your Purchase!</h1>
      <p className="mb-4 text-center">Your order has been confirmed.</p>

      <h2 className="text-[20px] font-bold mb-4 text-center">Your Order:</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2 w-full max-w-md">
            <div className="flex items-center">
              <img 
                src={item.image.url} 
                alt={item.image.alt || item.title} 
                className="w-[100px] h-[100px] object-cover mr-4"
              />
              <div>
                <h2 className="font-bold text-primary">{item.title}</h2>
                <p className="text-secondary">Quantity: {item.quantity}</p>
                <p className="text-secondary">Price: $ {item.discountedPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))
      )}

      <Link to="/" className="bg-primary text-white px-4 py-1.5 rounded mt-4">
        <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
      </Link>
    </div>
  );
}
