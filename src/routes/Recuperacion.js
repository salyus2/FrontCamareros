import React from 'react';

import useForm from "react-hook-form";
import { Link } from "react-router-dom";

import "../css/recuperacion.css"

export function Recuperacion() {
    const { register, errors, formState, handleSubmit } = useForm({
        mode: "onBlur"
    });
    return (

        <main className="registro recuperar" >
            <h3>Recuperar Contraseña</h3>
            <form onSubmit={handleSubmit}>
                <fieldset >
                    <label htmlFor="email">Email</label>
                    <input className="registro" type="email" name="email" id="email" ref={register({
                        required: "The email is required",
                        pattern: {
                            message: "The email is not valid",
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        }
                    })} />
                    <span className="errorMessage">
                        {errors.email && errors.email.message}
                    </span>
                </fieldset>
                <button className="btn" disabled={formState.isSubmitting || errors.email || formState.touched.length < 1}>Enviar</button>
                <Link to="/login" className="registro">Volver</Link>
            </form>
        </main>

    );
}