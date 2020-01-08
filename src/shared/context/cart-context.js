import React, { useState, useContext } from "react";

const CartContext = React.createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    const addItemToCart = cartItem => {
        let updatedCart = null;

        if (cart.find(item => item.idProduct === cartItem.idProduct)) {
            updatedCart = cart.map(item => {
                if (item.idProduct === cartItem.idProduct) {
                    item.quantity++;
                }
                return item;
            });
        } else {
            updatedCart = [{ ...cartItem, quantity: 1 }, ...cart];
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeItemFromCart = cartItem => {
        let updatedCart = null;

        if (cartItem.quantity > 1) {
            updatedCart = cart.map(item => {
                if (cartItem.idProduct === item.idProduct) {
                    item.quantity--;
                }
                return item;
            });
        } else {
            updatedCart = cart.filter(item => cartItem.idProduct !== item.idProduct);
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeItem = id => {
        const updatedCart = cart.filter(cartItem => cartItem.idProduct !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.quantity * parseInt(item.price, 0),
        0
    );

    const resetCart = () => {
        localStorage.removeItem("cart");
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                removeItemFromCart,
                removeItem,
                totalItems,
                totalPrice,
                resetCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}
