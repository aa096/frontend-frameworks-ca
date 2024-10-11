import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mb-5">
      <p className="text-primary text-sm mb-2">Up up up!</p>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-opacity-100 text-white rounded-full py-3 px-5 shadow-lg hover:bg-secondary transition duration-300 text-lg"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
