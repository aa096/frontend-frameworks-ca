import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
    return ( 
        <header className="flex justify-center">
            <nav>
                <div className="container flex py-3 text-secondary">
                    <Link to="/"><img src="src/assets/anycart.svg" alt="AnyCart logo" className="mx-3"/></Link>
                    <button
                    className="navbar-toggler focus:outline-none lg:hidden"
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    >
                    <span className="ms-3">☰</span>
                    </button>
                    <div className={`lg:flex lg:items-center lg:space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row text-secondary`}>
                    <div className="flex flex-col lg:flex-row lg:space-x-8 mb-4 lg:mb-0">
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}