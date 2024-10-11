import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
        <nav className="container mx-auto py-3 text-secondary">
          <div className="flex justify-center items-center max-w-screen-xl">
            <div>
              <Link to="/">
                <img src="src/assets/anycart.svg" alt="AnyCart logo" className="me-10" />
              </Link>
            </div>
            <button
              className="navbar-toggler focus:outline-none lg:hidden"
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="ms-3 text-[30px]">☰</span>
            </button>
            <div className="hidden lg:flex lg:items-center lg:space-x-8 text-secondary ml-auto">
              <div className="uppercase font-bold">
                <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
              </div>
              <div className="uppercase font-bold">
                <Link to="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link>
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
          </div>
        </nav>
      </header>
    </>
  );
}
