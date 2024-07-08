import React from "react";
import "../../styles/brochazos.css";
import Slide from "./Slide";

export const Brochazos = () => {
    const slidesData = [
        {
            id: 21,
            imageSrc: "https://media.istockphoto.com/id/157683890/es/foto/pintor-de-paleta.jpg?s=612x612&w=0&k=20&c=DILG3nBA2SWThGw--1Q8xrYQ9NKW8v52DNGyfbS3c3c=",
        },
        {
            id: 22,
            imageSrc: "https://st3.depositphotos.com/12039320/19305/i/450/depositphotos_193050770-stock-photo-side-view-beautiful-female-artist.jpg",
        },
        {
            id: 23,
            imageSrc: "https://m.media-amazon.com/images/I/71bVv5eQHgS._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 24,
            imageSrc: "https://www.shutterstock.com/image-photo/wooden-easel-blank-canvas-on-600nw-2332856331.jpg",
        },
    ];

    return (
        <div className="background-div-brochazos text-center pt-5">
            <h1 className="title-home">A BROCHAZOS</h1>
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
