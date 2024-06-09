import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo9 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capitulo 9: 'El arte del taichi y el yoga'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    India es el séptimo país más grande y el segundo más poblado del mundo, con una rica historia y diversidad cultural. Hogar de civilizaciones antiguas y religiones como el hinduismo y budismo, India destaca en deportes como el yoga y el taichí, que trabajaremos en las próximas clases. Este deporte es clave para el bienestar ¿Preparados para practicarlo?
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/sunsetyoga-2_647_062115121022.jpg?size=690:388" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo9;
