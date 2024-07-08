import React from "react";
import "../../styles/directo.css";
import Slide from "./Slide";

export const Directo = () => {
    const slidesData = [
        {
            id: 41,
            imageSrc: "https://i.pinimg.com/originals/60/5b/27/605b27ef3c439e5ca19754bb8ff43aba.png",
        },
        {
            id: 42,
            imageSrc: "https://www.fiba.basketball/api/img/graphic/186e610d-8934-4d08-b167-59614cabd918/940/529",
        },
        {
            id: 43,
            imageSrc: "https://www.sport.es/labolsadelcorredor/wp-content/uploads/2021/05/kene-1.jpg",
        },
        {
            id: 44,
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/97/Beijing_2008.png",
        },
    ];

    return (
        <div className="background-div-directo text-center pt-5">
            <h1 className="title-home">RESTRANSMITIENDO EN DIRECTO</h1>
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
