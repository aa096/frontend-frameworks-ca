import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center mx-auto">
            <FontAwesomeIcon icon={faCartShopping} size="3x" spin className="text-primary mb-4" />
            <p className="text-lg text-secondary">Loading...</p>
        </div>
    );
};

export default Loader;
