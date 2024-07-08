import React from "react";
import "../../styles/accion.css";
import Slide from "./Slide";

export const Accion = () => {
    const slidesData = [
        {
            id: 33,
            imageSrc: "https://35mm.es/wp-content/uploads/2021/06/claqueta-de-cine.jpg",
        },
        {
            id: 34,
            imageSrc: "https://img.freepik.com/vector-premium/ilustracion-entradas-cine-rojo-entradas-cine_268834-116.jpg",
        },
        {
            id: 35,
            imageSrc: "https://media.istockphoto.com/id/1131545834/es/foto/gente-en-el-auditorio-del-cine-con-pantalla-blanca-vac%C3%ADa.jpg?s=612x612&w=0&k=20&c=cGi6qq3jx7U-Vvi7wW3_jcNdTHiQfvTUaoN3YROl2ik=",
        },
        {
            id: 36,
            imageSrc: "https://hips.hearstapps.com/hmg-prod/images/estrenos-familiares-verano-1561081403.jpg",
        },
    ];

    return (
        <div className="background-div-accion text-center pt-5">
            <h1 className="title-home">LUCES, CÁMARA, ¡ACCIÓN!</h1>
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
