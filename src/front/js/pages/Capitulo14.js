import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo14 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capitulo 14: 'El estadio de Nairobi'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    Kenia es famosa por sus paisajes naturales, vida silvestre y su destacada tradición en el atletismo de fondo. Los corredores kenianos son conocidos mundialmente por su dominio en maratones y carreras de larga distancia. El país ha producido numerosos campeones olímpicos y mundiales, y el atletismo es una parte integral de su cultura deportiva
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Nelson_Mandela_Stadium_in_Port_Elizabeth_%28cropped%29.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo14;
