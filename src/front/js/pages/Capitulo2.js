import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo2 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                    Capítulo 2: 'Mi cuerpo habla en Venus'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    La Gemela Infernal de la Tierra Venus es el segundo planeta desde el sol y es conocido por su brillo. A menudo llamado el "planeta hermano" de la Tierra debido a su tamaño y composición similar. 
                    </p>
                </div>
                <div className="parrafo2">
                    <p>
                    Venus tiene una atmósfera densa y tóxica que atrapa el calor en un efecto invernadero descontrolado, lo que le hace convertirse en el planeta más caliente del sistema solar. La superficie de Venus está marcada por volcanes, montañas y vastas llanuras de lava.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://starwalk.space/gallery/images/amazing-planet-venus/1140x641.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo2;
