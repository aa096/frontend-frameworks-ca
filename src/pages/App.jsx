import { useState } from 'react';

function App() {
  // State for menu toggle
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div id="mainContainer" className="container mx-0">
      <header className="flex justify-center">
        <nav>
          <div className="container mx-auto flex justify-between items-center py-3 text-secondary">
            <a className="navbar-brand" href="/">
              <img src="src/assets/anycart.svg" alt="AnyCart logo" className="my-3" />
            </a>
            <button
              className="navbar-toggler focus:outline-none lg:hidden"
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="ms-3">☰</span>
            </button>
            <div className={`lg:flex lg:items-center lg:space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row text-secondary`}>
              <ul className="flex flex-col lg:flex-row lg:space-x-8 mb-4 lg:mb-0">
                <li className="nav-item">
                  <a className="uppercase text-lg font-bold" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="uppercase text-lg font-bold" href="/">Contact</a>
                </li>
              </ul>
              {/* Profile icon */}
              <a href="#" id="proBtn" className="">
                <i className="fa-solid fa-user text-2xl"></i>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
