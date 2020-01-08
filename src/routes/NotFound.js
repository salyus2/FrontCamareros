import React from 'react';
import { Link } from "react-router-dom";


export function NotFound() {
    return (
        <React.Fragment>
            <h3>Página no encontrada</h3>
            <nav>
                <Link to="/">Vuelve a la página de inicio</Link>
            </nav>
        </React.Fragment>
    );
}
