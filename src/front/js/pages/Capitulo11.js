import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo11 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capitulo 11: 'Encuéntrate en Australia'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    Australia, es famosa por su diversa fauna y paisajes impresionantes, desde desiertos hasta selvas tropicales. El senderismo es una actividad popular, con rutas famosas como la Overland Track en Tasmania y el Larapinta Trail en el Territorio del Norte. Australia ofrece una variedad de terrenos que son perfectos para explorar a pie, desde costas escarpadas hasta montañas.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://www.kayak.es/rimg/dimg/43/4b/72c43e11-city-2258-17a3a42c3ab.jpg?width=1366&height=768&xhint=1597&yhint=1522&crop=true" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo11;
