import React from "react";
import "../../styles/despegamos.css";
import Slide from "./Slide";

export const Despegamos = () => {
    const slidesData = [
        {
            id: 17,
            imageSrc: "https://concepto.de/wp-content/uploads/2019/10/planeta-tierra-e1570462065623.jpg",
        },
        {
            id: 18,
            imageSrc: "https://www.ngenespanol.com/wp-content/uploads/2023/11/en-2025-los-iconicos-anillos-de-saturno-desapareceran.jpg",
        },
        {
            id: 19,
            imageSrc: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2024/07/02/66845e1a24da1.jpeg",
        },
        {
            id: 20,
            imageSrc: "https://imagenes.muyinteresante.com/files/article_social_75/uploads/2023/05/09/645a08d9d7d6b.jpeg",
        },
    ];

    return (
        <div className="background-div-despegamos text-center pt-5">
            <h1 className="title-home">3,2,1, ¡DESPEGAMOS!</h1>
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
