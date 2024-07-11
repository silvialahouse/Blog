import React from "react";
import "../../styles/vida.css";
import Slide from "./Slide";

export const Vida = () => {
    const slidesData = [
        {
            id: 45,
            imageSrc: "https://mejorconsalud.as.com/wp-content/uploads/2017/12/petalos-rosas.jpg",
        },
        {
            id: 46,
            imageSrc: "https://blog.homedepot.com.mx/wp-content/uploads/2019/10/tipos_de_tierra_1280x720.jpg",
        },
        {
            id: 47,
            imageSrc: "https://jardinesycampos.es/modules/jmsblog/views/img/636e9b3a4e02dc389c81d8880bf0e5af.jpg",
        },
        {
            id: 48,
            imageSrc: "https://www.iagua.es/sites/default/files/styles/thumbnail-830x455/public/raices-planta.jpg?itok=MfKn-yqH",
        },
    ];

    return (
        <div className="background-div-vida text-center pt-5">
            <h1 className="title-home">SEMILLAS DE VIDA</h1>
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
