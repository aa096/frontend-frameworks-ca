import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../products/read';

function ProductPage() {
    const { productId } = useParams(); // Make sure this matches the route definition
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!productId) {
            setError('Product ID is missing');
            return;
        }

        const fetchProduct = async () => {
            try {
                const response = await getProduct(productId);
                setProduct(response.data); // Ensure that `response.data` holds the product object
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleAddToCart = () => {
        if (product) {
            const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
            existingCart.push(product);
            localStorage.setItem('cart', JSON.stringify(existingCart));
            alert(`${product.title} has been added to your cart!`);
        }
    };

    if (error) return <div>{error}</div>;
    if (!product) return <div>Loading...</div>;

    return (
        <div className="md:container mx-auto">
            <h1 className="text-2xl font-bold text-center my-4">{product.title}</h1>
            <div className="flex justify-center mb-4">
                <img 
                    src={product.image.url} 
                    alt={product.image.alt || product.title} 
                    className="object-cover w-[390px] h-[300px] m-auto" 
                />
            </div>
            <p className="text-secondary text-center">{product.description}</p>
            <p className="text-center font-bold text-primary">{`Price: $ ${product.discountedPrice.toFixed(2)}`}</p>
            <button 
                onClick={handleAddToCart} 
                className="mt-4 inline-block bg-primary text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-secondary mx-auto block"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductPage;
