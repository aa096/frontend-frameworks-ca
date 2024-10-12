import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './templates/cartContent';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { cartItemCount } = useCart(); // Get cartItemCount from context

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="bg-primary text-white text-center py-1.5 w-screen">
        <p className="text-sm">📦 Free returns within 30 days on all orders!</p>
      </div>
      <header className="w-screen">
        <nav className="mx-10 py-3 text-secondary">
          <div className="flex justify-between items-center max-w-screen-xl relative">
            <div className="flex items-center">
              <Link to="/">
                <img src="src/assets/anycart.svg" alt="AnyCart logo" className="me-10" />
              </Link>
              <div className="hidden lg:flex lg:items-center lg:space-x-8 text-secondary">
                <div className="uppercase font-bold mt-4">
                  <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
                </div>
                <div className="uppercase font-bold mt-4">
                  <Link to="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <Link to="/cart" className="text-[20px] ml-auto hover:text-primary">
                  <FontAwesomeIcon icon={faCartShopping} className='mt-5' />
                </Link>
                {cartItemCount > 0 && (
                  <span className="absolute top-0.5 -right-2 bg-primary text-white hover:bg-secondary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <button
                className="navbar-toggler focus:outline-none lg:hidden mt-2 ml-4"
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <span className="text-[30px] hover:text-primary">☰</span>
              </button>
            </div>
          </div>

          {/* Mobile menu code remains unchanged */}
        </nav>
      </header>
    </>
  );
}
