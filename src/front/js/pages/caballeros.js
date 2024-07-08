import React from "react";
import "../../styles/caballeros.css";
import Slide from "./Slide";

export const Caballeros = () => {
    const slidesData = [
        {
            id: 25,
            imageSrc: "https://www.mundoprimaria.com/wp-content/uploads/2023/09/Piramide-social-Edad-Media.jpg",
        },
        {
            id: 26,
            imageSrc: "https://images.ecestaticos.com/ghGB6EnV_DFvFZISqg8IRg7z-SI=/10x2:800x535/1440x1080/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F7ad%2Fcc0%2Fe37%2F7adcc0e37f785ee91a2cd967eeac2d57.jpg",
        },
        {
            id: 27,
            imageSrc: "https://img.freepik.com/fotos-premium/caballero-medieval-bandera_1060272-5884.jpg?w=360",
        },
        {
            id: 28,
            imageSrc: "https://www.verpueblos.com/fotos_originales/9/2/3/01164923.jpg",
        },
    ];

    return (
        <div className="background-div-caballeros text-center pt-5">
            <h1 className="title-home">CABALLEROS Y CASTILLOS</h1>
            <div className="container-fluid">
                <div className="row">
                    {slidesData.map((slide) => (
                        <div key={slide.id} className="col-12 col-md-6 col-lg-3 mb-4">
                            <Slide
                                imageSrc={slide.imageSrc}
                                chapterId={slide.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
