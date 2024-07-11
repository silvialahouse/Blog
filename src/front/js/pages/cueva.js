import React from "react";
import "../../styles/cueva.css";
import Slide from "./Slide";

export const Cueva = () => {
    const slidesData = [
        {
            id: 13,
            imageSrc: "https://www.monapart.com/sites/default/files/styles/scale_960x960_/public/mediabrowser/cueva-prehistoria.jpg?itok=bx37ndWV",
        },
        {
            id: 14,
            imageSrc: "https://euskaditoptravel.com/wp-content/themes/yootheme-fjord-2.4.16/cache/Dolmen-Sorginetxe-Noradoa-1-3a7f713f.jpeg",
        },
        {
            id: 15,
            imageSrc: "https://c.pxhere.com/photos/ff/06/open_fire_fireplace_open_fireplace_cozy_fire-902207.jpg!d",
        },
        {
            id: 16,
            imageSrc: "https://media.istockphoto.com/id/1471439948/es/foto/el-bisonte-de-yellowstone-park-tambi%C3%A9n-conocido-como-bisonte-americano.jpg?s=612x612&w=0&k=20&c=Xlm2ZJHkq7OAKgMA4cj-3drhb-9ufnRV5jAvfsG_h3g=",
        },
    ];

    return (
        <div className="background-div-cueva text-center pt-5">
            <h1 className="title-home">VIAJANDO AL PASADO</h1>
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
