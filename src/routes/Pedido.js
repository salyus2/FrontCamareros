import React from 'react';
import { Link } from "react-router-dom";

import "../css/pedido.css"


export function Pedido() {
    return (
        <React.Fragment>
            <main className="pedido">
                <header className="home">
                    <h1>Aldach Has</h1>
                    <button className="btn call">Ayuda</button>
                    <Link to="/" ><button className="btn call">Volver</button></Link>
                </header>
                <section className="shopping-car">
                    <ul>
                        <li>
                            <article>
                                <h2>Hamburguesa con queso</h2>
                                <p>Hamburguesa de carne de ternera, con cebolla caramelizada, queso cheddar y salsa de mostaza dulce</p>
                                <ul className="amount price">
                                    <li>
                                        <h3>Cantidad</h3>
                                        <p>3</p>
                                    </li>
                                    <li>
                                        <h3>Precio</h3>
                                        <p>3,55</p>
                                    </li>
                                </ul>
                            </article>
                        </li>
                    </ul>
                </section>
                <section className="importe">
                    <label htmlFor="IVA">I.V.A</label>
                    <input id="IVA" type="text" name="IVA" />
                    <label htmlFor="total">Total</label>
                    <input id="total" type="text" name="total" />
                </section>
                <section className="pay">
                    <button className="cash">Pago en efectivo</button>
                    <button className="card">Pago con Tarjeta de Crédito</button>
                </section>
            </main>
        </React.Fragment >
    );
}
