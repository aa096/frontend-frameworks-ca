import ScrollToTopButton from "./scrollUpButton";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <>
        <ScrollToTopButton />
        <footer className="bg-primary text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">© {new Date().getFullYear()} AnyCart</p>
            <p className="text-xs">All rights reserved.</p>
            <nav className="flex justify-center space-x-6 mt-4">
              <p href="#" className="hover:text-secondary transition-colors duration-200">Privacy Policy</p>
              <p href="#" className="hover:text-secondary transition-colors duration-200">Terms of Service</p>
              <Link to="/contact" className="hover:text-secondary transition-colors duration-200">
                  Contact us
                </Link>
            </nav>
          </div>
        </footer>
      </>
    );
}
