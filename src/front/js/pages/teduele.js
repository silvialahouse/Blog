import React from "react";
import "../../styles/teduele.css";
import Slide from "./Slide";

export const Teduele = () => {
    const slidesData = [
        {
            id: 9,
            imageSrc: "https://www.siacardio.com/wp-content/uploads/2019/04/inmne.jpg",
        },
        {
            id: 10,
            imageSrc: "https://elmedicointeractivo.com/wp-content/uploads/2019/12/pulmones-700x543.jpg",
        },
        {
            id: 11,
            imageSrc: "https://www.lifeder.com/wp-content/uploads/2018/03/brazo-y-antebrazo-humanos-lifeder-min-1024x683.jpg",
        },
        {
            id: 12,
            imageSrc: "https://www.esalud.com/wp-content/uploads/2019/06/musculos-pierna.jpg",
        },
    ];

    return (
        <div className="background-div-teduele text-center pt-5">
            <h1 className="title-home">¿TE DUELE AQUÍ?</h1>
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
