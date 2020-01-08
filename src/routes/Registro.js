import React from 'react';
import { Link } from "react-router-dom";
import useForm from "react-hook-form";

import { useAuth } from "../shared/context/auth-context"

import "../css/registro.css"

export function Registro() {
    const { signUp } = useAuth();
    const { register, errors, formState, handleSubmit, setError } = useForm({
        mode: "onBlur"
    });
    const getColor = name => {
        return errors[name] ? "ko" : formState.touched.includes(name) && "ok";
    };

    const handleSignUp = formData => {
        return signUp(formData).catch(error => {
            if (error.response.status === 409) {
                setError(
                    "email",
                    "conflict",
                    "The email already exists. Please try again"
                );
            }
        });
    };
    return (
        <main className="registro reg" >
            <h3>Introduce tus datos</h3>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <fieldset className={`form-control ${getColor("name")}`}>
                    <label>Name</label>
                    <input className="registro"
                        ref={register({
                            required: "The name is required"
                        })}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                    />
                    <span className="errorMessage">
                        {errors.name && errors.name.message}
                    </span>
                </fieldset>
                <fieldset className={`form-control ${getColor("email")}`}>
                    <label>Email</label>
                    <input className="registro"
                        ref={register({
                            required: "The email is required",
                            pattern: {
                                message: "The email is not valid",
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            }
                        })}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                    />
                    <span className="errorMessage">
                        {errors.email && errors.email.message}
                    </span>
                </fieldset>
                <fieldset className={`form-control ${getColor("phone")}`}>
                    <label>Phone</label>
                    <input className="registro"
                        ref={register({
                            pattern: {
                                message: "The phone is not valid",
                                value: /^([0-9]{9,9})/
                            },
                            minLength: {
                                message: "Phone has 9 numbers",
                                value: 9
                            }
                        })}
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Enter your phone"
                    />
                    <span className="errorMessage">
                        {errors.phone && errors.phone.message}
                    </span>
                </fieldset>
                <fieldset className={`form-control ${getColor("password")}`}>
                    <label>Password</label>
                    <input className="registro"
                        ref={register({
                            required: "The password should be in place",
                            minLength: {
                                message: "Password length should be greater than 6",
                                value: 6
                            }
                        })}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <span className="errorMessage">
                        {errors.password && errors.password.message}
                    </span>
                </fieldset>
                <button
                    type="submit"
                    className="btn"
                    disabled={formState.isSubmitting || errors.email || errors.password}
                >
                    Submit
                        </button>
                <Link to="/login" className="registro">Ya tengo cuenta</Link>
            </form>
        </main>
    );
}