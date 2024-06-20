import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/Capitulos.css";

const Capitulo2 = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleVerification();
        }
    };

    const handleVerification = () => {
        if (inputValue.toLowerCase() === "ballena") {
            Swal.fire({
                title: "¡CORRECTO!",
                icon: "success",
                confirmButtonText: "OK"
            });
        } else {
            Swal.fire({
                title: "Inténtalo de nuevo",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    };

    const handleConfirmClick = () => {
        handleVerification();
    };

    return (
        <div className="capitulo-container">
            <h1 className="titulo-capitulo">
                BALLENA
            </h1>
            <textarea
                className="texto-capitulo"
                placeholder="Escribe aquí el nombre..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            ></textarea>
            <div>
            <button className="btn btn-light" onClick={handleConfirmClick}>
                Confirmar
            </button>
            </div>
            <img src="https://fotografias-compromiso.atresmedia.com/clipping/cmsimages02/2020/09/21/4BCA0061-4CDB-4C39-94A8-D03F8DD4CA36/58.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
            <div className="boton-container">
                <button className="btn btn-light">
                    <Link to="/" className="link-back">Atrás</Link>
                </button>
            </div>
        </div>
    );
};

export default Capitulo2;
