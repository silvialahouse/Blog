import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo12 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capitulo 12: 'Frankfurt y el Goalball'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    Alemania es conocida por su historia, cultura, tecnología avanzada y economía robusta. En este país practicaremos el Goalball que es un deporte diseñado para atletas con discapacidad visual. Alemania, ha sido un fuerte competidor en los Paralímpicos.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://www.germany.travel/media/redaktion/staedte_kultur_content/frankfurt/fuer_gallerydomblick_frankfurtdavid_vasicek.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo12;
