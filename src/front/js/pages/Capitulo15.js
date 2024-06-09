import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Capitulos.css";

const Capitulo15 = () => {
    return (
        <div className="capitulo-container">
            <div className="titulo-container">
                <h1 className="titulo-capitulo">
                Capítulo 15: 'El legado Chino en el badminton'
                </h1>
            </div>
            <div className="contenido-container">
                <div className="parrafo1">
                    <p>
                    China, el país más poblado del mundo, tiene una historia de más de 3.000 años y es conocida por su Gran Muralla y la Ciudad Prohibida. Como una de las economías más grandes, China lidera en manufactura y exportaciones. El Badminton es considerado un deporte emblemático debido a que además de ser practicado por muchas personas, diferentes deportistas chinos, son campeones en esta disciplina.
                    </p>
                </div>
                <div className="imagen-container">
                    <img src="https://www.globaltimes.cn/Portals/0/attachment/2021/2021-06-20/015605ff-d9ec-4bc5-a7f6-e91a65a68a04.jpeg" alt="Imagen del Capítulo 1" className="imagen-capitulo" />
                </div>
            </div>
            <div className="boton-container">
                <button className="btn btn-light"><Link to="/" className="link-back">Atrás</Link></button>
            </div>
        </div>
    )
}

export default Capitulo15;
