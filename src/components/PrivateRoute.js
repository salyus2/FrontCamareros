import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../shared/context/auth-context";

// PrivateRoute sustituira a Route
function PrivateRoute({ children, ...others }) {
    const { isAuthenticated } = useAuth();

    // Copio props y devuelvo los hijos o bien redirijo
    return (
        <Route {...others}>
            {isAuthenticated ? children : <Redirect to="/login" />}
        </Route>
    );
}


export { PrivateRoute };
