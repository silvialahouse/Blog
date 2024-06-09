import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo5 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capítulo 5: 'Saturno'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    El Señor de los Anillos, Saturno es famoso por sus anillos, compuestos principalmente de hielo y roca. Es el sexto planeta desde el sol y el segundo más grande del sistema solar. 
                    </p>
                </div>
                <div className="parrafo2">
                    <p>
                    Saturno tiene más de 80 lunas, y, Titán es la más grande, con una atmósfera densa y lagos de metano líquido. Los anillos de Saturno son increíblemente extensos, pero también muy delgados.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://www.ngenespanol.com/wp-content/uploads/2023/11/en-2025-los-iconicos-anillos-de-saturno-desapareceran.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo5;
