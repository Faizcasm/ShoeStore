import React, { createContext, useState, useContext, useEffect } from 'react';

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            const updatedItems = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCartItems(updatedItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const incrementItem = (itemId) => {
        const updatedItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
    };

    const decrementItem = (itemId) => {
        const updatedItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        ).filter((item) => item.quantity > 0);
        setCartItems(updatedItems);
    };

    const calculateTotal = () => {
        const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotal(totalPrice);
    };

    useEffect(() => {
        calculateTotal();
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                total,
                addItem,
                incrementItem,
                decrementItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
