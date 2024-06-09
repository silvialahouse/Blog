import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo13 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capitulo 13: 'Rugby Tag Sudafricano'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    Sudáfrica es conocida por su diversa cultura, paisajes impresionantes y fauna, incluyendo el "Big Five" en sus parques nacionales. Practicaremos el Rugby Tag, que es una variante del rugby sin contacto que se juega con cintas o "tags" adheridas a los jugadores. Sudáfrica tiene una rica historia en rugby, con su equipo nacional, los Springboks, siendo uno de los mejores del mundo.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://estaticosgn-cdn.deia.eus/clip/5134f7e8-062b-4930-a12c-37a076b66b69_16-9-discover-aspect-ratio_default_0.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo13;
