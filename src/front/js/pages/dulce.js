import React from "react";
import "../../styles/dulce.css";
import Slide from "./Slide";

export const Dulce = () => {
    const slidesData = [
        {
            id: 37,
            imageSrc: "https://www.ecocolmena.org/wp-content/uploads/2020/05/Los-nuevos-apicultores-del-siglo-XXI.jpg",
        },
        {
            id: 38,
            imageSrc: "https://www.marnys.com/wp-content/uploads/colmena-imgp.jpg",
        },
        {
            id: 39,
            imageSrc: "https://allyouneedisbiology.wordpress.com/wp-content/uploads/2015/06/2459483_orig.jpg?w=1038&h=482&crop=1",
        },
        {
            id: 40,
            imageSrc: "https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2023/05/24/646e3ee95c925.r_d.3206-1520.jpeg",
        },
    ];

    return (
        <div className="background-div-dulce text-center pt-5">
            <h1 className="title-home">DULCE COMO LA MIEL</h1>
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
