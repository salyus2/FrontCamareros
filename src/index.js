import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Login, Registro, Recuperacion, NotFound } from "./routes";
import { Employeer } from './routes/employeer/Employeer';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { Confirmation } from './components/Confirmation';
import { PayOrder } from "./components/PayOrder"

import { AuthProvider } from "./shared/context/auth-context";
import { PrivateRoute } from "./components/PrivateRoute";
import { CartProvider } from "./shared/context/cart-context";


import './index.css'
import { Cart } from './components/Cart';
import { OrderProvider } from './shared/context/order-context';


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <OrderProvider>
                        <Switch>
                            <PrivateRoute exact path="/">
                                <Home />
                            </PrivateRoute>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/registro">
                                <Registro />
                            </Route>
                            <Route path="/recuperar-contrasena">
                                <Recuperacion />
                            </Route>
                            <PrivateRoute path="/menu">
                            </PrivateRoute>
                            <PrivateRoute path="/pedido">
                                <PayOrder />
                            </PrivateRoute>
                            <PrivateRoute path="/products/:id">
                                <Products />
                            </PrivateRoute>
                            <PrivateRoute path="/product/:id">
                                <ProductDetail />
                            </PrivateRoute>
                            <PrivateRoute path="/cart">
                                <Cart />
                            </PrivateRoute>
                            <PrivateRoute path="/confirmation">
                                <Confirmation />
                            </PrivateRoute>
                            <PrivateRoute path="/valoracion">
                            </PrivateRoute>
                            <PrivateRoute path="/employeer">
                                <Employeer />
                            </PrivateRoute>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </OrderProvider>
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}







ReactDOM.render(<App />, document.getElementById('root'));


