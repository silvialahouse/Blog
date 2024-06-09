import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo10 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capitulo 10: 'Acrosport en el panteón'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    Grecia es conocida como la cuna de la civilización occidental y es famosa por sus antiguas ruinas, mitología y el inicio de los Juegos Olímpicos. Acrosport, o gimnasia acrobática, combina elementos de gimnasia, danza y acrobacias, y es una disciplina que requiere fuerza, flexibilidad y trabajo en equipo. Grecia ha sido un pionero en muchos deportes como éste, incluyendo la gimnasia.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://www.ngenespanol.com/wp-content/uploads/2024/01/el-iconico-partenon-de-atenas-un-edificio-religioso-militar-y-turistico-1280x720.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo10;
