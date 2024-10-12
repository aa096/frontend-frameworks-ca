// cartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItemCount, setCartItemCount] = useState(0);

    const updateCartItemCount = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItemCount(existingCart.length);
    };

    return (
        <CartContext.Provider value={{ cartItemCount, updateCartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
