import React, { useEffect } from "react";
import { useOrder } from "../shared/context/order-context";

function Confirmation() {
    const { resetOrder } = useOrder();

    useEffect(() => {
        resetOrder();
    }, []);

    return (
        <div>
            <p>Su compra se ha completado con éxito</p>
            <a href="/">Volver</a>
        </div>)
}

export { Confirmation };
