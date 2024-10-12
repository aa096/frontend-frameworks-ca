import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(existingCart);
    }, []);

    const addToCart = (item) => {
        const updatedCart = [...cartItems, item];
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const cartItemCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};
