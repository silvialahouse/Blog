import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo1 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                    Capítulo 1: 'Esgrima en Mercurio'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                        El Planeta de los Extremos. Mercurio es el planeta más cercano al sol. Es el más pequeño del sistema solar y tiene temperaturas extremadamente altas durante el día y muy bajas durante la noche.
                    </p>
                </div>
                <div className="parrafo2">
                    <p>
                        Su superficie está llena de cráteres debido a los impactos de continuos meteoritos. Mercurio no tiene atmósfera significativa, lo que significa que no hay viento ni lluvia para suavizar su paisaje lleno de baches.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-mercurio_c7bafef8_1280x720.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo1;
