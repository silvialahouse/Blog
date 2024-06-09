import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo16 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capitulo 16: 'Goleando en Brasil'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    Brasil es el país más grande de América del Sur, conocido por su biodiversidad y la selva amazónica. Con una historia colonial portuguesa, Brasil es famoso por su carnaval y la música samba. La economía brasileña es líder en agricultura y energía renovable. El fútbol es el deporte más popular, y el país ha producido leyendas como Pelé. Además, la capoeira combina danza, música y acrobacias, siendo una práctica cultural y física distintiva.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://i.pinimg.com/originals/fe/a3/2f/fea32fab68e10ea7add843d5fe85328d.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo16;
