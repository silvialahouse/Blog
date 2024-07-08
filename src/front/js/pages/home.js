import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
    return (
        <div className="background-div text-center pt-5">
            <h1 className="title-home">BLOG SILVIA LACASA</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/teduele">
                            <img src="path/to/image1.jpg" className="img-fluid" alt="¿TE DUELE AQUÍ?" />
                            <div>¿TE DUELE AQUÍ?</div>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/cueva">
                            <img src="path/to/image2.jpg" className="img-fluid" alt="VIVO EN UNA CUEVA" />
                            <div>VIVO EN UNA CUEVA</div>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/despegamos">
                            <img src="path/to/image3.jpg" className="img-fluid" alt="3, 2, 1, ¡DESPEGAMOS!" />
                            <div>3, 2, 1, ¡DESPEGAMOS!</div>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/brochazos">
                            <img src="path/to/image4.jpg" className="img-fluid" alt="A BROCHAZOS" />
                            <div>A BROCHAZOS</div>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/oceano">
                            <img src="path/to/image5.jpg" className="img-fluid" alt="BUCEANDO ENTRE CORALES" />
                            <div>BUCEANDO ENTRE CORALES</div>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/caballeros">
                            <img src="path/to/image6.jpg" className="img-fluid" alt="CABALLEROS Y CASTILLOS" />
                            <div>CABALLEROS Y CASTILLOS</div>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/iglu">
                            <img src="path/to/image7.jpg" className="img-fluid" alt="VIVO EN UN IGLÚ" />
                            <div>VIVO EN UN IGLÚ</div>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/accion">
                            <img src="path/to/image8.jpg" className="img-fluid" alt="LUCES, CÁMARA, ¡ACCIÓN!" />
                            <div>LUCES, CÁMARA, ¡ACCIÓN!</div>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/dulce">
                            <img src="path/to/image9.jpg" className="img-fluid" alt="DULCE COMO LA MIEL" />
                            <div>DULCE COMO LA MIEL</div>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <Link to="/directo">
                            <img src="path/to/image10.jpg" className="img-fluid" alt="RESTRANSMITIENDO EN DIRECTO" />
                            <div>RESTRANSMITIENDO EN DIRECTO</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
