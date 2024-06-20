import React from "react";
import "../../styles/Slide.css";
import { Link } from "react-router-dom";

const Slide = ({ imageSrc, chapterId }) => {
    return (
        <div className="slide">
            <Link to={`/capitulo${chapterId}`} className="link-button">
                <div className="aspect-ratio-box">
                    <img src={imageSrc} alt="Slide Image" className="slide-image" />
                </div>
            </Link>
        </div>
    );
};

export default Slide;
