import React from "react";
import "../../styles/iglu.css";
import Slide from "./Slide";

export const Iglu = () => {
    const slidesData = [
        {
            id: 29,
            imageSrc: "https://www.gaceta.unam.mx/wp-content/uploads/2021/01/tibudes.jpg",
        },
        {
            id: 30,
            imageSrc: "https://fotografias-compromiso.atresmedia.com/clipping/cmsimages02/2020/09/21/4BCA0061-4CDB-4C39-94A8-D03F8DD4CA36/58.jpg",
        },
        {
            id: 31,
            imageSrc: "https://www.ecologistasenaccion.org/wp-content/uploads/2023/07/SebastianHernandisCaballero_Pelagia-noctiluca.jpg",
        },
        {
            id: 32,
            imageSrc: "https://img.freepik.com/fotos-premium/cangrejo-arena-playa-oceano-al-fondo_354831-2567.jpg",
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
