import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo6 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capítulo 6: 'UranoVoley'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    El Gigante de Hielo Inclinado. Urano es conocido por su inclinación extrema, casi sobre su costado, y por ser un gigante de hielo. Es el séptimo planeta desde el sol y tiene una atmósfera compuesta de hidrógeno, helio y metano, que le da su color azul verdoso. 
                    </p>
                </div>
                <div className="parrafo2">
                    <p>
                    Urano tiene anillos tenues y 27 lunas conocidas. Debido a su inclinación, experimenta estaciones extremas y cambios climáticos significativos.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://img2.rtve.es/i/?w=1600&i=1678705110488.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo6;
