import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo7 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capítulo 7: 'Stickeando en Neptuno'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    El Viento Salvaje. Neptuno es el planeta más alejado del sol y es conocido por sus vientos extremadamente fuertes. Es un gigante de hielo similar a Urano, con una atmósfera de hidrógeno, helio y metano.  
                    </p>
                </div>
                <div className="parrafo2">
                    <p>
                    Neptuno tiene un distintivo color azul profundo debido a la presencia de metano en su atmósfera. Tiene 14 lunas, siendo Tritón la más grande, que tiene volcanes de hielo que expulsan material helado a la superficie.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://starwalk.space/gallery/images/neptune-at-opposition-2021/1140x641.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo7;
