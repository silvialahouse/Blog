import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/Capitulos.css";

const Capitulo5 = () => {
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
        if (inputValue.toLowerCase() === "coral") {
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
                CORAL
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
            <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/coral-reefs-2728211.jpg?w=1600&h=900" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
            <div className="boton-container">
                <button className="btn btn-light">
                    <Link to="/" className="link-back">Atrás</Link>
                </button>
            </div>
        </div>
    );
};

export default Capitulo5;
