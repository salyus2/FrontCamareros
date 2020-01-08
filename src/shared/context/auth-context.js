import React, { useState, useContext } from "react";
import { login, register } from "../../http";
import { updatesTable } from "../../http/authService";
import { useHistory } from "react-router-dom";

// 1) Creamos el contexto
const AuthContext = React.createContext();

// 2) Creamos el custom Provider
export function AuthProvider({ children }) {
    // 2.1) Creamos Estados
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

    // 2.2) Definiremos los métodos para modificar el estado
    // Login => Cambiaré a true
    const signIn = async ({ email, password }) => {
        try {
            const {
                data: { accessToken, user }
            } = await login(email, password);
            setUser(user);
            setIsAuthenticated(true);
            history.push("/");
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const updateTable = async () => {
        try {
            const {
                data: {
                    mesas
                } } = await updatesTable();
            return Promise(mesas)

        } catch (error) {
            return Promise.reject(error)
        }
    }

    // Register => Cambiaré a true
    const signUp = async ({ name, email, password, phone }) => {
        try {
            const {
                data: { accessToken, user }
            } = await register({ name, email, password, phone });
            setUser(user);
            setIsAuthenticated(true);
            if (accessToken) {
                history.push("/");
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };
    // Logout => Cambiaré a false

    // 2.3) Devolvemos el Context
    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, signIn, updateTable, user, signUp }}
        >
            {children}
        </AuthContext.Provider>
    );
}


// 3) Crear el custom hook
export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
