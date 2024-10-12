import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../products/read';
import { useCart } from './cartContent';

function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { addToCart } = useCart(); // Get addToCart from context

    useEffect(() => {
        if (!productId) {
            setError('Product ID is missing');
            return;
        }

        const fetchProduct = async () => {
            try {
                const response = await getProduct(productId);
                setProduct(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProduct();
    }, [productId]);

    if (error) return <div>{error}</div>;
    if (!product) return <div>Loading...</div>;

    const hasDiscount = product.price > product.discountedPrice;
    const discountPercentage = hasDiscount
        ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
        : 0;

    const handleAddToCart = () => {
        if (product) {
            addToCart(product); // Use the context's addToCart function
        }
    };

    return (
        <div className="container mx-auto bg-white shadow-lg mb-4 pb-4 text-secondary">
            <h1 className="text-primary text-[25px] font-bold uppercase text-center pt-9 my-6">{product.title}</h1>
            <div className="flex flex-col md:flex-row place-content-center">
                <div className="relative mb-5 md:mb-0">
                    <img 
                        src={product.image.url} 
                        alt={product.image.alt || product.title} 
                        className="object-cover w-[450px] h-[350px] m-2" 
                    />
                    {hasDiscount && (
                        <div className="absolute top-0 left-0 bg-primary text-white text-sm font-bold px-2 py-1">
                            {discountPercentage}% OFF
                        </div>
                    )}
                </div>
                <div className='mt-4 md:mt-20 md:ms-4 w-80'>
                    <p className="text-center mb-4">{product.description}</p>
                    {hasDiscount ? (
                        <div className="text-secondary font-bold mb-3 text-center">
                            <p className="line-through text-[12px]">{`$ ${product.price.toFixed(2)}`}</p>
                            <p className="font-black text-[19px] text-primary">{`Price: $ ${product.discountedPrice.toFixed(2)}`}</p>
                        </div>
                    ) : (
                        <p className="font-black mb-3 text-[19px] text-primary text-center">{`Price: $ ${product.discountedPrice.toFixed(2)}`}</p>
                    )}
                    <button 
                        onClick={handleAddToCart} 
                        className="mt-4 bg-primary text-white font-bold py-1.5 px-3 rounded transition duration-300 hover:bg-secondary mx-auto block"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Reviews section remains unchanged */}
        </div>
    );
}

export default ProductPage;
