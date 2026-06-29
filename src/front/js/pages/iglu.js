import React from "react";
import "../../styles/iglu.css";
import Slide from "./Slide";

export const Iglu = () => {
    const slidesData = [
        {
            id: 29,
            imageSrc: "https://static.nationalgeographic.es/files/styles/image_3200/public/thelastice_01.jpg?w=1600&h=834",
        },
        {
            id: 30,
            imageSrc: "https://img.magnific.com/fotos-premium/iglu-tradicional-artico-iglu-esta-rodeado-nieve-tiene-puerta-entrada_443830-44334.jpg",
        },
        {
            id: 31,
            imageSrc: "https://img.rtve.es/imagenes/oso-polar-peligros-calentamiento-global/1614366675153.jpg",
        },
        {
            id: 32,
            imageSrc: "https://hablandoenvidrio.com/wp-content/uploads/2023/11/iceberg-grande.jpg",
        },
    ];

    return (
        <div className="background-div-iglu text-center pt-5">
            <h1 className="title-home">VIVO EN UN IGLÚ</h1>
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
