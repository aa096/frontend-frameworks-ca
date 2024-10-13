import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from './templates/cartContent';
import anycartLogo from "../../public/assets/anycart.svg"

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { cartItemCount } = useCartContext(); 

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
              <img src={anycartLogo} alt="AnyCart logo" className="me-10" />
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

          <div
            className={`lg:hidden flex-col items-center ${
              isMenuOpen ? 'flex' : 'hidden'
            } flex-col lg:flex-row text-secondary mt-4 absolute bg-white w-full left-0 top-12 z-20`}
          >
            <button
              className="absolute top-0 right-5 text-[40px] hover:text-primary transition-colors duration-200"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              &times;
            </button>
            <div className="uppercase font-bold p-4 hover:text-primary transition-colors duration-200">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </div>
            <div className="uppercase font-bold p-4 hover:text-primary transition-colors duration-200">
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>

          {isMenuOpen && (
            <div
              className="lg:hidden absolute top-0 left-0 w-full h-full z-10 backdrop-blur-sm"
              onClick={closeMenu}
            ></div>
          )}
        </nav>
      </header>
    </>
  );
}
