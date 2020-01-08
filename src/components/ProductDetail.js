import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useCart } from "../shared/context/cart-context";

function ProductDetail() {
    const [product, setProduct] = useState();
    const params = useParams();
    const history = useHistory();
    const { addItemToCart, totalItems } = useCart();

    useEffect(() => {
        axios
            .get(
                `http://localhost:8000/api/product/${
                params.id
                }`
            )
            .then(response => setProduct(response.data));
    }, [params.id]);

    if (!product) return null;


    return (
        <article className="product">
            <header className="home">
                <h1>Aldach Has</h1>
                <button className="btn call">Ayuda</button>
                <Link className="btn shopping-cart" to="/cart">{totalItems && (<span>{totalItems}</span>)}</Link>
            </header>
            <button className="product-menu"><a
                href="/"
                onClick={e => {
                    e.preventDefault();
                    history.goBack();
                }}
            >
                Volver
            </a></button>
            <h3>{product.name}</h3>
            <img src={`/img/${product.idProduct}.jpeg`} width="300px" alt="foto de producto" />
            <p>{product.description}</p>
            <p>{`${product.price}€`}</p>
            <button className="menu order" onClick={() => { addItemToCart(product) }}>Add to cart</button>
        </article >
    );
}

export { ProductDetail };
