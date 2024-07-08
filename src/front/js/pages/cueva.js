import React from "react";
import "../../styles/cueva.css";
import Slide from "./Slide";

export const Cueva = () => {
    const slidesData = [
        {
            id: 1,
            imageSrc: "https://www.gaceta.unam.mx/wp-content/uploads/2021/01/tibudes.jpg",
        },
        {
            id: 2,
            imageSrc: "https://fotografias-compromiso.atresmedia.com/clipping/cmsimages02/2020/09/21/4BCA0061-4CDB-4C39-94A8-D03F8DD4CA36/58.jpg",
        },
        {
            id: 3,
            imageSrc: "https://www.ecologistasenaccion.org/wp-content/uploads/2023/07/SebastianHernandisCaballero_Pelagia-noctiluca.jpg",
        },
        {
            id: 4,
            imageSrc: "https://img.freepik.com/fotos-premium/cangrejo-arena-playa-oceano-al-fondo_354831-2567.jpg",
        },
    ];

    return (
        <div className="background-div text-center pt-5">
            <h1 className="title-home">VIVO EN UNA CUEVA</h1>
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
