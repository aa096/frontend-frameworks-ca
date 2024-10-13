import ScrollToTopButton from "./scrollUpButton";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <ScrollToTopButton />
      <footer className="bg-primary text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} AnyCart</p>
          <p className="text-xs">All rights reserved.</p>
          <nav className="flex justify-center space-x-6 mt-4">
            <p className="hover:text-secondary transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-secondary transition-colors duration-200 cursor-pointer">
              Terms of Service
            </p>
            <Link
              to="/contact"
              className="hover:text-secondary transition-colors duration-200"
            >
              Contact us
            </Link>
          </nav>
          <div className="text-[25px] hover:text-secondary mt-3">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} className="ms-3 text-[27px]" />
            <FontAwesomeIcon icon={faTiktok} className="ms-3" />
          </div>
        </div>
      </footer>
    </>
  );
}
