import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo4 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capítulo 4: 'Descubriendo el Bijbol y Júpiter'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    El Gigante y gaseoso Júpiter es el planeta más grande del sistema solar y está compuesto principalmente de hidrógeno y helio. Tiene una enorme tormenta llamada la Gran Mancha Roja, que es más grande que la Tierra.
                    </p>
                </div>
                <div className="parrafo2">
                    <p>
                    Júpiter tiene más de 75 lunas, y entre las más conocidas están: Europa, Ganimedes y Calisto. Este planeta tiene un campo magnético muy fuerte y emite más calor del que recibe del sol.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://www.ngenespanol.com/wp-content/uploads/2023/06/jupiter-asi-es-el-planeta-mas-grande-y-antiguo-del-sistema-solar-770x431.jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo4;
