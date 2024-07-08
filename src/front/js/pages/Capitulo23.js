import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/Capitulos.css";
import { FaCheck, FaArrowLeft } from "react-icons/fa";

const Capitulo23 = () => {
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
        if (inputValue.toLowerCase() === "pincel") {
            Swal.fire({
                title: "¡CORRECTO!",
                icon: "success",
                confirmButtonText: "OK",
                customClass: {
                    popup: 'swal2-popup'
                }
            });
        } else {
            Swal.fire({
                title: "INTÉNTALO DE NUEVO",
                icon: "error",
                confirmButtonText: "OK",
                customClass: {
                    popup: 'swal2-popup'
                }
            });
        }
    };

    const handleConfirmClick = () => {
        handleVerification();
    };

    return (
        <div className="capitulo-container">
            <h1 className="titulo-capitulo">
                PINCEL
            </h1>
            <textarea
                className="texto-capitulo"
                placeholder="Escribe aquí el nombre..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            ></textarea>
            <div>
                <button className="btn-1 btn-light" onClick={handleConfirmClick}>
                    <FaCheck className="tick-icon-svg" />
                </button>
            </div>
            <img src="https://m.media-amazon.com/images/I/71bVv5eQHgS._AC_UF894,1000_QL80_.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
            <div className="boton-container">
                <button className="btn-2 btn-light">
                    <Link to="/brochazos" className="link-back"><FaArrowLeft className="arrow-icon-svg" /></Link>
                </button>
            </div>
        </div>
    );
};

export default Capitulo23;
