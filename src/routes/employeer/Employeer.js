import React from 'react';
import Tables from "./table"
function Employeer() {
    return (
        <React.Fragment>
            <header id="employeer">
                <button>Desconectar</button>
                <img src="./img/logo.jpg" alt="Logo de S.E.S." />
                <p>18:34</p>
            </header>
            <main id="employeer_main">
                <ul className="tables">
                    <Tables />
                </ul>
            </main>
        </React.Fragment>
    );
}

export { Employeer };
