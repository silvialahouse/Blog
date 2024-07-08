import React from "react";
import { Link } from "react-router-dom";
import brochazos from "../../img/brochazos.png";
import caballeros from "../../img/caballeros.png";
import cueva from "../../img/cueva.png";
import despegamos from "../../img/despegamos.png";
import directo from "../../img/directo.png";
import dulce from "../../img/dulce.png";
import iglu from "../../img/iglu.png";
import oceano from "../../img/oceano.png";
import teduele from "../../img/teduele.png";
import accion from "../../img/accion.png";
import "../../styles/home.css";

export const Home = () => {
    return (
        <div className="background-div-home text-center pt-5">
            <h1 className="title-home">LUPO ENCUENTRA TRABAJO</h1>
            <div className="container">
                <div className="row links-container">
                    {[
                        { link: "/teduele", img: teduele, text: "¿TE DUELE AQUÍ?" },
                        { link: "/cueva", img: cueva, text: "VIAJANDO AL PASADO" },
                        { link: "/despegamos", img: despegamos, text: "3, 2, 1, ¡DESPEGAMOS!" },
                        { link: "/brochazos", img: brochazos, text: "A BROCHAZOS" },
                        { link: "/oceano", img: oceano, text: "BUCEANDO ENTRE CORALES" },
                        { link: "/caballeros", img: caballeros, text: "CABALLEROS Y CASTILLOS" },
                        { link: "/iglu", img: iglu, text: "VIVO EN UN IGLÚ" },
                        { link: "/accion", img: accion, text: "LUCES, CÁMARA, ¡ACCIÓN!" },
                        { link: "/dulce", img: dulce, text: "DULCE COMO LA MIEL" },
                        { link: "/directo", img: directo, text: "RETRANSMITIENDO EN DIRECTO" }
                    ].map(({ link, img, text }) => (
                        <div className="col-6 col-md-4 col-lg-2 mb-4" key={text}>
                            <Link to={link} className="link-item">
                                <div className="image-container">
                                    <img src={img} className="img-fluid" alt={text} />
                                </div>
                                <div className="link-text">{text}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
