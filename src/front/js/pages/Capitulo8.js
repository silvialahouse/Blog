import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo8 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                    Capítulo 8: 'Padeleando en Plutón'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                        Plutón es un planeta enano ubicado en el Cinturón de Kuiper, descubierto en 1930. Con una superficie helada y una atmósfera tenue, Plutón tiene cinco lunas, siendo Caronte la más grande. Aunque no es adecuado para la actividad física humana, su estudio ayuda a entender la formación del sistema solar y la tecnología espacial.
                    </p>
                </div>
                <div className="parrafo2">
                    <p>
                        Después del enriquecedor viaje por el sistema solar, llegamos a nuestro hogar: La Tierra.
                        Tiene una atmosfera rica en oxígeno, grandes océanos de agua líquida y una biosfera diversa, todo ello hace posible que podamos habitarla, por lo que debemos conocerla y cuidarla.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://media.es.wired.com/photos/65d3a691d5395740395ba76e/16:9/w_2560%2Cc_limit/Pluto%25CC%2581n%2520(1).jpg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo8;
