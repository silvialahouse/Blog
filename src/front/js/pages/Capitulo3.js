import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo3 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                    Capítulo 3: 'Thoukball en Marte'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    Marte es conocido por su color rojizo debido al óxido de hierro en su superficie. Es el cuarto planeta desde el sol y tiene la montaña más alta del sistema solar, Olympus Mons, y el cañón más largo, Valles Marineris. 
                    </p>
                </div>
                <div className="parrafo2">
                    <p>
                    Marte tiene estaciones, casquetes polares y evidencia de antiguos cauces de ríos, lo que sugiere que una vez tuvo agua líquida en su superficie.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://fotografias.lasexta.com/clipping/cmsimages01/2023/07/06/6DF6DDE6-1250-48BB-8F63-09BE692B4CF3/nueva-imagen-marte-muestra-que-tan-rojo-como-pensabamos_58.jpg?crop=1277,724,x87,y0&width=1000&height=567&optimize=high&format=webply" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo3;
