import React from "react";
import "../../styles/verano.css";
import Slide from "./Slide";

export const Verano = () => {
    const slidesData = [
        {
            id: 49,
            imageSrc: "https://cdn.shopify.com/s/files/1/0608/7819/2888/files/ducati-panigale-2023.jpg?v=1674124748",
        },
        {
            id: 50,
            imageSrc: "https://fotografias.larazon.es/clipping/cmsimages01/2023/07/08/C0D41EBC-9119-4534-B8A6-04C5B1031DC5/tren-pasando_98.jpg?crop=4300,2419,x0,y236&width=1900&height=1069&optimize=low&format=webply",
        },
        {
            id: 51,
            imageSrc: "https://i.blogs.es/ce505a/airbus-1a321xlr-1/1366_2000.jpeg",
        },
        {
            id: 52,
            imageSrc: "https://static.grupojoly.com/clip/73e03400-b4ff-4fc8-8a97-9f11a14471b5_source-aspect-ratio_1600w_0.jpg",
        },
    ];

    return (
        <div className="background-div-verano text-center pt-5">
            <h1 className="title-home">PASAJEROS CON DESTINO VERANO</h1>
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
