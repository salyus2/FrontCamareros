import React, { useState, useContext } from "react";

const OrderContext = React.createContext();

export function OrderProvider({ children }) {
    const [order, setOrder] = useState(
        JSON.parse(localStorage.getItem("order")) || null
    );

    const verifyOrder = () => setOrder(JSON.parse(localStorage.getItem("order")));

    const addOrder = (order) => { setOrder(localStorage.setItem("order", JSON.stringify(order.id))) }



    const resetOrder = () => {
        localStorage.removeItem("order");
        setOrder(null);
    };

    return (
        <OrderContext.Provider
            value={{
                order,
                addOrder,
                resetOrder,
                verifyOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}

export function useOrder() {
    const context = useContext(OrderContext);
    return context;
}
